import styles from "./StudentDetails.module.css";

const StudentDetails = ({ user }) => {
  // Define default values for each section if user data is undefined
  const defaultPersonalDetails = {
    title: "Personal Details",
    content: [
      {
        title: "Name",
        content: `${user?.firstName || ""} ${user?.lastName || ""}`,
      },
      {
        title: "Date of Birth",
        content: user?.dateOfBirth || "",
      },
      {
        title: "Gender",
        content: user?.gender || "",
      },
      {
        title: "Occupation",
        content: user?.occupation || "",
      },
    ],
  };

  const defaultEducationalDetails = {
    title: "Education details",
    content: user?.educationalDetails
      ? [
          {
            title: "Degree in",
            content: user.educationalDetails.DegreeIn || "No data",
          },
          {
            title: "Institute Name",
            content: user.educationalDetails.InstituteName || "No data",
          },
          {
            title: "Institute Location",
            content: user.educationalDetails.InstituteLocation || "No data",
          },
          {
            title: "Start Year",
            content: user.educationalDetails.startYear || "No data",
          },
          {
            title: "End Year",
            content: user.educationalDetails.endYear || "No data",
          },
          {
            title: "Percentage/ CGPA",
            content: user.educationalDetails.grade || "No data",
          },
        ]
      : [
          {
            title: "",
            content: "No educational data available",
            type: "onData",
          },
        ],
  };

  const defaultAccountDetails = {
    title: "Account Details",
    content: [
      {
        title: "Profile ID",
        content: user?.id || "",
      },
      {
        title: "Date Joined",
        content: user?.joinedDate || "",
      },
      {
        title: "Email",
        content: user?.email || "",
      },
    ],
  };

  // Combine default values with user-provided values
  const AllDetails = [
    defaultPersonalDetails,
    defaultEducationalDetails,
    defaultAccountDetails,
  ];

  return (
    <div className={styles.detailsContainer}>
      {AllDetails.map((details, index) => (
        <div key={index} className={styles.detailsCard}>
          <h2>{details.title}</h2>
          {details.content.map((detail, index) => (
            <div key={index} className={styles.eachContent}>
              <p className={styles.contentTitle}>
                {detail.title}
                {detail.type ? "" : ":"}&nbsp;
              </p>
              <p className={styles.contentData}>{detail.content}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StudentDetails;
