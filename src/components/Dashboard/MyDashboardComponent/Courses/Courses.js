import style from "./Courses.module.css";

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
    },
    {
      title: "Edu-Tech Offline Courses",
      highlightWord: "Edu-Tech",
      courses: offlineCourses,
    },
    {
      title: "Upcoming Courses",
      highlightWord: "Upcoming",
      courses: upcomingCourses,
    },
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
    <>
      {allCourses.map((courseSection) => {
        return (
          <>
            {courseSection.courses.length !== 0 && (
              <div className={style.cardSection}>
                <div
                  className={`${style.cardStack} ${
                    ifCourseDetails === true && style.forDetailsPage
                  } ${className} `}
                >
                  {courseSection.courses.map((CardDetails) => {
                    return <CourseCard CardDetails={CardDetails} />;
                  })}
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
};

export default Courses;

const CourseCard = ({ CardDetails }) => {
  return (
    <div className={style.cardStack}>
      <div className={style.card}>
        <div className={style.cardContent}>
          <h3 className={style.cardTitle}>{CardDetails.title}</h3>
          <p className={style.cardDescription}>{CardDetails.description}</p>
        </div>
      </div>
    </div>
  );
};
