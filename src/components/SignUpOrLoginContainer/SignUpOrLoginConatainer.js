import CustomImage from "../../UI/Image/Image";
import style from "./SignUpOrLoginContainer.module.css";

const SignUpOrLoginContainer = ({ screenData, children }) => {
  return (
    <div className={style.container}>
      <div>
        <div>
          <div>
            <h1>{screenData.title}</h1>
            <p>{screenData.description}</p>
          </div>
          <CustomImage
            src={require(`../../assets/login-signup/${screenData.image}`)}
            alt=""
          />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SignUpOrLoginContainer;
