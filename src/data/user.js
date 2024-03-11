import { Devops } from "./EdutechCourses/Devops";
import { JavaFullStackCourse } from "./EdutechCourses/JavaFullStack";

// export const user = {
//   id: 1,
//   name: "Kattula Pavan Kumar",
//   email: "pavan49450@gmail.com",
//   role: "student",
//   image: "Instructor4.png",
//   joinOn: "02/03/2024",
//   mobileNumber: "8945612378",
//   enrolledCourses: [],
// };
export const user = {
  id: 1,
  name: "Kattula Pavan Kumar",
  email: "pavan49450@gmail.com",
  role: "student",
  image: "Instructor4.png",
  joinOn: "02/03/2024",
  mobileNumber: "8945612378",
  enrolledCourses: [JavaFullStackCourse, Devops],
  educationalDetails: {
    DegreeIn: "Bachelor’s of Engineering",
    InstituteName: "Stanley college of Engineering & Technology for Women",
    InstituteLocation: "Hyderabad",
    startYear: "2017",
    endYear: "2021",
    grade: "8.5",
  },
};
