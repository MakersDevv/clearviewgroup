import testimonialStyles from "../styles/testimonial.module.css";
import utilityStyles from "../styles/util.module.css";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Testimonial = ({ numStars, testimonialText, clientDetails }) => {
  return (
    <div
      className={`${testimonialStyles.testimonial} ${utilityStyles.containerBgBorder}`}
      data-aos="fade-up"
      data-aos-easing="ease"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        {numStars.map((element, idx) => {
          return (
            <span key={"star"} style={{margin: "0 2px"}}>
              {element == 1 ? (
                <FaStar color="gold" size="20px"/>
              ) : element == 0.5 ? (
                <FaStarHalf color="gold" size="20px"/>
              ) : (
                <FaStar color="rgb(211, 211, 211)" size="20px"/>
              )}
            </span>
          );
        })}
      </div>
      <span className="testimonialText">
        {testimonialText}
        <br />
        <br />
        <b>- {clientDetails}</b>
      </span>
    </div>
  );
};

export default Testimonial;
