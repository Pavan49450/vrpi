import { useNavigate } from "react-router-dom";
import UserDataComponent from "../../../data/user";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ConfirmationModal from "../../../UI/ConfirmModel/ConfirmationModal";
import useHttpsAxios from "../../../hooks/use-httpsAxios";
import { url } from "../../../constants";
import LoadingButton from "../../../UI/LoadingButton/LoadingButton";

const PleaseEnrollBtn = ({ courseId }) => {
  const navigate = useNavigate();

  // const userData = useSelector((state) => state.userData.userData);
  const FetchUserData = UserDataComponent();
  const isVRPIUserLoggedIn = useSelector(
    (state) => state.login.isVRPIUserLoggedIn
  );
  const userId = useSelector((state) => state.login.userId);

  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const { sendRequest, isLoading, error, responseData, statusCode } =
    useHttpsAxios();

  const handleLoginHandler = () => {
    console.log("here");
    if (!isVRPIUserLoggedIn) {
      // navigate("/login");
      console.log("here2");

      setConfirmationMessage(
        "You need to be logged in to enroll. Do you want to proceed to login?"
      );

      console.log(confirmationMessage);

      setConfirmationModalOpen(true);
      return;
    }

    if (!FetchUserData.userData.user) {
      return;
    }

    if (!FetchUserData.userData.user.educationalDetails) {
      // navigate("/educationalDetails");
      setConfirmationMessage(
        "Please fill out your 'educational details' and 'mandatory certificates' before enrolling."
      );
      setConfirmationModalOpen(true);
      return;
    }

    if (FetchUserData.userData.uploadedCertificates < 4) {
      // navigate("/mandatoryCertificates");
      setConfirmationMessage(
        "Please fill upload all mandatory certificates before enrolling"
      );
      setConfirmationModalOpen(true);
      return;
    }

    console.log("You are ready!");
  };

  // useEffect(() => {
  //   if (statusCode === 200 || statusCode === 201) {
  //     console.log(responseData);
  //     // SuccessResponseHandler();
  //   } else if (statusCode < 0 && statusCode > 202) {
  //     console.log(error);
  //     console.log(responseData);
  //   }

  //   if (error) {
  //     console.log(error);
  //     console.log("res->", responseData);
  //   }
  // }, [responseData]);

  const handleConfirm = () => {
    setConfirmationModalOpen(false);
    if (FetchUserData.userData.user) {
      console.log("In");
      if (!isVRPIUserLoggedIn) {
        navigate("/login");
      } else if (!FetchUserData.userData.user.educationalDetails) {
        // sendRequest({
        //   url: `${url.backendBaseUrl}/enroll-course?courseId=${courseId}&userId=${userId}`,
        //   method: "POST",

        // });
        navigate("/educationalDetails");
      } else if (FetchUserData.userData.uploadedCertificates < 4) {
        navigate("/mandatoryCertificates");
      }
    }
  };

  const handleCancel = () => {
    setConfirmationModalOpen(false);
  };

  return (
    <>
      <ConfirmationModal
        isOpen={confirmationModalOpen}
        onRequestClose={() => setConfirmationModalOpen(false)}
        title="Confirmation"
        message={confirmationMessage}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

      <LoadingButton
        text="Enroll now"
        isLoading={isLoading}
        loaderColor="white"
        onClick={handleLoginHandler}
      />
    </>
  );
};

export default PleaseEnrollBtn;
