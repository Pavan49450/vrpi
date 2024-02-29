import React, { useState } from "react";
import styles from "./CourseContent.module.css"; // Import your modular CSS file
import Section from "../../../UI/Sections/Section";
import Button from "../../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { setComingSoon } from "../../../store/ComingSoonSlice";

const CourseContent = ({ courseContent }) => {
  const [openChapters, setOpenChapters] = useState([]);
  const [openModules, setOpenModule] = useState([]);

  const dispatch = useDispatch();

  const toggleChapter = (index) => {
    if (openChapters.includes(index)) {
      setOpenChapters(openChapters.filter((item) => item !== index));
    } else {
      setOpenChapters([...openChapters, index]);
    }
  };

  const toggleModule = (index) => {
    if (openModules.includes(index)) {
      setOpenModule(openModules.filter((item) => item !== index));
    } else {
      setOpenModule([...openModules, index]);
    }
  };

  const isChapterOpen = (index) => {
    return openChapters.includes(index);
  };

  const isModuleOpen = (index) => {
    return openModules.includes(index);
  };
  return (
    <Section title="Course Content">
      <h1 className={styles.techStack}>{courseContent.techStack}</h1>

      <div className={styles.courseContent}>
        {courseContent.chapters.map((chapter, chapterIndex) => (
          <div key={chapterIndex} className={styles.chapter}>
            <div
              className={styles.chapterHeader}
              onClick={() => toggleChapter(chapterIndex)}
            >
              <h3>{chapter.title}</h3>
              {/* <span> */}
              {isChapterOpen(chapterIndex) ? (
                <img
                  src={require("../../../assets/courses/arrowUpPrimary.png")}
                  alt=""
                  style={{
                    width: "30px",
                  }}
                ></img>
              ) : (
                <img
                  src={require("../../../assets/courses/arrowDownPrimary.png")}
                  alt=""
                  style={{
                    width: "30px",
                  }}
                ></img>
              )}
              {/* </span> */}
            </div>
            {isChapterOpen(chapterIndex) && (
              <div className={styles.modules}>
                {chapter.modules.map((module, moduleIndex) => (
                  <div
                    key={moduleIndex}
                    className={styles.module}
                    style={{ cursor: module.lessons ? "pointer" : "default" }}
                    onClick={() => toggleModule(moduleIndex)}
                  >
                    <div className={styles.moduleEach}>
                      <h4>{module.title}</h4>
                      {module.lessons && !isModuleOpen(moduleIndex) && (
                        <img
                          src={require("../../../assets/courses/arrowRight.png")}
                          alt=""
                          style={{
                            width: "50px",
                          }}
                        ></img>
                      )}
                    </div>
                    {module.lessons && isModuleOpen(moduleIndex) && (
                      <ul className={styles.lessons}>
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className={styles.lesson}>
                            {lesson.title}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.realProject}>
        <h2>
          Get Hands-on experience by enrolling to our course which includes a
          Real-Time Project
        </h2>
        <Button
          onClick={() => {
            dispatch(setComingSoon(true));
          }}
          className={styles.viewBtn}
        >
          View My Project
        </Button>
      </div>
    </Section>
  );
};

export default CourseContent;
