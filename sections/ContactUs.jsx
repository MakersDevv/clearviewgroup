import contactUsStyles from "../styles/contactUs.module.css";
import utilStyles from "../styles/util.module.css";
import { BiMobile } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section
      data-aos="fade-in"
      data-aos-delay="500"
      data-aos-duration="500"
      data-aos-easing="ease-in"
    >
      <h1 className={utilStyles.centreText}>Contact us</h1>
      <div
        className={utilStyles.containerBgBorder}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Image
          src={"/images/contact_us.jpg"}
          alt="phone"
          width={149}
          height={144}
          style={{ alignSelf: "center", marginBottom: "2rem" }}
        />
        <div className={contactUsStyles.detailContainer}>
          <span className={contactUsStyles.detailTitle}>
            <span style={{ marginRight: ".5rem" }}>
              <BiMobile />
            </span>
            Phone:
          </span>
          <span>071 034 2771</span>
        </div>
        <div className={contactUsStyles.detailContainer}>
          <span className={contactUsStyles.detailTitle}>
            <span style={{ marginRight: ".5rem" }}>
              <MdEmail />
            </span>
            Email:
          </span>

          <span
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "var(--blue)",
            }}
          >
            <a
              className={contactUsStyles.emailLink}
              href="mailto:projects.clearview@mweb.co.za"
            >
              projects.clearview@mweb.co.za
            </a>
          </span>
        </div>
        <div className={contactUsStyles.detailContainer}>
          <span className={contactUsStyles.detailTitle}>
            <span style={{ marginRight: ".5rem" }}>
              <IoLogoWhatsapp />
            </span>
            WhatsApp:
          </span>
          <a
            className={contactUsStyles.emailLink}
            href="https://wa.me/27710342771"
          >
            071 034 2771
          </a>
        </div>
        <div className={contactUsStyles.detailContainer}>
          <span className={contactUsStyles.detailTitle}>
            <span style={{ marginRight: ".5rem" }}>
              <MdLocationOn />
            </span>
            Address:
          </span>

          <span>
            <span>443 Doberman Street</span>
            <span style={{ color: "#000" }}>{" | "}</span>
            <span>Commercia Ext 9</span>
            <span style={{ color: "#000" }}>{" | "}</span>
            <span>Midrand</span>
            <span style={{ color: "#000" }}>{" | "}</span>
            <span>1684</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
