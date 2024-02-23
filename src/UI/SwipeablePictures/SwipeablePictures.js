import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import style from "./SwipeablePicture.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import HighlightCapsWords from "../HighlightWords/HighlightCapsWords";
import Title from "../Title/Title";
const mainScreenDetails = [
  {
    content: [
      "VR Pi Group of Companies is a dynamic conglomerate specializing in cutting-edge technology solutions, innovative construction and infrastructure projects, and seamless import-export services.",
    ],
    head: "VR Pi",
    image: "mainScreen1.png",
    link: "about",
  },
  {
    head: "Edu-Tech",
    content: [
      "Embarking on an innovative journey, our VR Pi group of companies intertwines with the realm of Edu-Tech, forging new pathways in immersive education experiences.",
    ],
    image: "mainScreen2.png",
    link: "edutech",
  },
  {
    head: "Internships",
    content: [
      "As our VR Pi group of companies aligns with the future, we proudly extend opportunities for immersive Internships, fostering the next generation of visionary talent.",
      "At VR Pi Group of Companies, we stand at the forefront of creativity and superiority across numerous categories, we drive growth and create lasting value for our partners and communities worldwide.",
    ],
    image: "mainScreen3.png",
    link: "internships",
  },
];

const useStyles = makeStyles({
  slide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  controls: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
});

const SwipeablePictures = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % mainScreenDetails.length);
  };

  // const handlePrevious = () => {
  //   setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  // };

  return (
    <div className={style.imageContainer}>
      <SwipeableViews index={index} enableMouseEvents>
        {mainScreenDetails.map((screen, idx) => (
          <div key={idx} className={classes.slide}>
            <div className={style.contentContainer}>
              {/* <h1 className={style.head}>{screen.head}</h1> */}
              {/* <h1 className={style.content}>{screen.content}</h1> */}
              {screen.content.map((content) => (
                // <HighlightCapsWords
                //   sentence={content}
                //   // color="#ff6501"
                //   style={{
                //     color: "#ff6501",
                //     fontSize: "1.5rem",
                //     fontWeight: "600",
                //   }}
                //   className={style.content}
                // />
                <Title
                  title={content}
                  highlightWord={screen.head}
                  styles={{
                    border: "0px solid",
                    fontSize: "1.2rem",
                    color: "white",
                  }}
                ></Title>
              ))}
              <Button onClick={() => navigate(screen.link)}>
                Explore More
              </Button>
            </div>
            <img
              src={require(`../../assets/home/${screen.image}`)}
              alt={`Pictures ${idx + 1}`}
              className={classes.image}
            />
          </div>
        ))}
      </SwipeableViews>
      <div className={classes.controls}>
        {/* <Button onClick={handlePrevious} variant="contained" color="primary">
          Previous
        </Button>
        <Button onClick={handleNext} variant="contained" color="primary">
          Next
        </Button> */}
      </div>
    </div>
  );
};

export default SwipeablePictures;
