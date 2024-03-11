import style from "./DashboardOverview.module.css";
const DashboardOverview = ({ userDetails, children, toggleMenuBar }) => {
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
          <img
            src={require(`../../../../assets/dashboard/notificationIcon.png`)}
            alt=""
          />
          <div className={style.profilePic}>
            <img
              src={require(`../../../../assets/dashboard/${userDetails.image}`)}
              alt=""
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
      </div>
      <div className={style.contents}>{children}</div>
    </div>
  );
};
export default DashboardOverview;
