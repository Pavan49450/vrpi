import { useEffect, useState } from "react";
import EnrolledCourseComponent from "../../../components/Dashboard/EnrolledCourseComponent/EnrolledCourseComponent";
import Courses from "../../../components/Dashboard/MyDashboardComponent/Courses/Courses";
import ProfileDetails from "../../../components/Dashboard/MyDashboardComponent/ProfileDetails/ProfileDetails";
import RightSideContents from "../../../components/Dashboard/RightSideContents/RightSideContents";
import WelcomeScreen from "../../../components/Dashboard/WelcomeScreen/WelcomeScreen";
import { EduTechData } from "../../../data/EduTechData";
import UserDataComponent from "../../../data/user";
import style from "./MyDashboard.module.css";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

const MyDashboard = () => {
  const [hideWelcome, setHideWelcome] = useState(false);
  // const [userData, setUserData] = useState(null);

  const FetchUserData = UserDataComponent();

  // const userData = useSelector((state) => state.userData.userData);
  useEffect(() => {
    // const fetchData = async () => {
    //   setUserData(userDataResponse);
    // };

    console.log("userdata", FetchUserData);

    setTimeout(() => {
      setHideWelcome(true);
    }, 10000);
    // fetchData();
  }, [FetchUserData.userData]);

  return (
    <>
      {FetchUserData.userData && !FetchUserData.isLoading ? (
        <div className={style.container}>
          {!hideWelcome && FetchUserData && (
            <WelcomeScreen user={FetchUserData.userData.user} />
          )}
          <div className={style.containers}>
            <div className={style.mainContainer}>
              {FetchUserData.userData &&
              FetchUserData.userData.user &&
              FetchUserData.userData.user.educationalDetails !== null ? (
                <ProfileDetails user={FetchUserData.userData.user} />
              ) : (
                <EnrolledCourseComponent
                  enrolledCourses={
                    FetchUserData.userData?.enrolledCourses || []
                  }
                />
              )}
              <Courses data={EduTechData} />
              {/* {console.log(
            "userData.user.enrolledCourses.length",
            userData.user && userData.user.enrolledCourses.length
          )} */}
              {/* {userData.user && !userData.user.enrolledCourses && ( */}
              {/* userData.user.enrolledCourses.length === 0 && */}
              {FetchUserData.userData?.enrolledCourses && (
                <div className={style.rightSideContents}>
                  <RightSideContents />
                </div>
              )}
            </div>
            {/* {userData.user && !userData.user.enrolledCourses && ( */}
            {/* userData.enrolledCourses.length === 0 */}
            {FetchUserData.userData?.enrolledCourses && (
              <div className={style.sideContainer}>
                <RightSideContents />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={style.loadingState}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default MyDashboard;
