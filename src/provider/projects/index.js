import event from "assets/event_management.jpg";
import finance from "assets/finance_cms.jpg";
import wordly from "assets/wordly.jpg";
import atc from "assets/atc.png";
import acco from "assets/acco.png";
import zulaiy from "assets/zulaiy.png";
import acmf from "assets/acmf.png";
import barnaamaj from "assets/barnaamaj.jfif";

const Projects = [
  {
    title: "Acco-Rifaaq App",
    details:
      "A unique productivity app initially built for Muslims, with extraordinary features including data analytics and accountability partnerships.",
    tools: "Next.js, React Query, PWA, Tailwind CSS",
    repo: null,
    url: "https://acco.rifaaq.com/",
    img: acco,
    featured: true,
  },
  {
    title: "Zulaiy",
    details:
      "An agency that propels businesses towards innovation and growth using technology.",
    tools: "Wordpress",
    repo: null,
    url: "https://zulaiy.com/",
    img: zulaiy,
    featured: true,
  },
  {
    title: "ACMF",
    details:
      "A foundation on a mission to provide youths with the tools, mentorship, and opportunities they need to turn their dreams into reality.",
    tools: "Next.js, Tailwind CSS",
    repo: null,
    url: "https://acmfng.org/",
    img: acmf,
    featured: true,
  },
  {
    title: "Barnaamaj",
    details:
      "Collaborated with a distributed cross-functional team to design and build the website's frontend, delivering responsive and visually appealing components that enhance user engagement and retention.",
    tools: "Next.js, React Query, Tailwind CSS, Styled Components, REST API",
    repo: null,
    url: "https://www.barnaamaj.com/",
    img: barnaamaj,
    featured: false,
  },
  {
    title: "ATC",
    details:
      "Revamped an edtech platform by redesigning the user interface, resulting in a 40% improvement in usability. Additionally, integrated vital backend services, including authentication, showcasing technical expertise and meticulous attention to detail.",
    tools: "Next.js, SCSS, REST API, React Query",
    repo: null,
    // url: "https://www.atc.com.ng/",
    img: atc,
    featured: false,
  },

  {
    id: 1,
    title: "Enterprise Software leveraging on Machine learning Technologies",
    details:
      "A Robust software harnessing Data Science technologies for an organization to provide intelligent insights, with user and content management features and authorization",
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
