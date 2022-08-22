import mmc from "../../assets/mmc.png";
import buymore from "../../assets/buymore.png";
import countries from "../../assets/countries.png";

const Projects = [
  {
    id: 1,
    title: "MMC Mentorship Web App",
    details:
      "A web app for an annual mentorship programme with React.js, AntDesign, Node.js, Express.js and many more.",
    tools: "React.js Redux ReactStrap AntDesign Node.js Express PostgreSQL",
    repo: null,
    url: null,
    img: mmc,
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Web App (BuyMore)",
    details:
      "An e-commerce full-stack web application with the MERN stack. The backend API's implement all the CRUD operations on the various endpoints. It implements JSON Web Token (JWT) to pass identity of authenticated users",
    tools: "React.js CSS Node.js Express.js MongoDB",
    repo: "https://github.com/LaxAce/buymore",
    url: "https://buymore.netlify.app/",
    img: buymore,
    featured: false,
  },
  {
    id: 3,
    title: "Where In The World",
    details:
      "A go-to web application for informative details about all the countries in the world. It has a theme-changing feature for sight well-being, a quick search by name, and a region filter. ReactJS and CSS3 were utilized for the development.",
    tools: "React.js CSS",
    repo: "https://github.com/LaxAce/countryAPI",
    url: "https://countrydet.netlify.app/",
    img: countries,
    featured: false,
  },
  {
    id: 4,
    title: "Dictionary",
    details:
      "A dictionary web application with auto suggestion. It uses Datamuse, random-words-api.vercel.app and api.dictionaryapi.dev/ as backend resources",
    tools: "React.js CSS Context API",
    repo: "https://github.com/LaxAce/dictionary",
    url: "https://acediction.netlify.app/",
    img: null,
    featured: false,
  },
  {
    id: 5,
    title: "Admin Panel Frontend",
    details: "User management with registration and authentication.",
    tools: "React.js Bootstrap",
    repo: "https://github.com/LaxAce/admin-panel-fe",
    url: "https://ilearning3.netlify.app/",
    img: null,
    featured: false,
  },
  {
    id: 6,
    title: "USer Dashboard",
    details: "A dashboard for user management",
    tools: "React.js Redux",
    repo: "https://github.com/LaxAce/proexe-assessment",
    url: "https://usersassess.netlify.app/",
    img: null,
    featured: false,
  },
  {
    id: 7,
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
    id: 8,
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
    id: 9,
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
