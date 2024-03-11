import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useInput from "../../../hooks/use-Input";
import Message from "../../../UI/Popup/Message";
import CustomCheckbox from "../../../UI/Checkbox/Checkbox";
import Button from "../../../UI/Button/Button";
import style from "./LoginForm.module.css";
import InputWithInvalidText from "../../../UI/Input/InputWithInvalidText";
import {
  emailValidation,
  passwordValidation,
} from "../../InputValidations/InputValidations";
import PasswordValidationBox from "../PasswordValidationBox/PasswordValidationBox";
import useHttps from "../../../hooks/use-https";
import { url } from "../../../constants";
import useHttpsAxios from "../../../hooks/use-httpsAxios";

const LoginForm = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleErrorClose = () => setErrorMessage("");

  const navigate = useNavigate();

  const emailInput = useInput({ validateValue: emailValidation });
  const passwordInput = useInput({ validateValue: passwordValidation });

  useEffect(() => {
    setFormIsValid(
      emailInput.isValid && passwordInput.isValid && termsAccepted && rememberMe
    );
  }, [emailInput.isValid, passwordInput.isValid, termsAccepted, rememberMe]);

  const { sendRequest, isLoading, error, statusCode } = useHttpsAxios();
  const [user, setUser] = useState();

  const fetchData = (response) => {
    console.log("response", response);
    setUser(response);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      // console.log("Sign up Successful");
      // console.log("login details", emailInput.value, passwordInput.value);
      sendRequest(
        {
          url: `${url.backendBaseUrl}/vrpi-user/login`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            email: emailInput.value,
            password: passwordInput.value,
          },
        },
        fetchData
      );

      if (statusCode === 200) {
        console.log(user);
      } else {
        if (error) {
          console.log(error.response.data.statusMessage);
          setErrorMessage(error.response.data.statusMessage);
        }
      }

      // emailInput.reset();
      // passwordInput.reset();
      // navigate("/");
    } else {
      setErrorMessage(
        "Please complete all fields and accept the terms and conditions."
      );
      console.log("Form has validation errors. Please fix them.");
    }
  };

  const PasswordComponent = (
    <div className={style.Club} style={{ position: "relative" }}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Password"}
        className={`${style.Input} `}
        inputFields={{
          placeholder: "Enter your Password",
          value: passwordInput.value,
          isInvalid: passwordInput.hasError,
          onBlurHandler: passwordInput.validateValueHandler,
          onFocusHandler: passwordInput.focusHandler,
          onChange: passwordInput.valueChangeHandler,
          type: "password",
          isTouched: passwordInput.isFocused,
        }}
        // mandatory="true"
      />
      {passwordInput.isFocused && passwordInput.hasError && (
        <PasswordValidationBox enteredPassword={passwordInput.value} />
      )}
    </div>
  );

  const EmailComponent = (
    <InputWithInvalidText
      ErrorMessage={"Invalid Email"}
      className={`${style.Input} `}
      inputFields={{
        placeholder: "Enter your Username",
        value: emailInput.value,
        isInvalid: emailInput.hasError,
        onBlurHandler: emailInput.validateValueHandler,
        onFocusHandler: emailInput.focusHandler,
        onChange: emailInput.valueChangeHandler,
        type: "email",
        isTouched: emailInput.isFocused,
      }}
      // mandatory="true"
    />
  );

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
      <div style={{ width: "100%" }}>
        {EmailComponent}
        {PasswordComponent}
      </div>

      <CheckboxSection
        setRememberMe={setRememberMe}
        setTermsAccepted={setTermsAccepted}
      />
      <Button
        className={formIsValid ? style.submitBtn : `${style.disabled}`}
        disabled={!formIsValid}
        // style={{ backgroundColor: !formIsValid && "#ccc" }}
        onClick={submitHandler}
      >
        {isLoading ? "loading..." : "Login"}
      </Button>
      <div className={style.line}>
        <div className={style.lineOn}></div>
        <span className={style.or}>Don’t have an Account?</span>
      </div>
      <Button
        onClick={() => {
          navigate("/signup");
        }}
        className={style.signUpBtn}
      >
        Sign-up
      </Button>
    </div>
  );
};

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
        <NavLink to="/forgetPassword">Forgot password?</NavLink>
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
        </NavLink>
      </label>
    </div>
  </div>
);

export default LoginForm;
