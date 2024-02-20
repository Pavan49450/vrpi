import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import style from "./SwipeablePicture.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
const mainScreenDetails = [
  {
    content:
      "VR PI Group of Companies is a dynamic conglomerate specializing in cutting-edge technology solutions, innovative construction and infrastructure projects, and seamless import-export services.",
    image: "mainScreen1.png",
    link: "",
  },
  {
    content:
      "VR PI Group of Companies is a dynamic conglomerate specializing in cutting-edge technology solutions, innovative construction and infrastructure projects, and seamless import-export services.",
    image: "mainScreen2.png",
    link: "",
  },
  {
    content:
      "VR PI Group of Companies is a dynamic conglomerate specializing in cutting-edge technology solutions, innovative construction and infrastructure projects, and seamless import-export services.",
    image: "mainScreen3.png",
    link: "",
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
          <div
            key={idx}
            className={classes.slide}
            // style={{
            //   backgroundImage: `url(../../assets/${image})`,
            //   width: "100%",
            //   height: "100%",
            // }}
          >
            <div className={style.contentContainer}>
              {/* <div className={style.backlay}>{screen.link}</div> */}
              <h1>{screen.content}</h1>
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
