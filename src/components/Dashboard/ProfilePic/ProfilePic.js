import { useSelector } from "react-redux";
import CustomImage from "../../../UI/Image/Image";
import { url } from "../../../constants";
import styles from "./ProfilePic.module.css";
import { useState } from "react";
const ProfilePic = ({
  className,
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
  title,
}) => {
  const userId = useSelector((state) => state.login.userId);

  const [notSubmitted, setNotSubmitted] = useState(true);

  const handleImageError = (event) => {
    event.target.src = "../../../../assets/dashboard/profilePic.png"; // Replace with URL of default profile picture
  };

  return (
    <>
      {notSubmitted ? (
        <CustomImage
          src={require(`../../../assets/dashboard/profilePic.png`)}
          alt=""
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
          title={title}
          onError={handleImageError}
          className={`${className} ${styles.image}`}
          style={style}
        />
      ) : (
        <CustomImage
          src={`${url.backendBaseUrl}/vrpi-user/get-image/profilePic/${userId}`}
          alt=""
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
          title={title}
          onError={handleImageError}
          className={`${className} ${styles.image}`}
          style={style}
        />
      )}
    </>
  );
};

export default ProfilePic;
