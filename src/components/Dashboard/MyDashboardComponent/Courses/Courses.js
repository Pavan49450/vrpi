import { useNavigate } from "react-router-dom";
import style from "./Courses.module.css";
import Button from "../../../../UI/Button/Button";

const Courses = ({ data, ifCourseDetails, className }) => {
  const onlineCourses =
    data.Courses && data.Courses.filter((course) => course.type === "online");

  const offlineCourses =
    data.Courses && data.Courses.filter((course) => course.type === "offline");
  const upcomingCourses =
    data.Courses && data.Courses.filter((course) => course.type === "upcoming");

  const allCourses = [
    {
      title: "Edu-Tech Online Courses",
      highlightWord: "Edu-Tech",
      courses: onlineCourses,
      description:
        "To take these courses undergo a Free Test and win a Scholarship for each Online Courses of VR PI Group of Companies",
    },
    {
      title: "Edu-Tech Offline Courses",
      highlightWord: "Edu-Tech",
      courses: offlineCourses,
      description:
        "To take these courses undergo a Free Test and win a Scholarship for each Online Courses of VR PI Group of Companies",
    },
    // {
    //   title: "Upcoming Courses",
    //   highlightWord: "Upcoming",
    //   courses: upcomingCourses,
    // },
  ];

  const liveInternships =
    data.Internships &&
    data.Internships.filter((intership) => intership.type === "live");
  const upcomingInternships =
    data.Internships &&
    data.Internships.filter((intership) => intership.type === "upcoming");

  const allInternships = [
    {
      title: "Internships on",
      highlightWord: "Internships",
      internships: liveInternships,
    },
    {
      title: "Upcoming Internships",
      highlightWord: "Internships",
      internships: upcomingInternships,
    },
  ];

  return (
    <div className={style.allCourses}>
      {console.log("allCourses", allCourses)}
      {allCourses.map((courseSection) => {
        return (
          <div>
            {courseSection.courses.length !== 0 && (
              <div className={style.cardSection}>
                <h2 className={style.cardSectionTitle}>
                  {courseSection.title}
                </h2>
                <p>{courseSection.description}</p>
                <div className={`${style.cardStack} ${className} `}>
                  {courseSection.courses.map((CardDetails) => {
                    return <CourseCard CardDetails={CardDetails} />;
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Courses;

const CourseCard = ({ CardDetails }) => {
  const navigate = useNavigate();

  return (
    <div className={style.card}>
      <div className={style.cardContent}>
        <h3 className={style.cardTitle}>{CardDetails.name}</h3>
        <img
          src={require(`../../../../assets/dashboard/webLink.png`)}
          alt=""
          onClick={() => {
            navigate(`/edutech/${CardDetails.id}`);
          }}
          className={style.courseLink}
        />
      </div>
      <Button
        onClick={() => {
          navigate(`/edutech/${CardDetails.id}`);
        }}
      >
        Check Details
      </Button>
    </div>
  );
};
