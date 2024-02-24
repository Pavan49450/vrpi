import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { useDispatch } from "react-redux";
import { setComingSoon } from "../../../store/CommingSoonSlice";

const Card = ({ key, CardDetails }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.card}>
      <div className={style.cardHead}>
        <h2>{CardDetails.name}</h2>
        <div className={style.cardLink}>
          <Link to={CardDetails.Link}>
            <img src={require("../../../assets/ArrowForward.png")} alt=""></img>
          </Link>
        </div>
      </div>
      <div>
        <div className={style.cardContent}>{CardDetails.content}</div>
        <div className={style.checkDetails}>
          <Link to={CardDetails.cardLink}>Check Details</Link>
        </div>
      </div>
      {CardDetails.active ? (
        <div className={style.btn} style={{ width: "80%" }}>
          {CardDetails.buttonContent} {CardDetails.price}
        </div>
      ) : (
        <button
          onClick={() => dispatch(setComingSoon(true))}
          className={style.btn}
          style={{ width: "80%" }}
        >
          {" "}
          {CardDetails.buttonContent} {CardDetails.price}
        </button>
      )}
    </div>
  );
};

export default Card;
