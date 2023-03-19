import Link from "next/link";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiMobile } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [showNavItems, setShowNavItems] = useState(false);

  const toggleNav = () => {
    const nav = document.querySelector(".nav-list");

    if (showNavItems) {
      nav.classList.remove("nav-on");
      nav.classList.add("nav-off");
      document.querySelector(".nav-socials").classList.add("disappear");
      document.querySelector(".nav-icon-container").style.position = "absolute";
      setShowNavItems(false);
    } else {
      nav.classList.remove("nav-off");
      nav.classList.add("nav-on");
      document.querySelector(".nav-socials").classList.remove("disappear");
      document.querySelector(".nav-socials").classList.add("nav-socials-on");
      document.querySelector(".nav-icon-container").style.position = "fixed";
      setShowNavItems(true);
    }
  };

  const closeNav = () => {
    if (showNavItems) {
      setShowNavItems(false);
      toggleNav();
    }
  };

  useEffect(() => {}, [showNavItems]);

  return (
    <nav className="navigation">
      <Link href="/">
        <span className="logo">
          <Image
            src={"/images/logo.png"}
            alt="Logo"
            height={62.95}
            width={245.45}
            style={{marginRight: ".5em" }}
          />
       
        </span>
      </Link>
      <div className="nav-items-container">
        <div onClick={toggleNav} className="nav-icon-container">
          {showNavItems ? <HiX size="2rem" /> : <HiMenuAlt4 size="2rem" />}
        </div>
        <ul className="nav-list">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/request-quotation">Request quotation</Link>
          </li>
          <li>
            <Link href="/help">Help</Link>
          </li>
        </ul>
        <div className="nav-socials">
          <span>Contact us</span>
          <div>
            <a
              href="mailto:projects@clearviewgroup.joburg"
              style={{ marginLeft: ".5em" }}
              onClick={closeNav}
            >
              <MdEmail size="1.7rem" color="#000"/>
            </a>
            <a
              href="https://wa.me/27710342771"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#fff", marginLeft: ".5em" }}
              onClick={closeNav}
            >
              <IoLogoWhatsapp size="1.7rem" color="#000"/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}