import { useEffect, useState } from "react";
import style from "./LoginForm.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import useInput from "../../../hooks/use-Input";
import Message from "../../../UI/Popup/Message";
import CustomInput from "../../../UI/Input/Input";
import CustomCheckbox from "../../../UI/Checkbox/Checkbox";
import Button from "../../../UI/Button/Button";

const emailValidation = (value) => {
  if (typeof value !== "string") {
    return false;
  }
  return value.trim().length >= 3 && value.includes("@");
};

const passwordValidation = (value) => {
  if (typeof value !== "string") {
    return false;
  }
  return value.trim().length >= 8;
};

export default function LoginForm() {
  const [formIsValid, setFormIsValid] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [checkPassword, setCheckPassword] = useState(false);

  const handleErrorClose = () => {
    setErrorMessage("");
  };

  const navigate = useNavigate();

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    validateValueHandler: validateEmailHandler,
    focusHandler: emailFocusHandler,
    // isFocused: emailIsFocused,
    reset: emailReset,
  } = useInput({ validateValue: emailValidation });

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordIsInvalid,
    valueChangeHandler: passwordChangeHandler,
    validateValueHandler: validatePasswordHandler,
    focusHandler: passwordFocusHandler,
    // isFocused: passwordIsFocused,
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
      // You can proceed with form submission or any further action here
    } else {
      // alert("Please complete all fields and accept the terms and conditions.");
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
          className={
            emailIsInvalid
              ? `${style.checkoutFormControl} ${style.invalid}`
              : style.checkoutFormControl
          }
          type="email"
          placeholder="Enter your Mail Address"
          value={email}
          onBlur={validateEmailHandler}
          onFocus={emailFocusHandler}
          onChange={emailChangeHandler}
        />
      </div>
      <div className={style.Club} style={{ position: "relative" }}>
        <CustomInput
          className={
            passwordIsInvalid
              ? `${style.checkoutFormControl} ${style.invalid}`
              : style.checkoutFormControl
          }
          type={checkPassword ? "text" : "password"}
          placeholder="Enter your Password"
          value={enteredPassword}
          onBlur={validatePasswordHandler}
          onFocus={passwordFocusHandler}
          onChange={passwordChangeHandler}
        />
        <img
          src={require(`../../../assets/login-signup/checkPassword.png`)}
          alt=""
          className={style.checkPassword}
          onClick={() => setCheckPassword(!checkPassword)}
        />
        <div className={style.passwordValidation}>
          <div>
            <img
              src={require(`../../../assets/login-signup/${
                enteredPassword.length > 8 ? "correct.png" : "wrong.png"
              }`)}
              alt=""
            />
            <p>Password must be 8 Characters long</p>
          </div>
        </div>
      </div>
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
          </NavLink>
          {" and "}
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

      <Button
        className={
          formIsValid ? style.submitBtn : `${style.submitBtn} ${style.disabled}`
        }
        onClick={submitHandler}
        // disabled={!formIsValid}
      >
        Login
      </Button>

      <div className={style.line}>Don’t have an Account?</div>
      <Button onClick={() => {}} className={style.signUpBtn}>
        Sign-up
      </Button>
      {/* <div className={style.socialLoginButtons}>
        <button className={style.socialIconBtn}>
          <img
            src={require("../../assets/googleIcon.png")}
            alt="google icon"
            style={{ width: "20px" }}
          />{" "}
          Login via Google
        </button>
        <button className={style.socialIconBtn}>
          <img
            src={require("../../assets/linkedinIcon.png")}
            alt="google icon"
            style={{ width: "20px" }}
          />
          Login via LinkedIn
        </button>
      </div> */}
    </div>
  );
}
