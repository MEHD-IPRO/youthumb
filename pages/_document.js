import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const atOptions = {
      key: 'deb194919e9b256d89abb7d5c7aa350a',
      format: 'iframe',
      height: 250,
      width: 300,
      params: {}
    };

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

          {/* Add the provided script tag here */}
          <script async="async" data-cfasync="false" src="//pl20691408.highcpmrevenuegate.com/f37be7919807e7658d1ecac4cbb7f670/invoke.js"></script>
          <div id="container-f37be7919807e7658d1ecac4cbb7f670"></div>

          {/* Add the second provided script tag here */}
          <script type="text/javascript" src="//pl20691510.highcpmrevenuegate.com/c1/01/55/c101558b689533d487877dc298f2ec4a.js"></script>

          {/* Add the third provided script tag here */}
          <script type="text/javascript" src="//pl20691510.highcpmrevenuegate.com/c1/01/55/c101558b689533d487877dc298f2ec4a.js"></script>

          {/* Add the fourth provided script tag here */}
          <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
            var atOptions = ${JSON.stringify(atOptions)};
            document.write('<scr' + 'ipt type="text/javascript" src="//www.profitablecreativeformat.com/deb194919e9b256d89abb7d5c7aa350a/invoke.js"></scr' + 'ipt>');
          ` }} />
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