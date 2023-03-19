import howWeWorkStyles from "../styles/howWeWork.module.css";
import Image from "next/image";
import utilStyles from "../styles/util.module.css";

const HowWeWork = () => {
  return (
    <section className={utilStyles.containerPadding}>
      <h2>How we work</h2>
      <div className={howWeWorkStyles.container}>
        <Image
          src={"/images/about_us_img.png"}
          alt="altText"
          width={300}
          height={157.5}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius
          quam quisque id diam. Amet volutpat consequat mauris nunc congue nisi.
          Nec ultrices dui sapien eget mi proin sed libero. Massa placerat duis
          ultricies lacus sed turpis tincidunt. Viverra orci sagittis eu
          volutpat odio facilisis. Et leo duis ut diam quam nulla. Magna
          fermentum iaculis eu non diam. Blandit massa enim nec dui nunc mattis
          enim ut. Luctus accumsan tortor posuere ac ut consequat. Aliquam nulla
          facilisi cras fermentum odio.
        </p>
      </div>
    </section>
  );
};

export default HowWeWork;
