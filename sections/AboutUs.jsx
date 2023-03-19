import Image from "next/image";
import aboutStyles from "../styles/aboutUs.module.css";
import utilStyles from "../styles/util.module.css";

const AboutUs = () => {
  return (
    <section className={utilStyles.containerPadding} style={{ width: "100%" }}>
      <h2
        className={utilStyles.centreText}
        style={{marginBottom: "0"}}
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
        <div className={aboutStyles.detailsContainer}>
          <div
            className={`${aboutStyles.detail} ${utilStyles.containerBgBorder}`}
            data-aos="fade-in"
            data-aos-delay="1600"
            data-aos-duration="500"
            data-aos-easing="ease-in"
          >
            <Image
              src={"/images/about_us_img.png"}
              alt="altText"
              width={240}
              height={130}
            />
            <h3>Who we are</h3>
            <p>
              {`We execute projects from start to finish (End-to-End) using
              international standards of project and project management. We use
              customer-centric approaches that are easily adaptable. We focus on
              our clients' goals throughout`}
            </p>
          </div>
          <div
            className={`${aboutStyles.detail} ${utilStyles.containerBgBorder}`}
            data-aos="fade-in"
            data-aos-delay="1700"
            data-aos-duration="500"
            data-aos-easing="ease-in"
          >
            <Image
              src={"/images/projmanagement.webp"}
              alt="altText"
              width={240}
              height={130}
            />
            <h3>What we do</h3>
            <ul>
              <li>Multidisciplinary Project management</li>
              <li>Construction Management Value-Add Services</li>
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
              <li>Businesses</li>
              <li>Property owners</li>
              <li>Facility managers</li>
              <li>Individuals</li>
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
          <ul>
            <li>Requirement collection</li>
            <li>Client approves scope, quality and cost</li>
            <li>We provide the execution plan</li>
            <li>On-time execution and close-out</li>
          </ul>
          <p style={{ textAlign: "center" }}>
            {`"We partner with our clients from the start to finish to create value
            in a transparent and adaptable approach centered in clients
            objectives"`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
