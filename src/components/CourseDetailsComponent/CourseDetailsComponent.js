import CourseBenefits from "./CourseBenefits/CourseBenefits";
import CourseContent from "./CourseContent/CourseContent";
import CourseEligibility from "./CourseEligibility/CourseEligibility";
import MainSection from "./MainSection/MainSection";
import Syllabus from "./Syllabus/Syllabus";
import ToolsRequired from "./ToolsRequired/ToolsRequired";
import WhyToChooseUs from "./WhyToChooseUs/WhyToChooseUs";

const CourseDetails = ({ content }) => {
  return (
    <div>
      <MainSection content={content} />
      <Syllabus syllabus={content.syllabus} />
      <CourseBenefits benefits={content.benefits} />
      <CourseContent courseContent={content.courseContent} />
      <ToolsRequired toolsRequired={content.toolsAndTechnologyUsed} />
      <CourseEligibility />
      <WhyToChooseUs />
    </div>
  );
};

export default CourseDetails;
