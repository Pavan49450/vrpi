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
    <SignUpOrLoginContainer screenData={loginScreenData}>
      Hey
    </SignUpOrLoginContainer>
  );
};

export default Login;
