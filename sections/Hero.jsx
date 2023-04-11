import Image from "next/image";
import utilStyles from "../styles/util.module.css";
import heroStyles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <div className={heroStyles.container}>
      <h1
        className={utilStyles.centreText}
        data-aos="fade-in"
        data-aos-delay="500"
        data-aos-duration="500"
        data-aos-easing="ease-in"
      >
        We See Beyond
      </h1>
      <Image
        src={"/images/hero1.png"}
        alt="project management visualisation"
        width={1343.33}
        height={632}
        className={`${heroStyles.img}`}
        style={{
          boxShadow: "0 3px 10px #dddddd",
          border: "solid var(--grey) 2px",
        }}
        data-aos="fade-in"
        data-aos-delay="700"
        data-aos-duration="500"
        data-aos-easing="ease-in"
      />
    </div>
  );
};

export default Hero;
