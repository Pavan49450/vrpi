import style from "./EdutechBenefits.module.css";

const EdutechBenefits = () => {
  const courseBenefits = [
    "Course Certification",
    "Internship with Real-Time Project",
    "Scholarship",
    "Virtual Classes",
    "Recorded Classes",
  ];
  return (
    <div className={style.container}>
      <div className={style.head}>
        <h2 className={style.title}>Edu-Tech Benefits</h2>
        <span className={style.viewLink} onClick={() => {}}>
          view courses
        </span>
      </div>
      <div className={style.benefits}>
        {courseBenefits.map((benefit, index) => (
          <div className={style.benefit} key={index}>
            <img
              src={require(`../../../../assets/dashboard/correct-w.png`)}
              alt=""
            />
            <p>{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EdutechBenefits;
