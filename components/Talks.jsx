import React from "react";
import Talk from "./Talk";
import styles from "../styles/Talks.module.css";

export function Talks({ label, talks }) {
  return (
    <section className={styles.root}>
      <h1 className={styles.category_label}>{label}</h1>
      <div className={styles.talks}>
        {talks.map((t) => {
          return (
            <Talk
              key={t.id}
              title={t.title}
              permalink={t.permalink}
              videoId={t.videoId}
              videoStartsAt={t.videoStartsAt}
              slides={t.slides}
              sponsor={t.sponsor}
            />
          );
        })}
      </div>
    </section>
  );
}
