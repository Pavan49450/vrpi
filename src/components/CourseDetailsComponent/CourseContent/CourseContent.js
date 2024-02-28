import React, { useState } from "react";
import styles from "./CourseContent.module.css"; // Import your modular CSS file
import Section from "../../../UI/Sections/Section";

const CourseContent = ({ courseContent }) => {
  const [openChapters, setOpenChapters] = useState([]);
  const [openModules, setOpenModule] = useState([]);

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
                  src={require("../../../assets/courses/arrowDown.png")}
                  alt=""
                  style={{
                    width: "15px",
                    height: "15px",
                    transform: "rotate(180deg)",
                  }}
                ></img>
              ) : (
                <img
                  src={require("../../../assets/courses/arrowDown.png")}
                  alt=""
                  style={{
                    width: "15px",
                    height: "15px",
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
                    onClick={() => toggleModule(moduleIndex)}
                  >
                    <div className={styles.moduleEach}>
                      <h4>{module.title}</h4>
                      {isModuleOpen(moduleIndex) ? (
                        <img
                          src={require("../../../assets/courses/arrowDown.png")}
                          alt=""
                          style={{
                            width: "15px",
                            height: "15px",
                            transform: "rotate(180deg)",
                          }}
                        ></img>
                      ) : (
                        <img
                          src={require("../../../assets/courses/arrowDown.png")}
                          alt=""
                          style={{
                            width: "15px",
                            height: "15px",
                          }}
                        ></img>
                      )}
                    </div>
                    {isModuleOpen(moduleIndex) && (
                      <ul>
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex}>{lesson.title}</li>
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
    </Section>
  );
};

export default CourseContent;
