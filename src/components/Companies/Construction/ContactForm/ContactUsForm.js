import React from "react";
import useInput from "../../../../hooks/use-Input";
import CustomInput from "../../../../UI/Input/Input";
import style from "./ContactUs.module.css";
import Button from "../../../../UI/Button/Button";

const validateName = (input) => {
  return input.length >= 3;
};
const validateMobile = (input) => {
  return input.length === 10;
};
const validateDescription = (input) => {
  return input.length >= 10;
};

const ContactUsForm = () => {
  const nameInput = useInput({
    initialValue: "",
    validateValue: validateName,
  });
  const mobileInput = useInput({
    initialValue: "",
    validateValue: validateMobile,
  });
  const descriptionInput = useInput({
    initialValue: "",
    validateValue: validateDescription,
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
      console.log("Please fill out all fields correctly");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.Form}>
      {/* <div className={style.form_input}> */}
      {/* <label htmlFor="name">Name</label> */}
      <CustomInput
        id="name"
        placeholder="Name"
        value={nameInput.value}
        onChange={nameInput.valueChangeHandler}
        // isInvalid={nameInput.hasError}
        onBlur={nameInput.validateValueHandler}
        onFocus={nameInput.focusHandler}
      />
      {/* </div> */}
      {/* <div className={style.form_input}> */}
      {/* <label htmlFor="mobile">Mobile</label> */}
      <CustomInput
        id="mobile"
        placeholder="Mobile number"
        value={mobileInput.value}
        onChange={mobileInput.valueChangeHandler}
        isInvalid={!mobileInput.isValid}
        onBlur={mobileInput.validateValueHandler}
        onFocus={mobileInput.focusHandler}
      />
      {/* </div> */}
      {/* <div className={style.form_input}> */}
      {/* <label htmlFor="description">Description</label> */}
      <CustomInput
        id="description"
        placeholder="Description"
        value={descriptionInput.value}
        onChange={descriptionInput.valueChangeHandler}
        isInvalid={!descriptionInput.isValid}
        onBlur={descriptionInput.validateValueHandler}
        onFocus={descriptionInput.focusHandler}
      />
      {/* </div> */}
      <Button type="submit" className={style.submitBtn}>
        Contact Us
      </Button>
    </form>
  );
};

export default ContactUsForm;
