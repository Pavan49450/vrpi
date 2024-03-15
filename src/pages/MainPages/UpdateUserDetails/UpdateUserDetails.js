import { useEffect, useState } from "react";
import style from "./UpdateUserDetails.module.css";
import { useNavigate } from "react-router-dom";
import useInput from "../../../hooks/use-Input";
import SignUpOrLoginContainer from "../../../components/SignUpOrLoginContainer/SignUpOrLoginConatainer";
import InputWithInvalidText from "../../../UI/Input/InputWithInvalidText";
import Button from "../../../UI/Button/Button";
import CustomFileUploader from "../../../UI/FileUploader/FileUploader";
import {
  addressValidation,
  mobileNumberValidation,
  nameValidation,
} from "../../../components/InputValidations/InputValidations";
import UserDataComponent from "../../../data/user";

const UpdateUserDetails = () => {
  const loginScreenData = {
    title: "Welcome Back!",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "loginPageImage.svg",
  };

  const userData = UserDataComponent();

  const [formIsValid, setFormIsValid] = useState(false);

  const navigate = useNavigate();

  const firstNameInput = useInput({
    initialValue: (userData.user && userData.user.firstName) || "",
    validateValue: nameValidation,
  });
  const lastNameInput = useInput({
    validateValue: nameValidation,
  });
  const mobileNumberInput = useInput({
    validateValue: mobileNumberValidation,
  });
  const addressInput = useInput({
    validateValue: addressValidation,
  });
  // const profilePicInput = useInput({ validateValue: () => {} });
  // const aadharCardFrontInput = useInput({ validateValue: () => {} });
  // const aadharCardBackInput = useInput({ validateValue: () => {} });
  // const incomeCertificateInput = useInput({ validateValue: () => {} });

  const [aadhaarCardFrontFile, setAadhaarCardFrontFile] = useState(null);
  const [aadhaarCardBackFile, setAadhaarCardBackFile] = useState(null);
  const [passportFile, setPassportFile] = useState(null);
  const [incomeCertificateFile, setIncomeCertificateFile] = useState(null);

  const handleAadhaarCardFrontChange = (file) => {
    setAadhaarCardFrontFile(file);
  };
  const handleAadhaarCardBackChange = (file) => {
    setAadhaarCardBackFile(file);
  };

  const handlePassportChange = (file) => {
    setPassportFile(file);
  };
  const handleIncomeCertificateChange = (file) => {
    setIncomeCertificateFile(file);
  };

  useEffect(() => {
    // Add your form validation logic here
    const isValid =
      firstNameInput.isValid &&
      lastNameInput.isValid &&
      mobileNumberInput.isValid &&
      addressInput.isValid &&
      aadhaarCardFrontFile &&
      passportFile &&
      aadhaarCardBackFile &&
      incomeCertificateFile;

    setFormIsValid(isValid);
  }, [
    firstNameInput.isValid,
    lastNameInput.isValid,
    mobileNumberInput.isValid,
    addressInput.isValid,
    aadhaarCardFrontFile,
    passportFile,
    aadhaarCardBackFile,
    incomeCertificateFile,
  ]);

  const handleSubmit = () => {
    // Add your form submission logic here
    if (formIsValid) {
      const formData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        phoneNumber: mobileNumberInput.value,
        address: addressInput.value,
        profilePic: passportFile,
        aadharFront: aadhaarCardFrontFile,
        aadharBack: aadhaarCardBackFile,
        incomeCertificate: incomeCertificateFile,
      };
      console.log("Form data", formData);
      console.log("User data", userData.user);
      // navigate("/login");
    }
  };

  return (
    <div className={style.screen}>
      <SignUpOrLoginContainer
        screenData={loginScreenData}
        classForMainContent={style.mainContent}
      >
        <div className={style.container}>
          <h1>Update Profile</h1>
          <InputWithInvalidText
            ErrorMessage={"Invalid First Name"}
            className={style.Input}
            inputFields={{
              placeholder: "First Name",
              value: firstNameInput.value,
              isInvalid: firstNameInput.hasError,
              onBlurHandler: firstNameInput.validateValueHandler,
              onFocusHandler: firstNameInput.focusHandler,
              onChange: firstNameInput.valueChangeHandler,
              type: "text",
              isTouched: firstNameInput.isFocused,
            }}
            mandatory="true"
          />
          <InputWithInvalidText
            ErrorMessage={"Invalid Last Name"}
            className={style.Input}
            inputFields={{
              placeholder: "Last Name",
              value: lastNameInput.value,
              isInvalid: lastNameInput.hasError,
              onBlurHandler: lastNameInput.validateValueHandler,
              onFocusHandler: lastNameInput.focusHandler,
              onChange: lastNameInput.valueChangeHandler,
              type: "text",
              isTouched: lastNameInput.isFocused,
            }}
            mandatory="true"
          />
          <InputWithInvalidText
            ErrorMessage={"Invalid Mobile Number"}
            className={style.Input}
            inputFields={{
              placeholder: "Update your Mobile Number",
              value: mobileNumberInput.value,
              isInvalid: mobileNumberInput.hasError,
              onBlurHandler: mobileNumberInput.validateValueHandler,
              onFocusHandler: mobileNumberInput.focusHandler,
              onChange: mobileNumberInput.valueChangeHandler,
              type: "text",
              isTouched: mobileNumberInput.isFocused,
            }}
            mandatory="true"
          />
          <InputWithInvalidText
            ErrorMessage={"Invalid Address"}
            className={style.Input}
            inputFields={{
              placeholder: "Update your Address",
              value: addressInput.value,
              isInvalid: addressInput.hasError,
              onBlurHandler: addressInput.validateValueHandler,
              onFocusHandler: addressInput.focusHandler,
              onChange: addressInput.valueChangeHandler,
              type: "text",
              isTouched: addressInput.isFocused,
            }}
            mandatory="true"
          />
          <CustomFileUploader
            onChange={handlePassportChange}
            buttonText="Upload Profile Picture"
            acceptedFileType={["image/jpeg", "image/png", "image/pdf"]}
          />
          <ul>
            {/* <li>Should contain Front & Back</li> */}
            <li>Can be png. pdf. jpeg</li>
            <li>File size should be 5MB</li>
          </ul>
          <CustomFileUploader
            onChange={handleAadhaarCardFrontChange}
            buttonText="Upload Aadhaar Card (Front)"
            acceptedFileType={["image/jpeg", "image/png", "image/pdf"]}
          />
          <ul>
            {/* <li>Should contain Front & Back</li> */}
            <li>Can be png. pdf. jpeg</li>
            <li>File size should be 5MB</li>
          </ul>
          <CustomFileUploader
            onChange={handleAadhaarCardBackChange}
            buttonText="Upload Aadhaar Card (Back)"
            acceptedFileType={["image/jpeg", "image/png", "image/pdf"]}
          />
          <ul>
            {/* <li>Should contain Front & Back</li> */}
            <li>Can be png. pdf. jpeg</li>
            <li>File size should be 5MB</li>
          </ul>
          <CustomFileUploader
            onChange={handleIncomeCertificateChange}
            buttonText="Upload Income Certificate"
            acceptedFileType={["image/jpeg", "image/png", "image/pdf"]}
          />
          <ul>
            {/* <li>Should contain Front & Back</li> */}
            <li>Can be png. pdf. jpeg</li>
            <li>File size should be 5MB</li>
          </ul>
          <div className={style.submitBtn}>
            <Button
              onClick={handleSubmit}
              disabled={!formIsValid}
              style={{ backgroundColor: !formIsValid && "#ccc" }}
            >
              Submit
            </Button>
          </div>
        </div>
      </SignUpOrLoginContainer>
    </div>
  );
};

export default UpdateUserDetails;
