import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../../store/UserSlice";
import PersonalDataForm from "./PersonalDataForm/PersonalDataForm";
import style from "./PersonalDetails.module.css";

const PersonalDetails = () => {
  const userState = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      <div
        className={style.BackBtn}
        onClick={() => {
          dispatch(setUser({ role: null, step: null }));
        }}
      >
        <span className={style.arrowIcon}>&#8592;</span>
        <span className={style.backText}>Back</span>
      </div>
      <div className={style.formFrame}>
        <h1 className={style.head}> 1. Personal Details</h1>
        <PersonalDataForm />
      </div>
    </div>
  );
};

export default PersonalDetails;
