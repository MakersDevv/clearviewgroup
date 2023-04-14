import Head from "next/head";
import Layout from "../components/layout";
import Hero from "../sections/Hero";
import AboutUs from "../sections/AboutUs";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Clearviewgroup | Project management firm</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="We partner with our clients from the start to finish to create value in a transparent and adaptable approach centered in clients objectives."
        />
        <meta
          name="keywords"
          content="project management, logistics, construction management, project advisory"
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
      <Hero />
      <AboutUs />
    </Layout>
  );
}


