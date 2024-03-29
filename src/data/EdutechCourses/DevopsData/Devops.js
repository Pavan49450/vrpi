import { DevopsCourseContent } from "./CourseContent";
import { DevopsSyllabus } from "./Syllabus";
import { DevopsToolsAndTechnologyUsed } from "./ToolsAndTechnologyUsed";

export const Devops = {
  id: "2",
  type: "online",
  duration: {
    durationMetric: "months",
    training: 6,
    internship: 3,
    total: 12,
  },
  name: "DevOps with Cloud",
  courseLink: "/",
  active: true,

  content: [" Scholarship on course fee", "Virtual Classes"],
  live: {
    onLive: false,
    meetingLink: "",
  },
  recordedVideos: [
    {
      videoTitle: "Introduction to Java Programming",
      videoDescription: "",
      videoLink: "",
    },
    { videoTitle: "Setting up the JDE", videoDescription: "", videoLink: "" },
    {
      videoTitle: "Introduction to Java Programming",
      videoDescription: "",
      videoLink: "",
    },
    {
      videoTitle: "Introduction to Java Programming",
      videoDescription: "",
      videoLink: "",
    },
  ],

  price: "45000",
  buttonContent: "Enroll Now",
  image: "devopsCourse2.jpg",
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
  toolsAndTechnologyUsed: DevopsToolsAndTechnologyUsed,
  courseContent: DevopsCourseContent,

  syllabus: DevopsSyllabus,
};
