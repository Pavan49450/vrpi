import Courses from "../../../components/Dashboard/MyDashboardComponent/Courses/Courses";
import { EduTechData } from "../../../data/EduTechData";

const DashboardCourses = () => {
  return (
    <div>
      <Courses data={EduTechData} />
    </div>
  );
};

export default DashboardCourses;
