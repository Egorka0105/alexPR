import Head from "next/head";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { Main } from "@components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Site name</title>
        <link rel="icon" href="/app/public/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
