import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomImage from "../../../UI/Image/Image";
import Rating from "../../../UI/Rating/Rating";
import Button from "../../../UI/Button/Button";
import UserDataComponent from "../../../data/user";
import { setComingSoon } from "../../../store/ComingSoonSlice";

import style from "./MainSection.module.css";

const MainSection = ({ content }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = UserDataComponent();
  const isVRPIUserLoggedIn = useSelector(
    (state) => state.login.isVRPIUserLoggedIn
  );

  const handleLoginHandler = () => {
    if (!isVRPIUserLoggedIn) {
      navigate("/login");
      return;
    }

    if (!userData.user) {
      return;
    }

    if (!userData.user.educationalDetails) {
      navigate("/educationalDetails");
      return;
    }

    if (userData.uploadedCertificates < 4) {
      navigate("/mandatoryCertificates");
      return;
    }

    console.log("You are ready!");
  };

  return (
    <div className={style.container}>
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
          <Button onClick={handleLoginHandler}>Enroll Now</Button>
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
