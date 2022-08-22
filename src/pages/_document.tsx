/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Head, Html, Main, NextScript } from "next/document";

import favicon from "../assets/images/favicon.svg";

// Escopo básico para o indexHTML
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title> Tabulações </title>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700;900&family=Sulphur+Point:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
