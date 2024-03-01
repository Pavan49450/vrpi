import { useState } from "react";
import SignUpOrLoginContainer from "../../../components/SignUpOrLoginContainer/SignUpOrLoginConatainer";
import SelectUser from "../../../components/Signup/SelectUser";

const signUpScreenData = {
  title: "Welcome!!",
  description:
    "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  image: "welcomePageImage.svg",
};

const SignUp = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      {console.log(user)}
      {user == null && (
        <SignUpOrLoginContainer screenData={signUpScreenData}>
          <SelectUser />
        </SignUpOrLoginContainer>
      )}
    </>
  );
};

export default SignUp;
