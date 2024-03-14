import style from "./ProfileBanner.module.css";

const ProfileBanner = ({ user }) => {
  return (
    <div className={style.bannerContainer}>
      <div className={style.profileImageContainer}>
        <div className={style.profileImage}>
          <img
            src={require(`../../../../assets/dashboard/${user.image}`)}
            alt="banner"
          ></img>
        </div>
        <div>
          <div>
            <span>{user.name}</span>
          </div>
          <span className={style.userId}>#{user.id}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
