import useInput from "../../../../hooks/use-Input";
import {
  nameValidation,
  mobileNumberValidation,
  emailValidation,
  aadhaarValidation,
  passwordValidation,
  confirmPasswordValidation,
  addressValidation,
  DOBValidation,
} from "../../../InputValidations/InputValidations";
import style from "./PersonalDataForm.module.css";
import Dropdown from "../../../../UI/Dropdown/Dropdown";
import { useEffect, useState } from "react";
import InputWithInvalidText from "../../../../UI/Input/InputWithInvalidText";
import Button from "../../../../UI/Button/Button";
import CustomFileUploader from "../../../../UI/FileUploader/FileUploader";
import CustomDatePicker from "../../../../UI/DatePIcker/DatePIcker";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../store/UserSlice";

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

const PersonalDataForm = ({ role }) => {
  const firstNameInput = useInput({ validateValue: nameValidation });
  const lastNameInput = useInput({ validateValue: nameValidation });

  const fatherNameInput = useInput({ validateValue: nameValidation });
  const mobileNumberInput = useInput({ validateValue: mobileNumberValidation });
  // const DOBInput = useInput({ validateValue: nameValidation });

  const [DOB, setDOB] = useState(Date);

  const permanentInput = useInput({ validateValue: addressValidation });

  const emailInput = useInput({ validateValue: emailValidation });
  const passwordInput = useInput({ validateValue: passwordValidation });
  const confirmPasswordInput = useInput({
    validateValue: (value) =>
      confirmPasswordValidation(value, passwordInput.value),
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

  const dispatch = useDispatch();

  useEffect(() => {
    let isFormValid = false;
    if (role === "student") {
      isFormValid =
        firstNameInput.isValid &&
        lastNameInput.isValid &&
        fatherNameInput.isValid &&
        mobileNumberInput.isValid &&
        DOBValidation(DOB) &&
        permanentInput.isValid &&
        emailInput.isValid &&
        passwordInput.isValid &&
        confirmPasswordInput.isValid &&
        aadhaarInput.isValid &&
        gender &&
        occupation;
    } else if (role === "client") {
      isFormValid =
        firstNameInput.isValid &&
        lastNameInput.isValid &&
        mobileNumberInput.isValid &&
        emailInput.isValid &&
        passwordInput.isValid &&
        confirmPasswordInput.isValid &&
        gender;
    }

    setFormIsValid(isFormValid);
  }, [
    occupation,
    gender,
    role,
    formIsValid,
    firstNameInput.isValid,
    lastNameInput.isValid,
    fatherNameInput.isValid,
    mobileNumberInput.isValid,
    permanentInput.isValid,
    emailInput.isValid,
    passwordInput.isValid,
    confirmPasswordInput.isValid,
    aadhaarInput.isValid,
    DOB,
  ]);

  const handleSubmit = () => {
    if (formIsValid) {
      if (role === "student") {
        const formData = {
          firstName: firstNameInput.value,
          lastName: lastNameInput.value,
          fatherName: fatherNameInput.value,
          mobileNumber: mobileNumberInput.value,
          gender,
          DOB: DOB,
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
      } else if (role === "client") {
        const formData = {
          firstName: firstNameInput.value,
          lastName: lastNameInput.value,
          mobileNumber: mobileNumberInput.value,
          gender,
          email: emailInput.value,
          password: passwordInput.value,
          confirmPassword: confirmPasswordInput.value,
        };
        console.log(formData);
      }
      dispatch(setUser({ role: role, step: 2 }));
    } else {
      alert("invalid fields");
    }
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
          isTouched: firstNameInput.isFocused,
        }}
        mandatory="true"
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
          isTouched: lastNameInput.isFocused,
        }}
        mandatory="true"
      />
    </div>
  );

  const Line2 = (
    <div className={style.line2}>
      {role === "student" && (
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
            isTouched: fatherNameInput.isFocused,
          }}
          mandatory="true"
        />
      )}
      <Dropdown
        options={Genders}
        onSelect={(gender) => setGender(gender)}
        placeholder="Gender"
        style={{ marginBottom: "21.6px", width: "100%" }}
        mandatory
      />
      <InputWithInvalidText
        ErrorMessage={"Invalid Mobile Number"}
        className={`${style.Input} `}
        inputFields={{
          placeholder: "Mobile Number",
          value: mobileNumberInput.value,
          isInvalid: mobileNumberInput.hasError,
          onBlurHandler: mobileNumberInput.validateValueHandler,
          onFocusHandler: mobileNumberInput.focusHandler,
          onChange: mobileNumberInput.valueChangeHandler,
          type: "text",
          isTouched: mobileNumberInput.isFocused,
        }}
        mandatory="true"
      />
    </div>
  );

  const Line3 = (
    <>
      {role === "student" && (
        <div className={style.line3}>
          <CustomDatePicker
            selectedDate={DOB}
            onChange={(date) => setDOB(date)}
            className={`${style.Input} ${style.date}`}
            placeholderText="Date of Birth *"
          />
        </div>
      )}
    </>
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
          isTouched: permanentInput.isFocused,
        }}
        mandatory="true"
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
          isTouched: emailInput.isFocused,
        }}
        mandatory="true"
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
          isTouched: passwordInput.isFocused,
        }}
        mandatory="true"
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
          isTouched: confirmPasswordInput.isFocused,
        }}
        mandatory="true"
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
        mandatory
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
          isTouched: aadhaarInput.isFocused,
        }}
      />
    </div>
  );

  const Line7 = (
    <div className={style.line7}>
      <div>
        <CustomFileUploader
          onChange={handleAadhaarCardChange}
          buttonText="Upload Aadhaar Card(Front)"
          acceptedFileType={["image/jpeg", "image/png", "image/pdf"]}
        />
        <ul>
          {/* <li>Should contain Front & Back</li> */}
          <li>Can be png. pdf. jpeg</li>
          <li>File size should be 5MB</li>
        </ul>
      </div>
      <div>
        <CustomFileUploader
          onChange={handleAadhaarCardChange}
          buttonText="Upload Aadhaar Card(Back)"
          acceptedFileType={["image/jpeg", "image/png", "image/pdf"]}
        />
        <ul>
          {/* <li>Should contain Front & Back</li> */}
          <li>Can be png. pdf. jpeg</li>
          <li>File size should be 5MB</li>
        </ul>
      </div>
    </div>
  );

  const Line8 = (
    <div className={style.line8}>
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
        {role === "student" && Line6}
        {role === "student" && Line7}
        {role === "student" && Line8}
      </div>
      <div className={style.buttonContainer}>
        <Button
          onClick={handleSubmit}
          className={style.submitBtn}
          disabled={!formIsValid}
          style={{ backgroundColor: !formIsValid && "#ccc" }}
        >
          Save & Submit
        </Button>
      </div>
    </div>
  );
};

export default PersonalDataForm;
