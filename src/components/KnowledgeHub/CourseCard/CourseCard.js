import { Link } from "react-router-dom";
import style from "./CourseCard.module.css";
import { useDispatch } from "react-redux";
import { setComingSoon } from "../../../store/CommingSoonSlice";

const CourseCard = ({ key, CardDetails }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.card}>
      <div className={style.cardSubContainer}>
        <img
          src={require(`../../../assets/courses/${CardDetails.image}`)}
          alt=""
          className={style.courseImage}
        ></img>
        <div className={style.cardContent}>
          <Link to={CardDetails.Link} className={style.link}>
            <button
              onClick={() => dispatch(setComingSoon(true))}
              className={style.btn}
            >
              Learn More
            </button>
          </Link>
          <h2 className={style.cardHeading}>{CardDetails.name}</h2>
          <div
            style={{ display: "flex", gap: "0.3rem", flexDirection: "column" }}
          >
            {CardDetails.content.map((content) => (
              <div className={style.cardBenefits}>
                <img src={require(`../../../assets/courses/done.png`)} alt="" />
                <p>{content}</p>
              </div>
            ))}
          </div>
          <span style={{ color: "#ff6501", fontWeight: 700 }}>
            ₹{CardDetails.price}/-
          </span>
        </div>
      </div>
    </div>
  );
};
{
  /* <div className={style.checkDetails}>
  <Link to={CardDetails.cardLink}>Check Details</Link>
</div> */
}

export default CourseCard;
