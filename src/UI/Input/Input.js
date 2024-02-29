import React from "react";
import styles from "./CustomInput.module.css"; // Import the CSS Module

const CustomInput = ({
  placeholder,
  value,
  onChange,
  type = "text",
  isBlur,
  isFocus,
  className,
  ref,
  style,
  onBlur,
  onFocus,
  // isInvalid,
}) => {
  const combinedClassName = `${styles.input} ${className}`;

  // Define the dynamic style for borderBottom
  // const dynamicStyle = {
  //   borderBottom: isInvalid ? "2px solid red" : "2px solid #ccc",
  // };

  return (
    <input
      className={combinedClassName}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      ref={ref}
      isFocus={isFocus}
      isBlur={isBlur}
      style={{ style }}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default CustomInput;
