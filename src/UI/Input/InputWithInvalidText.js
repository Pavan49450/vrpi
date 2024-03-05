import React, { useRef } from "react";
import CustomInput from "./Input";
import style from "./CustomInput.module.css";

const InputWithInvalidText = ({
  ErrorMessage,
  inputFields,
  className,
  mandatory,
}) => {
  const inputRef = useRef(null);

  const handleLabelClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className={`${style.InputContainer}  ${className}`}>
      <CustomInput
        ref={inputRef}
        className={`${style.checkoutFormControl} ${
          inputFields.isInvalid && style.invalid
        }`}
        placeholder={inputFields.placeholder}
        value={inputFields.value}
        onFocus={inputFields.onFocusHandler}
        onBlur={inputFields.onBlurHandler}
        onChange={inputFields.onChange}
        type={inputFields.type}
      />
      <label
        className={` ${
          inputFields.isTouched ? style.transition : style.placeholder
        }`}
        onClick={handleLabelClick} // Added onClick event handler
      >
        {inputFields.placeholder}{" "}
        {mandatory && <span style={{ color: "red" }}>&nbsp;*</span>}
      </label>
      {
        <p
          className={style.invalidText}
          style={{
            opacity: inputFields.isInvalid ? "1" : "0",
          }}
        >
          {ErrorMessage}
        </p>
      }
    </div>
  );
};

export default InputWithInvalidText;
