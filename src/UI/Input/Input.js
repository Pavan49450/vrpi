import React from "react";
import styles from "./CustomInput.module.css"; // Import the CSS Module

const CustomInput = ({
  placeholder,
  value,
  onChange,
  type = "text",

  className,
  ref,
  style,
  onBlur,
  onFocus,
  // isInvalid,
  mandatory, // Add a prop to indicate if the input is mandatory
}) => {
  // Combine the provided className with the CSS module className
  const combinedClassName = `${styles.input} ${className}`;

  // Add the mandatorySign class conditionally
  const inputClasses = mandatory
    ? `${combinedClassName} ${styles.mandatorySign}`
    : combinedClassName;

  return (
    // <div className={styles.inputContainer}>
    <>
      <input
        className={inputClasses}
        type={type}
        placeholder={`${placeholder} ${mandatory === "true" ? "*" : ""}`}
        value={value}
        onChange={onChange}
        ref={ref}
        style={style} // Don't wrap style in another object
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {/* <span className={styles.mandatorySign}>*</span> */}
    </>
  );
};

export default CustomInput;
