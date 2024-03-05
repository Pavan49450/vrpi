import { useEffect, useState } from "react";
import Dropdown from "../../../../UI/Dropdown/Dropdown";
import InputWithInvalidText from "../../../../UI/Input/InputWithInvalidText";
import useInput from "../../../../hooks/use-Input";
import {
  endYearValidation,
  nameValidation,
  percentageValidation,
  yearValidation,
} from "../../../InputValidations/InputValidations";
import style from "./EducationalDetailsForm.module.css";
import Button from "../../../../UI/Button/Button";

const EducationLevelData = [
  { label: "High School", value: "High School" },
  { label: "Secondary Level/ Diploma", value: "Secondary Level/ Diploma" },
  { label: "Under Graduation", value: "Under Graduation" },
  { label: "Post Graduation", value: "Post Graduation" },
  { label: "Other", value: "Other" },
];

const DegreeData = [
  { label: "High School", value: "High School" },
  { label: "Secondary Level/ Diploma", value: "Secondary Level/ Diploma" },
  { label: "Under Graduation", value: "Under Graduation" },
  { label: "Post Graduation", value: "Post Graduation" },
  { label: "Other", value: "Other" },
];

const EducationalDetailsForm = () => {
  const instituteNameInput = useInput({ validateValue: nameValidation });
  const instituteLocationInput = useInput({ validateValue: nameValidation });

  const startYearInput = useInput({ validateValue: yearValidation });
  const endYearInput = useInput({
    validateValue: (value) => endYearValidation(value, startYearInput.value),
  });
  const percentageInput = useInput({ validateValue: percentageValidation });

  const [educationLevel, setEducationLevel] = useState();
  const [degree, setDegree] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const isFormValid =
      educationLevel &&
      degree &&
      instituteNameInput.isValid &&
      instituteLocationInput.isValid &&
      startYearInput.isValid &&
      endYearInput.isValid &&
      percentageInput.isValid;
    setFormIsValid(isFormValid);
  }, [
    formIsValid,
    degree,
    educationLevel,
    instituteNameInput.isValid,
    instituteLocationInput.isValid,
    startYearInput.isValid,
    endYearInput.isValid,
    percentageInput.isValid,
  ]);

  const submitHandler = () => {
    const formData = {
      educationLevel,
      degree,
      instituteNameInput,
      instituteLocationInput,
      startYearInput,
      endYearInput,
      percentageInput,
    };
    if (formIsValid) {
      console.log(formData);
      console.log("Form submitted successfully!");
    } else {
      console.log("Form submission failed. Please check the fields.");
    }
  };

  const Line1 = (
    <div className={style.line1}>
      <Dropdown
        options={EducationLevelData}
        onSelect={(educationLevel) => setEducationLevel(educationLevel)}
        placeholder="Education Level"
        style={{ marginBottom: "21.6px", width: "100%" }}
        mandatory
      />
      <Dropdown
        options={DegreeData}
        onSelect={(level) => setDegree(level)}
        placeholder="Degree"
        style={{ marginBottom: "21.6px", width: "100%" }}
        mandatory
      />
    </div>
  );

  const Line2 = (
    <div className={style.line2}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Institute Name"}
        className={style.Input}
        inputFields={{
          placeholder: "Institute Name",
          value: instituteNameInput.value,
          isInvalid: instituteNameInput.hasError,
          onBlurHandler: instituteNameInput.validateValueHandler,
          onFocusHandler: instituteNameInput.focusHandler,
          onChange: instituteNameInput.valueChangeHandler,
          type: "text",
          isTouched: instituteNameInput.isFocused,
        }}
        mandatory="true"
      />
    </div>
  );
  const Line3 = (
    <div className={style.line3}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Institute Location"}
        className={style.Input}
        inputFields={{
          placeholder: "Institute Location",
          value: instituteLocationInput.value,
          isInvalid: instituteLocationInput.hasError,
          onBlurHandler: instituteLocationInput.validateValueHandler,
          onFocusHandler: instituteLocationInput.focusHandler,
          onChange: instituteLocationInput.valueChangeHandler,
          type: "text",
          isTouched: instituteLocationInput.isFocused,
        }}
        mandatory="true"
      />
    </div>
  );
  const Line4 = (
    <div className={style.line4}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Start year"}
        className={style.Input}
        inputFields={{
          placeholder: "Start year",
          value: startYearInput.value,
          isInvalid: startYearInput.hasError,
          onBlurHandler: startYearInput.validateValueHandler,
          onFocusHandler: startYearInput.focusHandler,
          onChange: startYearInput.valueChangeHandler,
          type: "number",
          isTouched: startYearInput.isFocused,
        }}
        mandatory="true"
      />
      <InputWithInvalidText
        ErrorMessage={"Invalid End year"}
        className={style.Input}
        inputFields={{
          placeholder: "End year",
          value: endYearInput.value,
          isInvalid: endYearInput.hasError,
          onBlurHandler: endYearInput.validateValueHandler,
          onFocusHandler: endYearInput.focusHandler,
          onChange: endYearInput.valueChangeHandler,
          type: "number",
          isTouched: endYearInput.isFocused,
        }}
        mandatory="true"
      />
    </div>
  );
  const Line5 = (
    <div className={style.line5}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Percentage/CGPA"}
        className={style.Input}
        inputFields={{
          placeholder: "Percentage/CGPA",
          value: percentageInput.value,
          isInvalid: percentageInput.hasError,
          onBlurHandler: percentageInput.validateValueHandler,
          onFocusHandler: percentageInput.focusHandler,
          onChange: percentageInput.valueChangeHandler,
          type: "text",
          isTouched: percentageInput.isFocused,
        }}
        mandatory="true"
      />
    </div>
  );

  return (
    <div className={style.form}>
      <p className={style.note}>
        Note : All <span className={style.important}>*</span> fields are
        Mandatory
      </p>
      <div className={style.formContainer}>
        {Line1}
        {Line2}
        {Line3}
        {Line4}
        {Line5}
      </div>
      <div className={style.submitButton}>
        <Button
          onClick={submitHandler}
          disabled={!formIsValid}
          style={{ backgroundColor: !formIsValid && "#ccc" }}
        >
          Save & Submit
        </Button>
      </div>
    </div>
  );
};

export default EducationalDetailsForm;
