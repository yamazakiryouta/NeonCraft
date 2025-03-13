export default function Home() {
    return (
      <div className="container-wrapper">
        <h1 className="page-title">ゆっくりネットへようこそ</h1>
        <p className="mb-4">
          ゆっくりネットは、Misskeyをベースにした分散型SNSのインスタンスです。
          自由でオープンなコミュニケーションの場を提供します。
        </p>
        
        <div className="mt-8">
          <h2 className="section-title">特徴</h2>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>分散型のSNSで、様々なサーバーと連携できます</li>
            <li>シンプルで使いやすいインターフェース</li>
            <li>プライバシーを重視した設計</li>
            <li>コミュニティ主導の運営</li>
          </ul>
        </div>
        
        <div className="mt-8">
          <h2 className="section-title">始め方</h2>
          <p className="mt-2 mb-4">
            ゆっくりネットに参加するには、アカウント登録が必要です。
            以下のリンクから登録ページにアクセスしてください。
          </p>
          <div className="mt-4 flex">
          </div>
        </div>
      </div>
    );
  }