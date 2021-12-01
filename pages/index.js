import Head from "next/head";
import Image from "next/image";
import { Talks } from "../components/Talks";
import { getAllTalks } from "../lib/talks";
import styles from "../styles/Home.module.css";

const categories = [
  { id: "opening-ending", label: "Opening / Ending" },
  { id: "keynote", label: "Keynotes" },
  { id: "regular-talk", label: "Regular Talks" },
  { id: "lt", label: "Lightning Talks" },
  { id: "sponsor-talk", label: "Sponsor Talks" },
  { id: "sponsor-lt", label: "Sponsor Lightning Talks" },
];

export default function Home() {
  const allTalks = getAllTalks();

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

        {categories.map(({ id, label }) => {
          const talks = allTalks.filter((i) => i.category === id);
          return <Talks key={id} id={id} label={label} talks={talks} />;
        })}

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
