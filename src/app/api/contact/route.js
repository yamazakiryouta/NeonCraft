import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// レート制限のための簡易的な実装
// 本番環境では Redis などを使用した永続的なストレージを使うべき
const rateLimitCache = new Map();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1時間（ミリ秒）
const MAX_REQUESTS = 5; // 1時間あたりの最大リクエスト数

// メール送信設定 (Gmail用)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    // 自己署名証明書を許可（開発環境用）
    rejectUnauthorized: false
  }
});

export async function POST(request) {
  try {
    // リクエストボディの取得
    const body = await request.json();
    
    // 必須フィールドの検証
    const { name, email, subject, message, category, privacy } = body;
    
    if (!name || !email || !subject || !message || !category || !privacy) {
      return NextResponse.json(
        { success: false, message: '必須項目が入力されていません' },
        { status: 400 }
      );
    }
    
    // メールアドレスの簡易的な検証
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: '有効なメールアドレスを入力してください' },
        { status: 400 }
      );
    }
    
    // メッセージの最小長検証
    if (message.length < 10) {
      return NextResponse.json(
        { success: false, message: 'お問い合わせ内容は10文字以上で入力してください' },
        { status: 400 }
      );
    }
    
    // IPアドレスによるレート制限チェック
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    
    if (!rateLimitCache.has(ip)) {
      rateLimitCache.set(ip, { count: 0, timestamp: now });
    }
    
    const clientData = rateLimitCache.get(ip);
    
    // 1時間以上経過していれば、カウントをリセット
    if (now - clientData.timestamp > RATE_LIMIT_WINDOW) {
      clientData.count = 0;
      clientData.timestamp = now;
    }
    
    // レート制限を超えているかチェック
    if (clientData.count >= MAX_REQUESTS) {
      return NextResponse.json(
        { success: false, message: 'リクエスト回数の上限に達しました。しばらく経ってから再度お試しください' },
        { status: 429 }
      );
    }
    
    // お問い合わせカテゴリに応じた件名プレフィックスを設定
    let subjectPrefix = '[ゆっくりネット お問い合わせ]';
    switch (category) {
      case 'abuse':
        subjectPrefix = '[ゆっくりネット 不適切利用報告]';
        break;
      case 'technical':
        subjectPrefix = '[ゆっくりネット 技術的問題]';
        break;
      case 'account':
        subjectPrefix = '[ゆっくりネット アカウント問題]';
        break;
      // その他のカテゴリはデフォルトのプレフィックスを使用
    }
    
    // ユーザー名の整形
    const username = body.username ? body.username.trim() : '';
    
    // 管理者宛てのメール設定
    const mailOptions = {
      from: `"ゆっくりネット" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `${subjectPrefix} ${subject}`,
      text: `
名前: ${name}
メールアドレス: ${email}
${username ? `ユーザー名: ${username}` : ''}
カテゴリ: ${category}
件名: ${subject}

${message}

---
このメールはゆっくりネットのお問い合わせフォームから送信されました。
IP: ${ip}
日時: ${new Date().toISOString()}
      `,
      html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #0369a1; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">ゆっくりネット お問い合わせ</h2>
  
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 120px;">名前:</td>
      <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${name}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">メールアドレス:</td>
      <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${email}</td>
    </tr>
    ${username ? `
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">ユーザー名:</td>
      <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${username}</td>
    </tr>
    ` : ''}
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">カテゴリ:</td>
      <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${category}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">件名:</td>
      <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${subject}</td>
    </tr>
  </table>
  
  <div style="background-color: #f9fafb; padding: 16px; border-radius: 4px; margin-bottom: 16px;">
    <h3 style="margin-top: 0; color: #374151;">お問い合わせ内容:</h3>
    <div style="white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</div>
  </div>
  
  <div style="font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 16px;">
    <p>このメールはゆっくりネットのお問い合わせフォームから送信されました。</p>
    <p>IP: ${ip}</p>
    <p>日時: ${new Date().toISOString()}</p>
  </div>
</div>
      `
    };
    
    // ユーザー宛ての自動返信メール設定
    const autoReplyOptions = {
      from: `"ゆっくりネット" <${process.env.SMTP_FROM_EMAIL}>`,
      to: email,
      subject: `[ゆっくりネット] お問い合わせを受け付けました`,
      text: `
${name} 様

ゆっくりネットにお問い合わせいただき、ありがとうございます。
以下の内容でお問い合わせを受け付けました。

件名: ${subject}
カテゴリ: ${category}

内容:
${message}

担当者が確認次第、ご返信いたします。
しばらくお待ちくださいますようお願いいたします。

※このメールは自動送信されています。このメールへの返信はできませんのでご注意ください。

--
ゆっくりネット運営チーム
https://yukkuri.net
      `,
      html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #0369a1; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">お問い合わせを受け付けました</h2>
  
  <p>${name} 様</p>
  
  <p>ゆっくりネットにお問い合わせいただき、ありがとうございます。<br>
  以下の内容でお問い合わせを受け付けました。</p>
  
  <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 120px;">件名:</td>
      <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${subject}</td>
    </tr>
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">カテゴリ:</td>
      <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${category}</td>
    </tr>
  </table>
  
  <div style="background-color: #f9fafb; padding: 16px; border-radius: 4px; margin-bottom: 16px;">
    <h3 style="margin-top: 0; color: #374151;">お問い合わせ内容:</h3>
    <div style="white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</div>
  </div>
  
  <p>担当者が確認次第、ご返信いたします。<br>
  しばらくお待ちくださいますようお願いいたします。</p>
  
  <p style="font-size: 12px; color: #6b7280; margin-top: 24px;">
    ※このメールは自動送信されています。このメールへの返信はできませんのでご注意ください。
  </p>
  
  <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
    <p style="margin: 4px 0;">ゆっくりネット運営チーム</p>
    <p style="margin: 4px 0;"><a href="https://yukkuri.net" style="color: #0369a1; text-decoration: none;">https://yukkuri.net</a></p>
  </div>
</div>
      `
    };
    
    try {
      // メールの送信
      // Gmail を使用する場合は送信エラーが発生する可能性があるため、try-catchで囲む
      await transporter.sendMail(mailOptions);
      
      // 自動返信メールの送信
      await transporter.sendMail(autoReplyOptions);
      
      // レート制限カウントを増やす
      clientData.count += 1;
      
      // 成功レスポンスを返す
      return NextResponse.json({ success: true, message: 'お問い合わせを受け付けました' });
    } catch (emailError) {
      console.error('メール送信エラー:', emailError);
      
      return NextResponse.json(
        { success: false, message: 'メール送信中にエラーが発生しました。Gmailの設定を確認してください。' },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error('お問い合わせ処理エラー:', error);
    
    // エラーレスポンスを返す
    return NextResponse.json(
      { success: false, message: 'サーバーエラーが発生しました。しばらく経ってから再度お試しください' },
      { status: 500 }
    );
  }
}