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
      url: `${url.backendBaseUrl}/${userId}`,
      headers: { "Content-Type": "application/json", Accept: "*/*" },
    });
    console.log("response", responseData);
    console.log("status", statusCode);
  }, [userId, sendRequest]);

  // You might want to handle loading, error, and other states here

  return responseData;
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
