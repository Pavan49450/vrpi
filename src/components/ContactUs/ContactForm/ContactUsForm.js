import React, { useEffect, useState } from "react";
import style from "./ContactUs.module.css";
import useInput from "../../../hooks/use-Input";
import CustomInput from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import Message from "../../../UI/Popup/Message";
import InputWithInvalidText from "../../../UI/Input/InputWithInvalidText";
import {
  emailValidation,
  mobileNumberValidation,
  nameValidation,
} from "../../InputValidations/InputValidations";

const validateName = (input) => {
  return input.length >= 3;
};
// Validate mobile number: Exactly 10 digits and starts with a valid country code
const validateMobile = (input) => {
  // Check if input is not empty and contains only digits
  if (!input || !/^\d+$/.test(input)) {
    return false;
  }

  // Check if input length is between 10 and 15 characters
  if (input.length < 10 || input.length > 15) {
    return false;
  }

  // Additional validation logic can be added here,
  // such as checking specific patterns or prefixes for mobile numbers

  // Return true if all validation passes
  return true;
};

const validateDescription = (input) => {
  return input.length >= 10;
};
const validateEmail = (input) => {
  // Regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the regular expression
  if (!emailRegex.test(input)) {
    return false; // Email format is incorrect
  }

  // Check if the email length is at least 8 characters
  if (input.length < 8) {
    return false; // Email is too short
  }

  // Check if the email contains only one "@" symbol
  if ((input.match(/@/g) || []).length !== 1) {
    return false; // Email contains multiple "@" symbols
  }

  // Additional validations can be added here, such as checking the domain part and TLD

  return true; // Email is valid
};

const ContactUsForm = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const closeErrMessageHandler = () => {
    setErrorMessage("");
  };

  useEffect(() => {
    console.log("Err->", errorMessage);
  });

  const nameInput = useInput({
    initialValue: "",
    validateValue: nameValidation,
  });
  const emailInput = useInput({
    initialValue: "",
    validateValue: emailValidation,
  });
  const mobileInput = useInput({
    initialValue: "",
    validateValue: mobileNumberValidation,
  });
  const descriptionInput = useInput({
    initialValue: "",
    validateValue: nameValidation,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameInput.isValid && mobileInput.isValid && descriptionInput.isValid) {
      console.log("Form submitted successfully");
      console.log(
        "Info->",
        nameInput.value,
        mobileInput.value,
        descriptionInput.value
      );
      nameInput.reset();
      mobileInput.reset();
      descriptionInput.reset();
    } else {
      setErrorMessage("Please fill out all fields correctly");
      console.log("Please fill out all fields correctly");
    }
  };

  return (
    <div className={style.form}>
      <img src={require(`../../../assets/contactUs1.png`)} alt="" />
      <form onSubmit={handleSubmit} className={style.Form}>
        {/* <div className={style.form_input}> */}
        {/* <label htmlFor="name">Name</label> */}
        {console.log(nameInput.hasError)}
        <InputWithInvalidText
          ErrorMessage={"Invalid Name"}
          className={`${style.Input} `}
          inputFields={{
            placeholder: "Enter your full name",
            value: nameInput.value,
            isInvalid: nameInput.hasError,
            onBlurHandler: nameInput.validateValueHandler,
            onFocusHandler: nameInput.focusHandler,
            onChange: nameInput.valueChangeHandler,
            type: "text",
            isTouched: nameInput.isFocused,
          }}
          mandatory="true"
        />
        <InputWithInvalidText
          ErrorMessage={"Invalid Email"}
          className={`${style.Input} `}
          inputFields={{
            placeholder: "Enter email address",
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
        {/* </div> */}
        {/* <div className={style.form_input}> */}
        {/* <label htmlFor="mobile">Mobile</label> */}
        <InputWithInvalidText
          ErrorMessage={"Invalid Mobile number"}
          className={`${style.Input} `}
          inputFields={{
            placeholder: "Enter your Mobile Number",
            value: mobileInput.value,
            isInvalid: mobileInput.hasError,
            onBlurHandler: mobileInput.validateValueHandler,
            onFocusHandler: mobileInput.focusHandler,
            onChange: mobileInput.valueChangeHandler,
            type: "text",
            isTouched: mobileInput.isFocused,
          }}
          mandatory="true"
        />
        {/* </div> */}
        {/* <div className={style.form_input}> */}
        {/* <label htmlFor="description">Description</label> */}
        <textarea
          id="description"
          placeholder="Description"
          value={descriptionInput.value}
          onChange={descriptionInput.valueChangeHandler}
          onBlur={descriptionInput.validateValueHandler}
          onFocus={descriptionInput.focusHandler}
          className={`${style.description}${
            descriptionInput.hasError ? ` ${style.descriptionInvalid}` : ""
          }`}
        />
        <Button type="submit" className={style.submitBtn}>
          Contact Us
        </Button>
        {errorMessage && (
          <Message
            message={errorMessage}
            type="error"
            onClose={closeErrMessageHandler}
          />
        )}
      </form>
    </div>
  );
};

export default ContactUsForm;
