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
import { useSelector } from "react-redux";
import useHttpsAxios from "../../../hooks/use-httpsAxios";
import { url } from "../../../constants";

const UpdateUserDetails = () => {
  const loginScreenData = {
    title: "Welcome Back!",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "loginPageImage.svg",
  };

  const [formIsValid, setFormIsValid] = useState();

  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData.userData);

  // useEffect(() => {
  //   console.log(
  //     userData.user.firstName,
  //     userData.user.lastName,
  //     userData.user.phoneNumber,
  //     userData.user.address,
  //     userData.user.aadharFront,
  //     userData.user.aadharBack,
  //     userData.user.passportFile,
  //     userData.user.incomeCertificate
  //   );
  // }, []);

  const firstNameInput = useInput({
    initialValue: userData.user.firstName,
    // initialValue: "Hey",
    validateValue: nameValidation,
  });
  const lastNameInput = useInput({
    initialValue: userData.user.lastName,

    validateValue: nameValidation,
  });
  const mobileNumberInput = useInput({
    initialValue: userData.user.phoneNumber,

    validateValue: mobileNumberValidation,
  });
  const addressInput = useInput({
    initialValue: userData.user.address,

    validateValue: addressValidation,
  });
  // const profilePicInput = useInput({ validateValue: () => {} });
  // const aadharCardFrontInput = useInput({ validateValue: () => {} });
  // const aadharCardBackInput = useInput({ validateValue: () => {} });
  // const incomeCertificateInput = useInput({ validateValue: () => {} });

  const [aadhaarCardFrontFile, setAadhaarCardFrontFile] = useState(
    userData.user.aadharFront
  );
  const [aadhaarCardBackFile, setAadhaarCardBackFile] = useState(
    userData.user.aadharBack
  );
  const [passportFile, setPassportFile] = useState(userData.user.passportFile);
  const [incomeCertificateFile, setIncomeCertificateFile] = useState(
    userData.user.incomeCertificate
  );

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

  const { sendRequest, isLoading, error, responseData, statusCode } =
    useHttpsAxios();

  const handleSubmit = () => {
    // Add your form submission logic here
    if (formIsValid) {
      const formData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        phoneNumber: mobileNumberInput.value,
        address: addressInput.value,

        fathersName: userData.user.fatherName,
        gender: userData.user.gender,
        dateOfBirth: userData.user.dateOfBirth,
        email: userData.user.email,

        occupation: userData.user.occupation,
        aadharCardNumber: userData.user.aadharCardNumber,
        // "aadharFront": "YWFkaGFyX2Zyb250MTAuanBn",
        // "aadharBack": "YWFkaGFyX2JhY2sxMC5qcGc=",
        // "profilePic": "cHJvZmlsZTEwLmpwZw==",
        // "incomeCert": null,
        // profilePic: passportFile,
        // aadharFront: aadhaarCardFrontFile,
        // aadharBack: aadhaarCardBackFile,
        // incomeCertificate: incomeCertificateFile,
      };
      console.log("Form data", formData);
      console.log("User data", userData.user);

      sendRequest({
        url: `${url.backendBaseUrl}/vrpi-user/update-user/${userData.user.id}`,
        method: "PUT",
        body: formData,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (statusCode === 200 || statusCode === 201) {
        console.log(responseData);
      }
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
