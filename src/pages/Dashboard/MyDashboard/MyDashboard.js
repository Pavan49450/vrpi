import { useEffect, useState } from "react";
import EnrolledCourseComponent from "../../../components/Dashboard/EnrolledCourseComponent/EnrolledCourseComponent";
import Courses from "../../../components/Dashboard/MyDashboardComponent/Courses/Courses";
import ProfileDetails from "../../../components/Dashboard/MyDashboardComponent/ProfileDetails/ProfileDetails";
import RightSideContents from "../../../components/Dashboard/RightSideContents/RightSideContents";
import WelcomeScreen from "../../../components/Dashboard/WelcomeScreen/WelcomeScreen";
import { EduTechData } from "../../../data/EduTechData";
import UserDataComponent from "../../../data/user";
import style from "./MyDashboard.module.css";

const MyDashboard = () => {
  const [hideWelcome, setHideWelcome] = useState(false);
  // const [userData, setUserData] = useState(null);

  const userData = UserDataComponent();
  useEffect(() => {
    // const fetchData = async () => {
    //   setUserData(userDataResponse);
    // };

    setTimeout(() => {
      setHideWelcome(true);
    }, 10000);
    // fetchData();
  }, []);

  return (
    <div className={style.container}>
      {!hideWelcome && userData.user && <WelcomeScreen user={userData.user} />}
      <div className={style.containers}>
        <div className={style.mainContainer}>
          {userData.user && userData.user.educationalDetails !== null ? (
            <ProfileDetails user={userData.user} />
          ) : (
            <EnrolledCourseComponent
              enrolledCourses={userData.user?.enrolledCourses || []}
            />
          )}
          <Courses data={EduTechData} />
          {/* {console.log(
            "userData.user.enrolledCourses.length",
            userData.user && userData.user.enrolledCourses.length
          )} */}
          {/* {userData.user && !userData.user.enrolledCourses && ( */}
          {/* userData.user.enrolledCourses.length === 0 && */}
          {userData.enrolledCourses && (
            <div className={style.rightSideContents}>
              <RightSideContents />
            </div>
          )}
        </div>
        {/* {userData.user && !userData.user.enrolledCourses && ( */}
        {/* userData.enrolledCourses.length === 0 */}
        {userData.enrolledCourses && (
          <div className={style.sideContainer}>
            <RightSideContents />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyDashboard;
