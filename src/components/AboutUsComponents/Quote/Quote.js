import style from "./Quote.module.css";

const Quote = () => {
  return (
    <div className={style.card}>
      <img
        src={require("../../../assets/aboutus/OrangeCommas.png")}
        alt=""
      ></img>
      <div className={style.cardContent}>
        <h1>
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
          consectetur. Lorem ipsum dolor sit amet consectetur.{" "}
        </h1>
        <p>-Sandeep Kumar Pikili (Founder of VR Pi Group of Companies)</p>
      </div>
    </div>
  );
};

export default Quote;
