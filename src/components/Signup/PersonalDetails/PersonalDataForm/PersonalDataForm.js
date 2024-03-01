import useInput from "../../../../hooks/use-Input";
import { nameValidation } from "./InputValidations";
// import InputWithInvalidText from "./InputWithInvalidText";
import style from "./PersonalDataForm.module.css";
import Dropdown from "../../../../UI/Dropdown/Dropdown";
import { useEffect, useState } from "react";
import CustomDropDown from "../../../../UI/CustomDropDown/CustomDropDown";
import CustomInput from "../../../../UI/Input/Input";
import InputWithInvalidText from "./InputWithInvalidText";
import Button from "../../../../UI/Button/Button";

// import CustomDropDown from "../../../../UI/CustomDropDown/CustomDropDown";
const Genders = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
  { value: "others", label: "Others" },
];

const PersonalDataForm = () => {
  const firstNameInput = useInput({ validateValue: nameValidation });
  const lastNameInput = useInput({ validateValue: nameValidation });

  const fatherNameInput = useInput({ validateValue: nameValidation });
  const mobileNumberInput = useInput({ validateValue: nameValidation });
  const DOBInput = useInput({ validateValue: nameValidation });

  const permanentInput = useInput({ validateValue: nameValidation });

  const emailInput = useInput({ validateValue: nameValidation });
  const passwordInput = useInput({ validateValue: nameValidation });
  const confirmPasswordInput = useInput({ validateValue: nameValidation });
  const aadhaarInput = useInput({ validateValue: nameValidation });

  const [gender, setGender] = useState();

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
      {/* {console.log("gender", gender)}
          <CustomDropDown
            options={Genders}
            onSelect={(gender) => setGender(gender)}
            placeholder="Gender"
          /> */}

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
    <div>
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
      </div>
      <Button onClick={() => {}}>Save & Submit</Button>
    </div>
  );
};

export default PersonalDataForm;
