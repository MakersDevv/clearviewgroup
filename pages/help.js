import Layout from "../components/layout";
import ContactUs from "../sections/ContactUs";
import Faqs from "../sections/Faqs";
import ReqPA from "../sections/ReqPA";

const HelpPage = () => {
  return (
    <Layout>
      <Faqs/>
      <ContactUs/>
      <ReqPA/>
    </Layout>
  );
};

export default HelpPage;