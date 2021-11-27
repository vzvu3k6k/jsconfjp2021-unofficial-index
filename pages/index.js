import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getAllTalks } from "../lib/talks";
import styles from "../styles/Home.module.css";

function Talk({ id, title }) {
  return (
    <div className={styles.card}>
      <Link href={`/talks/${encodeURIComponent(id)}`}>
        <a>{title}</a>
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>JSConf.jp 2021のトーク情報まとめ（非公式）</title>
        <meta name="generator" content="create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          JSConf.jp 2021のトーク情報まとめ（非公式）
        </h1>

        <div className={styles.grid}>
          {getAllTalks().map((t) => {
            return <Talk key={t.id} id={t.id} title={t.title} />;
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/vzvu3k6k/jsconfjp2021-unofficial-index"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
