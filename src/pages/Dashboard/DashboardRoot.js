import { Outlet } from "react-router-dom";
import style from "./DashboardRoot.module.css";
import DashboardHeader from "../../components/Dashboard/Layout/Header/DashboardHeader";
import DashboardOverview from "../../components/Dashboard/Layout/DashboardOverview/DashboardOverview";
import { user } from "../../data/user";

const DashboardRoot = () => {
  return (
    <div className={style.container}>
      <DashboardHeader />
      <DashboardOverview userDetails={user}>
        <Outlet />
      </DashboardOverview>
    </div>
  );
};

export default DashboardRoot;
