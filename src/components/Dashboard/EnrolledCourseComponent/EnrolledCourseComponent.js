import style from "./EnrolledCourseComponent.module.css";
import EnrolledCourses from "./EnrolledCourses/EnrolledCourses";
import LiveClasses from "./LiveClasses/LiveClasses";

const EnrolledCourseComponent = ({ enrolledCourses }) => {
  return (
    <>
      <EnrolledCourses enrolledCourses={enrolledCourses} />
      <LiveClasses enrolledCourses={enrolledCourses} />
    </>
  );
};

export default EnrolledCourseComponent;
