import CourseBenefits from "./CourseBenefits/CourseBenefits";
import CourseContent from "./CourseContent/CourseContent";
import MainSection from "./MainSection/MainSection";
import Syllabus from "./Syllabus/Syllabus";

const CourseDetails = ({ content }) => {
  return (
    <div>
      <MainSection content={content} />
      <Syllabus syllabus={content.syllabus} />
      <CourseBenefits benefits={content.benefits} />
      <CourseContent courseContent={content.courseContent} />
    </div>
  );
};

export default CourseDetails;
