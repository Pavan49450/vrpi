import { useSelector } from "react-redux";
import style from "./ProfileDetails.module.css";
import ProfilePic from "../../ProfilePic/ProfilePic";

const ProfileDetails = ({ user }) => {
  const userId = useSelector((state) => state.login.userId);
  return (
    <div className={style.container}>
      <div className={style.head}>
        <div className={style.details2}>
          <div className={style.userImage}>
            {/* <img
              src={require(`../../../../assets/dashboard/${
                user.image ? user.image : "profilePic.png"
              }`)}
              alt=""
            /> */}
            <ProfilePic />
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
          <span>{userId}</span>
        </div>
        <div className={style.detailsData}>
          <img
            src={require(`../../../../assets/dashboard/phoneIcon.png`)}
            alt=""
          />
          <span>+91 {user.phoneNumber}</span>
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
