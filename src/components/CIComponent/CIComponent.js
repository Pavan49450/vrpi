import CourseBenefits from "./CourseBenefits/CourseBenefits";
import MainSection from "./MainSection/MainSection";
import Syllabus from "./Syllabus/Syllabus";

const CIComponent = ({ content }) => {
  return (
    <div>
      <MainSection content={content} />
      <Syllabus syllabus={content.syllabus} />
      {/* <CourseBenefits benefits={content.benefits} /> */}
    </div>
  );
};

export default CIComponent;
