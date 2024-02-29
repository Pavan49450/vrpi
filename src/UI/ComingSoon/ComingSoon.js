import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ComingSoon.module.css";
import BackgroundOverlay from "../Backlay/Backlay";
import { setComingSoon } from "../../store/ComingSoonSlice";

const ComingSoon = () => {
  const dispatch = useDispatch();
  const isComingSoon = useSelector((state) => state.comingSoon.isComingSoon);

  const handleCloseOverlay = () => {
    dispatch(setComingSoon(false));
  };

  const handleOpenOverlay = () => {
    dispatch(setComingSoon(true));
  };

  useEffect(() => {
    // Scroll to the top of the page with smooth transition when the overlay is active
    if (isComingSoon) {
      document.documentElement.style.scrollBehavior = "smooth";
      window.scrollTo(0, 0);
      // Reset scroll behavior to auto after the animation completes
      const resetScrollBehavior = () => {
        document.documentElement.style.scrollBehavior = "auto";
        window.removeEventListener("scroll", resetScrollBehavior);
      };
      window.addEventListener("scroll", resetScrollBehavior);
    }
  }, [isComingSoon]);

  return (
    <>
      {isComingSoon && (
        <BackgroundOverlay onClose={handleCloseOverlay}>
          <div className={style.commingSoon}>
            <img
              src={require(`../../assets/commingSoon.jpg`)}
              alt=""
              className={style.backgroundImage}
            />
            <div className={style.content}>
              <div className={style.closeBtn} onClick={handleCloseOverlay}>
                &#10005;
              </div>
              <h1>Launching Soon</h1>
              <p>Website is under Construction</p>
            </div>
          </div>
        </BackgroundOverlay>
      )}
    </>
  );
};

export default ComingSoon;
