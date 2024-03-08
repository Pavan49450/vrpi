import LoginForm from "../../../components/Login/LoginForm/LoginForm";
import SignUpOrLoginContainer from "../../../components/SignUpOrLoginContainer/SignUpOrLoginConatainer";
import style from "./Login.module.css";

const loginScreenData = {
  title: "Welcome Back!",
  description:
    "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  image: "loginPageImage.svg",
};

const Login = () => {
  return (
    <SignUpOrLoginContainer
      screenData={loginScreenData}
      classForMainContent={style.mainContent}
    >
      <LoginForm />
    </SignUpOrLoginContainer>
  );
};

export default Login;
