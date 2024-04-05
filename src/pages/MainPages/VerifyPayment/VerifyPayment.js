import { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import { CircularProgress } from "@material-ui/core";
import styles from "./VerifyPayments.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import CustomImage from "../../../UI/Image/Image";
import Button from "../../../UI/Button/Button";
import { url } from "../../../constants";
import UserDataComponent from "../../../data/user";
const VerifyPayment = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const location = useLocation();
  const { pathname } = location;

  const [paymentVerificationStatus, setPaymentVerificationStatus] =
    useState(false);

  const courseId = queryParams.get("courseId");
  const amount = queryParams.get("amount");
  const orderId = queryParams.get("orderId");
  const razorpayPaymentId = queryParams.get("razorpay_payment_id");
  const razorpayPaymentLinkId = queryParams.get("razorpay_payment_link_id");
  const razorpayPaymentLinkReferenceId = queryParams.get(
    "razorpay_payment_link_reference_id"
  );
  const razorpayPaymentLinkStatus = queryParams.get(
    "razorpay_payment_link_status"
  );
  const razorpaySignature = queryParams.get("razorpay_signature");
  const userId = queryParams.get("userId");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [verified, setVerified] = useState(false);

  const FetchUserData = UserDataComponent();

  useEffect(() => {
    if (FetchUserData?.userData.courseList) {
      const findCourse = FetchUserData.userData.courseList.find(
        (course) => course.id.toString() === courseId.toString()
      );

      console.log(findCourse);
      console.log(verified);
      if (verified === false && paymentVerificationStatus === false) {
        const fetchData = async () => {
          if (findCourse) {
            setVerified(true);
            setPaymentVerificationStatus(true);

            return;
          } else {
            try {
              setIsLoading(true);
              const response = await axios.get(
                `${url.backendBaseUrl}${pathname}`,
                {
                  params: {
                    amount,
                    courseId,
                    orderId,
                    razorpay_payment_id: razorpayPaymentId,
                    razorpay_payment_link_id: razorpayPaymentLinkId,
                    razorpay_payment_link_reference_id:
                      razorpayPaymentLinkReferenceId,
                    razorpay_payment_link_status: razorpayPaymentLinkStatus,
                    razorpay_signature: razorpaySignature,
                    userId,
                  },
                }
              );
              console.log(response);

              if (response.status && response.data === "Payment successful") {
                setPaymentVerificationStatus(true);
              }
              setIsLoading(false);
            } catch (error) {
              setError(error);
              setIsLoading(false);
            }
          }
        };

        fetchData();
      }
    }
  }, [FetchUserData?.userData.courseList, courseId]);

  const successfulRequest = {
    image: "paymentSuccessfulImage.png",
    assetIcon: "success.png",
    buttonActions: {
      title: "Go to Dashboard",
      action: () => {
        navigate("/dashboard");
      },
    },
    text: "Payment Successful",
    paymentStatus: razorpayPaymentLinkStatus,
    message:
      "Thank you for choosing Edu-tech! Please click on the button below to access your course.",
  };

  const failedRequest = {
    image: "paymentFailedImage.png",
    assetIcon: "cancel.png",
    buttonActions: {
      title: "Try Again",
      action: () => {},
    },
    text: "Payment Failed",
    paymentStatus: null,
    message:
      "Your transaction has failed due to some technical issues. Please try again.",
  };

  const paymentStatusData =
    (razorpayPaymentLinkStatus === "paid" &&
      razorpaySignature &&
      paymentVerificationStatus) ||
    verified
      ? successfulRequest
      : failedRequest;

  return (
    <div className={styles.container}>
      {FetchUserData.isLoading && isLoading ? (
        <CircularProgress />
      ) : (
        <div className={styles.container}>
          <CustomImage
            src={require(`../../../assets/verifyPayments/${paymentStatusData.image}`)}
            alt={paymentStatusData.text}
            classForDiv={styles.imageContainer}
          />
          <div className={styles.paymentStatus}>
            <CustomImage
              src={require(`../../../assets/verifyPayments/${paymentStatusData.assetIcon}`)}
              alt={paymentStatusData.text}
              classForDiv={styles.imageContainer}
            />
            <span
              style={{
                color: `${
                  paymentStatusData.paymentStatus ? "#00B112" : "#E30000"
                }`,
              }}
            >
              {paymentStatusData.text}
            </span>
          </div>
          <p className={styles.paymentMessage}>{paymentStatusData.message}</p>
          <Button onClick={paymentStatusData.buttonActions.action}>
            {paymentStatusData.buttonActions.title}
          </Button>
        </div>
      )}
    </div>
  );
};

export default VerifyPayment;
