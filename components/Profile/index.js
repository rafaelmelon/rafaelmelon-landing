import React from "react";

import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <section className={styles.profile}>
      <header>
        <img src="/assets/rafaelmelon.svg" alt="Rafael Melón" />
        <h1>Rafael Melón</h1>
        <h2>User-centered Front-end Developert</h2>
      </header>
      <footer>
        <ul>
          <li>
            <a
              href="https://github.com/rafaelmelon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/github.svg" alt="GitHub" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rafaelmelon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/linkedin.svg" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/zitronensaure"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/twitter.svg" alt="Twitter" />
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}
