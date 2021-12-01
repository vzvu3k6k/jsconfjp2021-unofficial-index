import React from "react";
import Talk from "./Talk";
import styles from "../styles/Talks.module.css";

export function Talks({ id, label, talks }) {
  return (
    <section key={id} className={styles.root}>
      <h1>{label}</h1>
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
