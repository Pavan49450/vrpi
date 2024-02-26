const mainContent = {
  head: "For hundreds of succesful students here embrace our new COMMUNITY explore and grow",
  description: "If you are DETERMINED to learn, no one can stop YOU!!",
  button: { name: "Register", link: "register", active: false },
};

const WhatIsSection = {
  title: "What is Edu-Tech Program ?",
  highlightWord: "Edu-Tech",
  image: "Edutech1.png",
  description:
    "EduTech integrates education and technology, employing digital tools such as online platforms, educational apps, and virtual reality to enrich learning. Its objectives include personalized education, enhanced teaching efficacy, and broader access to quality learning. EduTech's ultimate goal is to equip learners with vital skills for thriving in the digital era.",
};

const Courses = [
  {
    id: "1",
    name: "Java Full-Stack",
    courseLink: "/",
    active: false,
    type: "online",
    content: [" Scholarship on course fee", "Virtual Classes"],

    price: "34999",
    buttonContent: "Enroll Now",
    image: "javaCourse2.jpg",
  },
  {
    id: "2",
    type: "online",

    name: "DevOps with Cloud",
    courseLink: "/",
    active: false,

    content: [" Scholarship on course fee", "Virtual Classes"],

    price: "24999",
    buttonContent: "Enroll Now",
    image: "devopsCourse2.jpg",
  },
  {
    id: "3",
    type: "online",

    name: "UI/UX Designing",
    courseLink: "/",
    active: false,

    content: [" Scholarship on course fee", "Virtual Classes"],
    price: "34999",
    buttonContent: "Enroll Now",
    image: "UIUXCourse2.webp",
  },
  {
    id: "4",
    type: "offline",

    name: "Embedded & IoT",
    courseLink: "/",
    active: false,

    content: [
      " Scholarship on course fee",
      "Virtual Classes",
      "Live Practical Training ",
    ],
    price: "1799",
    image: "embeddedCourse2.webp",

    buttonContent: "Enroll Now",
  },
  {
    id: "5",
    type: "offline",

    name: "Artificial Intelligence",
    courseLink: "/",
    active: false,

    content: [
      " Scholarship on course fee",
      "Virtual Classes",
      "Live Practical Training ",
    ],
    price: "1799",
    image: "aiCourse2.webp",
    buttonContent: "Enroll Now",
  },
  {
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
  },
];

const benefitsData = {
  title: "Edu-Tech Benefits",
  highlightWord: "Edu-Tech",
  head: "EduTech has the potential to transform education, making it more accessible, engaging, and effective for learners of all ages and backgrounds.",
  benefits: ["Certification", "Recorded Videos", "Classes for free"],
  image: "Edutech3.png",
};

const InstructorSection = {
  title: "Edu-Tech Instructors",
  highlightWord: "Edu-Tech",
  Instructors: [
    {
      name: "Neil",
      address: "Instructor1.png",
      technologies: "Python Full Stack",
    },
    {
      name: "Aryan",
      address: "Instructor2.png",
      technologies: "Java Full Stack",
    },
    { name: "Chritee", address: "Instructor3.png", technologies: "Devops" },
    {
      name: "Lucy",
      address: "Instructor4.png",
      technologies: "Embedded & Iot",
    },
    {
      name: "Aryan",
      address: "Instructor2.png",
      technologies: "Java Full Stack",
    },
    { name: "Chritee", address: "Instructor3.png", technologies: "Devops" },
    {
      name: "Lucy",
      address: "Instructor4.png",
      technologies: "Embedded & Iot",
    },
    {
      name: "Aryan",
      address: "Instructor2.png",
      technologies: "Java Full Stack",
    },
    { name: "Chritee", address: "Instructor3.png", technologies: "Devops" },
    {
      name: "Lucy",
      address: "Instructor4.png",
      technologies: "Embedded & Iot",
    },
  ],
};

const FAQs = [
  {
    question: "How many courses can be taken for enrollment?",
    answer: "Multiple courses can be taken for enrollment in Edutech.",
  },
  {
    question:
      "How long does it typically take for a student to complete the course? ",
    answer:
      "Completion time varies, typically depending on course complexity and commitment,Approx time is 3-6months.",
  },
  {
    question:
      "For what kinds of jobs and positions does the program train its students?",
    answer:
      "The program trains students for diverse roles in technology, education, instructional design, e-learning development, and related fields.",
  },
  {
    question: "How old do i have to be to take on online class?",
    answer:
      "Age requirements for online classes vary by program and institution.",
  },
];

export const EduTechData = {
  mainContent,
  WhatIsSection,
  benefitsData,
  // InstructorSection,
  Courses,
  FAQs,
};
