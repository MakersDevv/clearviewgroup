import Image from "next/image";
import utilStyles from "../styles/util.module.css";
import heroStyles from "../styles/hero.module.css";


const Hero = () => {

  return (
    <div className={heroStyles.container}>
      <h1
        className={utilStyles.centreText}
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="500"
        data-aos-easing="ease-in"
      >
        Leading with purpose, delivering with results
      </h1>
      <Image
        src={"/images/hero_img.jpeg"}
        alt="project management visualisation"
        width={666.67}
        height={353.89}
        className={heroStyles.img}
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="500"
        data-aos-easing="ease-in"
      />
    </div>
  );
};

export default Hero;
