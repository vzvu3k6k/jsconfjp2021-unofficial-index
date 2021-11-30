import React from "react";
import styles from "../styles/Talk.module.css";

export default function Talk({
  title,
  permalink,
  videoId,
  videoStartsAt,
  slides,
  sponsor,
}) {
  return (
    <section className={styles.card}>
      <h1>{permalink ? <a href={permalink}>{title}</a> : title}</h1>

      <ul className={styles.badges}>
        {sponsor && <li className={styles.badge_sponsor}>Sponsor</li>}
      </ul>

      <ul className={styles.resources}>
        {videoId && (
          <li className={styles.resource}>
            <a
              href={`https://www.youtube.com/watch?v=${videoId}&t=${videoStartsAt}s`}
            >
              Video
            </a>
          </li>
        )}
        {slides && (
          <li className={styles.resource}>
            <a href={slides}>Slides</a>
          </li>
        )}
      </ul>
    </section>
  );
}
