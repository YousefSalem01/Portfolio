import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  forexplain,
  hemmx,
  cyborg,
  portfolio,
  ecommerce,
  tesla,
  shopify,
  carrent,
  jobit,
  exotask,
  tripguide,
  threejs,
  freelancer,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "instractour programming",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "web developer",
    company_name: "freelance project",
    icon: freelancer,
    iconBg: "#fff",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web application using html,css and js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Instructor programming",
    company_name: "Hemmx Academy",
    icon: hemmx,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jul 2023",
    points: [
      "Teaching kids aged 9 to 15 years how to build games using Scratch platform.",
      "Instructing students on creating mobile apps using MIT App Inventor.",
      "Introducing students to Arduino concepts and guiding them in building projects.",
      "Facilitating learning of web development fundamentals including HTML, CSS, and JavaScript.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "4explain part-time",
    icon: forexplain,
    iconBg: "#383E56",
    date: " Jul 2023 ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce",
    description:
      "E-commerce built with React typescriot it's shoping cart you can add and remove items from cart ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "localstorage",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    
  },
  {
    name: "Cyborg",
    description:
      "Web application templete can used for download games and put Rating for games and you can add games to your favorite list",
    tags: [
      {
        name: "Web templete",
        color: "blue-text-gradient",
      },
      {
        name: "web development ",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cyborg,
    
  },
  {
    name: "Exotask",
    description:
      "Exotask is a web-based project management tool, akin to Trello, facilitating task organization, collaboration, and customization. Leveraging React, it offers an interactive interface for seamless task creation and management.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: ".Net Core",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: exotask,
    
  },
];

export { services, technologies, experiences, testimonials, projects };
