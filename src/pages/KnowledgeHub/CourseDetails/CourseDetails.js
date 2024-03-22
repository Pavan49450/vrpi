import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EduTechData } from "../../../data/EduTechData";
import { InternshipsData } from "../../../data/InternshipsData";
import AllCardsSection from "../../../components/KnowledgeHub/AllCardsSection/AllCardsSection";
import Section from "../../../UI/Sections/Section";
import ContactUsForm from "../../../components/ContactUs/ContactForm/ContactUsForm";
import FAQsComponent from "../../../components/KnowledgeHub/FAQs/FAQs";
import style from "./CourseDetails.module.css";
import CourseDetailsComponent from "../../../components/CourseDetailsComponent/CourseDetailsComponent";
const CourseDetails = () => {
  const { courseId } = useParams();
  const { internshipId } = useParams();
  const [content, setContent] = useState();
  // const [internship, setInternship] = useState();

  useEffect(() => {
    if (courseId) {
      const Course = EduTechData.Courses.find(
        (course) => course.id === courseId
      );
      setContent(Course);
      if (Course) {
        document.title = `Course - ${Course.name}`;
      }
    }
  }, [courseId]);

  useEffect(() => {
    if (internshipId) {
      const Internship = InternshipsData.Internships.find(
        (internship) => internship.id === internshipId
      );
      setContent(Internship);
    }
  }, [internshipId]);

  // console.log("content", content);
  // console.log("internship", internship);

  return (
    <div className={style.container}>
      {content && <CourseDetailsComponent content={content} />}
      <AllCardsSection
        data={internshipId ? InternshipsData : EduTechData}
        ifCourseDetails={true}
      />
      <Section title="Get In Touch with us">
        <ContactUsForm />
      </Section>
      <FAQsComponent
        FAQs={internshipId ? InternshipsData.FAQs : EduTechData.FAQs}
      />
    </div>
  );
};

export default CourseDetails;
