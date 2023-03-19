import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import NavBar from "../components/navigationBar";
import Hero from "../sections/Hero";
import AboutUs from "../sections/AboutUs";
import ContactUs from "../sections/ContactUs";
import Faqs from "../sections/Faqs"
import HowWeWork from "../sections/HowWeWork";
import ReqPA from "../sections/ReqPA";
import ReqQuotation from "../sections/ReqQuotation";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero/>
        <AboutUs/>
      </Layout>
    </div>
  );
}