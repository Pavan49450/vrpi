import Courses from "../../../components/Dashboard/MyDashboardComponent/Courses/Courses";
import WelcomeScreen from "../../../components/Dashboard/WelcomeScreen/WelcomeScreen";
import AllCardsSection from "../../../components/KnowledgeHub/AllCardsSection/AllCardsSection";
import { EduTechData } from "../../../data/EduTechData";
import { user } from "../../../data/user";
import style from "./MyDashboard.module.css";

const MyDashboard = () => {
  return (
    <div className={style.container}>
      <WelcomeScreen user={user} />
      <div className={style.mainContainer}>
        {/* <Courses data={EduTechData} /> */}
      </div>
    </div>
  );
};

export default MyDashboard;
