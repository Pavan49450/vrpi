import AboutUsSection from "../../../components/HomeComponents/AboutUsSection/AboutSection";
import KnowledgeHub from "../../../components/HomeComponents/KnowledgeHub/KnowledgeHub";
import MainScreen from "../../../components/HomeComponents/MainSection/MainSection";
import OurClients from "../../../components/HomeComponents/OurClients/OurClients";
import OurCompanies from "../../../components/HomeComponents/OurCompanies/OurCompanies";
import OurPartners from "../../../components/HomeComponents/OurPartners/OurPartners";
import OurServices from "../../../components/HomeComponents/OurServices/OurServices";
import WhyChooseUs from "../../../components/HomeComponents/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <MainScreen />
      <AboutUsSection />
      <WhyChooseUs />
      <OurCompanies />
      {/* <OurServices /> */}
      <KnowledgeHub />
      <OurPartners />
      <OurClients />
    </div>
  );
};

export default Home;
