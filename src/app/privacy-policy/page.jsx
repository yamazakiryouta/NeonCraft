// src/app/privacy-policy/page.jsx

export const metadata = {
    title: 'プライバシーポリシー | ゆっくりネット',
    description: 'ゆっくりネットのプライバシーポリシーです。ユーザーの個人情報の取り扱いについて説明しています。',
  };
  
  export default function PrivacyPolicyPage() {
    return (
      <div className="container-wrapper">
        <h1 className="page-title">プライバシーポリシー</h1>
  
        <div className="mb-8">
          <p className="mb-4">
            ゆっくりネット（以下「当サービス」といいます）は、ユーザーの皆様の個人情報の保護を重要と考えております。
            本プライバシーポリシーでは、当サービスが収集する情報とその利用方法について説明します。
          </p>
          <p className="text-sm text-gray-600 italic mb-4">
            最終更新日: 2025年3月14日
          </p>
        </div>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-1">第1条（定義）</h2>
          <div className="pl-4">
            <p className="mb-3">本プライバシーポリシーにおいて使用する用語の定義は、以下の通りとします。</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>「当サービス」とは、ゆっくりネット（Misskey分散型SNS）を指します。</li>
              <li>「ユーザー」とは、当サービスのアカウントを登録し、当サービスを利用する者を指します。</li>
              <li>「個人情報」とは、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別できるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含む）を指します。</li>
              <li>「利用者情報」とは、個人情報に限らず、当サービスがユーザーから収集する情報を指します。</li>
            </ol>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-2">第2条（情報を収集・利用する目的）</h2>
          <div className="pl-4">
            <p className="mb-3">当サービスは、以下の目的のために利用者情報を収集・利用します。</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>当サービスの提供・運営のため</li>
              <li>当サービスの品質向上・改善のため</li>
              <li>不正利用の防止のため</li>
              <li>ユーザーからのお問い合わせに対応するため</li>
              <li>技術的な問題の診断・解決のため</li>
              <li>利用規約に違反する行為に対処するため</li>
              <li>その他、当サービスの適切な運営のために必要な場合</li>
            </ol>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-3">第3条（収集する情報）</h2>
          <div className="pl-4">
            <p className="mb-3">当サービスは、以下の情報を収集することがあります。</p>
            
            <h3 className="subsection-title">3.1 アカウント情報</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>ユーザー名</li>
              <li>メールアドレス（任意）</li>
              <li>パスワード（ハッシュ化して保存）</li>
              <li>アカウント作成日時</li>
            </ul>
            
            <h3 className="subsection-title">3.2 プロフィール情報</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>表示名</li>
              <li>自己紹介文</li>
              <li>プロフィール画像</li>
              <li>バナー画像</li>
              <li>その他ユーザーが公開を選択した情報</li>
            </ul>
            
            <h3 className="subsection-title">3.3 コンテンツ情報</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>投稿内容</li>
              <li>投稿に添付されたファイル（画像、動画、音声、その他）</li>
              <li>リアクション、お気に入り、ブックマーク等の活動情報</li>
              <li>フォロー、ミュート、ブロック等のユーザー関係情報</li>
            </ul>
            
            <h3 className="subsection-title">3.4 ログ情報</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>IPアドレス</li>
              <li>ブラウザの種類とバージョン</li>
              <li>デバイス情報</li>
              <li>オペレーティングシステム</li>
              <li>アクセス日時</li>
              <li>リファラ情報</li>
            </ul>
            
            <h3 className="subsection-title">3.5 Cookie情報</h3>
            <p className="mb-3">当サービスでは、ユーザー体験の向上やセキュリティの確保のためにCookieを使用します。Cookieは、ブラウザを通じて一時的にユーザーのデバイスに保存される小さなテキストファイルです。</p>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-4">第4条（情報の利用方法）</h2>
          <div className="pl-4">
            <p className="mb-3">収集した利用者情報は、以下の方法で利用されます。</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>ユーザーアカウントの作成・維持管理のため</li>
              <li>サービスの機能提供（投稿、リアクション、フォロー等）のため</li>
              <li>通知機能の提供のため</li>
              <li>サービスの利用状況の分析および改善のため</li>
              <li>不正アクセスや不正利用の検出・防止のため</li>
              <li>サービスに関する重要なお知らせの送信のため</li>
              <li>ユーザーからの問い合わせに対応するため</li>
              <li>利用規約違反の調査・対応のため</li>
            </ol>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-5">第5条（情報の保存期間）</h2>
          <div className="pl-4">
            <p className="mb-3">収集した利用者情報の保存期間は以下の通りです。</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>アカウント情報：ユーザーがアカウントを削除するまで、または当サービスが終了するまで保持します。</li>
              <li>投稿コンテンツ：ユーザーが当該コンテンツを削除するまで、ユーザーがアカウントを削除するまで、または当サービスが終了するまで保持します。</li>
              <li>ログ情報：セキュリティと分析の目的で最大90日間保持します。</li>
              <li>問い合わせ情報：問い合わせ対応完了後、最大1年間保持します。</li>
            </ol>
            <p className="mt-3">なお、法令により保存が義務付けられている情報については、法定の期間保存します。</p>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-6">第6条（情報の共有）</h2>
          <div className="pl-4">
            <p className="mb-3">当サービスは、以下の場合を除き、収集した利用者情報を第三者と共有することはありません。</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>ユーザーの同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合であって、ユーザーの同意を得ることが困難である場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、ユーザーの同意を得ることが困難である場合</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ユーザーの同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合</li>
              <li>当サービスの運営・保守のために必要な範囲で業務委託先に提供する場合（その場合、委託先に対しては適切な安全管理措置を求めます）</li>
            </ol>
            <p className="mt-3 mb-3">ただし、以下の情報については、分散型SNSの仕組み上、他のサーバーと共有される場合があります。</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>公開投稿：公開設定で投稿されたコンテンツは、他のMisskeyサーバーと共有される場合があります。</li>
              <li>フォロワー限定投稿：フォロワーがいる他のサーバーと共有される場合があります。</li>
              <li>プロフィール情報：公開設定のプロフィール情報は、他のサーバーと共有される場合があります。</li>
            </ul>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-7">第7条（分散型SNSにおける情報の扱い）</h2>
          <div className="pl-4">
            <p className="mb-3">当サービスはMisskeyを基盤とした分散型SNSであり、以下の特性があります。</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>公開投稿は、他のMisskeyサーバーをはじめとする互換性のあるサーバーと共有される場合があります。</li>
              <li>一度他のサーバーに共有された情報は、当サービス上で削除しても、他のサーバー上には残る可能性があります。</li>
              <li>プライベート投稿やダイレクトメッセージでも、受信者がいる他のサーバーには情報が送信されます。</li>
              <li>他のサーバーでの情報の取り扱いは、当該サーバーのプライバシーポリシーに従います。</li>
            </ol>
            <p className="mt-3">ユーザーは、分散型SNSの特性を理解した上で、情報の公開範囲を適切に設定することが推奨されます。</p>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-8">第8条（Cookieの使用）</h2>
          <div className="pl-4">
            <p className="mb-3">当サービスでは、以下の目的でCookieを使用します。</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>ログイン状態の維持</li>
              <li>ユーザー設定の保存</li>
              <li>セキュリティの向上</li>
              <li>サービス利用状況の分析</li>
            </ol>
            <p className="mt-3 mb-3">ユーザーは、ブラウザの設定からCookieの受け入れを制限または拒否することができますが、その場合、当サービスの一部の機能が正常に動作しなくなる可能性があります。</p>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-9">第9条（情報の安全管理）</h2>
          <div className="pl-4">
            <p className="mb-3">当サービスは、収集した利用者情報の安全管理のために、以下の措置を講じます。</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>パスワードのハッシュ化保存</li>
              <li>通信の暗号化（HTTPS）</li>
              <li>アクセス制限・管理の徹底</li>
              <li>セキュリティソフトウェアの導入・更新</li>
              <li>定期的なセキュリティチェック</li>
              <li>セキュリティ脆弱性への迅速な対応</li>
            </ol>
            <p className="mt-3">ただし、インターネット上での情報の送受信は、完全に安全であることを保証するものではありません。当サービスは、最大限の努力を行いますが、情報の安全性を100%保証するものではないことをご了承ください。</p>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-10">第10条（ユーザーの権利）</h2>
          <div className="pl-4">
            <p className="mb-3">ユーザーは、自己の個人情報について、以下の権利を有します。</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>個人情報の開示請求権</li>
              <li>個人情報の訂正・追加・削除の請求権</li>
              <li>個人情報の利用停止・消去の請求権</li>
              <li>個人情報の第三者提供の停止請求権</li>
            </ol>
            <p className="mt-3">これらの権利を行使する場合は、当サービスのお問い合わせフォームから、または管理者アカウント宛てにご連絡ください。ご請求に対しては、法令に従い、本人確認の上で対応いたします。</p>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-11">第11条（アカウントの削除）</h2>
          <div className="pl-4">
            <p className="mb-3">ユーザーは、いつでも自分のアカウントを削除することができます。アカウントを削除すると、以下の処理が行われます。</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>ユーザー名、表示名、メールアドレスなどのアカウント情報は削除されます。</li>
              <li>投稿内容は削除されますが、他のMisskeyサーバーに既に共有されている内容については、当サービスでは削除できません。</li>
              <li>フォロー、フォロワー関係は解消されます。</li>
              <li>アップロードされたメディアファイルは削除されます。</li>
            </ol>
            <p className="mt-3">なお、法令上の義務や正当な業務上の必要性がある場合には、一部の情報を削除せずに保持することがあります。</p>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-12">第12条（未成年者のプライバシー）</h2>
          <div className="pl-4">
            <p className="mb-3">当サービスは、13歳未満の子どものアカウント作成を禁止しています。13歳以上18歳未満の未成年者がアカウントを作成する場合は、保護者の同意が必要です。</p>
            <p className="mb-3">当サービスが意図せず13歳未満の子どもの個人情報を収集していることが判明した場合、当該情報を速やかに削除します。</p>
            <p className="mb-3">保護者の方が、お子様の情報が当サービスに含まれていると思われる場合は、お問い合わせフォームからご連絡ください。</p>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-13">第13条（国際データ転送）</h2>
          <div className="pl-4">
            <p className="mb-3">当サービスは日本国内でホストされていますが、分散型SNSの性質上、ユーザーの公開情報は他の国のサーバーに転送される場合があります。ユーザーが当サービスを利用することにより、ユーザー情報が日本国外に転送・処理されることに同意したものとみなされます。</p>
            <p className="mb-3">当サービスは、個人情報の国際転送に関して、適用される法律に準拠するよう努めます。</p>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-14">第14条（広告・分析サービス）</h2>
          <div className="pl-4">
            <p className="mb-3">当サービスでは、現在、第三者の広告サービスや分析サービスを使用していません。</p>
            <p className="mb-3">将来的にこれらのサービスを導入する場合は、本プライバシーポリシーを更新し、ユーザーに通知します。</p>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-15">第15条（外部リンク）</h2>
          <div className="pl-4">
            <p className="mb-3">当サービス内には、他のウェブサイトへのリンクが含まれる場合があります。当サービスは、リンク先のウェブサイトのプライバシーポリシーおよびコンテンツについて責任を負いません。</p>
            <p className="mb-3">ユーザーがリンク先のウェブサイトを訪問する際は、そのウェブサイトのプライバシーポリシーを確認することをお勧めします。</p>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-16">第16条（データポータビリティ）</h2>
          <div className="pl-4">
            <p className="mb-3">ユーザーは、自分のアカウントに関連するデータをエクスポートする権利を有します。当サービスでは、以下のデータをエクスポートすることができます。</p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>投稿内容</li>
              <li>フォロー・フォロワーリスト</li>
              <li>お気に入り・ブックマーク</li>
              <li>アップロードしたメディアファイル</li>
              <li>ユーザープロフィール情報</li>
            </ul>
            <p className="mb-3">データのエクスポート方法については、ユーザー設定のエクスポートセクションを参照してください。</p>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-17">第17条（プライバシーポリシーの変更）</h2>
          <div className="pl-4">
            <p className="mb-3">当サービスは、必要に応じて本プライバシーポリシーを変更することがあります。重要な変更がある場合は、サービス内での告知または登録メールアドレスへの通知により、ユーザーに通知します。</p>
            <p className="mb-3">変更後のプライバシーポリシーは、当ページに掲載された時点で効力を生じるものとします。ユーザーは定期的に本ページを確認することをお勧めします。</p>
            <p className="mb-3">変更後も当サービスを継続して利用する場合、ユーザーは変更後のプライバシーポリシーに同意したものとみなされます。</p>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-18">第18条（セキュリティインシデントへの対応）</h2>
          <div className="pl-4">
            <p className="mb-3">当サービスは、個人情報に関するセキュリティインシデント（不正アクセス、情報漏洩など）が発生した場合、以下の対応を行います。</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>インシデントの範囲と影響の調査</li>
              <li>被害の拡大防止措置の実施</li>
              <li>影響を受けるユーザーへの通知</li>
              <li>必要に応じた監督官庁への報告</li>
              <li>再発防止策の策定と実施</li>
            </ol>
            <p className="mt-3">セキュリティインシデントに関する情報は、法的要請がある場合や調査に必要な場合を除き、確認が取れた内容のみを開示します。</p>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-19">第19条（退会後のデータ処理）</h2>
          <div className="pl-4">
            <p className="mb-3">ユーザーがアカウントを削除（退会）した場合、当サービスは以下のデータ処理を行います。</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>個人を特定できる情報（ユーザー名、メールアドレスなど）は削除または匿名化されます。</li>
              <li>公開投稿は、投稿元のアカウントが削除されたことが分かるように処理されますが、コンテンツ自体は削除されない場合があります。</li>
              <li>非公開投稿やダイレクトメッセージは削除されます。</li>
              <li>アップロードされたメディアファイルは、参照されなくなったものについては段階的に削除されます。</li>
              <li>ログデータは最大90日間保持された後に削除されます。</li>
            </ol>
            <p className="mt-3">なお、法的義務や正当な利益のために必要な場合は、一部の情報を保持することがあります。</p>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-20">第20条（データ処理の委託）</h2>
          <div className="pl-4">
            <p className="mb-3">当サービスは、サービスの提供・運営に必要な範囲で、以下の業務を外部に委託することがあります。</p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>サーバーホスティングサービス</li>
              <li>データバックアップサービス</li>
              <li>メール配信サービス</li>
              <li>障害監視・復旧サービス</li>
            </ul>
            <p className="mb-3">委託先には、個人情報保護に関する契約を締結し、適切な安全管理措置を講じるよう求めています。</p>
            <p className="mb-3">委託先一覧は、正当な理由がある場合にユーザーからの請求に応じて開示します。</p>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-21">第21条（問い合わせログの取り扱い）</h2>
          <div className="pl-4">
            <p className="mb-3">ユーザーからのお問い合わせ（お問い合わせフォーム、メール、ダイレクトメッセージなど）に関する情報は、以下のように取り扱われます。</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>問い合わせ内容と回答の記録は、サポート品質の向上と同様の問い合わせへの対応のために保存されます。</li>
              <li>お問い合わせに含まれる個人情報は、問い合わせ対応完了後、最大1年間保持されます。</li>
              <li>統計情報としての問い合わせ傾向分析には、匿名化されたデータが使用されます。</li>
            </ol>
            <p className="mt-3">お問い合わせ記録の削除をご希望の場合は、お問い合わせフォームからご連絡ください。</p>
          </div>
        </section>
  
        <section className="mb-6">
          <h2 className="section-title" id="section-22">第22条（アクセスログの取り扱い）</h2>
          <div className="pl-4">
            <p className="mb-3">当サービスは、サーバーへのアクセスログを以下の目的で収集・保存します。</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>サービスの安全性確保</li>
              <li>不正アクセスの検知・対応</li>
              <li>サービス障害の調査</li>
              <li>利用統計の作成</li>
            </ol>
            <p className="mb-3">アクセスログには、アクセス日時、IPアドレス、ユーザーエージェント、リファラ情報などが含まれます。</p>
            <p className="mb-3">アクセスログは最大90日間保存され、その後自動的に削除されます。ただし、セキュリティインシデントの調査や法的要請に応じるために、一部のログを長期間保存する場合があります。</p>
          </div>
        </section>
  
        <section className="mb-6">
        <h2 className="section-title" id="section-23">第23条（プライバシー設定について）</h2>
        <div className="pl-4">
          <p className="mb-3">当サービスでは、ユーザーが自身のプライバシーレベルを制御できるよう、以下の設定オプションを提供しています。</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>投稿の公開範囲設定（公開、フォロワーのみ、ダイレクト）</li>
            <li>フォロー申請の承認制設定</li>
            <li>検索エンジンによるインデックス拒否設定</li>
            <li>プロフィール情報の公開範囲設定</li>
            <li>閲覧履歴の記録可否設定</li>
            <li>他のユーザーからのフォロー、メンション、リプライの制限設定</li>
            <li>特定ユーザーのミュート・ブロック機能</li>
            <li>特定ワードのミュート機能</li>
          </ol>
          <p className="mt-3 mb-3">これらの設定はユーザー設定画面から変更できます。ユーザーは自身のニーズに合わせて、適切なプライバシー設定を選択することが推奨されます。</p>
          <p className="mb-3">なお、設定内容によっては、一部の機能が制限される場合があります。</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="section-title" id="section-24">第24条（APIアクセスについて）</h2>
        <div className="pl-4">
          <p className="mb-3">当サービスでは、APIを通じたアクセスに関して、以下のプライバシー保護措置を講じています。</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>APIアクセスにはアクセストークンが必要です。</li>
            <li>アクセストークンは、特定のスコープ（権限範囲）に限定されています。</li>
            <li>ユーザーは、いつでもアクセストークンを無効化することができます。</li>
            <li>APIを通じてアクセスできる情報は、当該ユーザーが権限を持つ情報に限定されます。</li>
            <li>APIの利用には、レート制限が設けられています。</li>
          </ol>
          <p className="mt-3 mb-3">第三者アプリケーションがAPIを通じて情報にアクセスする場合、ユーザーの明示的な同意が必要です。ユーザーは、いつでも同意を撤回することができます。</p>
          <p className="mb-3">また、APIの仕様変更により、アクセスできる情報の範囲が変更される場合があります。重要な変更がある場合は、開発者向けに事前通知を行います。</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="section-title" id="section-25">第25条（法令等の遵守）</h2>
        <div className="pl-4">
          <p className="mb-3">当サービスは、個人情報の取り扱いに関して、以下の法令を遵守します。</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>個人情報の保護に関する法律</li>
            <li>電気通信事業法</li>
            <li>特定電子メールの送信の適正化等に関する法律</li>
            <li>不正アクセス行為の禁止等に関する法律</li>
            <li>その他の関連法令・ガイドライン</li>
          </ol>
          <p className="mt-3 mb-3">また、当サービスは、法令の改正や社会情勢の変化に応じて、本プライバシーポリシーを見直し、継続的な改善に努めます。</p>
        </div>
      </section>

      <div className="mt-10 mb-6 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">お問い合わせ先</h2>
        <p className="mb-3">本プライバシーポリシーに関するお問い合わせは、以下の連絡先にお願いします。</p>
        <ul className="space-y-2">
          <li><strong>運営者名：</strong>ゆっくりネット運営チーム</li>
          <li><strong>メールアドレス：</strong>privacy@yukkuri.net</li>
          <li><strong>お問い合わせフォーム：</strong><a href="/contact" className="text-primary-600 hover:text-primary-700 underline">https://yukkuri.net/contact</a></li>
        </ul>
      </div>

      <div className="text-sm text-gray-600 mt-10">
        <p className="mb-2">制定日：2025年3月1日</p>
        <p>最終更新日：2025年3月14日</p>
      </div>
    </div>
  );
}