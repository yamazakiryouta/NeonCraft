// src/app/terms/page.jsx

export const metadata = {
    title: '利用規約 | ゆっくりネット',
    description: 'ゆっくりネットの利用規約です。サービスを利用する際に適用される条件を記載しています。',
  };
  
  export default function TermsPage() {
    return (
      <div className="container-wrapper">
        <h1 className="page-title">利用規約</h1>
        
        <div className="mb-8">
          <p className="mb-4">
            この利用規約（以下「本規約」といいます）は、ゆっくりネット（以下「当サービス」といいます）の利用条件を定めるものです。
            ユーザーの皆様（以下「ユーザー」といいます）には、本規約に同意いただいた上で、当サービスをご利用いただきます。
          </p>
          <p className="text-sm text-gray-600 italic mb-4">
            最終更新日: 2025年3月14日
          </p>
        </div>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-1">第1条（定義）</h2>
          <div className="pl-4">
            <p className="mb-3">本規約において使用する用語の定義は、以下の通りとします。</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>「当サービス」とは、ゆっくりネットが提供するMisskeyベースの分散型SNSサービスを指します。</li>
              <li>「ユーザー」とは、当サービスを利用する全ての個人または法人を指します。</li>
              <li>「コンテンツ」とは、テキスト、画像、動画、音声、その他の情報や素材を指します。</li>
              <li>「投稿」とは、ユーザーが当サービス上に掲載するコンテンツを指します。</li>
              <li>「アカウント」とは、ユーザーが当サービスを利用するために登録した一連の情報を指します。</li>
              <li>「管理者」とは、当サービスの運営・管理を行う者を指します。</li>
            </ol>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-2">第2条（適用範囲）</h2>
          <div className="pl-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li>本規約は、当サービスの提供するすべてのサービスに適用されます。</li>
              <li>当サービスを利用するすべてのユーザーは、本規約に同意したものとみなされます。</li>
              <li>ユーザーが本規約に同意しない場合、当サービスを利用することはできません。</li>
              <li>当サービスが個別に定める規定、ガイドライン、ポリシー等は、本規約の一部を構成するものとします。</li>
            </ol>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-3">第3条（規約の変更）</h2>
          <div className="pl-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li>当サービスは、必要に応じて本規約を変更することがあります。</li>
              <li>規約の変更は、当サービス上での告知または登録メールアドレスへの通知をもって効力を生じるものとします。</li>
              <li>変更後も当サービスを継続して利用する場合、ユーザーは変更後の規約に同意したものとみなされます。</li>
              <li>重要な変更については、十分な周知期間を設けるよう努めます。</li>
            </ol>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-4">第4条（アカウント登録）</h2>
          <div className="pl-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li>当サービスの利用にあたり、ユーザーは登録手続きを行い、アカウントを取得する必要があります。</li>
              <li>ユーザーは、登録情報に正確かつ最新の情報を提供する責任を負います。</li>
              <li>アカウント登録は、原則として1人につき1アカウントとします。複数のアカウントを不正な目的で使用することは禁止されています。</li>
              <li>以下の場合、当サービスはユーザー登録を拒否、または取り消すことがあります：
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>虚偽の情報を提供した場合</li>
                  <li>過去に本規約違反で利用停止となった場合</li>
                  <li>未成年者が保護者の同意を得ずに登録した場合</li>
                  <li>その他、当サービスがユーザー登録を不適切と判断した場合</li>
                </ul>
              </li>
            </ol>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-5">第5条（アカウント管理）</h2>
          <div className="pl-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li>ユーザーはアカウントの管理責任を負い、パスワードの秘密保持に責任を持つものとします。</li>
              <li>アカウントの不正利用、パスワードの漏洩などによる損害については、当サービスは責任を負いません。</li>
              <li>アカウントの不正利用またはその疑いがある場合、ユーザーは直ちに当サービスに連絡するものとします。</li>
              <li>ユーザーのアカウントが第三者に利用された場合でも、そのアカウントを利用して行われた行為はすべて、そのアカウントを保有するユーザーによる行為とみなします。</li>
              <li>長期間利用されていないアカウントについては、事前通知の上、削除される場合があります。</li>
            </ol>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-6">第6条（禁止事項）</h2>
          <div className="pl-4">
            <p className="mb-3">ユーザーは、当サービスの利用にあたり、以下の行為を行ってはなりません：</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当サービスのサーバーやネットワークシステムに過度の負荷をかける行為</li>
              <li>当サービスの運営を妨害する行為</li>
              <li>他のユーザーのアカウントを不正に使用する行為</li>
              <li>他のユーザーに対する嫌がらせ、誹謗中傷、プライバシーの侵害</li>
              <li>差別的発言、ヘイトスピーチの投稿</li>
              <li>暴力、自殺、自傷行為を助長または誘発する表現の投稿</li>
              <li>他者の知的財産権、肖像権、プライバシー権その他の権利を侵害する行為</li>
              <li>性的なコンテンツや露骨な表現で他者に不快感を与える行為</li>
              <li>スパム行為、広告・宣伝・勧誘等の目的で当サービスを利用する行為</li>
              <li>当サービスが許可していない方法でのデータの収集や解析</li>
              <li>不正アクセス、ハッキング、リバースエンジニアリング等の行為</li>
              <li>ウイルス等の有害なプログラムを使用または提供する行為</li>
              <li>他のMisskeyインスタンスに迷惑をかける行為</li>
              <li>偽情報の意図的な拡散</li>
              <li>その他、当サービスが不適切と判断する行為</li>
            </ol>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-7">第7条（知的財産権）</h2>
          <div className="pl-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li>当サービスに関するすべての知的財産権は、当サービスまたは正当な権利者に帰属します。</li>
              <li>ユーザーが当サービス上で投稿したコンテンツの知的財産権は、ユーザー自身に帰属します。ただし、ユーザーは当サービスに対し、投稿コンテンツを当サービスの提供、改善、宣伝のために利用する権利を許諾するものとします。</li>
              <li>ユーザーは、自身が投稿するコンテンツについて、投稿に必要な全ての権利を有していることを保証するものとします。</li>
              <li>当サービスは、法令に基づく要請や本規約に違反するコンテンツの削除等、正当な理由がある場合を除き、ユーザーの投稿コンテンツを削除、変更しないよう努めます。</li>
            </ol>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-8">第8条（コンテンツの投稿）</h2>
          <div className="pl-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li>ユーザーは、自己の責任において当サービス上にコンテンツを投稿するものとします。</li>
              <li>当サービスは、投稿されたコンテンツについて、法令に違反するものでないか、本規約に違反するものでないかを確認する場合があります。</li>
              <li>当サービスは、法令もしくは本規約に違反するコンテンツ、または不適切と判断したコンテンツを、事前の通知なく削除することができます。</li>
              <li>投稿されたコンテンツの削除に関して、当サービスはユーザーに対して削除の理由を説明する義務を負いませんが、可能な限り説明を行うよう努めます。</li>
              <li>投稿されたコンテンツは、分散型SNSの性質上、他のサーバーに複製・保存される場合があり、当サービス上で削除されても他のサーバーからは削除されないことがあります。</li>
            </ol>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-9">第9条（当サービスの提供）</h2>
          <div className="pl-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li>当サービスは、「現状有姿」で提供され、明示または黙示を問わず、いかなる種類の保証も行いません。</li>
              <li>当サービスは、以下の場合にサービスの全部または一部を停止することがあります：
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>システムの保守点検または更新を行う場合</li>
                  <li>地震、落雷、火災、停電、天災などの不可抗力により、サービスの提供が困難となった場合</li>
                  <li>サーバーやネットワークに障害が発生した場合</li>
                  <li>セキュリティ上の問題が発生した場合</li>
                  <li>その他、当サービスが停止を必要と判断した場合</li>
                </ul>
              </li>
              <li>当サービスは、予告なくサービス内容を変更、追加、停止することがあります。</li>
              <li>当サービスは、予告なくサービスを終了する権利を有します。ただし、多くのユーザーに影響を与える重要な変更や終了については、可能な限り事前に通知するよう努めます。</li>
            </ol>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-10">第10条（免責事項）</h2>
          <div className="pl-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li>当サービスは、ユーザー間のトラブルに関して一切の責任を負いません。</li>
              <li>当サービスは、ユーザーが投稿したコンテンツについて一切の責任を負いません。</li>
              <li>当サービスは、サービスの停止、中断、変更等によりユーザーに生じた損害について一切の責任を負いません。</li>
              <li>当サービスは、ユーザーのアカウント情報の漏洩、不正アクセス、不正利用によって生じた損害について一切の責任を負いません。</li>
              <li>当サービスは、当サービスからリンクされた外部サイトの内容について一切の責任を負いません。</li>
              <li>当サービスは、ユーザーが当サービスを通じて得た情報の正確性、完全性、有用性等について一切の保証を行いません。</li>
            </ol>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-11">第11条（サービスの利用制限・アカウント停止）</h2>
          <div className="pl-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li>当サービスは、以下の場合にユーザーのサービス利用を制限、またはアカウントを一時停止もしくは削除することがあります：
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>本規約に違反した場合</li>
                  <li>当サービスの運営・保守を妨害した場合</li>
                  <li>他のユーザーに対する迷惑行為があった場合</li>
                  <li>法令に違反する行為を行った場合</li>
                  <li>その他、当サービスが不適切と判断した場合</li>
                </ul>
              </li>
              <li>利用制限やアカウント停止の判断は、原則として管理者の裁量によります。</li>
              <li>アカウント停止の期間は、違反の重大性や頻度に応じて決定されます。</li>
              <li>当サービスは、利用制限やアカウント停止に関して、可能な限りユーザーに理由を通知するよう努めますが、通知する義務を負いません。</li>
              <li>利用制限やアカウント停止に対する異議申し立ては、お問い合わせフォームから行うことができます。</li>
            </ol>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-12">第12条（退会）</h2>
          <div className="pl-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li>ユーザーは、いつでも当サービスのアカウント設定から退会手続きを行うことができます。</li>
              <li>退会すると、アカウント情報は削除され、元に戻すことはできません。</li>
              <li>退会時に投稿コンテンツを削除するかどうかを選択できますが、分散型SNSの性質上、他のサーバーに複製されたコンテンツは完全に削除できない場合があります。</li>
              <li>退会しても、以下の情報は一定期間保持されることがあります：
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>システムログ</li>
                  <li>管理者とのメッセージのやり取り</li>
                  <li>法令で保持が義務付けられている情報</li>
                </ul>
              </li>
            </ol>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-13">第13条（通知）</h2>
          <div className="pl-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li>当サービスからユーザーへの通知は、以下の方法で行われます：
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>当サービス上での告知</li>
                  <li>登録メールアドレスへの送信</li>
                  <li>ユーザーの通知設定に応じた方法</li>
                </ul>
              </li>
              <li>ユーザーから当サービスへの通知は、お問い合わせフォームを通じて行うものとします。</li>
              <li>ユーザーは、登録メールアドレスを変更した場合、速やかにアカウント設定から変更手続きを行うものとします。</li>
              <li>メールアドレスの変更手続きを怠ったために通知を受け取れなかった場合、通常到達すべき時に通知が到達したものとみなします。</li>
            </ol>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-14">第14条（分散型SNSの特性）</h2>
          <div className="pl-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li>当サービスはMisskeyをベースとした分散型SNSであり、他のMisskeyインスタンスやMastodon等の互換サービスとデータを共有する特性があります。</li>
              <li>公開された投稿は、他のサーバーに複製・保存される場合があり、当サービス上で削除しても他のサーバーからは削除されないことがあります。</li>
              <li>当サービスは、他のサーバーのコンテンツや運営方針については責任を負いません。</li>
              <li>当サービスは、必要に応じて特定のサーバーとの連携を制限または停止することがあります。</li>
              <li>ユーザーは、分散型SNSの特性を理解した上で、投稿の公開範囲を適切に設定する責任を負います。</li>
            </ol>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-15">第15条（ユーザー間のコミュニケーション）</h2>
          <div className="pl-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li>ユーザーは、他のユーザーとの健全なコミュニケーションに努めるものとします。</li>
              <li>ユーザーは、他のユーザーのプライバシーを尊重し、不快感を与える行為を避けるものとします。</li>
              <li>ユーザー間のトラブルは、原則として当事者間で解決するものとします。</li>
              <li>著しく不適切なコミュニケーションが行われた場合、当サービスは介入し、必要な措置を講じることがあります。</li>
              <li>当サービスは、ユーザー間の紛争について一切の責任を負いません。</li>
            </ol>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-16">第16条（未成年者の利用）</h2>
          <div className="pl-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li>未成年者（18歳未満）が当サービスを利用する場合は、保護者の同意が必要です。</li>
              <li>13歳未満の子どもによる当サービスの利用は禁止されています。</li>
              <li>未成年者のユーザーは、年齢に適したコンテンツのみを閲覧・投稿するよう注意するものとします。</li>
              <li>当サービスは、未成年者がアクセスすべきでないと判断したコンテンツにセンシティブフラグを付けるよう努めますが、完全な保護を保証するものではありません。</li>
              <li>保護者は、未成年者の当サービス利用について監督する責任を負います。</li>
            </ol>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-17">第17条（広告・宣伝）</h2>
          <div className="pl-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li>当サービスは、運営維持のために広告を掲載することがあります。</li>
              <li>ユーザーが商業目的で当サービスを利用する場合は、以下のガイドラインに従う必要があります：
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>宣伝目的であることを明示すること</li>
                  <li>虚偽の表現を用いないこと</li>
                  <li>他のユーザーに迷惑をかけないこと</li>
                  <li>法令を遵守すること</li>
                </ul>
              </li>
              <li>スパム行為や過度な宣伝活動は禁止されています。</li>
              <li>当サービスは、不適切な広告・宣伝活動を行うユーザーのアカウントを制限または停止することがあります。</li>
            </ol>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-18">第18条（セキュリティ）</h2>
          <div className="pl-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li>当サービスは、ユーザー情報とコンテンツの保護のために適切なセキュリティ対策を講じます。</li>
              <li>ユーザーは、自己のアカウントのセキュリティ確保のために、以下の事項に注意するものとします：
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>強固なパスワードの設定</li>
                  <li>パスワードの定期的な変更</li>
                  <li>パスワードの第三者への開示禁止</li>
                  <li>不審なログイン履歴の確認</li>
                  <li>公共の場でのログイン後のログアウト</li>
                </ul>
              </li>
              <li>セキュリティ上の脆弱性を発見した場合は、速やかに当サービスに報告するようお願いします。</li>
              <li>セキュリティインシデントが発生した場合、当サービスは状況を調査し、必要な対策を講じます。</li>
            </ol>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-19">第19条（準拠法・裁判管轄）</h2>
          <div className="pl-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
              <li>当サービスに関連する紛争については、当サービスの所在地を管轄する裁判所を専属的合意管轄とします。</li>
              <li>本規約のいずれかの条項が無効とされた場合でも、他の条項の有効性には影響しないものとします。</li>
            </ol>
          </div>
        </section>
        
        <section className="mb-6">
          <h2 className="section-title" id="section-20">第20条（連絡・問い合わせ）</h2>
          <div className="pl-4">
            <ol className="list-decimal pl-6 space-y-2">
              <li>本規約に関するお問い合わせ、または当サービスに関するご質問・ご意見は、以下の連絡先にお願いします：
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>お問い合わせフォーム：<a href="/contact" className="text-primary-600 hover:text-primary-700 underline">https://yukkuri.net/contact</a></li>
                  <li>管理者アカウント：admin@yukkuri.net</li>
                  <li>メールアドレス：yozakura.owner@gmail.com</li>
                </ul>
              </li>
              <li>お問い合わせに対しては、原則として3営業日以内に回答するよう努めますが、内容によっては回答までに時間がかかる場合があります。</li>
            </ol>
          </div>
        </section>
        
        <div className="mt-10 mb-6 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">附則</h2>
          <p className="mb-3">本規約は、2025年3月14日から実施するものとします。</p>
        </div>
        
        <div className="text-sm text-gray-600 mt-10">
          <p className="mb-2">制定日：2025年3月1日</p>
          <p>最終更新日：2025年3月14日</p>
        </div>
      </div>
    );
  }