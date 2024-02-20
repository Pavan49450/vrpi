import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, onClick, className, style }) => {
  const combinedClassName = `${styles.customButton} ${className}`;
  return (
    <button className={combinedClassName} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
