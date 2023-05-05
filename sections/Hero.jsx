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
        src={"/images/heroimg5.png"}
        alt="project management visualisation"
        width={1648}
        height={414}
        className={`${heroStyles.img}`}
        data-aos="fade-in"
        data-aos-delay="700"
        data-aos-duration="500"
        data-aos-easing="ease-in"
        priority
      />
      <Image
        src={"/images/heroimg6.png"}
        alt="project management visualisation"
        width={478}
        height={683}
        className={`${heroStyles.img2}`}
        data-aos="fade-in"
        data-aos-delay="700"
        data-aos-duration="500"
        data-aos-easing="ease-in"
        priority
      />
    </div>
  );
};

export default Hero;
