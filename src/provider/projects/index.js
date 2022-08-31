import event from "assets/event_management.jpg";
import officialWeb from "assets/official_websites.jpg";
import finance from "assets/finance_cms.jpg";
import wordly from "assets/wordly.jpg";

const Projects = [
  {
    id: 1,
    title: "Official Websites for Various Organizations",
    details:
      "Contributed to the development of numerous websites for local and international organizations. Collaborated with teams and individually as well to ship robust applications to production and improve online presence for businesses and organizations",
    tools: "React.js Next.js SCSS CSS REST API",
    repo: null,
    url: null,
    img: officialWeb,
    featured: false,
  },
  {
    id: 2,
    title: "1st ICEECE & AMF Management Application",
    details:
      "An application to manage the events of the 1st ICEECE & AMF in UniIbadan. Built with EJS, Bootstrap, Node.js, Express.js and many more.",
    tools: "HTML CSS EJS Bootstrap Node.js Express",
    repo: null,
    url: null,
    img: event,
    featured: true,
  },

  {
    id: 3,
    title: "Finance Software With Access Management",
    details:
      "A Robust financial software harnessing Data Science technologies to provide intelligent insights, with user and content management features and authorization",
    tools: "React.js, SCSS, Context API",
    repo: null,
    url: null,
    img: finance,
    featured: false,
  },
  {
    id: 4,
    title: "Wordly Dictionary App",
    details:
      "A very uesful app to check unique words and their definitions upon loading the app and by searching. Built with React.js and styled with scss with an awesome user Interface. Merges multiple APIs to provide a good experience",
    tools: "React.js SCSS",
    repo: "https://github.com/reedwane/wordly",
    url: "https://wordly-world.netlify.app/",
    img: wordly,
    featured: false,
  },
  {
    id: 5,
    title: "Countries App",
    details:
      "Want to find out basic details about the countries of the world? This App lays out the various countries of the world and interesting details you'd like to know about them.",
    tools: "React.js CSS",
    repo: "https://mern-countries-reed.netlify.app/",
    url: "https://github.com/reedwane/mern-countries-app",
    img: null,
    featured: false,
  },
  {
    id: 6,
    title: "Space Tourism Website",
    details:
      "A multi-page, dynamic and space-themed website. Developed the project to excellently resemble the Figma designs with React Js and styled with SCSS. Built fully responsive (mobile-first)",
    tools: "React.js Context API SCSS",
    repo: "https://github.com/reedwane/space-tourism",
    url: "https://space-tourism-reed.netlify.app/",
    img: null,
    featured: false,
  },
  {
    id: 7,
    title: "USer Dashboard",
    details: "A dashboard for user management",
    tools: "React.js Redux",
    repo: "https://github.com/LaxAce/proexe-assessment",
    url: "https://usersassess.netlify.app/",
    img: null,
    featured: false,
  },
  {
    id: 8,
    title: "Admin Panel Backend",
    details:
      "User management with registration and authentication. Non-authenticated users can not have access to the user management (admin panel). Authenticated users has access to the user management table: id, name, e-mail, last login time, registration time, status (active/blocked). With Documentation published on postman docs.",
    tools: "NodeJS Express MongoDB",
    repo: "https://github.com/LaxAce/admin-panel-backend",
    url: "https://documenter.getpostman.com/view/18521051/Uyr5nyqH",
    img: null,
    featured: false,
  },
  {
    id: 9,
    title: "Newcore Landing page clone",
    details:
      "A  landing page with different sections, this application was designed in raw Javascript (no libraries), HTML, and CSS. It manipulates DOM elements and relies on event handling",
    tools: "HTML CSS",
    repo: "https://github.com/LaxAce/Newcore",
    url: "https://newcore.netlify.app/",
    img: null,
    featured: false,
  },
  {
    id: 10,
    title: "Restful API With Node.js",
    details:
      "A restful API built to provide important information about the countries in the world, with various endpoints. Uses NodeJS (Express) and MongoDB as the database",
    tools: "Node.js Express.js MongoDB",
    repo: "https://github.com/LaxAce/API-for-country-details",
    url: "https://api-country-details.herokuapp.com/countries",
    img: null,
    featured: false,
  },
];

export default Projects;
