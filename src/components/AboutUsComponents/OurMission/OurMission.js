import { useState } from "react";
import style from "./OurMission.module.css";
import Section from "../../../UI/Sections/Section";
const OurMission = () => {
  const [showVision, setShowVision] = useState(false);
  const [showMission, setShowMission] = useState(false);

  return (
    <Section title="Our Vision & Mission">
      <div className={style.container}>
        <div
          className={style.vision}
          style={{ backgroundColor: showVision ? "black" : "white" }}
        >
          <div>
            <div
              className={style.upInvertedCommas}
              style={{ opacity: showVision ? "1" : "0" }}
            >
              <InvertedCommas />
            </div>

            <p
              onMouseEnter={() => setShowVision(true)}
              onMouseLeave={() => setShowVision(false)}
            >
              We see, The VR Pi Group of Companies as a global innovator that
              fosters advancement and delivers enduring value. Our vision is to
              be acknowledged for our relentless commitment to impeccable
              standards, ethical business strategies and innovative ideas that
              enhance the lives of the individuals we serve and our
              stakeholders.
            </p>
          </div>
          <img
            src={require("../../../assets/aboutus/vision.png")}
            alt=""
            onMouseEnter={() => setShowVision(true)}
            onMouseLeave={() => setShowVision(false)}
          ></img>
        </div>
        <div
          className={style.mission}
          style={{ backgroundColor: showMission ? "black" : "white" }}
        >
          <img
            onMouseEnter={() => setShowMission(true)}
            onMouseLeave={() => setShowMission(false)}
            src={require("../../../assets/aboutus/mission.png")}
            alt=""
          ></img>
          <div className={style.missionContent}>
            <p
              onMouseEnter={() => setShowMission(true)}
              onMouseLeave={() => setShowMission(false)}
            >
              The VR Pi Group of Companies is committed to offering brilliance
              beyond a range of Industries using Innovation, collaboration, and
              ethical business strategies to build a viable vision. In the
              arenas of nourishment, imports and exports, technological
              innovations, financial services, construction and infrastructure,
              management, and consulting. Our mission is to perpetually surpass
              client objectives.
            </p>
            <div
              className={style.downInvertedCommas}
              style={{ opacity: showMission ? "1" : "0" }}
            >
              <InvertedCommas
              // style={{ transfrom: "translate(1rem)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const InvertedCommas = () => {
  return (
    <div
      className={style.invertedCommas}
      // style={style}
    >
      {/* <h1>“</h1> */}
      <img src={require("../../../assets/aboutus/whiteCommas.png")} alt="" />
    </div>
  );
};

export default OurMission;
