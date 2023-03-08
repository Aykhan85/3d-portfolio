import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  mui,
  todo,
  errorPage,
  booking,
  imageUploader,
  interrior,
  teamPage,
  mobile,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Material UI",
    icon: mui,
  },
];
const projects = [
  {
    name: "Image Uploader",
    description:
      "This app simulates adding files to database and displaying on the page at the same time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "gridFS",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: imageUploader,
    source_code_link: "https://github.com/Aykhan85/image_uploader_api",
    live_demo_link: "https://image-uplader.onrender.com/",
  },
  {
    name: "Todo App",
    description: "in this app you can add todos, circle as done or delete it .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Aykhan85/todo_backend",
    live_demo_link: "https://todo-app-boyu.onrender.com/",
  },
  {
    name: "Interrior Consultant",
    description:
      "This site was created as a submission to a 'DevChallenges' challenge. The challenge was to build an application to complete the given user stories.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: interrior,
    source_code_link: "https://github.com/Aykhan85/interrior-consultant",
    live_demo_link: "",
  },
  {
    name: "Error Page",
    description:
      "This site was created as a submission to a 'DevChallenges' challenge. The challenge was to build an application to complete the given user stories.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: errorPage,
    source_code_link: "https://github.com/Aykhan85/404-Not-Found-devchallenge-",
    live_demo_link: "",
  },
  {
    name: "Team Page",
    description:
      "This site was created as a submission to a 'DevChallenges' challenge. The challenge was to build an application to complete the given user stories.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: teamPage,
    source_code_link: "https://github.com/Aykhan85/team-page",
    live_demo_link: "",
  },
  {
    name: "Booking",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: booking,
    source_code_link: "https://github.com/Aykhan85/booking",
    live_demo_link: "",
  },
];

export { services, technologies, projects };
