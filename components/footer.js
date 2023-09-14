import footerStyles from "../styles/footer.module.css";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp, IoLogoFacebook } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import { emailAddress } from "../lib/utils";
export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <span className={footerStyles.socials}>
        {" "}
        <a
          href={`mailto:${emailAddress}`}
          style={{ marginLeft: ".5em" }}
        >
          <MdEmail size="1.7rem" color="#000" />
        </a>
        <a
          href="https://wa.me/27710342771"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#fff", marginLeft: ".5em" }}
        >
          <IoLogoWhatsapp size="1.7rem" color="#000" />
        </a>
        <a
          href="https://www.linkedin.com/company/clearview-cg/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#fff", marginLeft: ".5em" }}
        >
          <BsLinkedin size="1.7rem" color="#000" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100091843535302&mibextid=ZbWKwL"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#fff", marginLeft: ".5em" }}
        >
          <IoLogoFacebook size="1.7rem" color="#000" />
        </a>
        <a
          href="https://www.bark.com/en/za/company/clearview-group/pbXMa/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#fff", marginLeft: ".5em" }}
        >
          <Image
            src="/images/bark.png"
            alt=""
            width={30}
            height={30}
            style={{ filter: "brightness(0)"}}
          />
        </a>
      </span>
      <span>&copy; Clearviewgroup</span>
      <span className={footerStyles.plug}>
        Website made by{" "}
        <a
          href="https://makersdev.com/"
          target="_blank"
          className={footerStyles.siteLink}
        >
          MakersDev
        </a>
      </span>
    </footer>
  );
}
