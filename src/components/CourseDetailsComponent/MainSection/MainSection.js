import CustomImage from "../../../UI/Image/Image";
import Rating from "../../../UI/Rating/Rating";
import style from "./MainSection.module.css";
import { useDispatch } from "react-redux";
import { setComingSoon } from "../../../store/ComingSoonSlice";
import Button from "../../../UI/Button/Button";
const MainSection = ({ content }) => {
  const line = <div className={style.line}></div>;

  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <img
        src={require(`../../../assets/courses/${content.image}`)}
        alt=""
        className={style.courseImage}
      />
      <div className={style.content}>
        <h1>
          {content.name}
          {" Course"}
        </h1>
        <p>
          Master Your Skills in our {content.name} Program by building Live
          Projects.
        </p>
        {console.log(content)}
        <div className={style.instructorDetails}>
          <img
            src={require(`../../../assets/courses/${content.instructor.image}`)}
            alt=""
          ></img>
          <span className={style.instructorName}>
            <span style={{ color: "#FBFF41" }}> {content.instructor.name}</span>
            {" (Course Instructor)"}
          </span>
        </div>
        <div className={style.courseHighlights}>
          <div className={style.rating}>
            <Rating value={content.rating} />
            <span>
              {content.rating}
              {" Ratings"}
            </span>
          </div>
          {line}
          <div>
            {content.reviewsCount}
            {"+ Reviews"}
          </div>
          {line}
          <div>
            {content.studentsEnrolled}
            {"+ Student Enrolled"}
          </div>
          {line}
          <div>
            {"Updated on "}
            {content.updatedDate}
          </div>
        </div>
        <div className={style.language}>
          <CustomImage
            src={require(`../../../assets/courses/link.png`)}
            alt=""
          />
          <span>Provided Course Language - “ {content.language} ”</span>
        </div>

        <div className={style.buttons}>
          <Button
            onClick={() => {
              dispatch(setComingSoon(true));
            }}
          >
            Enroll Now
          </Button>
          <Button
            onClick={() => {
              dispatch(setComingSoon(true));
            }}
            className={style.contactUs}
          >
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
