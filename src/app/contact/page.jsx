// src/app/contact/page.jsx
import ContactForm from '@/components/forms/ContactForm';

export const metadata = {
  title: 'お問い合わせ | ゆっくりネット',
  description: 'ゆっくりネットへのお問い合わせはこちらからお願いします。ご質問、ご意見、ご報告などをお寄せください。',
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="container-wrapper">
        <h1 className="page-title">お問い合わせ</h1>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-medium text-gray-800 mb-4">お問い合わせについて</h2>
          <p className="text-gray-600 mb-3">
            ゆっくりネットに関するご質問、ご意見、不具合の報告などがございましたら、
            下記のフォームからお気軽にお問い合わせください。
          </p>
          <p className="text-gray-600 mb-3">
            アカウントに関するお問い合わせの場合は、ユーザー名（@username@yukkuri.net形式）を
            必ずご記入ください。
          </p>
          <p className="text-gray-600">
            原則として3営業日以内にご返信いたしますが、内容によっては
            回答までにお時間をいただく場合がございます。あらかじめご了承ください。
          </p>
        </div>
        
        <ContactForm />
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-xl font-medium text-gray-800 mb-4">その他の連絡方法</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 mb-2">管理者アカウント</h3>
              <p className="text-gray-600 mb-2">
                管理者へのダイレクトメッセージも受け付けています。
              </p>
              <p className="font-medium text-primary-600">
                @admin@yukkuri.net
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 mb-2">メールでのお問い合わせ</h3>
              <p className="text-gray-600 mb-2">
                フォームを使用せず、直接メールでご連絡いただくこともできます。
              </p>
              <p className="font-medium text-primary-600">
                contact@yukkuri.net
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-sm text-gray-500">
          <p>
            ※お問い合わせ内容は、利用規約およびプライバシーポリシーに基づいて適切に取り扱わせていただきます。
          </p>
          <p className="mt-1">
            ※返信を確実に受け取るため、迷惑メールフィルタなどの設定をご確認ください。
            特に「yukkuri.net」ドメインからのメールを受信できるようにしてください。
          </p>
        </div>
      </div>
    </div>
  );
}