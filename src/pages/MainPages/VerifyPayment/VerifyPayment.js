import { useEffect } from "react";
import useHttpsAxios from "../../../hooks/use-httpsAxios";
import { url } from "../../../constants";
import { CircularProgress } from "@material-ui/core";

const VerifyPayment = () => {
  // Extract query parameters from the URL
  const queryParams = new URLSearchParams(window.location.search);

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
    // console.log(
    //   amount,
    //   courseId,
    //   orderId,
    //   paymentId,
    //   paymentLinkUrl,
    //   razorpayPaymentId,
    //   razorpayPaymentLinkId,
    //   razorpayPaymentLinkReferenceId,
    //   razorpayPaymentLinkStatus,
    //   razorpaySignature,
    //   userId
    // );

    sendRequest({
      url: `${url.backendBaseUrl}/vrpi-user/verify-payment&amount=${amount}&orderId${orderId}&paymentId=${paymentId}&paymentLinkUrl=${paymentLinkUrl}&razorpay_payment_id=${razorpayPaymentId}
      &razorpay_payment_link_id=${razorpayPaymentLinkId}
      &razorpay_payment_link_reference_id=${razorpayPaymentLinkReferenceId}
      &razorpay_payment_link_status=${razorpayPaymentLinkStatus}
      &razorpay_signature=${razorpaySignature}
      &userId=${userId}
      `,
      method: "GET",
    });

    if (responseData) {
      console.log(responseData);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          <h1>Payment Verification</h1>
          <p>Amount: {amount}</p>
          <p>Course ID: {courseId}</p>
        </div>
      )}
    </>
  );
};

export default VerifyPayment;
