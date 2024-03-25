import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import style from "./Root.module.css";
import { useEffect } from "react";
const ErrorPage = ({ errorData }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Error Page";
  }, []);

  return (
    <main className={style.ErrorContainerMain}>
      {errorData && (
        <div className={style.ErrorContainer}>
          <img src={require(`../assets/errorPage/${errorData.image}`)} alt="" />
          <h2>{errorData.title}</h2>
          <p>{errorData.message}</p>
          <Button
            onClick={() => {
              navigate(errorData.navigateTo);
            }}
          >
            {errorData.navigateButton}
          </Button>
        </div>
      )}
    </main>
  );
};
export default ErrorPage;
