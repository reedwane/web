import event from "assets/event_management.jpg";
import officialWeb from "assets/official_websites.jpg";
import finance from "assets/finance_cms.jpg";
import wordly from "assets/wordly.jpg";
import mbz from "assets/mbz.png";
import barnaamaj from "assets/barnaamaj.jfif";

const Projects = [
  {
    title: "MSSN B-ZONE Website",
    details:
      "Worked on the development of the official website for MSSN B-Zone, one of the largest student organizations in Nigeria.",
    tools: "React.js, Next.js, SCSS, CSS, REST API",
    repo: null,
    url: "https://mssnbzone.org/",
    img: mbz,
    featured: false,
  },
  {
    title: "Barnaamaj",
    details:
      "A startup dedicated to facilitating affordable and seamless processes for Muslims to travel for Hajj & Umrah.",
    tools: "Next.js, CSS, Tailwind CSS, Styled Components, REST API",
    repo: null,
    // url: "https://www.barnaamaj.com/",
    url: 'https://www.linkedin.com/company/barnaamaj/';
    img: barnaamaj,
    featured: false,
  },
  {
    id: 1,
    title: "FinTech Software leveraging on Machine learning Technologies",
    details:
      "A Robust fintech software harnessing Data Science technologies for an organization to provide intelligent insights, with user and content management features and authorization",
    tools: "React.js, Next.js, TypeScript, React Query, SCSS",
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
    id: 2,
    title: "Official Websites for Various Organizations",
    details:
      "Contributed to the development of numerous websites for local and international organizations.  Collaborated with teams and also worked  individually to ship robust applications to production and improve online presence for businesses and organizations",
    tools: "React.js, Next.js, SCSS, CSS, REST API",
    repo: null,
    url: null,
    img: officialWeb,
    featured: false,
  },

  {
    id: 3,
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
    id: 5,
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
    id: 6,
    title: "Countries App",
    details:
      "Want to find out basic details about the countries of the world? This App lays out the various countries of the world and interesting details you'd like to know about them.",
    tools: "React.js CSS",
    repo: "https://github.com/reedwane/mern-countries-app",
    url: "https://react-countries-reed.netlify.app/",
    img: null,
    featured: false,
  },

  {
    id: 7,
    title: "Mastercraft Bamboo Crowdfunding Page",
    details: "A crowdfunding page for Mastercraft Bamboo Monitor Riser",
    tools: "HTML CSS Javascript",
    repo: "https://github.com/reedwane/frontendmentorpages/tree/main/crowdfunding-page",
    url: "https://reed-crowdfunding.netlify.app/",
    img: null,
    featured: false,
  },
  {
    id: 8,
    title: "Flight Details Dashboard",
    details:
      "An application with a login componenent and a dashboard simulating the flight details of airports around the world, with pagination",
    tools: "React Scss",
    repo: "https://github.com/reedwane/reed-opensky",
    url: "https://reed-opensky.netlify.app/",
    img: null,
    featured: false,
  },

  {
    id: 9,
    title: "Restful API With Node.js",
    details:
      "Built on the REST COUNTRIES DataBase, this app is a restful API built to provide important information about the countries in the world. Uses NodeJS (Express) and MongoDB as the database",
    tools: "Node.js Express.js MongoDB",
    repo: "https://github.com/reedwane/countries-api",
    url: "https://reed-countries-api.herokuapp.com/",
    img: null,
    featured: false,
  },
];

export default Projects;
