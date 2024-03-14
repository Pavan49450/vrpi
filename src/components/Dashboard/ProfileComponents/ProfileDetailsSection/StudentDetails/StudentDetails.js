import styles from "./StudentDetails.module.css";
const StudentDetails = ({ user }) => {
  const PersonalDetails = {
    title: "Personal Details",
    content: [
      {
        title: "Name",
        content: user?.name,
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
        content: user.educationalDetails.DegreeIn,
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
  const AccountDetails = {
    title: "Account Details",
    content: [
      {
        title: "Profile ID",
        content: user.id,
      },
      {
        title: "Date Joined",
        content: user.joinedDate,
      },
      {
        title: "Email",
        content: user.email,
      },
      //   {
      //     title: "Email Status",
      //     content: user.active,
      //   },
    ],
  };

  const AllDetails = [PersonalDetails, EducationalDetails, AccountDetails];

  return (
    <div className={styles.detailsContainer}>
      {AllDetails.map((details, index) => {
        return (
          <div key={index} className={styles.detailsCard}>
            <h2>{details.title}</h2>
            {details.content.map((detail, index) => {
              return (
                <div key={index} className={styles.eachContent}>
                  <p className={styles.contentTitle}>
                    {detail.title}
                    :&nbsp;
                  </p>
                  <p className={styles.contentData}>{detail.content}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default StudentDetails;
