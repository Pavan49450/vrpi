import React, { useState } from "react";
import styles from "./ProfileDetailsSection.module.css"; // Import CSS module

const ProfileDetailsSection = ({ user }) => {
  const [selectedOption, setSelectedOption] = useState("details");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className={styles.optionBar}>
        <button
          onClick={() => handleOptionChange("details")}
          className={selectedOption === "details" ? styles.active : ""}
        >
          My Details
        </button>
        <button
          onClick={() => handleOptionChange("documents")}
          className={selectedOption === "documents" ? styles.active : ""}
        >
          My Documents
        </button>
      </div>
      <div className={styles.content}>
        {selectedOption === "details" && (
          <div>
            <h2>My Details</h2>
            {/* Content related to details */}
          </div>
        )}
        {selectedOption === "documents" && (
          <div>
            <h2>My Documents</h2>
            {/* Content related to documents */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDetailsSection;

const Details = ({ user }) => {
  const PersonalDetails = {
    title: "Personal Details",
    content: [
      {
        title: "Name",
        content: user.name,
      },
      {
        title: "Date of Birth",
        content: user.DOB,
      },
      {
        title: "Gender",
        content: user.gender,
      },
      {
        title: "Occupation",
        content: user.occupation,
      },
    ],
  };

  const EducationalDetails = {
    title: "Education details",
    content: [
      {
        title: "Degree in",
        content: user.educationalDetails.degreeIn,
      },
      {
        title: "Institute Name",
        content: user.educationalDetails.InstituteName,
      },
      {
        title: "Institute Location",
        content: user.educationalDetails.InstituteLocation,
      },
      {
        title: "Start Year",
        content: user.educationalDetails.startYear,
      },
      {
        title: "End Year",
        content: user.educationalDetails.endYear,
      },
      {
        title: "Percentage/ CGPA",
        content: user.educationalDetails.grade,
      },
    ],
  };
  //   const PersonalDetails = {
  //     title: "Personal Details",
  //     content: [
  //       {
  //         title: "Name",
  //         content: user.name,
  //       },
  //       {
  //         title: "Date of Birth",
  //         content: user.DOB,
  //       },
  //       {
  //         title: "Gender",
  //         content: user.gender,
  //       },
  //       {
  //         title: "Occupation",
  //         content: user.occupation,
  //       },
  //     ],
  //   };

  const AllDetails = [PersonalDetails];

  return (
    <div>
      <h2>My Details</h2>
      {/* Content related to details */}
    </div>
  );
};
