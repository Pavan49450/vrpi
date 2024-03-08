import { useEffect, useState } from "react";
import SignUpOrLoginContainer from "../../../components/SignUpOrLoginContainer/SignUpOrLoginConatainer";
import SelectUser from "../../../components/Signup/SelectUser/SelectUser";
import { useSelector } from "react-redux";
import PersonalDetails from "../../../components/Signup/PersonalDetails/PersonalDetails";
import ThankyouScreen from "../../../components/Signup/ThankyouScreen/ThankyouScreen";
import style from "./SignUp.module.css";

const welcomePageScreenData = {
  title: "Welcome!!",
  description:
    "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  image: "welcomePageImage.svg",
};
const personalPageScreenData = {
  title: "Create Account",
  description:
    "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  image: "personalDetailsPageImage.svg",
};

const SignUp = () => {
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    // console.log("userState->", userState);
  }, [userState]);

  return (
    <>
      {userState.role === null && userState.step === null && (
        <SignUpOrLoginContainer
          screenData={welcomePageScreenData}
          classForMainContent={style.mainContent}
        >
          <SelectUser />
        </SignUpOrLoginContainer>
      )}
      {userState.role === "student" && userState.step === 1 && (
        <SignUpOrLoginContainer screenData={personalPageScreenData}>
          <PersonalDetails role="student" />
        </SignUpOrLoginContainer>
      )}
      {userState.role === "client" && userState.step === 1 && (
        <SignUpOrLoginContainer screenData={personalPageScreenData}>
          <PersonalDetails role="client" />
        </SignUpOrLoginContainer>
      )}
      {/* {console.log("userState", userState)} */}
      {userState.step === 2 && <ThankyouScreen />}
    </>
  );
};

export default SignUp;
