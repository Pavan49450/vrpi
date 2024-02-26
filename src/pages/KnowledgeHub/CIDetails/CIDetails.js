import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EduTechData } from "../../../data/EduTechData";
import { InternshipsData } from "../../../data/InternshipsData";
import AllCardsSection from "../../../components/KnowledgeHub/AllCardsSection/AllCardsSection";
import Section from "../../../UI/Sections/Section";
import ContactUsForm from "../../../components/ContactUs/ContactForm/ContactUsForm";
import FAQsComponent from "../../../components/KnowledgeHub/FAQs/FAQs";
import style from "./CIDetails.module.css";
import CIComponent from "../../../components/CIComponent/CIComponent";
const CIDetails = () => {
  const { courseId } = useParams();
  const { internshipId } = useParams();
  const [content, setContent] = useState();
  // const [internship, setInternship] = useState();

  useEffect(() => {
    if (courseId) {
      console.log("Course id", courseId);
      const Course = EduTechData.Courses.find(
        (course) => course.id === courseId
      );
      setContent(Course);
    }
  }, [courseId]);

  useEffect(() => {
    if (internshipId) {
      console.log("internship id", internshipId);
      const Internship = InternshipsData.Internships.find(
        (internship) => internship.id === internshipId
      );
      setContent(Internship);
    }
  }, [internshipId]);

  console.log("content", content);
  // console.log("internship", internship);

  return (
    <div className={style.container}>
      {content && <CIComponent content={content} />}
      <AllCardsSection data={internshipId ? InternshipsData : EduTechData} />
      <Section title="Get In Touch with us">
        <ContactUsForm />
      </Section>
      <FAQsComponent
        FAQs={internshipId ? InternshipsData.FAQs : EduTechData.FAQs}
      />
    </div>
  );
};

export default CIDetails;
