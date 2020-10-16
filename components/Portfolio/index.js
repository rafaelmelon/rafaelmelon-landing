import React, { useState, useEffect } from "react";

import styles from "./Portfolio.module.css";

export default function Portfolio() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setErrors] = useState(false);

  async function fetchUrl() {
    const response = await fetch(
      "https://api.github.com/users/rafaelmelon/repos"
    );
    const json = await response.json();
    setResponse(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  const isResponse = Array.isArray(response) && response.length > 0;

  return (
    <section className={styles.portfolio}>
      {!isResponse ? (
        <div className={styles.loader}>
          <img src="/assets/grid.svg" alt="loader" />
        </div>
      ) : (
        <ul>
          {response.map((item, index) => {
            const obj = {
              itemHref: item.html_url,
              itemImg: "/assets/github.svg",
              itemAlt: "GitHub",
            };

            if (item.homepage) {
              obj.itemHref = item.homepage;
              obj.itemImg = "/assets/world.svg";
              obj.itemAlt = "Web";
            }

            return (
              <li>
                <a
                  key={item.name + index}
                  href={obj.itemHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={obj.itemImg} alt={obj.itemAlt} />
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
