import { useEffect, useState } from "react";
import EnrolledCourseComponent from "../../../components/Dashboard/EnrolledCourseComponent/EnrolledCourseComponent";
import Courses from "../../../components/Dashboard/MyDashboardComponent/Courses/Courses";
import ProfileDetails from "../../../components/Dashboard/MyDashboardComponent/ProfileDetails/ProfileDetails";
import RightSideContents from "../../../components/Dashboard/RightSideContents/RightSideContents";
import WelcomeScreen from "../../../components/Dashboard/WelcomeScreen/WelcomeScreen";
import { EduTechData } from "../../../data/EduTechData";
import UserDataComponent from "../../../data/user";
import style from "./MyDashboard.module.css";
import { CircularProgress } from "@material-ui/core";

const MyDashboard = () => {
  const [hideWelcome, setHideWelcome] = useState(false);
  const userData = UserDataComponent();

  useEffect(() => {
    if (userData.userData.user) {
      document.title = `${userData.userData.user.firstName} - Dashboard`;
    }

    const timer = setTimeout(() => {
      setHideWelcome(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [userData.userData]);

  if (userData.isLoading && userData.userData.user) {
    return (
      <div className={style.loadingState}>
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <div className={style.container}>
        <WelcomeScreen user={userData.userData.user} onClose={hideWelcome} />
        <div className={style.containers}>
          <div className={style.mainContainer}>
            {userData.userData.user && !userData.userData.allDocAreUploaded ? (
              <ProfileDetails
                user={userData.userData.user}
                userData={userData.userData}
              />
            ) : (
              <>
                {userData.userData.user && (
                  <ProfileDetails
                    user={userData.userData.user}
                    userData={userData.userData}
                  />
                )}
                <EnrolledCourseComponent
                  enrolledCourses={userData.userData?.courseList || []}
                />
              </>
            )}
            <Courses data={EduTechData} />
            {userData.userData?.enrolledCourses &&
              userData.userData?.certificatesToUpload !== 0 && (
                <div className={style.rightSideContents}>
                  <RightSideContents />
                </div>
              )}
          </div>
          {userData.userData?.enrolledCourses &&
            userData.userData?.certificatesToUpload !== 0 && (
              <div className={style.sideContainer}>
                <RightSideContents />
              </div>
            )}
        </div>
      </div>
    );
  }
};

export default MyDashboard;
