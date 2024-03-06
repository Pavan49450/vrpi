import { Outlet } from "react-router-dom";
import DashboardOverview from "../../components/Dashboard/Layout/DashboardOverview/DashboardOverview";
import DashboardHeader from "../../components/Dashboard/Layout/Header/DashboardHeader";

const DashboardRoot = () => {
  return (
    <div>
      <DashboardHeader />
      <DashboardOverview />
      <Outlet />
    </div>
  );
};

export default DashboardRoot;
