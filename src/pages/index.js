import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import AdiceComponent from "./app";
import styles from "@/styles/Home.module.css";

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="A Frontend Mentor challenge " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <title>Frontend Mentor | Advice generator app</title>
      </Head>
      <main className={styles.main}>
        <AdiceComponent />
      </main>

    </>
  );
}
