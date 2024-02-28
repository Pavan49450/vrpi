import Section from "../../../UI/Sections/Section";
import style from "./WhyToChooseUs.module.css";

const WhyToChooseUsData = {
  description:
    "Lorem ipsum dolor sit amet consectetur. Sodales eget convallis sem iaculis.",
  points: [
    {
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sodales eget convallis sem iaculis. Lorem ipsum dolor sit amet consectetur. Sodales eget convallis sem iaculis. ",
    },
    {
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sodales eget convallis sem iaculis. Lorem ipsum dolor sit amet consectetur. Sodales eget convallis sem iaculis. ",
    },
    {
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sodales eget convallis sem iaculis. Lorem ipsum dolor sit amet consectetur. Sodales eget convallis sem iaculis. ",
    },
  ],
};
const WhyToChooseUs = () => {
  return (
    <Section title="Why To Choose Us">
      <h2 className={style.head}>{WhyToChooseUsData.description}</h2>
      <div className={style.points}>
        {WhyToChooseUsData.points.map((point, index) => (
          <div className={style.point}>
            <span className={style.pointNumber}>0{index + 1}</span>
            <h2>{point.title}</h2>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhyToChooseUs;
