import { useState } from "react";
import CustomImage from "../../../../UI/Image/Image";
import style from "./DashboardOverview.module.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../../../../store/LoginStateActions";
import ConfirmationModal from "../../../../UI/ConfirmModel/ConfirmationModal";
const DashboardOverview = ({ userDetails, children, toggleMenuBar }) => {
  const [showProfileDropDown, setShowProfileDropDown] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
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
        <h2>Overview</h2>
        <div className={style.overviewContents}>
          <CustomImage
            src={require(`../../../../assets/dashboard/notificationIcon.png`)}
            alt=""
          />
          <div className={style.profilePic}>
            <CustomImage
              src={require(`../../../../assets/dashboard/${userDetails.image}`)}
              alt=""
              onClick={() => setShowProfileDropDown(!showProfileDropDown)}
            />
          </div>
          <div className={style.userDetails}>
            <span>{userDetails.name}</span>
            <span className={style.userId}>#{userDetails.id}</span>
          </div>
          {/* <img
            src={require(`../../../assets/dashboard/arrowDownPrimary.png`)}
            alt=""
            className={style.arrowDown}
          /> */}
        </div>
        <div
          className={`${style.dropdown} ${
            showProfileDropDown && style.showDropdown
          }`}
        >
          <div
            className={style.options}
            onClick={() => navigate("/studentProfile")}
          >
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
