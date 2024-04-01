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

  useEffect(() => {
    if (statusCode === 200 || statusCode === 201) {
      console.log(responseData);
      window.location.href = responseData;
    } else if (statusCode < 0 && statusCode > 202) {
      console.log(error);
      console.log(responseData);
    }

    if (error) {
      console.log(error);
      console.log("res->", responseData);
    }
  }, [responseData]);

  const handleLoginHandler = () => {
    console.log("here");
    if (!isVRPIUserLoggedIn) {
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

    if (!FetchUserData.userData.educationalDetails) {
      setConfirmationMessage(
        "Please fill out your 'educational details' and 'mandatory certificates' before enrolling."
      );
      setConfirmationModalOpen(true);
      return;
    }

    if (FetchUserData.userData.certificatesToUpload !== 0) {
      setConfirmationMessage(
        "Please fill upload all mandatory certificates before enrolling"
      );
      setConfirmationModalOpen(true);
      return;
    }

    console.log("You are ready!");

    EnrollToTheCourse();
  };

  const EnrollToTheCourse = async () => {
    sendRequest({
      url: `${url.backendBaseUrl}/course/enroll-course?courseId=${courseId}&userId=${userId}`,
      method: "POST",
    });
  };

  const handleConfirm = () => {
    console.log("In");

    console.log("In0");

    if (!isVRPIUserLoggedIn) {
      console.log("In1");
      navigate("/login");
    } else if (!FetchUserData.userData.educationalDetails) {
      console.log("In2");

      navigate("/educationalDetails");
    } else if (FetchUserData.userData.certificatesToUpload !== 0) {
      console.log("In3");

      navigate("/mandatoryCertificates");
    }
    setConfirmationModalOpen(false);
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
