import { CircularProgress } from "@material-ui/core";
import Button from "../../../../UI/Button/Button";
// import styles from "./PleaseEnrollBtn.module.css";
import { useNavigate } from "react-router-dom";
import UserDataComponent from "../../../../data/user";
import { useSelector } from "react-redux";
import { useState } from "react";
import ConfirmationModal from "../../../../UI/ConfirmModel/ConfirmationModal";

const PleaseEnrollBtn = ({ userId, courseId }) => {
  const navigate = useNavigate();

  // const userData = useSelector((state) => state.userData.userData);
  const FetchUserData = UserDataComponent();
  const isVRPIUserLoggedIn = useSelector(
    (state) => state.login.isVRPIUserLoggedIn
  );

  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

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

  const handleConfirm = () => {
    setConfirmationModalOpen(false);
    if (!isVRPIUserLoggedIn) {
      navigate("/login");
    } else if (!FetchUserData.userData.user.educationalDetails) {
      // sendRequest({
      //   url: "http://localhost:8082/enroll-course?courseId=1&userId=13",
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      navigate("/educationalDetails");
    } else if (FetchUserData.userData.uploadedCertificates < 4) {
      navigate("/mandatoryCertificates");
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
      <Button onClick={handleLoginHandler} doNotScrollToTop={true}>
        Enroll Now
      </Button>
    </>
  );
};

export default PleaseEnrollBtn;
