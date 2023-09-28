import Image from "next/image";
import aboutStyles from "../styles/aboutUs.module.css";
import utilStyles from "../styles/util.module.css";
import { HiCheckBadge } from "react-icons/hi2";
import { BsCardChecklist } from "react-icons/bs";

const AboutUs = () => {
  return (
    <section className={utilStyles.containerPadding} style={{ width: "100%" }}>
      <h2
        className={utilStyles.centreText}
        style={{ margin: "1rem 0" }}
        data-aos="fade-in"
        data-aos-delay="1500"
        data-aos-duration="500"
        data-aos-easing="ease-in"
      >
        About us
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          className={`${aboutStyles.detailExpanded} ${utilStyles.containerBgBorder}`}
          style={{ marginBottom: "1rem" }}
          data-aos="fade-in"
          data-aos-delay="1600"
          data-aos-duration="500"
          data-aos-easing="ease-in"
        >
          <Image
            src={"/images/about.jpg"}
            alt="altText"
            width={305}
            height={172.5}
            style={{ borderRadius: "5px" }}
          />
          <h3>Why choose us?</h3>
          <ul>
            <li>
              {
                "We execute projects from start to finish (End-to-End) using best practices, international and local standards of construction and project management"
              }
            </li>
            <li>
              {
                "We partner with our clients from the start to finish to create value in a transparent and adaptable approach centered in their objectives"
              }
            </li>
            <li>{"We focus on our clients' goals throughout the journey"}</li>
            <li>
              {
                "Our diverse team entails highly qualified experts in their own fields being globally and locally accredited "
              }
            </li>
            <li>
              {
                "We have strong partnerships with suppliers of materials, industry key players and regulators"
              }
            </li>
          </ul>
        </div>
        <div className={aboutStyles.detailsContainer}>
          <div
            className={`${aboutStyles.detail} ${utilStyles.containerBgBorder}`}
            data-aos="fade-in"
            data-aos-delay="1700"
            data-aos-duration="500"
            data-aos-easing="ease-in"
          >
            <Image
              src={"/images/img10.jpg"}
              alt="altText"
              width={240}
              height={130}
            />
            <h3>What we do</h3>
            <ul>
              <li>Multi-disciplinary project management</li>
              <li>Construction management</li>
              <li>Building redesign and upgrade</li>
              <li>Building repairs</li>
              <li>Plumbing</li>
              <li>Fuels systems</li>
              <li>Value-added services</li>
              <ul>
                <li>Professional advice</li>
                <li>Tendering support</li>
                <li>Stakeholder engagement</li>
                <li>Transportation</li>
                <li>Horticulture</li>
                <li>Specialised steelwork and roofs</li>
                <li>Glazing</li>
              </ul>
            </ul>
          </div>
          <div
            className={`${aboutStyles.detail} ${utilStyles.containerBgBorder}`}
            data-aos="fade-in"
            data-aos-delay="1800"
            data-aos-duration="500"
            data-aos-easing="ease-in"
          >
            <Image
              src={"/images/clients.jpg"}
              alt="altText"
              width={240}
              height={130}
            />
            <h3>Who are our clients</h3>
            <ul>
              <li>Investors</li>
              <li>Fuel retailers</li>
              <li>Warehouses and depots</li>
              <li>Businesses</li>
              <li>Property owners</li>
              <li>Facility managers</li>
              <li>Home owners</li>
              <li>Public agencies and {"NGO's"}</li>
            </ul>
          </div>
        </div>

        <div
          className={`${aboutStyles.detailExpanded} ${utilStyles.containerBgBorder}`}
          data-aos="fade-in"
          data-aos-delay="500"
          data-aos-duration="500"
          data-aos-easing="ease-in"
        >
          <Image
            src={"/images/flow.png"}
            alt="altText"
            width={494.2}
            height={320}
          />
          <h3>How we work</h3>
          <ol>
            <li>Requirement collection</li>
            <li>Client approves scope, quality and cost</li>
            <li>Provide the execution plan</li>
            <li>On-time execution and close-out</li>
          </ol>
          <p style={{ textAlign: "center" }}>
            {`"We partner with our clients from the start to finish to create value
            in a transparent and adaptable approach centered in clients
            objectives"`}
          </p>
        </div>
      </div>
      <div className={aboutStyles.qualityContainer}>
        <div>
          <Image
            src={"/images/compliance.webp"}
            alt="altText"
            width={100}
            height={100}
          />
          <span>RSA regulatory compliance</span>
          <ul>
            <li>CIPC compliant</li>
            <li>COIDA compliant</li>
            <li>SARS compliant</li>
          </ul>
        </div>
        <div>
        <Image
            src={"/images/wg2.png"}
            alt="altText"
            width={100}
            height={100}
          />
          <span>Workmanship guarantee</span>
          <ul>
            <li>Guaranteed workmanship</li>
            <li>Material protection</li>
            <li>Property Damage protection</li>
          </ul>
        </div>
        <div>
        <Image
            src={"/images/wg.png"}
            alt="altText"
            width={100}
            height={100}
          />
          <span>1 year defects warranty</span>
          <ul>
            <li>Post implementation warranty</li>
            <li>Defects liabilities cover</li>
          </ul>
        </div>
      </div>
      {/* <Image
        src={"/images/about2.jpg"}
        alt="altText"
        width={1063}
        height={380}
      /> */}
    </section>
  );
};

export default AboutUs;
