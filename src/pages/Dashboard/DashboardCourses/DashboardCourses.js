import EnrolledCourseComponent from "../../../components/Dashboard/EnrolledCourseComponent/EnrolledCourseComponent";
import Courses from "../../../components/Dashboard/MyDashboardComponent/Courses/Courses";
import { EduTechData } from "../../../data/EduTechData";
import { user } from "../../../data/user";

const DashboardCourses = () => {
  return (
    <div>
      {user.educationalDetails !== undefined && (
        <EnrolledCourseComponent enrolledCourses={user.enrolledCourses} />
      )}
      <Courses data={EduTechData} />
    </div>
  );
};

export default DashboardCourses;
