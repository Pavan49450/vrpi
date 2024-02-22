import { NavLink } from "react-router-dom";
import style from "./CustomKnowlege.module.css";
import FAQsComponent from "./FAQs/FAQs";
import Card from "./Card/Card";
import Section from "../../UI/Sections/Section";
import { useEffect, useState } from "react";
import HighlightCapsWords from "../../UI/HighlightWords/HighlightCapsWords";

const CustomKnowledgeHubComponent = ({ data, backgroundImage }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 650;

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
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
              color="#ff6501"
            ></HighlightCapsWords>
          </h2>
          <p>
            {" "}
            <HighlightCapsWords
              sentence={data.mainContent.description}
              color="#ff6501"
            ></HighlightCapsWords>
          </p>
          <NavLink className={style.btn} to="/register">
            {data.mainContent.button}
          </NavLink>
        </div>
      </div>
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
      {data.cards.courses ? (
        <>
          <Section
            className={style.cardSection}
            title={data.cards.multipleCardsSection.paidCourse.title}
            highlightWord={
              data.cards.multipleCardsSection.paidCourse.highlightWord
            }
            viewAll="true"
          >
            <div className={style.cardStack}>
              {data.cards.multipleCardsSection.paidCourse.courses.map(
                (CardDetails) => {
                  return <Card CardDetails={CardDetails} />;
                }
              )}
            </div>
          </Section>
          <Section
            className={style.cardSection}
            title={data.cards.multipleCardsSection.freeCourse.title}
            highlightWord={
              data.cards.multipleCardsSection.freeCourse.highlightWord
            }
            viewAll="true"
          >
            <div className={style.cardStack}>
              {data.cards.multipleCardsSection.paidCourse.courses.map(
                (CardDetails, index) => {
                  return <Card key={index} CardDetails={CardDetails} />;
                }
              )}
            </div>
          </Section>
        </>
      ) : (
        <Section
          className={style.cardSection}
          title={data.cards.title}
          highlightWord={data.cards.highlightWord}
          viewAll="true"
        >
          <div className={style.cardStack}>
            {data.cards.content.map((CardDetails) => {
              return <Card CardDetails={CardDetails} />;
            })}
          </div>
        </Section>
      )}
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
      {data.partnersWith && (
        <Section title={data.partnersWith.title}>
          <div className={style.partners}>
            {data.partnersWith.partners.map((partner) => (
              <div className={style.box}>{partner.name}</div>
            ))}
          </div>
        </Section>
      )}

      <FAQsComponent FAQs={data.FAQs} />
      {/* <Footer /> */}
    </div>
  );
};

export default CustomKnowledgeHubComponent;
