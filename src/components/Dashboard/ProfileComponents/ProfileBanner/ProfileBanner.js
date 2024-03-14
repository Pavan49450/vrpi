import Button from "../../../../UI/Button/Button";
import style from "./ProfileBanner.module.css";
import { useNavigate } from "react-router-dom";

const ProfileBanner = ({ user }) => {
  return (
    <>
      <div className={style.bannerContainer}>
        <ProfileBar user={user} />
      </div>

      <div className={style.onBannerContainer}>
        <ProfileBar user={user} />
      </div>
    </>
  );
};

export default ProfileBanner;

const ProfileBar = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className={style.profileImageContainer}>
      <div className={style.profileImage}>
        <img
          src={require(`../../../../assets/dashboard/${user.image}`)}
          alt="banner"
        ></img>
      </div>
      <div className={style.details}>
        <div className={style.headContainer}>
          <div className={style.mainDetails}>
            <span className={style.StudentName}>{user.name}</span>
            <span className={style.userId}>Student | {user.gender}</span>
          </div>
          <div>
            <Button
              onClick={() => navigate("/")}
              style={{ padding: "0.2rem 2rem" }}
            >
              Edit
            </Button>
          </div>
        </div>
        <div className={style.contactDetails}>
          <div className={style.contactCard}>
            <img
              src={require(`../../../../assets/dashboard/Call.png`)}
              alt=""
            />
            <span>+91 {user.mobileNumber}</span>
          </div>
          <div className={style.contactCard}>
            <img
              src={require(`../../../../assets/dashboard/Email.png`)}
              alt=""
            />
            <span>{user.email}</span>
          </div>
          <div className={style.contactCard}>
            <img
              src={require(`../../../../assets/dashboard/HomeWork.png`)}
              alt=""
            />
            <span>{user.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
