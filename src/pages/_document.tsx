import Document, { Html, Head, Main, NextScript } from "next/document"
import config from "site.config"

class MyDocument extends Document {
  render() {
    return (
      <Html lang={config.lang}>
        <Head>
          <link rel="icon" href="/images/128.png" />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/images/144.png"
          ></link>
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS 2.0"
            href="/feed"
          ></link>
          <link rel="manifest" href="/manifest.webmanifest"></link>
          <script async={true} src="https://arc.io/widget.min.js#vpckjHce"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
