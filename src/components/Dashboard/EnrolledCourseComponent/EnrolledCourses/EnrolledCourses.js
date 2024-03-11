import Button from "../../../../UI/Button/Button";
import CustomImage from "../../../../UI/Image/Image";
import style from "./EnrolledCourses.module.css";

const EnrolledCourses = ({ enrolledCourses }) => {
  return (
    <div className={style.container}>
      <h1>Enrolled Courses</h1>
      <div className={style.courses}>
        {enrolledCourses.map((course, index) => {
          return (
            <div className={style.course} key={index}>
              <div className={style.courseInfo}>
                <h2 className={style.courseName}>{course.name}</h2>
                <Button onClick={() => {}} className={style.viewBtn}>
                  View
                </Button>
              </div>
              {/* <div className=> */}
              <img
                src={require(`../../../../assets/courses/${course.image}`)}
                alt=""
                className={style.courseImage}
              />
            </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default EnrolledCourses;
