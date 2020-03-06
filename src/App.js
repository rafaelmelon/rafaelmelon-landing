import React, { useState, useEffect } from "react";

import logo from "./logo-rafa.svg";
import iconGithub from "./github.svg";
import iconLinkedin from "./linkedin.svg";
import iconTwitter from "./twitter.svg";

import "./App.css";

function App() {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [hasError, setErrors] = useState(false);

  // async function fetchUrl() {
  //   const response = await fetch(
  //     "https://api.github.com/users/rafaelmelon/repos"
  //   );
  //   const json = await response.json();
  //   setData(json);
  //   setLoading(false);
  // }
  // useEffect(() => {
  //   fetchUrl();
  // }, []);

  // const showData = Array.isArray(data) && !hasError;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Rafa logo" />
        <h1>Rafael Melón</h1>
        <h2>User-centered Front-end Developert</h2>
        <div className="App-media">
          <a href="https://github.com/rafaelmelon" target="_blank">
            <img src={iconGithub} alt="GitHub logo" />
          </a>
          <a href="https://www.linkedin.com/in/rafaelmelon/" target="_blank">
            <img src={iconLinkedin} alt="LinkedIn logo" />
          </a>
          <a href="https://twitter.com/zitronensaure" target="_blank">
            <img src={iconTwitter} alt="Twitter logo" />
          </a>
        </div>
      </header>

      {/* {showData && (
        <section className="App-section">
          {data.map(item => (
            <div>
              <p>{item.name}</p>
              <div>{item.updated_at}</div>
              <div>
                {item.homepage && (
                  <a href={item.homepage} target="_blank">
                    <img src="" />
                  </a>
                )}
                <a href={item.html_url} target="_blank">
                  <img src="" />
                </a>
              </div>
            </div>
          ))}
        </section>
      )} */}
    </div>
  );
}

export default App;
