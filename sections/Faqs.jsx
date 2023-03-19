import faqStyles from "../styles/faq.module.css";
import utilStyles from "../styles/util.module.css";

const Faqs = () => {
  return (
    <section>
      <h1>FAQs</h1>
      <div
        className={utilStyles.containerBgBorder}
        data-aos="fade-in"
        data-aos-delay="500"
        data-aos-duration="500"
        data-aos-easing="ease-in"
      >
        <div className={faqStyles.faqPair}>
          <span className={faqStyles.question}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
        </div>
        <div className={faqStyles.faqPair}>
          <span className={faqStyles.question}>
            Ut morbi tincidunt augue interdum velit?
          </span>
          <span>
            Dis parturient montes nascetur ridiculus mus mauris vitae ultricies.
            Morbi enim nunc faucibus a pellentesque. Est ullamcorper eget nulla
            facilisi. Velit ut tortor pretium viverra
          </span>
        </div>
        <div className={faqStyles.faqPair}>
          <span className={faqStyles.question}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </span>
          <span>
            A iaculis at erat pellentesque adipiscing commodo elit. Amet aliquam
          </span>
        </div>
        <div className={faqStyles.faqPair}>
          <span className={faqStyles.question}>
            Massa tincidunt dui ut ornare lectus sit?
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
        </div>
        <div className={faqStyles.faqPair}>
          <span className={faqStyles.question}>
            Urna duis convallis convallis tellus id interdum?
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
        </div>
        <div className={faqStyles.faqPair}>
          <span className={faqStyles.question}>
            Vestibulum lorem sed risus ultricies tristique nulla aliquet?
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
        </div>
        <div className={faqStyles.faqPair}>
          <span className={faqStyles.question}>
            Dui nunc mattis enim ut tellus elementum?
          </span>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </span>
        </div>
        <div className={faqStyles.faqPair}>
          <span className={faqStyles.question}>
            Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus
            mattis?
          </span>
          <span>
            Nam libero justo laoreet sit amet cursus. A iaculis at erat
            pellentesque adipiscing commodo elit. Amet aliquam id diam maecenas
            ultricies mi eget
          </span>
        </div>
        <div className={faqStyles.faqPair}>
          <span className={faqStyles.question}>
            Aenean et tortor at risus viverra. Amet est placerat in egestas?
          </span>
          <span>
            duis convallis convallis tellus id interdum. Vestibulum lorem sed
            risus ultricies tristique nulla aliquet enim. Dui nunc mattis enim
            ut tellus elementum
          </span>
        </div>
        <div className={faqStyles.faqPair}>
          <span className={faqStyles.question}>
            At tempor commodo ullamcorper a lacus. Arcu odio ut sem nulla?
          </span>
          <span>
            Eget nulla facilisi etiam dignissim diam quis enim lobortis. A
            condimentum vitae sapien pellentesque habitant morbi tristique
          </span>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
