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
import { DegreeData, EducationLevelData } from "../../../../data/EducationData";
import useHttpsAxios from "../../../../hooks/use-httpsAxios";
import { url } from "../../../../constants";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const EducationalDetailsForm = () => {
  const instituteNameInput = useInput({ validateValue: nameValidation });
  const instituteLocationInput = useInput({ validateValue: nameValidation });

  const startYearInput = useInput({ validateValue: yearValidation });
  const endYearInput = useInput({
    validateValue: (value) => endYearValidation(value, startYearInput.value),
  });
  const percentageInput = useInput({ validateValue: percentageValidation });

  const educationLevelInput = useInput({ validateValue: nameValidation });
  const degreeInput = useInput({ validateValue: nameValidation });

  const [educationLevel, setEducationLevel] = useState();
  const [degree, setDegree] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  const userId = useSelector((state) => state.login.userId);

  useEffect(() => {
    const dropdownIsValid =
      (educationLevel?.value !== "other" &&
        degree?.value !== undefined &&
        degree?.value !== "other") ||
      (educationLevel?.value === "other" &&
        educationLevelInput.isValid &&
        degreeInput.isValid) ||
      (educationLevel?.value !== "other" &&
        degree?.value !== undefined &&
        degree?.value === "other" &&
        degreeInput.isValid);

    const isFormValid =
      instituteNameInput.isValid &&
      instituteLocationInput.isValid &&
      startYearInput.isValid &&
      endYearInput.isValid &&
      percentageInput.isValid &&
      dropdownIsValid;
    setFormIsValid(isFormValid);
  }, [
    educationLevelInput,
    degreeInput,
    formIsValid,
    degree,
    educationLevel,
    instituteNameInput.isValid,
    instituteLocationInput.isValid,
    startYearInput.isValid,
    endYearInput.isValid,
    percentageInput.isValid,
  ]);

  const navigate = useNavigate();

  const { sendRequest, responseData, error, isLoading, statusCode } =
    useHttpsAxios();

  useEffect(() => {
    if (formIsValid && (statusCode === 200 || statusCode === 201)) {
      console.log(responseData);

      // navigate("/mandatoryCertificates");
    } else if (statusCode < 0 && statusCode > 202) {
      console.log(error);
      console.log(responseData);
    }
  });

  const submitHandler = () => {
    const educationLevelFinal =
      educationLevel?.value !== "other"
        ? educationLevel.value
        : educationLevelInput.value;
    const degreeFinal =
      degree?.value === "other" || educationLevel?.value === "other"
        ? degreeInput.value
        : degree.value;

    const formData = {
      educationLevelFinal,
      degreeFinal,
      instituteNameInput,
      instituteLocationInput,
      startYearInput,
      endYearInput,
      percentageInput,
    };
    if (formIsValid) {
      // console.log(formData);
      console.log("Form submitted successfully!");
      sendRequest({
        url: `${url.backendBaseUrl}/education-details/create-education-details/${userId}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      });
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
      {educationLevel?.value === "other" && (
        <InputWithInvalidText
          ErrorMessage={"Invalid Educations Level"}
          className={style.Input}
          inputFields={{
            placeholder: "Education Level",
            value: educationLevelInput.value,
            isInvalid: educationLevelInput.hasError,
            onBlurHandler: educationLevelInput.validateValueHandler,
            onFocusHandler: educationLevelInput.focusHandler,
            onChange: educationLevelInput.valueChangeHandler,
            type: "text",
            isTouched: educationLevelInput.isFocused,
          }}
          mandatory="true"
        />
      )}
      {educationLevel?.value !== "other" && (
        <Dropdown
          options={
            educationLevel
              ? DegreeData[educationLevel?.value]
              : [{ label: "Other", value: "other" }]
          }
          onSelect={(level) => setDegree(level)}
          placeholder="Degree"
          style={{ marginBottom: "21.6px", width: "100%" }}
          mandatory
        />
      )}
      {(educationLevel?.value === "other" || degree?.value === "other") && (
        <InputWithInvalidText
          ErrorMessage={"Invalid Degree"}
          className={style.Input}
          inputFields={{
            placeholder: "Degree",
            value: degreeInput.value,
            isInvalid: degreeInput.hasError,
            onBlurHandler: degreeInput.validateValueHandler,
            onFocusHandler: degreeInput.focusHandler,
            onChange: degreeInput.valueChangeHandler,
            type: "text",
            isTouched: degreeInput.isFocused,
          }}
          mandatory="true"
        />
      )}
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
