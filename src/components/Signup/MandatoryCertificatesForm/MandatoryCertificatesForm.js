import { useEffect, useState } from "react";
import CustomFileUploader from "../../../UI/FileUploader/FileUploader";
import style from "./MandatoryCertificatesForm.module.css";
import Button from "../../../UI/Button/Button";
import InputWithInvalidText from "../../../UI/Input/InputWithInvalidText";
import useInput from "../../../hooks/use-Input";
import { annualIncomeValidator } from "../../InputValidations/InputValidations";
import useHttpsAxios from "../../../hooks/use-httpsAxios";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../../../constants";
import { CircularProgress } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { setMessage } from "../../../store/MessageDisplay/MessageActions";
import LoadingButton from "../../../UI/LoadingButton/LoadingButton";

const MandatoryCertificatesForm = () => {
  const [incomeCertificateFile, setIncomeCertificateFile] = useState(null);
  const [aadhaarCardFrontFile, setAadhaarCardFrontFile] = useState(null);
  const [aadhaarCardBackFile, setAadhaarCardBackFile] = useState(null);
  const [passportFile, setPassportFile] = useState(null);

  // const annualIncomeInput = useInput({ validateValue: annualIncomeValidator });

  const [formIsValid, setFormIsValid] = useState(false);

  const handleIncomeCertificateFileChange = (file) => {
    setIncomeCertificateFile(file);
  };
  const handleAadhaarCardFrontChange = (file) => {
    setAadhaarCardFrontFile(file);
  };
  const handleAadhaarCardBackChange = (file) => {
    setAadhaarCardBackFile(file);
  };

  const handlePassportChange = (file) => {
    setPassportFile(file);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Check the validity of all input fields and set formIsValid accordingly
    // const isIncomeValid = annualIncomeInput.isValid;
    const isAadhaarCardFrontValid = aadhaarCardFrontFile !== null;
    const isAadhaarCardBackValid = aadhaarCardBackFile !== null;
    const isPassportValid = passportFile !== null;
    const isIncomeValid = incomeCertificateFile !== null;

    setFormIsValid(
      isAadhaarCardFrontValid &&
        isAadhaarCardBackValid &&
        isPassportValid &&
        isIncomeValid
    );
  }, [
    // annualIncomeInput.isValid,
    aadhaarCardFrontFile,
    aadhaarCardBackFile,
    passportFile,
    incomeCertificateFile,
  ]);

  useEffect(() => {});

  const userId = useSelector((state) => state.login.userId);

  const { sendRequest, responseData, isLoading, statusCode, error } =
    useHttpsAxios();

  const SuccessResponseHandler = () => {
    dispatch(setMessage("Uploaded your Certificates Successfully", "success"));

    setTimeout(() => {
      navigate("/dashboard");
    }, [1500]);
  };

  useEffect(() => {
    if (formIsValid && (statusCode === 200 || statusCode === 201)) {
      console.log(responseData);
      SuccessResponseHandler();
    } else if (statusCode < 0 && statusCode > 202) {
      console.log(error);
      console.log(responseData);
    }
  });

  const handleSubmit = () => {
    if (formIsValid) {
      const formData = {
        incomeCert: incomeCertificateFile,
        // annualIncome: annualIncomeInput.value,
        aadharFront: aadhaarCardFrontFile,
        aadharBack: aadhaarCardBackFile,
        profilePhoto: passportFile,
      };
      console.log(formData);
      // SuccessResponseHandler();
      sendRequest({
        url: `${url.backendBaseUrl}/vrpi-user/update-doc/${userId}`,
        method: "PUT",
        data: formData,
      });
    }
  };

  const Line1 = (
    <div className={style.line1}>
      <div className={style.uploadInputs}>
        <CustomFileUploader
          onChange={handleIncomeCertificateFileChange}
          buttonText="Income Certificate"
          acceptedFileType={[
            "image/jpeg",
            "image/png",
            "image/pdf",
            "application/pdf",
          ]}
          mandatory
        />
        <ul>
          <li>Can be png. pdf. jpeg</li>
          <li>File size should be 5MB</li>
        </ul>
      </div>
      {/* <InputWithInvalidText
        ErrorMessage={"Invalid Annual Income"}
        className={style.Input}
        inputFields={{
          placeholder: "Annual Income",
          value: annualIncomeInput.value,
          isInvalid: annualIncomeInput.hasError,
          onBlurHandler: annualIncomeInput.validateValueHandler,
          onFocusHandler: annualIncomeInput.focusHandler,
          onChange: annualIncomeInput.valueChangeHandler,
          type: "text",
          isTouched: annualIncomeInput.isFocused,
        }}
        mandatory="true"
      /> */}
    </div>
  );

  const Line2 = (
    <div className={style.line3}>
      <div className={style.uploadInputs}>
        <CustomFileUploader
          onChange={handleAadhaarCardFrontChange}
          buttonText="Upload Aadhaar Card(Front)"
          acceptedFileType={[
            "image/jpeg",
            "image/png",
            "image/pdf",
            "application/pdf",
          ]}
          mandatory
        />
        <ul>
          <li>Can be png. pdf. jpeg</li>
          <li>File size should be 5MB</li>
        </ul>
      </div>
      <div className={style.uploadInputs}>
        <CustomFileUploader
          onChange={handleAadhaarCardBackChange}
          buttonText="Upload Aadhaar Card(Back)"
          acceptedFileType={[
            "image/jpeg",
            "image/png",
            "image/pdf",
            "application/pdf",
          ]}
          mandatory
        />
        <ul>
          <li>Can be png. pdf. jpeg</li>
          <li>File size should be 5MB</li>
        </ul>
      </div>
    </div>
  );

  const Line3 = (
    <div className={style.line3}>
      <div className={style.uploadInputs}>
        <CustomFileUploader
          onChange={handlePassportChange}
          buttonText="Upload Profile Photo"
          acceptedFileType={["image/jpeg", "image/png"]}
          mandatory
        />
        <ul>
          <li>Can be png, jpeg</li>
          <li>File size must should be 5MB</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className={style.form}>
      <h1 className={style.title}>Fill the details</h1>

      <p className={style.note}>
        Note : All <span className={style.important}>*</span> fields are
        Mandatory
      </p>
      <div className={style.formFields}>
        {Line1}
        {Line2}
        {Line3}
      </div>
      <div className={style.buttonContainer}>
        <LoadingButton
          onClick={handleSubmit}
          className={style.submitBtn}
          disabled={!formIsValid}
          style={{ backgroundColor: !formIsValid && "#ccc" }}
          doNotScrollToTop={true}
          isLoading={isLoading}
          text={"Sava & Submit"}
          loaderColor={"white"}
        ></LoadingButton>
      </div>
    </div>
  );
};

export default MandatoryCertificatesForm;
