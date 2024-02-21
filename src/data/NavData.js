export const MainHeaderLinks = [
  { name: "Home", address: "/", active: true },
  { name: "About Us", address: "/about", active: true },
  // { name: "Services", address: "/services" },
  // { name: "Campanies", address: "/companies" },
  { name: "Careers", address: "/careers", active: false },
  // { name: "KnowledgeHub", address: "/knowledgeHub" },
  { name: "Contact Us", address: "/contact", active: false },
];

export const KnowledgeHubHeaderLinks = [
  { name: "Edu-tech", address: "/edutech" },
  { name: "Interships", address: "/internships" },
  { name: "Contact Us", address: "/contact" },
];

export const MainDropdownLinks = [
  {
    name: "Companies",
    address: "/companies",
    active: true,
    content: [
      {
        label: "Construction and Infra",
        description: {
          descriptionHead: "Construction and Infra",
          descriptionContent:
            "Construction and infrastructure: Building the foundation for modern society with expertise, innovation, and sustainable practices. From towering skyscrapers to vital transportation networks, we shape the landscape, enhance connectivity, and drive economic growth for future generations.",
          link: "/construction",
        },
      },
      {
        label: "Financial Services",
        description: {
          descriptionHead: "Financial Services",
          descriptionContent:
            "Our comprehensive financial services encompass wealth management, investment advisory, and risk mitigation strategies. With a client-centric approach and expert guidance, we optimize financial portfolios, ensuring stability, growth, and long-term prosperity. From planning to execution, we prioritize your financial well-being and goals.",
          link: "#",
        },
      },
      {
        label: "Food Processing",
        description: {
          descriptionHead: "Food Processing",
          descriptionContent:
            "Our food processing solutions harness cutting-edge technology and industry expertise to optimize production, ensure quality, and meet market demands. From sourcing to packaging and distribution, we deliver innovative solutions that enhance efficiency, safety, and profitability in the food industry.",
          link: "#",
        },
      },
      {
        label: "Imports & Exports",
        description: {
          descriptionHead: "Imports & Exports",
          descriptionContent:
            "Our global trade solutions seamlessly connect markets, facilitating the flow of goods and services worldwide. With expertise in international commerce, we optimize supply chains, minimize trade barriers, and drive economic growth through efficient imports and exports management.",
          link: "#",
        },
      },
      {
        label: "Management & Consulting",
        description: {
          descriptionHead: "Management & Consulting",
          descriptionContent:
            "Our management and consulting services offer strategic guidance and operational expertise across diverse industries. From organizational optimization to market analysis and implementation, we provide tailored solutions that drive efficiency, growth, and sustainable success for our clients.",
          link: "#",
        },
      },
      {
        label: "Tech Solutions",
        description: {
          descriptionHead: "Tech Solutions",
          descriptionContent:
            "Our technology solutions leverage advanced innovations and specialized expertise to address diverse challenges across industries. From software development to system integration and cybersecurity, we deliver customized strategies that optimize operations, enhance security, and drive digital transformation for businesses worldwide.",
          link: "#",
        },
      },
    ],
  },
  {
    name: "Knowledge Hub",
    address: "/edutech",
    active: true,
    content: [
      {
        label: "Edu-Tech",
        description: {
          descriptionHead: "What is Edutech",
          descriptionContent:
            "EduTech integrates education and technology, employing digital tools such as online platforms, educational apps, and virtual reality to enrich learning. Its objectives include personalized education, enhanced teaching efficacy, and broader access to quality learning. EduTech's ultimate goal is to equip learners with vital skills for thriving in the digital era.",
          link: "edutech",
        },
      },
      {
        label: "Internship",
        description: {
          descriptionHead: "Why an Internship",
          descriptionContent:
            "Internships offer hands-on experience, linking classroom knowledge with practical skills. They allow for networking, skill development, and personal growth. Interns gain insights into their desired fields, enhancing their resumes and paving the way for future career success.",
          link: "internships",
        },
      },
    ],
  },
  {
    name: "Trust and Welfare",
    address: "trust",
    active: false,
    content: [
      {
        label: "Women Welfare Organization",
        description: {
          descriptionHead:
            "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. 1",
          descriptionContent:
            "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ",
          link: "trust",
        },
      },
      {
        label: "Farmer Welfare Organization",
        description: {
          descriptionHead:
            "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. 2",
          descriptionContent:
            "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. ",
          link: "trust",
        },
      },
    ],
  },
];

export const JoinUsBarData = {
  socialMediaIcons: [
    {
      src: "WhatsApp.png",
      alt: "whatsapp",
      address: "#",
    },
    {
      src: "TwitterX.png",
      alt: "twitter x",
      address: "#",
    },
    {
      src: "YouTube.png",
      alt: "Youtube",
      address: "#",
    },
    {
      src: "Email.png",
      alt: "Email",
      address: "#",
    },
    {
      src: "Facebook.png",
      alt: "Facebook",
      address: "#",
    },
    {
      src: "LinkedIn.png",
      alt: "Linkedin",
      address: "#",
    },
    {
      src: "Instagram.png",
      alt: "Instagram",
      address: "#",
    },
  ],
};

export const footerLinks = [
  { name: "Home", address: "/" },
  { name: "About Us", address: "/about" },
  { name: "Campanies", address: "/companies" },
  { name: "Services", address: "/services" },
  { name: "Careers", address: "/careers" },
];

export const quickLinks = [
  { name: "Edutech", address: "/edutech" },
  { name: "Internships", address: "/internships" },
];

export const ContactUs = {
  address: ["Hyderabad [India]", "New Jersey [USA]"],
  phoneNumber: "+91 8790946714",
  infoEmailId: "info@vrpigroup.com",
};
// const MainNavData = {
//   HeaderLinks,
//   dropdownLinks,
//   JoinUsBarData,
// };

// export default MainNavData;
