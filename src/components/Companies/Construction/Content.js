import ContactUsForm from "./ContactForm/ContactUsForm";
import style from "./Content.module.css";

const Content = () => {
  const emailInputHandle = (e) => {
    // console.log(e.target.value);
  };
  return (
    <>
      <div className={style.container1}>
        <div className={style.details}>
          <h2>We are best at providing you the</h2>
          <h1>Quality</h1>
          <p>
            ullamcorper blandit arcu arcu lobortis elit adipiscing arcu. Sem
            aliquam in tristique tortor eu auctor. Imperdiet potenti nulla
            consequat tincidunt pellentesque. Erat viverra feugiat ut
          </p>
          <div>
            {/* <button className={style.videoBtn}>
              <img
                src={require("../../../assets/play.png")}
                alt="play icon"
              ></img>
              Watch Video
            </button> */}
          </div>
        </div>
        <div className={style.constructionImg}>
          <img
            src={require("../../../assets/construction1.png")}
            alt="Contruction mockup"
          ></img>
        </div>
      </div>
      <div className={style.contactUs}>
        <div className={style.head}>
          <img src={require("../../../assets/homeIcon.png")} alt="Home icon" />
          <div style={{ color: "white", fontSize: " 1.2rem" }}>
            non justo adipiscing non justo adipiscing
          </div>
        </div>
        <div className={style.contactUs_inputs}>
          <ContactUsForm />
        </div>
      </div>
      <div className={style.container2}>
        <div className={style.joinUs}>
          <h2>Join our community</h2>
          <div className={style.searchContainer}>
            <input
              type="search"
              className={style.searchInput}
              placeholder="Enter your mail address"
              onChange={emailInputHandle}
            />
            <button className={style.searchButton}>Join Us</button>
          </div>
        </div>
      </div>
      <div className={style.strenghts}>
        <h2>Discover our Strengths</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sodales eget convallis sem
          iaculis. Nunc nulla tempus dictumst elementum placerat sit donec
          malesuada. In turpis tempor suspendisse malesuada vivamus pellentesque
          ac blandit.
        </p>
        <div className={style.strenghtCards}>
          <div className={style.cards}>
            <img
              src={require("../../../assets/star.png")}
              alt="Star icon"
            ></img>
            <span>Quality Check</span>
          </div>
          <div className={style.cards}>
            <img
              src={require("../../../assets/team.png")}
              alt="Star icon"
            ></img>
            <span>Customer Centric Approach</span>
          </div>
          <div className={style.cards}>
            <img
              src={require("../../../assets/group.png")}
              alt="Star icon"
            ></img>
            <span>Expertise Team</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
