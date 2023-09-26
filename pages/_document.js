import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />

          {/* Add the script here */}
          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: `
              atOptions = {
                'key': '2288353876086512976a0a6367405128',
                'format': 'iframe',
                'height': 60,
                'width': 468,
                'params': {}
              };
              document.write('<scr' + 'ipt type="text/javascript" src="//www.profitablecreativeformat.com/2288353876086512976a0a6367405128/invoke.js"></scr' + 'ipt>');
            `,
          }}></script>
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