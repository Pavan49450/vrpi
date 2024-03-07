import { Outlet } from "react-router-dom";
import style from "./DashboardRoot.module.css";
import DashboardHeader from "../../components/Dashboard/Layout/Header/DashboardHeader";
import DashboardOverview from "../../components/Dashboard/DashboardOverview/DashboardOverview";

const DashboardRoot = () => {
  return (
    <div className={style.container}>
      <DashboardHeader />
      <DashboardOverview />
      <Outlet />
    </div>
  );
};

export default DashboardRoot;
