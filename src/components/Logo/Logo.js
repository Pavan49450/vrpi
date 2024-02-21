import { useNavigate } from "react-router-dom";
import CustomImage from "../../UI/Image/Image";
import logo from "../../assets/vrpiLogo.png";
import style from "./Logo.module.css";

const Logo = ({ className }) => {
  const navigate = useNavigate();

  return (
    // <div className={style.logoContainer}>
    <CustomImage
      // style={{
      //   cursor: "pointer",
      //   width: "200px",
      //   height: "100%",
      //   objectFit: "contain",
      // }}
      className={`${style.logo}`}
      classForDiv={className}
      src={logo}
      alt="logo"
      title="logo"
      onClick={() => navigate("/")}
    />
    // </div>
  );
};
export default Logo;
