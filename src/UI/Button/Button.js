import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, onClick, className, style }) => {
  const combinedClassName = `${styles.customButton} ${className}`;

  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <button
      className={combinedClassName}
      onClick={(event) => {
        handleClick();
        if (onClick) onClick(event);
      }}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
