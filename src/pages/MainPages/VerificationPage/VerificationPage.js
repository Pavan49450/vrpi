import Button from "../../../UI/Button/Button";
import SignUpOrLoginContainer from "../../../components/SignUpOrLoginContainer/SignUpOrLoginConatainer";
import { useNavigate, useParams } from "react-router-dom";
import style from "./VerificationPage.module.css";
import { useEffect } from "react";
import useHttpsAxios from "../../../hooks/use-httpsAxios";
import { url } from "../../../constants";
const verificationPageScreenData = {
  title: "Verification",
  description:
    "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  image: "verificationPageImage.svg",
};

const VerificationPage = () => {
  const { email, otp } = useParams();

  const { sendRequest, isLoading, error, statusCode, responseData } =
    useHttpsAxios();

  useEffect(() => {
    const validation = async () => {
      try {
        const response = await sendRequest({
          url: `${url.backendBaseUrl}/vrpi-user/verify-account/${email}/${otp}`,
        });

        if (response && (statusCode === 200 || statusCode === 201)) {
          console.log("Verified");
        }
      } catch (error) {
        console.log("Error:", error.message);
      }
    };

    validation();
  }, [sendRequest]);

  const navigate = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <SignUpOrLoginContainer
        screenData={verificationPageScreenData}
        classForMainContent={style.mainContent}
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : (
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
        )}
      </SignUpOrLoginContainer>
    </div>
  );
};

export default VerificationPage;
