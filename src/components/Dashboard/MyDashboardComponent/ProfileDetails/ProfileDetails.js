import style from "./ProfileDetails.module.css";

const ProfileDetails = ({ user }) => {
  return (
    <div className={style.container}>
      <div className={style.head}>
        <div>
          <div className={style.userImage}>
            <img
              src={require(`../../../../assets/dashboard/${user.image}`)}
              alt=""
            />
          </div>
          <div className={style.profileStatus}>
            <div className={style.profile}>My Profile 70%</div>
            <span className={style.profileInfo}>
              <img
                src={require(`../../../../assets/dashboard/infoIcon.png`)}
                alt=""
              />
              Complete your Profile
            </span>
          </div>
        </div>
        <div className={style.joinUs}>
          <span>Joined by {user.joinOn}</span>
        </div>
      </div>
      <div className={style.details}>
        <div className={style.detailsData}>
          <img
            src={require(`../../../../assets/dashboard/idIcon.png`)}
            alt=""
          />
          <span>{user.id}</span>
        </div>
        <div className={style.detailsData}>
          <img
            src={require(`../../../../assets/dashboard/phoneIcon.png`)}
            alt=""
          />
          <span>+91 {user.mobileNumber}</span>
        </div>
        <div className={style.detailsData}>
          <img
            src={require(`../../../../assets/dashboard/mailIcon.png`)}
            alt=""
          />
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
