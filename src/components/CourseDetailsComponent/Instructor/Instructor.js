import Section from "../../../UI/Sections/Section";
import style from "./Instructor.module.css";
const Instructor = ({ instructorData }) => {
  return (
    <Section title="Instructor Details">
      <div className={style.Instructor}>
        <div className={style.bar1}></div>
        <div className={style.bar2}></div>
        <div className={style.content}>
          <img
            src={require("../../../assets/courses/Instructor2.png")}
            alt=""
          />
          <div>
            {console.log("data->", instructorData)}
            {instructorData.description.map((x) => (
              <p>{x}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Instructor;
