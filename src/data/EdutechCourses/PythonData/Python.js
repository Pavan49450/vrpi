import { PythonCourseContent } from "./CourseContent";
import { PythonSyllabus } from "./Syllabus";
import { PythonToolsAndTechnologyUsed } from "./ToolsAndTechnologyUsed";

export const Python = {
  id: "6",
  type: "upcoming",

  name: "Python",
  courseLink: "/",
  active: false,

  content: [
    " Scholarship on course fee",
    "Virtual Classes",
    "Live Practical Training ",
  ],
  // price: "1799",
  image: "python2.png",
  buttonContent: "Enroll Now",
  language: "English",
  instructor: {
    name: "Gayathri Prasad",
    image: "Instructor1.png",
    description: [
      // "I’m Gayatri. Your Instructor for this Course",
      "Lorem ipsum dolor sit amet consectetur. Sodales eget convallis sem iaculis. Lorem ipsum dolor sit amet consectetur. Sodales eget convallis sem iaculis.",
      "Lorem ipsum dolor sit amet consectetur. Sodales eget convallis sem iaculis. Lorem ipsum dolor sit amet consectetur. Sodales eget convallis sem iaculis.",
    ],
  },
  rating: "4.5",
  reviewsCount: "10k",
  studentsEnrolled: "50",
  updatedDate: "Feb 2014",
  toolsAndTechnologyUsed: PythonToolsAndTechnologyUsed,
  courseContent: PythonCourseContent,
  syllabus: PythonSyllabus,
};
