import { useSelector } from "react-redux";
import { Devops } from "./EdutechCourses/Devops";
import { JavaFullStackCourse } from "./EdutechCourses/JavaFullStack";
import { useEffect } from "react";
import axios from "axios";
import { url } from "../constants";
import useHttpsAxios from "../hooks/use-httpsAxios";

// export const user = {
//   id: 1,
//   name: "Kattula Pavan Kumar",
//   email: "pavan49450@gmail.com",
//   role: "student",
//   image: "profilePic.png",
//   joinOn: "02/03/2024",
//   mobileNumber: "8945612378",
//   enrolledCourses: [],
// };

const UserDataComponent = () => {
  const { userId } = useSelector((state) => state.login);
  const { sendRequest, responseData, statusCode } = useHttpsAxios();

  useEffect(() => {
    sendRequest({
      url: `${url.backendBaseUrl}/vrpi-user/${userId}`,
      headers: { "Content-Type": "application/json", Accept: "*/*" },
    });
  }, [userId, sendRequest]);

  // useEffect(() => {
  //   console.log("response", responseData);
  //   console.log("status", statusCode);
  // }, [responseData, statusCode]);

  // You might want to handle loading, error, and other states here

  const MandatoryCertificatesData = [
    {
      title: "Income Certificate",
      note: "Note: Upload Income Certificate which is valid for a period of 1 year from the date of issue.",
      uploadedAreNot: responseData?.incomeCertificate || false,
    },
    {
      title: "Aadhaar Card (Front)",
      note: "Note: Make sure address of yours should be visible clearly, and can be of png.,jpeg., pdf of size 5MB. ",
      uploadedAreNot: responseData?.aadharFront || false,
    },
    {
      title: "Aadhaar Card (Back)",
      note: "Note: Make sure address of yours should be visible clearly, and can be of png.,jpeg., pdf of size 5MB. ",
      uploadedAreNot: responseData?.aadharBack || false,
    },
    {
      title: "Passport Size photo",
      note: "Note: Upload your Passport size Photo of size 5MB and can be of png.,jpeg., pdf.",
      uploadedAreNot: responseData?.profilePic || false,
    },
  ];

  // Calculate number of uploaded certificates
  const uploadedCertificates = MandatoryCertificatesData.filter(
    (certificate) => certificate.uploadedAreNot
  ).length;

  // Calculate number of certificates needed to upload
  const certificatesToUpload =
    MandatoryCertificatesData.length - uploadedCertificates;

  return {
    user: responseData,
    MandatoryCertificatesData,
    uploadedCertificates,
    certificatesToUpload,
    enrolledCourses:
      responseData && responseData.enrolledCourses
        ? responseData.enrolledCourses
        : [],
    educationalDetails:
      responseData && responseData.educationalDetails
        ? responseData.educationalDetails
        : null,
  };
};

// export const UserData = GetUserById();

export const user = {
  id: 1,
  name: "Kattula Pavan Kumar",
  email: "pavan49450@gmail.com",
  role: "student",
  image: "profilePic.png",
  joinOn: "02/03/2024",
  gender: "male",
  occupation: "student",
  DOB: "2000-09-02",
  mobileNumber: "8945612378",
  enrolledCourses: [JavaFullStackCourse, Devops],
  joinedDate: "2024-03-12",
  active: true,
  incomeCertificate: "true",
  aadharCardFront: "true",
  address: "12-13/1 , Shiv bhag colony , Hyderabad, Telangana, 500090",
  // aadharCardFront:'true',
  educationalDetails: {
    DegreeIn: "Bachelor’s of Engineering",
    InstituteName: "Stanley college of Engineering & Technology for Women",
    InstituteLocation: "Hyderabad",
    startYear: "2017",
    endYear: "2021",
    grade: "8.5",
  },
};

export default UserDataComponent;
