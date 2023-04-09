import "./index.scss";
import { useState } from "react";
import {
  SiMui,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiReactquery,
} from "react-icons/si";
import { RiApps2Fill } from "react-icons/ri";
import {
  FaCss3,
  FaFigma,
  FaGithub,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
  FaShopify,
} from "react-icons/fa";

// Asset
import myImage from "../../assets/my_picture.webp";

// Component
import Header from "../../components/Header";

const About = ({ aos }) => {
  const stack = [
    { name: "React JS", icon: FaReact },
    { name: "Next Js", icon: SiNextdotjs },
    { name: "Context API", icon: RiApps2Fill },
    { name: "React Query", icon: SiReactquery },
    { name: "JavaScript  (ES6+)", icon: FaJs },
    { name: "Typescript", icon: SiTypescript },
    { name: "SCSS", icon: FaSass },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Git & Github", icon: FaGithub },
    { name: "CSS", icon: FaCss3 },
    { name: "Material UI", icon: SiMui },
  ];
  const comfyStack = [
    { name: "Figma", icon: FaFigma },
    { name: "REST APIs", icon: FaNodeJs },
    { name: "Shopify App Extensions", icon: FaShopify },
    { name: "Node.js", icon: FaNodeJs },
  ];
  const [imgHover, setImgHover] = useState(false);

  const displayStackList = (list) => {
    return list.map((each, i) => (
      <div className="stack-list" key={i}>
        <span>
          <each.icon size={25} />
        </span>
        <p>{each.name}</p>
      </div>
    ));
  };

  return (
    <section data-aos={aos} className="about-section" id="about">
      <Header label={"01."} title={"About Me"} />
      <div className="about-body">
        <div className="about-content">
          <p>
            As a frontend Developer, I specialize in creating cutting-edge
            solutions that meet the unique requirements of each project. I am
            dedicated to delivering exceptional results every time, and I
            believe in working closely with clients and stakeholders to ensure
            their vision is fully realized. I am committed to staying on top of
            the latest trends and technologies in the industry, and I have a
            proven track record of adapting quickly to new challenges and
            opportunities.
          </p>
          <p>Below is the list of the technologies I use:</p>
          <div className="my-stack">{displayStackList(stack)}</div>
          <p>I have some amount of experience with:</p>
          <div className="my-stack">{displayStackList(comfyStack)}</div>
        </div>
        <div
          className="wrapper"
          onMouseOver={() => setImgHover(true)}
          onMouseLeave={() => setImgHover(false)}
        >
          <div className="my-image-container">
            <div className={`shade ${imgHover && "hidden"}`}></div>
            <img src={myImage} alt="Ridwan" className="my-image" />
            <div className={`frame ${imgHover && "resize"}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
