// HideExtraText.js

import React, { useState } from "react";
import styles from "./HideExtraText.module.css";

const HideExtraText = ({ children, className, style, lines }) => {
  const [showExtraText, setShowExtraText] = useState(true);

  const handleToFullText = () => {
    setShowExtraText(!showExtraText);
  };

  return (
    <div className={`${styles.container}`}>
      <p
        className={` ${
          showExtraText ? styles.text : styles.ShowExtraText
        } ${className}`}
        style={{
          ...style,
          WebkitLineClamp: showExtraText ? lines : "unset",
        }}
        onClick={handleToFullText}
      >
        {children}
      </p>
    </div>
  );
};

export default HideExtraText;
