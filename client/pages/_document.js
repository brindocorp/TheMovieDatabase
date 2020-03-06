import Document, { Html, Head, Main, NextScript } from "next/document";
// import Link from "next/link";
// import "semantic-ui-css/semantic.min.css";
import initialize from "../utils/initialize";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // initialize(ctx);
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/semantic/semantic.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
