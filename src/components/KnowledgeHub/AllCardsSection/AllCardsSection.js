import Section from "../../../UI/Sections/Section";
import CourseCard from "../CourseCard/CourseCard";
import InternshipCard from "../InternshipCard/InternshipCard";
import style from "./AllCardSection.module.css";

const AllCardsSection = ({ data }) => {
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
      {data.Courses ? (
        <>
          {allCourses.map((courseSection) => {
            return (
              <>
                {courseSection.courses.length !== 0 && (
                  <Section
                    className={style.cardSection}
                    title={courseSection.title}
                    highlightWord={courseSection.highlightWord}
                    viewAll="true"
                  >
                    <div className={style.cardStack}>
                      {courseSection.courses.map((CardDetails) => {
                        return <CourseCard CardDetails={CardDetails} />;
                      })}
                    </div>
                  </Section>
                )}
              </>
            );
          })}
        </>
      ) : (
        <>
          {allInternships.map((internships) => (
            <>
              {console.log("length->", internships.internships.length)}
              {internships.internships.length !== 0 && (
                <Section
                  className={style.cardSection}
                  title={internships.title}
                  highlightWord={internships.highlightWord}
                  viewAll="true"
                >
                  <div className={style.cardStack}>
                    {internships.internships.map((CardDetails) => {
                      return <InternshipCard CardDetails={CardDetails} />;
                    })}
                  </div>
                </Section>
              )}
            </>
          ))}
        </>
      )}
    </>
  );
};

export default AllCardsSection;
