import React, { useState, useEffect } from "react";
import Head from "next/head";

import Profile from "components/Profile";
import Portfolio from "components/Portfolio";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Rafael Melón | User-centered Front-end Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://meyerweb.com/eric/tools/css/reset/reset200802.css"
        />
      </Head>

      <main>
        <Profile />
        <Portfolio />
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #b993d6; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #8ca6db,
            #b993d6
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #8ca6db,
            #b993d6
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }

        main {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
