import { useState } from "react";
import CustomImage from "../../../../UI/Image/Image";
import style from "./DashboardOverview.module.css";

import { useDispatch } from "react-redux";
import { logout } from "../../../../store/LoginStateActions";
import ConfirmationModal from "../../../../UI/ConfirmModel/ConfirmationModal";
import { useLocation, useNavigate } from "react-router-dom";

const DashboardOverview = ({
  userDetails,
  children,
  toggleMenuBar,
  DashboardLinks,
}) => {
  const [showProfileDropDown, setShowProfileDropDown] = useState(false);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    setShowProfileDropDown(!showProfileDropDown);
    setLogoutModalOpen(true);
  };

  const handleLogoutConfirm = () => {
    dispatch(logout());
    navigate("/login");
  };

  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const closeLogoutModal = () => {
    setLogoutModalOpen(false);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.overviewContainer}>
        {
          <div
            className={`${style.menuIcon} 
            }`}
            onClick={toggleMenuBar}
          >
            <div className={style.bar1}></div>
            <div className={style.bar2}></div>
            <div className={style.bar3}></div>
          </div>
        }
        <h2 className={style.barTitle}>
          {DashboardLinks.map((link) => {
            return link.link === pathname && link.title;
          })}
        </h2>

        <div className={style.overviewContents}>
          <div className={style.userDetails}>
            <span className={style.userName}>{userDetails.name}</span>
            <span className={style.userId}>#{userDetails.id}</span>
          </div>
          <CustomImage
            src={require(`../../../../assets/dashboard/notificationIcon.png`)}
            alt=""
            style={{ cursor: "pointer" }}
          />
          <div className={style.profilePic}>
            <CustomImage
              src={require(`../../../../assets/dashboard/${userDetails.image}`)}
              alt=""
              // onClick={() => setShowProfileDropDown(!showProfileDropDown)}
              onMouseEnter={() => setShowProfileDropDown(true)}
              onMouseLeave={() => setShowProfileDropDown(false)}
            />
          </div>
          {/* <img
            src={require(`../../../assets/dashboard/arrowDownPrimary.png`)}
            alt=""
            className={style.arrowDown}
          /> */}
        </div>
        <div
          onMouseEnter={() => setShowProfileDropDown(true)}
          onMouseLeave={() => setShowProfileDropDown(false)}
          className={`${style.dropdown} ${
            showProfileDropDown && style.showDropdown
          }`}
        >
          <div
            className={style.options}
            onClick={() => {
              setShowProfileDropDown(!showProfileDropDown);
              navigate("/dashboard/studentProfile");
            }}
          >
            {/* <CustomImage src={re} */}
            Profile
          </div>
          <div className={style.options} onClick={handleLogout}>
            Logout
          </div>
        </div>
      </div>
      <ConfirmationModal
        isOpen={logoutModalOpen}
        onRequestClose={closeLogoutModal}
        title="Confirm Logout"
        message="Are you sure you want to logout?"
        onConfirm={handleLogoutConfirm}
        onCancel={closeLogoutModal}
      />

      <div className={style.contents}>{children}</div>
    </div>
  );
};
export default DashboardOverview;
