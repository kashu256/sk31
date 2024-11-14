import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>就活ポートフォリオ</title>
        <meta name="description" content="就活用のポートフォリオサイト" />
      </Head>

      <header className="text-center py-8 bg-white shadow">
        <h1 className="text-3xl font-bold text-gray-800">私のポートフォリオ</h1>
        <p className="text-gray-600 mt-2">自己紹介とスキル</p>
      </header>

      <main className="container mx-auto p-4">
        <section className="my-8 bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-gray-700">自己紹介</h2>
          <p className="mt-2 text-gray-600">私の簡単な紹介文をここに記載します。</p>
        </section>

        <section className="my-8 bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-gray-700">スキルセット</h2>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>HTML/CSS</li>
            <li>Python</li>
          </ul>
        </section>

        <section className="my-8 bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold text-gray-700">プロジェクト</h2>
          <div className="mt-4 space-y-4">
            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">プロジェクト名</h3>
              <p className="text-gray-600">プロジェクトの概要と使用した技術について記述します。</p>
            </div>
            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800">別のプロジェクト</h3>
              <p className="text-gray-600">別のプロジェクトの概要と使用した技術について記述します。</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center py-4 bg-white border-t mt-8">
        <p className="text-gray-600">&copy; 2024 自分の名前</p>
      </footer>
    </div>
  );
}
