import Layout from "../components/layout";
import ContactUs from "../sections/ContactUs";
import Faqs from "../sections/Faqs";
import ReqPA from "../sections/ReqPA";
import Head from "next/head";

const HelpPage = () => {
  return (
    <Layout>
      <Head>
        <title>Clearviewgroup | Help</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="Get help by contacting us."
        />
        <meta name="author" content="MakersDev" />
        <meta name="theme-color" content="#d6e9f1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {/* <Faqs /> */}
      <ContactUs />
      <ReqPA />
    </Layout>
  );
};

export default HelpPage;
