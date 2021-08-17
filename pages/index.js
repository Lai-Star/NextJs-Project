import Head from "next/head";
import Footer from "@components/Footer";
import Profile from "@components/Profile";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ahmet Buğra Aydın</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="yandex-verification" content="db7fcf4e78f77837" />
      </Head>

      <main>
        <Profile />
      </main>

      <Footer />
    </div>
  );
}
