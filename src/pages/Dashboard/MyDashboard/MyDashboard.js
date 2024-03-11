import EnrolledCourseComponent from "../../../components/Dashboard/EnrolledCourseComponent/EnrolledCourseComponent";
import Courses from "../../../components/Dashboard/MyDashboardComponent/Courses/Courses";
import ProfileDetails from "../../../components/Dashboard/MyDashboardComponent/ProfileDetails/ProfileDetails";
import RightSideContents from "../../../components/Dashboard/RightSideContents/RightSideContents";
import WelcomeScreen from "../../../components/Dashboard/WelcomeScreen/WelcomeScreen";
import AllCardsSection from "../../../components/KnowledgeHub/AllCardsSection/AllCardsSection";
import { EduTechData } from "../../../data/EduTechData";
import { user } from "../../../data/user";
import style from "./MyDashboard.module.css";

const MyDashboard = () => {
  return (
    <div className={style.container}>
      <WelcomeScreen user={user} />
      <div className={style.containers}>
        <div className={style.mainContainer}>
          {user.educationalDetails === undefined ? (
            <ProfileDetails user={user} />
          ) : (
            <EnrolledCourseComponent enrolledCourses={user.enrolledCourses} />
          )}
          <Courses data={EduTechData} />
          {user.enrolledCourses.length === 0 && (
            <div className={style.rightSideContents}>
              <RightSideContents />
            </div>
          )}
        </div>
        {user.enrolledCourses.length === 0 && (
          <div className={style.sideContainer}>
            <RightSideContents />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyDashboard;
