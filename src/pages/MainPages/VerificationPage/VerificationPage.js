import Button from "../../../UI/Button/Button";
import SignUpOrLoginContainer from "../../../components/SignUpOrLoginContainer/SignUpOrLoginConatainer";
import { useNavigate } from "react-router-dom";
import style from "./VerificationPage.module.css";
const verificationPageScreenData = {
  title: "Verification",
  description:
    "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  image: "verificationPageImage.svg",
};

const VerificationPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <SignUpOrLoginContainer
        screenData={verificationPageScreenData}
        classForMainContent={style.mainContent}
      >
        <div className={style.container}>
          <img
            src={require(`../../../assets/login-signup/verificationIcon.png`)}
            alt=""
          ></img>
          <div>
            <p>
              Thank you, your email has been verified. Your account is now
              active. Please click the button below to Login to your Account
            </p>
            <p>Thank you for choosing VR PI Group of Companies</p>
          </div>
          <Button onClick={() => navigate("/login")}>
            Login to your Account
          </Button>
        </div>
      </SignUpOrLoginContainer>
    </div>
  );
};

export default VerificationPage;
