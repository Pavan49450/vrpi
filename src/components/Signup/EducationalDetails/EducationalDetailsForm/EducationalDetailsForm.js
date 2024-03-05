import style from "./EducationalDetailsForm.module.css";

const EducationalDetailsForm = () => {
  return (
    <div className={style.form}>
      <p className={style.note}>
        Note : All <span className={style.important}>*</span> fields are
        Mandatory
      </p>
    </div>
  );
};

export default EducationalDetailsForm;
