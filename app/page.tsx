import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <Head>
        <title>就活ポートフォリオ</title>
        <meta name="description" content="就活用のポートフォリオサイト" />
      </Head>

      <header className="text-center py-8 bg-white shadow-lg animate-fade-in-down">
        <h1 className="text-4xl font-extrabold text-gray-800">私のポートフォリオ</h1>
        <p className="text-gray-600 mt-2">自己紹介とスキル</p>
      </header>

      <main className="container mx-auto p-6">
        <section className="my-8 bg-white p-8 rounded-lg shadow-lg animate-fade-in-up">
          <h2 className="text-3xl font-semibold text-gray-700">自己紹介</h2>
          <p className="mt-4 text-gray-600">私の簡単な紹介文をここに記載します。</p>
        </section>

        <section className="my-8 bg-white p-8 rounded-lg shadow-lg animate-fade-in-up">
          <h2 className="text-3xl font-semibold text-gray-700">スキルセット</h2>
          <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>HTML/CSS</li>
            <li>Python</li>
          </ul>
        </section>

        <section className="my-8 bg-white p-8 rounded-lg shadow-lg animate-fade-in-up">
          <h2 className="text-3xl font-semibold text-gray-700">プロジェクト</h2>
          <div className="mt-6 space-y-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-300 animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-gray-900">Mrs.GREEN APPLE FanSite</h3>
              <p className="text-gray-700 mt-2">一年次の進級制作展で作成したMrs.GREEN APPLEのファンサイトです。使用した言語はHTML、CSS、JavaScriptです。</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-gray-800">別のプロジェクト</h3>
              <p className="text-gray-600 mt-2">別のプロジェクトの概要と使用した技術について記述します。</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center py-6 bg-white border-t mt-8 animate-fade-in-up">
        <p className="text-gray-600">&copy; 2024 自分の名前</p>
      </footer>
    </div>
  );
}