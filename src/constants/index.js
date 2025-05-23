
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  // firstTestimonial,
  // secondTestimonial,
  // thirdTestimonial,
} from '../assets'


// Import Tekisky separately

import ecell from "../assets/company/ecell.png";
import gssoc from "../assets/company/gssoc.png";
import hacktoberfest from "../assets/company/hacktoberfest.png";
import nyaysetu from "../assets/company/nyaysetu.png";
// import amazon from "../assets/company/amazon.png";
// import zyntra from "../assets/company/zyntra.png";
import sleep from "../assets/company/sleep.png";
import movie from "../assets/company/movie.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "DSA enthusiast",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Hackathon warrior",
    icon: backend,
  },
  {
    title: "Exploring AI & Blockchain",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Campus Ambassador",
    company_name: "E-Cell, Delhi Technological University (DTU)",
    icon: ecell,
    iconBg: "#383E56",
    date: "Jan 2025 — Present",
    points: [
      "Driving innovation and entrepreneurship as a Campus Ambassador at E-Cell DTU.",
      "Organizing campus events, workshops, and startup competitions.",
      "Engaging with students and fostering a culture of entrepreneurship.",
    ],
  },
  {
    title: "Contributor",
    company_name: "GirlScript Summer of Code",
    icon: gssoc,
    iconBg: "#383E56",
    date: "Oct 2024 — Jan 2025",
    points: [
      "Contributed to open-source projects as a participant in GirlScript Summer of Code.",
      "Collaborated with maintainers and fellow contributors to enhance open-source projects.",
      "Enhanced coding and collaboration skills while working on real-world projects.",
    ],
  },
  {
    title: "Contributor",
    company_name: "Hacktoberfest",
    icon: hacktoberfest,
    iconBg: "#383E56",
    date: "Oct 2024",
    points: [
      "Participated in Hacktoberfest and contributed to multiple open-source repositories.",
      "Worked on issues, pull requests, and documentation improvements.",
      "Expanded technical knowledge and open-source contribution experience.",
    ],
  },
];



const testimonials = [
  {
    testimonial:
      "Technical Skills:  HTML, CSS, JavaScript, TypeScript, React.js, Tailwind CSS, Responsive Web Design, API Integration, Data Structures and Algorithms (DSA) in C++, Object-Oriented Programming (OOP), Problem Solving using JavaScript and C++. ",
    // name: "MD Mustaqeem",
    // designation: "Ecommerce",
    // company: "QuickMart",
    // image: firstTestimonial,
  },
  {
    testimonial:
      "Tools & Frameworks:  Git, GitHub, VS Code, React.js, Tailwind CSS, Framer Motion, Figma. ",
    // name: "Abdul Raheman",
    // designation: "Ecommerce Business",
    // company: "justbuyz",
    // image: secondTestimonial,
  },
  {
    testimonial:
      "Soft Skills: Problem-Solving, Analytical Thinking, Attention to Detail, Time Management, Communication, Collaboration, Teamwork.",
    // name: "James Wang",
    // designation: "CTO",
    // company: "456 Enterprises",
    // image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "NyaySetu – AI-Powered Legal Assistance",
    description:
      "NyaySetu is an AI-driven platform that simplifies legal assistance for users. With a clean and responsive interface, it offers personalized legal guidance, document analysis, and answers to common legal queries, making the legal system more accessible and user-friendly.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "white-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "AI-API",
        color: "green-text-gradient",
      },
 
    ],
    image: nyaysetu,
    source_code_link: "https://github.com/madhurgarg01/Nyay-Setu",
  },
  {
    name: "Movie Verse – Dynamic Movie Selection App",
    description:
      "A dynamic movie selecZtion platform using React, CSS, and Firebase, integrating a movie API to display trending, popular, and recommended films. It offers an intuitive UI with real-time data updates and seamless navigation.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Firebase ",
        color: "pink-text-gradient",
      },
      {
        name: "API Integration",
        color: "blue-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/madhurgarg01/Movie_versee",
  },
  {
    name: "Sleep Management – Tracking System",
    description:
      "A comprehensive sleep tracking platform using React, CSS, and Firebase, designed to monitor sleep patterns and provide insightful analytics. It features a clean interface, data visualization, and personalized sleep recommendations.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "white-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "AI-API",
        color: "green-text-gradient",
      },
    ],
    image: sleep,
    source_code_link: "https://github.com/madhurgarg01/Sleep-tracking",
  },
];

export { services, technologies, experiences, testimonials, projects };
