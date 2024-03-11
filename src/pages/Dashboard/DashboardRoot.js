import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import style from "./DashboardRoot.module.css";
import DashboardHeader from "../../components/Dashboard/Layout/Header/DashboardHeader";
import DashboardOverview from "../../components/Dashboard/Layout/DashboardOverview/DashboardOverview";
import { user } from "../../data/user";

const DashboardRoot = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);

  const toggleMenuBar = () => {
    setShowMenuBar(!showMenuBar);
  };

  useEffect(() => {
    const handleScrollLock = () => {
      if (showMenuBar) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleScrollLock();

    return () => {
      document.body.style.overflow = "auto"; // Reset overflow when component unmounts
    };
  }, [showMenuBar]);

  return (
    <div className={style.container}>
      <DashboardHeader
        showMenuBar={showMenuBar}
        toggleMenuBar={toggleMenuBar}
      />
      <DashboardOverview userDetails={user} toggleMenuBar={toggleMenuBar}>
        <Outlet />
      </DashboardOverview>
    </div>
  );
};

export default DashboardRoot;
