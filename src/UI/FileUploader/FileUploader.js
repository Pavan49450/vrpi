import React, { useRef, useState } from "react";
import style from "./FileUploader.module.css"; // Assuming you have a CSS module for styling

const CustomFileUploader = ({ onChange, buttonText, acceptedFileType }) => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && acceptedFileType.includes(file.type)) {
      onChange(file);
      setFileName(file.name); // Set the uploaded file name
    } else {
      // Handle invalid file type
      console.log("Invalid file type");
    }
  };

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className={`${style.inputContainer} `}>
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept={acceptedFileType.join(",")}
      />
      <button className={style.uploadButton} onClick={handleButtonClick}>
        <span style={{ color: fileName ? "#000" : "#a7a7a7" }}>
          {fileName ? fileName : buttonText}
        </span>
        <img
          src={require(`../../assets/login-signup/uploadIcon.png`)}
          alt="Upload Icon"
        />
      </button>
    </div>
  );
};

export default CustomFileUploader;
