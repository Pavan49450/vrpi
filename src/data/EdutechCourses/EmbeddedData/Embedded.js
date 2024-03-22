import { EmbeddedCourseContent } from "./CourseContent";
import { EmbeddedSyllabus } from "./Syllabus";
import { EmbeddedToolsAndTechnologyUsed } from "./ToolsAndTechnologyUsed";

export const Embedded = {
  id: "4",
  type: "offline",

  name: "Embedded & IoT",
  courseLink: "/",
  active: true,

  content: [
    " Scholarship on course fee",
    "Virtual Classes",
    "Live Practical Training ",
  ],
  price: "85000",
  image: "embeddedCourse2.webp",

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
  toolsAndTechnologyUsed: EmbeddedToolsAndTechnologyUsed,
  courseContent: EmbeddedCourseContent,

  syllabus: EmbeddedSyllabus,
};
