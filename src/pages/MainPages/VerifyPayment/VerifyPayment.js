import { useEffect } from "react";
import useHttpsAxios from "../../../hooks/use-httpsAxios";
import { url } from "../../../constants";
import { CircularProgress } from "@material-ui/core";
import styles from "./VerifyPayments.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import CustomImage from "../../../UI/Image/Image";
import Button from "../../../UI/Button/Button";

const VerifyPayment = () => {
  // Extract query parameters from the URL
  const queryParams = new URLSearchParams(window.location.search);

  const location = useLocation();

  // Retrieve pathname from location object
  const { pathname } = location;

  // Retrieve values from query parameters
  const amount = queryParams.get("amount");
  const courseId = queryParams.get("courseId");
  const orderId = queryParams.get("orderId");
  const paymentId = queryParams.get("paymentId");
  const paymentLinkUrl = queryParams.get("paymentLinkUrl");
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

  const { sendRequest, isLoading, responseData, statusCode, error } =
    useHttpsAxios();
  useEffect(() => {
    console.log("Pathname", pathname);

    sendRequest({
      url: `${url.backendBaseUrl}${pathname}?amount=${amount}&orderId=${orderId}&paymentId=${paymentId}&paymentLinkUrl=${paymentLinkUrl}&razorpay_payment_id=${razorpayPaymentId}
      &razorpay_payment_link_id=${razorpayPaymentLinkId}
      &razorpay_payment_link_reference_id=${razorpayPaymentLinkReferenceId}
      &razorpay_payment_link_status=${razorpayPaymentLinkStatus}
      &razorpay_signature=${razorpaySignature}
      &userId=${userId}
      `,
      method: "GET",
    });
  }, [
    amount,
    orderId,
    paymentId,
    paymentLinkUrl,
    razorpayPaymentId,
    razorpayPaymentLinkId,
    razorpayPaymentLinkReferenceId,
    razorpayPaymentLinkStatus,
    razorpaySignature,
    userId,
  ]);

  const navigate = useNavigate();

  const SuccessfulRequest = {
    image: "paymentSuccessfulImage.png",
    assetIcon: "success.png",
    buttonActions: {
      title: "Do to Dashboard",

      action: () => {
        navigate("/dashboard");
      },
    },
    text: "Payment Successful",
    paymentStatus: razorpayPaymentLinkStatus,
    message:
      "Thank you, for choosing Edu-tech! Please click on the below button, where yo can access your course.",
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
      "Your transaction has bee failed due to some technical issues. Please try again.",
  };

  const paymentStatusData =
    razorpayPaymentLinkStatus === "paid" && razorpaySignature
      ? SuccessfulRequest
      : failedRequest;
  return (
    <div className={styles.container}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className={styles.container}>
          <CustomImage
            src={require(`../../../assets/verifyPayments/${paymentStatusData.image}`)}
            alt={paymentStatusData.text}
          />

          <div className={styles.paymentStatus}>
            <CustomImage
              src={require(`../../../assets/verifyPayments/${paymentStatusData.assetIcon}`)}
              alt={paymentStatusData.text}
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
