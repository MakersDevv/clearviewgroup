import Testimonial from "../components/testimonial";
import utilStyles from "../styles/util.module.css";
import testimonialStyels from "../styles/testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={utilStyles.containerPadding} style={{ width: "100%", marginBottom: "3rem"}}>
      <h2
        className={utilStyles.centreText}
        style={{ margin: "3rem 0 1rem 0" }}
        data-aos="fade-in"
        data-aos-delay="1500"
        data-aos-duration="500"
        data-aos-easing="ease-in"
      >
        Testimonials
      </h2>
      <div className={testimonialStyels.testimonialsContainer}>
        <Testimonial
          numStars={[1, 1, 1, 1, 1]}
          testimonialText={
            "Great workmanship, thorough planning and outstanding job execution. I called them to urgently rescue me from a contractor who went AWOL while busy with my house renovation."
          }
          clientDetails={"Elmond"}
        />
        <Testimonial
          numStars={[1, 1, 1, 1, 0]}
          testimonialText={
            "I'm very happy with the work that was done...I was kept in the loop the entire project...the team was very efficient and Max is the consummate professional..would definitely recommend them..."
          }
          clientDetails={"Nel"}
        />
        <Testimonial
          numStars={[1, 1, 1, 1, 1]}
          testimonialText={
            "Excellent service, proffessional Project management end to end and very happy with their proffessionalism."
          }
          clientDetails={"Lele"}
        />
      </div>
    </section>
  );
};

export default Testimonials;
