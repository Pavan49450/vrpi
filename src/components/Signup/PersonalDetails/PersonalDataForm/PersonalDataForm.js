import useInput from "../../../../hooks/use-Input";
import {
  nameValidation,
  mobileNumberValidation,
  emailValidation,
  aadhaarValidation,
  passwordValidation,
  confirmPasswordValidation,
  addressValidation,
} from "./InputValidations";
// import InputWithInvalidText from "./InputWithInvalidText";
import style from "./PersonalDataForm.module.css";
import Dropdown from "../../../../UI/Dropdown/Dropdown";
import { useEffect, useState } from "react";
import CustomDropDown from "../../../../UI/CustomDropDown/CustomDropDown";
import CustomInput from "../../../../UI/Input/Input";
import InputWithInvalidText from "./InputWithInvalidText";
import Button from "../../../../UI/Button/Button";
import CustomFileUploader from "../../../../UI/FileUploader/FileUploader";

// import CustomDropDown from "../../../../UI/CustomDropDown/CustomDropDown";
const Genders = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
  { value: "others", label: "Others" },
];

const Occupations = [
  { value: "student", label: "Student" },
  { value: "working professional", label: "Working Professional" },
  { value: "entrepreneur", label: "Entrepreneur" },
];

const PersonalDataForm = () => {
  const firstNameInput = useInput({ validateValue: nameValidation });
  const lastNameInput = useInput({ validateValue: nameValidation });

  const fatherNameInput = useInput({ validateValue: nameValidation });
  const mobileNumberInput = useInput({ validateValue: mobileNumberValidation });
  const DOBInput = useInput({ validateValue: nameValidation });

  const permanentInput = useInput({ validateValue: addressValidation });

  const emailInput = useInput({ validateValue: emailValidation });
  const passwordInput = useInput({ validateValue: passwordValidation });
  const confirmPasswordInput = useInput({
    validateValue: confirmPasswordValidation,
  });
  const aadhaarInput = useInput({ validateValue: aadhaarValidation });

  const [gender, setGender] = useState();
  const [occupation, setOccupation] = useState();

  const [aadhaarCardFile, setAadhaarCardFile] = useState(null);
  const [passportFile, setPassportFile] = useState(null);

  const [formIsValid, setFormIsValid] = useState(false);

  const handleAadhaarCardChange = (file) => {
    setAadhaarCardFile(file);
  };

  const handlePassportChange = (file) => {
    setPassportFile(file);
  };

  useEffect(() => {
    // Check if all input fields are valid
    const isFormValid =
      firstNameInput.isValid &&
      lastNameInput.isValid &&
      fatherNameInput.isValid &&
      mobileNumberInput.isValid &&
      DOBInput.isValid &&
      permanentInput.isValid &&
      emailInput.isValid &&
      passwordInput.isValid &&
      confirmPasswordInput.isValid &&
      aadhaarInput.isValid;

    // Update formIsValid state
    setFormIsValid(isFormValid);
  }, [
    firstNameInput.isValid,
    lastNameInput.isValid,
    fatherNameInput.isValid,
    mobileNumberInput.isValid,
    DOBInput.isValid,
    permanentInput.isValid,
    emailInput.isValid,
    passwordInput.isValid,
    confirmPasswordInput.isValid,
    aadhaarInput.isValid,
  ]);

  const handleSubmit = () => {
    // Perform validation or other actions here
    const formData = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      fatherName: fatherNameInput.value,
      mobileNumber: mobileNumberInput.value,
      gender,
      DOB: DOBInput.value,
      permanentAddress: permanentInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      confirmPassword: confirmPasswordInput.value,
      occupation,
      aadhaarNumber: aadhaarInput.value,
      aadhaarCardFile,
      passportFile,
    };
    console.log(formData);
  };
  const Line1 = (
    <div className={style.line1}>
      <InputWithInvalidText
        ErrorMessage={"Invalid First Name"}
        className={style.Input}
        inputFields={{
          placeholder: "First Name",
          value: firstNameInput.value,
          isInvalid: firstNameInput.hasError,
          onBlurHandler: firstNameInput.validateValueHandler,
          onFocusHandler: firstNameInput.focusHandler,
          onChange: firstNameInput.valueChangeHandler,
          type: "text",
        }}
      />
      <InputWithInvalidText
        ErrorMessage={"Invalid Last Name"}
        className={style.Input}
        inputFields={{
          placeholder: "Last Name",
          value: lastNameInput.value,
          isInvalid: lastNameInput.hasError,
          onBlurHandler: lastNameInput.validateValueHandler,
          onFocusHandler: lastNameInput.focusHandler,
          onChange: lastNameInput.valueChangeHandler,
          type: "text",
        }}
      />
    </div>
  );

  const Line2 = (
    <div className={style.line2}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Father's Name"}
        className={style.Input}
        inputFields={{
          placeholder: "Father's Name",
          value: fatherNameInput.value,
          isInvalid: fatherNameInput.hasError,
          onBlurHandler: fatherNameInput.validateValueHandler,
          onFocusHandler: fatherNameInput.focusHandler,
          onChange: fatherNameInput.valueChangeHandler,
          type: "text",
        }}
      />
      {console.log("gender", gender)}
      <Dropdown
        options={Genders}
        onSelect={(gender) => setGender(gender)}
        placeholder="Gender"
        style={{ marginBottom: "21.6px" }}
      />

      <InputWithInvalidText
        ErrorMessage={"Invalid Last Name"}
        className={style.Input}
        inputFields={{
          placeholder: "Last Name",
          value: DOBInput.value,
          isInvalid: DOBInput.hasError,
          onBlurHandler: DOBInput.validateValueHandler,
          onFocusHandler: DOBInput.focusHandler,
          onChange: DOBInput.valueChangeHandler,
          type: "date",
        }}
      />
    </div>
  );

  const Line3 = (
    <div className={style.line3}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Last Name"}
        className={`${style.Input} ${style.date}`}
        inputFields={{
          placeholder: "Mobile Number",
          value: mobileNumberInput.value,
          isInvalid: mobileNumberInput.hasError,
          onBlurHandler: mobileNumberInput.validateValueHandler,
          onFocusHandler: mobileNumberInput.focusHandler,
          onChange: mobileNumberInput.valueChangeHandler,
          type: "text",
        }}
      />
    </div>
  );

  const Line4 = (
    <div>
      <InputWithInvalidText
        ErrorMessage={"Invalid Permanent Address"}
        className={`${style.Input}`}
        inputFields={{
          placeholder: "Permanent Address",
          value: permanentInput.value,
          isInvalid: permanentInput.hasError,
          onBlurHandler: permanentInput.validateValueHandler,
          onFocusHandler: permanentInput.focusHandler,
          onChange: permanentInput.valueChangeHandler,
          type: "text",
        }}
      />
    </div>
  );

  const Line5 = (
    <div className={style.line4}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Email"}
        className={`${style.Input} `}
        inputFields={{
          placeholder: "Mail-ID",
          value: emailInput.value,
          isInvalid: emailInput.hasError,
          onBlurHandler: emailInput.validateValueHandler,
          onFocusHandler: emailInput.focusHandler,
          onChange: emailInput.valueChangeHandler,
          type: "email",
        }}
      />
      <InputWithInvalidText
        ErrorMessage={"Invalid Password"}
        className={`${style.Input} `}
        inputFields={{
          placeholder: "Password",
          value: passwordInput.value,
          isInvalid: passwordInput.hasError,
          onBlurHandler: passwordInput.validateValueHandler,
          onFocusHandler: passwordInput.focusHandler,
          onChange: passwordInput.valueChangeHandler,
          type: "password",
        }}
      />
      <InputWithInvalidText
        ErrorMessage={"Invalid Confirm Password"}
        className={`${style.Input} `}
        inputFields={{
          placeholder: "Confirm Password",
          value: confirmPasswordInput.value,
          isInvalid: confirmPasswordInput.hasError,
          onBlurHandler: confirmPasswordInput.validateValueHandler,
          onFocusHandler: confirmPasswordInput.focusHandler,
          onChange: confirmPasswordInput.valueChangeHandler,
          type: "password",
        }}
      />
    </div>
  );

  const Line6 = (
    <div className={style.line6}>
      <Dropdown
        options={Occupations}
        onSelect={(selectedOccupation) => setOccupation(selectedOccupation)}
        placeholder="Occupation"
        style={{ marginBottom: "21.6px" }}
      />
      <InputWithInvalidText
        ErrorMessage={"Invalid Aadhaar Card Number"}
        className={`${style.Input} `}
        inputFields={{
          placeholder: "Aadhaar Card Number",
          value: aadhaarInput.value,
          isInvalid: aadhaarInput.hasError,
          onBlurHandler: aadhaarInput.validateValueHandler,
          onFocusHandler: aadhaarInput.focusHandler,
          onChange: aadhaarInput.valueChangeHandler,
          type: "text",
        }}
      />
    </div>
  );

  const Line7 = (
    <div className={style.line7}>
      <div>
        <CustomFileUploader
          onChange={handleAadhaarCardChange}
          buttonText="Upload Aadhaar Card"
          acceptedFileType={["image/jpeg", "image/png", "image/pdf"]}
        />
        <ul>
          <li>Should contain Front & Back</li>
          <li>Can be png. pdf. jpeg</li>
          <li>File size should be 5MB</li>
        </ul>
      </div>
      <div>
        <CustomFileUploader
          onChange={handlePassportChange}
          buttonText="Upload Passport"
          acceptedFileType={["image/jpeg", "image/png"]}
        />
        <ul>
          <li>Can be png. pdf. jpeg</li>
          <li>File size must should be 5MB</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className={style.form}>
      <p className={style.note}>
        Note : All <span className={style.important}>*</span> fields are
        Mandatory
      </p>
      <div className={style.formFields}>
        {Line1}
        {Line2}
        {Line3}
        {Line4}
        {Line5}
        {Line6}
        {Line7}
      </div>
      <div className={style.buttonContainer}>
        <Button
          onClick={handleSubmit}
          className={style.submitBtn}
          disabled={formIsValid}
        >
          Save & Submit
        </Button>
      </div>
    </div>
  );
};

export default PersonalDataForm;
