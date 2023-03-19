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
        Leading with purpose, delivering with results
      </h1>
      <Image
        src={"/images/hero_img.jpeg"}
        alt="project management visualisation"
        width={960}
        height={501.6}
        className={heroStyles.img}
        data-aos="fade-in"
        data-aos-delay="700"
        data-aos-duration="500"
        data-aos-easing="ease-in"
      />
    </div>
  );
};

export default Hero;
