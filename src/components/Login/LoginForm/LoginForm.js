import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useInput from "../../../hooks/use-Input";
import Message from "../../../UI/Popup/Message";
import CustomInput from "../../../UI/Input/Input";
import CustomCheckbox from "../../../UI/Checkbox/Checkbox";
import Button from "../../../UI/Button/Button";
import style from "./LoginForm.module.css";

const emailValidation = (value) =>
  typeof value === "string" && value.trim().length >= 3 && value.includes("@");

const passwordValidation = (value) =>
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(value);

const LoginForm = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [checkPassword, setCheckPassword] = useState(false);

  const handleErrorClose = () => setErrorMessage("");

  const navigate = useNavigate();

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    validateValueHandler: validateEmailHandler,
    focusHandler: emailFocusHandler,
    isFocused: emailIsFocused,
    reset: emailReset,
  } = useInput({ validateValue: emailValidation });

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordIsInvalid,
    valueChangeHandler: passwordChangeHandler,
    validateValueHandler: validatePasswordHandler,
    focusHandler: passwordFocusHandler,
    isFocused: passwordIsFocused,
    reset: passwordReset,
  } = useInput({ validateValue: passwordValidation });

  useEffect(() => {
    setFormIsValid(
      emailIsValid && passwordIsValid && termsAccepted && rememberMe
    );
  }, [emailIsValid, passwordIsValid, termsAccepted, rememberMe]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      console.log("Sign up Successful");
      console.log("login details", email, enteredPassword);
      emailReset();
      passwordReset();
      navigate("/");
    } else {
      setErrorMessage(
        "Please complete all fields and accept the terms and conditions."
      );
      console.log("Form has validation errors. Please fix them.");
    }
  };

  return (
    <div className={`${style.card} ${style.signIn}`}>
      {errorMessage && (
        <Message
          message={errorMessage}
          type="error"
          onClose={handleErrorClose}
        />
      )}
      <h1 className={style.title}>Login</h1>
      <div className={style.Club}>
        <CustomInput
          className={`${style.checkoutFormControl} ${
            emailIsInvalid && style.invalid
          }`}
          type="email"
          placeholder="Enter your Mail Address"
          value={email}
          onBlur={validateEmailHandler}
          onFocus={emailFocusHandler}
          onChange={emailChangeHandler}
        />
        {
          <p
            className={style.invalidText}
            style={{
              display: emailIsInvalid ? "block" : "none",
            }}
          >
            Invalid Email
          </p>
        }
      </div>
      <div className={style.Club} style={{ position: "relative" }}>
        <CustomInput
          className={`${style.checkoutFormControl} ${
            passwordIsInvalid && style.invalid
          }`}
          type={checkPassword ? "text" : "password"}
          placeholder="Enter your Password"
          value={enteredPassword}
          onBlur={validatePasswordHandler}
          onFocus={passwordFocusHandler}
          onChange={passwordChangeHandler}
        />
        <img
          src={require(`../../../assets/login-signup/${
            checkPassword ? "show.png" : "hide.png"
          }`)}
          alt=""
          className={style.checkPassword}
          onClick={() => setCheckPassword(!checkPassword)}
        />
        {passwordIsFocused && passwordIsInvalid && (
          <PasswordValidationBox enteredPassword={enteredPassword} />
        )}
      </div>
      <CheckboxSection
        setRememberMe={setRememberMe}
        setTermsAccepted={setTermsAccepted}
      />
      <Button
        className={
          formIsValid ? style.submitBtn : `${style.submitBtn} ${style.disabled}`
        }
        onClick={submitHandler}
      >
        Login
      </Button>
      <div className={style.line}>Don’t have an Account?</div>
      <Button onClick={() => {}} className={style.signUpBtn}>
        Sign-up
      </Button>
    </div>
  );
};

const PasswordValidationBox = ({ enteredPassword }) => (
  <div className={style.passwordValidationContainer}>
    {[
      {
        condition: enteredPassword.length >= 8,
        message: "Password must be 8 Characters long",
      },
      {
        condition: /[A-Z]/.test(enteredPassword),
        message: "Should contain at least one Capital letter",
      },
      {
        condition: /[!@#$%^&*(),.?":{}|<>]/.test(enteredPassword),
        message: "Should contain one Special character",
      },
      {
        condition: /\d/.test(enteredPassword),
        message: "Should contain one Numeric digit",
      },
    ].map((item, index) => (
      <div key={index} className={style.passwordValidation}>
        <ValidatePasswordFunction validate={item.condition} />
        <p>{item.message}</p>
      </div>
    ))}
  </div>
);

const CheckboxSection = ({ setRememberMe, setTermsAccepted }) => (
  <div className={style.checkBoxes}>
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div className={style.checkboxContainer}>
        <CustomCheckbox
          id="rememberMe"
          onChange={() => setRememberMe((prevState) => !prevState)}
        />
        <label htmlFor="rememberMe">Remember Me</label>
      </div>
      <div className={style.forgotPasswordLink}>
        <NavLink to="">Forgot password?</NavLink>
      </div>
    </div>
    <div className={style.checkboxContainer} style={{ width: "100%" }}>
      <CustomCheckbox
        id="termsAccepted"
        onChange={() => setTermsAccepted((prevState) => !prevState)}
      />
      <label htmlFor="termsAccepted">
        I, agree to all the{" "}
        <NavLink
          to="#"
          style={{
            fontSize: "0.7rem",
            textDecoration: "none",
            color: "#ff6501",
          }}
        >
          Terms and Conditions
        </NavLink>{" "}
        and{" "}
        <NavLink
          to="#"
          style={{
            fontSize: "0.7rem",
            textDecoration: "none",
            color: "#ff6501",
          }}
        >
          Privacy Policy
        </NavLink>{" "}
      </label>
    </div>
  </div>
);

const ValidatePasswordFunction = ({ validate }) => (
  <img
    src={require(`../../../assets/login-signup/${
      validate ? "correct.png" : "wrong.png"
    }`)}
    alt=""
  />
);

export default LoginForm;
