import { NavLink } from "react-router-dom";
import style from "./CustomKnowlege.module.css";
import FAQsComponent from "./FAQs/FAQs";
import Section from "../../UI/Sections/Section";
import { useEffect, useState } from "react";
import HighlightCapsWords from "../../UI/HighlightWords/HighlightCapsWords";
import { useDispatch } from "react-redux";
import { setComingSoon } from "../../store/ComingSoonSlice";
import InternshipCard from "./InternshipCard/InternshipCard";
import CourseCard from "./CourseCard/CourseCard";
import OurPartners from "../OurPartners/OurPartners";
import AllCardsSection from "./AllCardsSection/AllCardsSection";

const CustomKnowledgeHubComponent = ({ data, backgroundImage }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 650;

  const dispatch = useDispatch();

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

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

  useEffect(() => {
    // console.log(onlineCourses);
    // console.log(offlineCourses);
    // console.log(upcomingCourses);
    // console.log("L IN", liveInternships);
    // console.log("Up IN", upcomingInternships);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          className={style.backgroundImage}
          src={require(`../../assets/${backgroundImage}`)}
          alt=""
        />
        <div className={style.mainScreen}>
          <h2>
            <HighlightCapsWords
              sentence={data.mainContent.head}
              // color="#ff6501"
              style={{ color: "#ff6501" }}
            ></HighlightCapsWords>
          </h2>
          <p>
            {" "}
            <HighlightCapsWords
              sentence={data.mainContent.description}
              style={{ color: "#ff6501" }}
            ></HighlightCapsWords>
          </p>
          {data.mainContent.button ? (
            data.mainContent.button.active ? (
              <NavLink className={style.btn} to={data.mainContent.button.link}>
                {data.mainContent.button.name}
              </NavLink>
            ) : (
              <button
                className={style.btn}
                onClick={() => dispatch(setComingSoon(true))}
              >
                {" "}
                {data.mainContent.button.name}
              </button>
            )
          ) : (
            <></>
          )}
        </div>
      </div>
      <AllCardsSection data={data} />

      <Section
        className={style.WhatIsSection}
        title={data.WhatIsSection.title}
        highlightWord={data.WhatIsSection.highlightWord}
      >
        {/* <Title title="What is Edu-Tech Program ?" highlightWord="Edu-Tech" /> */}
        <div className={style.WhatIsContent}>
          <img
            src={require(`../../assets/${data.WhatIsSection.image}`)}
            alt=""
          ></img>
          <p>{data.WhatIsSection.description}</p>
        </div>
      </Section>

      <Section
        className={style.benefitsSection}
        title={data.benefitsData.title}
        highlightWord={data.benefitsData.highlightWord}
        contentStyle={{ margin: "0" }}
      >
        <div className={style.benefitsContent}>
          <div className={style.benefitsData}>
            <div className={style.benefitData_container}>
              <h3>{data.benefitsData.head}</h3>
              <div className={style.benefits}>
                {data.benefitsData.benefits.map((benefit) => (
                  <div className={style.benefit}>
                    <img src={require(`../../assets/DoneIcon.png`)} alt="" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {width > breakpoint && (
            <div className={style.imageContainer}>
              <img
                src={require(`../../assets/${data.benefitsData.image}`)}
                alt=""
                className={style.image2}
              />
            </div>
          )}
        </div>
      </Section>
      {data.InstructorSection && (
        <Section
          className={style.InstructorSection}
          title={data.InstructorSection.title}
          highlightWord={data.InstructorSection.highlightWord}
        >
          {/* <Title title="Edu-Tech Instructor" highlightWord="Edu-Tech" /> */}
          <div
            style={{
              width: width > breakpoint ? "calc(100vw - 50px)" : "95vw",
            }}
          >
            <div className={style.Instructors}>
              {data.InstructorSection.Instructors.map((Instructor) => (
                <div className={style.Instructor}>
                  <img
                    src={require(`../../assets/${Instructor.address}`)}
                    alt=""
                  />
                  <h2>{Instructor.name}</h2>
                  <p>{Instructor.technologies}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}
      {data.partnersWith && <OurPartners />}

      <FAQsComponent FAQs={data.FAQs} />
    </div>
  );
};

export default CustomKnowledgeHubComponent;
