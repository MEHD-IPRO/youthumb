import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import Head from 'next/head'; // Import Head
import '../styles/index.css'; // Import your global styles
import '../styles/popup.css'; // Import the popup styles

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download high-quality thumbnails from YouTube videos."
        canonical="https://your-website-url.com"
        openGraph={{
          url: "https://your-website-url.com",
          title: "Youtube Thumbnail Downloader",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />

      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;