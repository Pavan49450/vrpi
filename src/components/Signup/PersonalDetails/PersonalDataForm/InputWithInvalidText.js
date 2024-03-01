import CustomInput from "../../../../UI/Input/Input";
import style from "./PersonalDataForm.module.css";
const InputWithInvalidText = ({ ErrorMessage, inputFields, className }) => {
  return (
    <div className={`${style.InputContainer}  ${className}`}>
      <CustomInput
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
      {
        <p
          className={style.invalidText}
          style={{
            display: inputFields.isInvalid ? "block" : "none",
          }}
        >
          {ErrorMessage}
        </p>
      }
    </div>
  );
};

export default InputWithInvalidText;
