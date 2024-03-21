import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import CustomImage from "../../../UI/Image/Image";
import Rating from "../../../UI/Rating/Rating";
import Button from "../../../UI/Button/Button";
import UserDataComponent from "../../../data/user";
import { setComingSoon } from "../../../store/ComingSoonSlice";

import style from "./MainSection.module.css";
import ConfirmationModal from "../../../UI/ConfirmModel/ConfirmationModal";
import { CircularProgress } from "@material-ui/core";
import useHttpsAxios from "../../../hooks/use-httpsAxios";

const MainSection = ({ content }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const userData = useSelector((state) => state.userData.userData);
  const FetchUserData = UserDataComponent();
  const isVRPIUserLoggedIn = useSelector(
    (state) => state.login.isVRPIUserLoggedIn
  );

  const handleLoginHandler = () => {
    if (!isVRPIUserLoggedIn) {
      // navigate("/login");
      setConfirmationMessage(
        "You need to be logged in to enroll. Do you want to proceed to login?"
      );
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

  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  // const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  // const { pathname } = useLocation();
  // const [showProfileDropDown, setShowProfileDropDown] = useState(false);
  // const handleLogout = () => {
  //   setShowProfileDropDown(!showProfileDropDown);
  //   setLogoutModalOpen(true);
  // };

  // const handleLogoutConfirm = () => {
  //   navigate("/login");
  // };

  // const closeLogoutModal = () => {
  //   setLogoutModalOpen(false);
  // };

  // const { sendRequest, responseData, statusCode, error, isLoading } =
  //   useHttpsAxios();

  // useEffect(() => {
  //   if (responseData) {
  //     if (statusCode === 200 || statusCode === 201) {
  //       console.log("data->", responseData);
  //     }
  //   }
  // });

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
    <div className={style.container}>
      <ConfirmationModal
        isOpen={confirmationModalOpen}
        onRequestClose={() => setConfirmationModalOpen(false)}
        title="Confirmation"
        message={confirmationMessage}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      <img
        src={require(`../../../assets/courses/${content.image}`)}
        alt=""
        className={style.courseImage}
      />
      <div className={style.content}>
        <h1>{content.name} Course</h1>
        <p>
          Master Your Skills in our {content.name} Program by building Live
          Projects.
        </p>
        <div className={style.instructorDetails}>
          <img
            src={require(`../../../assets/courses/${content.instructor.image}`)}
            alt=""
          />
          <span className={style.instructorName}>
            <span style={{ color: "#FBFF41" }}> {content.instructor.name}</span>
            {" (Course Instructor)"}
          </span>
        </div>
        <div className={style.courseHighlights}>
          <div className={style.rating}>
            <Rating value={content.rating} />
            <span>{content.rating} Ratings</span>
          </div>
          <div>{content.reviewsCount}+ Reviews</div>
          <div>{content.studentsEnrolled}+ Student Enrolled</div>
          <div>Updated on {content.updatedDate}</div>
        </div>
        <div className={style.language}>
          <CustomImage
            src={require(`../../../assets/courses/link.png`)}
            alt=""
          />
          <span>Provided Course Language - “ {content.language} ”</span>
        </div>
        <div className={style.buttons}>
          <Button onClick={handleLoginHandler}>
            {FetchUserData.isLoading ? <CircularProgress /> : "Enroll Now"}
          </Button>
          <Button
            // onClick={() => dispatch(setComingSoon(true))}
            onClick={() => navigate("/contact")}
            className={style.contactUs}
          >
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
