import MainSection from "./MainSection/MainSection";
import Syllabus from "./Syllabus/Syllabus";

const CIComponent = ({ content }) => {
  return (
    <div>
      <MainSection content={content} />
      <Syllabus />
    </div>
  );
};

export default CIComponent;
