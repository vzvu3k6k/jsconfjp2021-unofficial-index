import Head from "next/head";
import Image from "next/image";
import Talk from "../components/Talk";
import { getAllTalks } from "../lib/talks";
import styles from "../styles/Home.module.css";

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
            return (
              <Talk
                key={t.id}
                id={t.id}
                title={t.title}
                videoId={t.videoId}
                videoStartsAt={t.videoStartsAt}
                slides={t.slides}
                sponsor={t.sponsor}
              />
            );
          })}
        </div>

        <section className={styles.references}>
          <h2>References</h2>
          <ul>
            <li>
              <a
                title="JSConf 2021 資料まとめ - 果樹園"
                href="https://mstssk.hatenablog.com/entry/2021/11/27/210333"
              >
                JSConf 2021 資料まとめ - 果樹園
              </a>
            </li>
          </ul>
        </section>
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
