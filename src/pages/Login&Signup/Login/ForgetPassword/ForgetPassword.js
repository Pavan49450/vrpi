import { useEffect } from "react";
import Button from "../../../../UI/Button/Button";
import InputWithInvalidText from "../../../../UI/Input/InputWithInvalidText";
import { emailValidation } from "../../../../components/InputValidations/InputValidations";
import SignUpOrLoginContainer from "../../../../components/SignUpOrLoginContainer/SignUpOrLoginConatainer";
import useInput from "../../../../hooks/use-Input";
import style from "./ForgetPassword.module.css";
const ForgetPassword = () => {
  const loginScreenData = {
    title: "Welcome Back!",
    description:
      "At moment we don’t have your Data to create your account. So lets just start to create your Account",
    image: "loginPageImage.svg",
  };

  const emailInput = useInput({ validateValue: emailValidation });

  useEffect(() => {
    document.title = "Forget Password";
  });

  const handleSubmit = () => {
    console.log(emailInput.value);
  };

  return (
    <div className={style.screen}>
      <SignUpOrLoginContainer
        screenData={loginScreenData}
        classForMainContent={style.mainContent}
      >
        <div className={style.container}>
          <h1>Forget Password</h1>
          <InputWithInvalidText
            ErrorMessage={"Invalid Email"}
            className={`${style.Input} `}
            inputFields={{
              placeholder: "Enter your Email Address",
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
          <Button
            onClick={handleSubmit}
            disabled={!emailInput.isValid}
            style={{ backgroundColor: !emailInput.isValid && "#ccc" }}
          >
            Submit
          </Button>
        </div>
      </SignUpOrLoginContainer>
    </div>
  );
};

export default ForgetPassword;
