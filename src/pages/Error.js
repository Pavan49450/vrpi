import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import style from "./Root.module.css";
const ErrorPage = ({ errorData }) => {
  const navigate = useNavigate();

  return (
    <main>
      {/* <h1>Something went wrong :(</h1> */}
      {console.log(errorData)}
      {errorData && (
        <div className={style.ErrorContainer}>
          <img src={require(`../assets/errorPage/${errorData.image}`)} alt="" />
          <h2>{errorData.title}</h2>
          <p>{errorData.message}</p>
          <Button
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </Button>
        </div>
      )}
    </main>
  );
};
export default ErrorPage;
