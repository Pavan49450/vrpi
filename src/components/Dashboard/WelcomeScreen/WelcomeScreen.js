import style from "./WelcomeScreen.module.css";

const WelcomeScreen = ({ user }) => {
  return (
    <div className={style.welcomeScreen}>
      <h1>Welcome Back, {user.name}!</h1>
      <p>Always stay updated with your Profile</p>
    </div>
  );
};

export default WelcomeScreen;
