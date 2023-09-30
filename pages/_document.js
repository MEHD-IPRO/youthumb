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

          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-VNGG8BWZ34"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VNGG8BWZ34');
            `}
          </script>

          {/* RevenueGate script */}
          <script type='text/javascript' src='//pl20691510.highcpmrevenuegate.com/c1/01/55/c101558b689533d487877dc298f2ec4a.js'></script>

          {/* Additional script 1 */}
          <script type="text/javascript">
            {`
              atOptions = {
                'key' : '9c5952cc07ada187887cb16326cac1e8',
                'format' : 'iframe',
                'height' : 600,
                'width' : 160,
                'params' : {}
              };
              document.write('<scr' + 'ipt type="text/javascript" src="//www.profitablecreativeformat.com/9c5952cc07ada187887cb16326cac1e8/invoke.js"></scr' + 'ipt>');
            `}
          </script>

          {/* Additional script 2 */}
          <script type="text/javascript">
            {`
              atOptions = {
                'key' : '2288353876086512976a0a6367405128',
                'format' : 'iframe',
                'height' : 60,
                'width' : 468,
                'params' : {}
              };
              document.write('<scr' + 'ipt type="text/javascript" src="//www.profitablecreativeformat.com/2288353876086512976a0a6367405128/invoke.js"></scr' + 'ipt>');
            `}
          </script>
        </Head>
        <body>
          <a href=""><img alt="banner" src="https://landings-cdn.adsterratech.com/referralBanners/gif/800x60_adsterra_reff.gif" /></a>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;