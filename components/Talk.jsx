import React from "react";
import Link from "next/link";
import styles from "../styles/Talk.module.css";

export default function Talk({ id, title, videoId, videoStartsAt, slides }) {
  return (
    <div className={styles.card}>
      <Link href={`/talks/${encodeURIComponent(id)}`}>
        <a>{title}</a>
      </Link>

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
    </div>
  );
}
