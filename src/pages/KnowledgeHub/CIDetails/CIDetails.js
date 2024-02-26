import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EduTechData } from "../../../data/EduTechData";
import { InternshipsData } from "../../../data/InternshipsData";

const CIDetails = () => {
  const { courseId, internshipId } = useParams();
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
    if (internshipId) {
      console.log("internship id", internshipId);
      const Internship = InternshipsData.Internships.find(
        (internship) => internship.id === internshipId
      );
      setContent(Internship);
    }
  }, [courseId, internshipId]);

  console.log("content", content);
  // console.log("internship", internship);

  return <div>{content.name}</div>;
};

export default CIDetails;
