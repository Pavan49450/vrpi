import React, { useState } from "react";
import styles from "./CourseContent.module.css"; // Import your modular CSS file
import Section from "../../../UI/Sections/Section";

const CourseContent = ({ courseContent }) => {
  const [openChapters, setOpenChapters] = useState([]);

  const toggleChapter = (index) => {
    if (openChapters.includes(index)) {
      setOpenChapters(openChapters.filter((item) => item !== index));
    } else {
      setOpenChapters([...openChapters, index]);
    }
  };

  const isChapterOpen = (index) => {
    return openChapters.includes(index);
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
              <span>{isChapterOpen(chapterIndex) ? "-" : "+"}</span>
            </div>
            {isChapterOpen(chapterIndex) && (
              <div className={styles.modules}>
                {chapter.modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className={styles.module}>
                    <h4>{module.title}</h4>
                    <ul>
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex}>{lesson.title}</li>
                      ))}
                    </ul>
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
