import { useEffect } from "react";
import EnrolledCourseComponent from "../../../components/Dashboard/EnrolledCourseComponent/EnrolledCourseComponent";
import Courses from "../../../components/Dashboard/MyDashboardComponent/Courses/Courses";
import { EduTechData } from "../../../data/EduTechData";
import UserDataComponent from "../../../data/user";

const DashboardCourses = () => {
  const user = UserDataComponent();

  useEffect(() => {
    document.title = "Edutech Courses";
  });

  // Check if user data and necessary properties are defined
  const userExists = user && user.educationalDetails && user.enrolledCourses;

  return (
    <div>
      {userExists && (
        <EnrolledCourseComponent enrolledCourses={user.enrolledCourses} />
      )}
      <Courses data={EduTechData} />
    </div>
  );
};

export default DashboardCourses;
