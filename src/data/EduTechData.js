const mainContent = {
  head: "For hundreds of succesful students here embrace our new COMMUNITY explore and grow",
  description: "If you are DETERMINED to learn, no one can stop YOU!!",
  button: "Register",
};

const WhatIsSection = {
  title: "What is Edu-Tech Program ?",
  highlightWord: "Edu-Tech",
  image: "Edutech1.png",
  description:
    "EduTech integrates education and technology, employing digital tools such as online platforms, educational apps, and virtual reality to enrich learning. Its objectives include personalized education, enhanced teaching efficacy, and broader access to quality learning. EduTech's ultimate goal is to equip learners with vital skills for thriving in the digital era.",
};

const cards = {
  courses: true,
  internships: false,
  multipleCardsSection: {
    paidCourse: {
      title: "Edu-Tech Free Courses",
      highlightWord: "Edu-Tech",
      courses: [
        {
          name: "Java Full-Stack",
          courseLink: "/",
          content: "Free Certificate Course and Virtual Classes",
          price: "₹1799",
          buttonContent: "Enroll Now",
        },
        {
          name: "DevOps with Cloud",
          courseLink: "/",
          content: "Free Certificate Course and Virtual Classes",
          price: "₹1799",
          buttonContent: "Enroll Now",
        },
      ],
    },

    freeCourse: {
      type: "freeCourse",
      title: "Edu-Tech Paid Courses",
      highlightWord: "Edu-Tech",

      courses: [
        {
          name: "Embedded & IoT",
          courseLink: "/",
          content:
            "Certificate Course, Virtual Classes and Live Practical Training",
          buttonContent: "Enroll Now",
        },
        {
          name: "Artificial Intelligence",
          courseLink: "/",
          content:
            "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ",
          // price: "₹1799",
          buttonContent: "Enroll Now",
        },
      ],
    },
  },
};

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
    answer:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ",
  },
  {
    question:
      "How long does it typically take for a student to complete the course? ",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ",
  },
  {
    question:
      "For what kinds of jobs and positions does the program train its students?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ",
  },
  {
    question: "How old do i have to be to take on online class?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ",
  },
];

export const EduTechData = {
  mainContent,
  WhatIsSection,
  cards,
  benefitsData,
  InstructorSection,
  FAQs,
};
