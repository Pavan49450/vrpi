const mainContent = {
  head: '"The best way to predict the future is to create it."',
  description:
    '"Internships offer a unique opportunity to step out of your comfort zone, challenge yourself, and discover what you are truly capable of achieving."',
  button: { name: "Check now", link: "register", active: false },
};

const WhatIsSection = {
  title: "Why an Internship?",
  highlightWord: "Internships",
  image: "Internship1.png",
  description:
    "Internships offer hands-on experience, linking classroom knowledge with practical skills. They allow for networking, skill development, and personal growth. Interns gain insights into their desired fields, enhancing their resumes and paving the way for future career success.",
};

const cards = {
  courses: false,
  internships: true,
  internshipSections: [
    {
      title: "Internships on",
      highlightWord: "Internships",
      internships: [
        {
          name: "Software Development",
          courseLink: "#",
          active: false,
          content:
            "Skills Required: Machine Learning, Linux, Python, Java, Amazon Web Services, Back End and SQL.",
          buttonContent: "Apply",
        },
        {
          name: "UI/UX Designing",
          courseLink: "#",
          active: false,

          content:
            "Skills Required: User Research, Wireframing, Prototyping, Visual Design, IA, Interaction design, Usability Testing",
          buttonContent: "Apply",
        },
        {
          name: "Digital Marketing",
          courseLink: "#",
          active: false,

          content:
            "Skills Required: Video Marketing, SEO & SEM, Content Marketing, Data & Analytics, Design Thinking and Planning, Social Media, Email Marketing",
          // price: "$99.99",
          buttonContent: "Apply",
        },
        {
          name: "Chartered Accountant",
          courseLink: "#",
          active: false,

          content:
            "Skills Required: Problem Solving, Financial analysis, Business Communication, Analytical skills",
          // price: "$99.99",
          buttonContent: "Apply",
        },
        {
          name: "Civil Engineering",
          courseLink: "/javascript-course",
          active: false,

          content:
            "Skills Required: Maths & Physics Proficiency, Basic knowledge on foundation",
          buttonContent: "Apply",
        },
      ],
    },
    {
      title: "Comming Soon Internships",
      highlightWord: "Internships",
      internships: [
        {
          name: "Hotel Management",
          courseLink: "",
          active: false,

          content:
            "Skills Required: Empathy, Multi tasking and Management, Leadership, Customer Service",
          buttonContent: "Apply",
        },
        {
          name: "Graphic Designing",
          courseLink: "",
          active: false,

          content:
            "Skills Required: Adobe Creative Suite, including Photoshop, InDesign, and Illustrator, Creativity, Color theory, Typography, Communication, Drawing, Problem-solving.",
          buttonContent: "Apply",
        },
      ],
    },
  ],
};

const benefitsData = {
  title: "Internships Benefits",
  highlightWord: "Internships",
  head: "  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
  benefits: [
    "Lorem ipsum dolor sit",
    "Lorem ipsum dolor sit ",
    "Lorem ipsum dolor sit ",
    "Lorem ipsum dolor sit ",
  ],
  image: "Internship2.png",
};

// const InstructorSection = {
//   title: "Edu-Tech Instructors",
//   highlightWord: "Edu-Tech",
//   Instructors: [
//     {
//       name: "Neil",
//       address: "Instructor1.png",
//       technologies: "Python Full Stack",
//     },
//     {
//       name: "Aryan",
//       address: "Instructor2.png",
//       technologies: "Java Full Stack",
//     },
//     { name: "Chritee", address: "Instructor3.png", technologies: "Devops" },
//     {
//       name: "Lucy",
//       address: "Instructor4.png",
//       technologies: "Embedded & Iot",
//     },
//   ],
// };

const partnersWith = {
  title: "Partners With",
  partners: [
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
  ],
};

const FAQs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur ? ",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur ? ",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur ? ",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur ? ",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ",
  },
];

export const InternshipsData = {
  mainContent,
  WhatIsSection,
  cards,
  benefitsData,
  partnersWith,
  FAQs,
};
