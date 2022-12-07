import "./index.css";
import { useState } from "react";
import {
  SiMaterialui,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { RiReactjsLine, RiApps2Fill } from "react-icons/si";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaSass,
} from "react-icons/fa";

// Asset
import myImage from "../../assets/my_picture.webp";

// Component
import Header from "../../components/Header";

const About = ({ aos }) => {
  const stack = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3 },
    { name: "SCSS", icon: FaSass },
    { name: "JavaScript  (ES6+)", icon: FaJs },
    { name: "Typescript", icon: SiTypescript },
    { name: "React JS", icon: FaReact },
    { name: "Next Js", icon: SiNextdotjs },
    { name: "Context API", icon: RiApps2Fill },
    { name: "React Query", icon: RiReactjsLine },
  ];
  const comfyStack = [
    { name: "Material UI", icon: SiMaterialui },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Figma", icon: FaFigma },
  ];
  const [imgHover, setImgHover] = useState(false);

  const displayStackList = (list) => {
    return list.map((each, i) => (
      <div className="stack-list" key={i}>
        <span>
          <each.icon />
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
            I embraced working on web applications shortly after I started my
            journey in the tech space. I have evolved into a professional front
            end developer ever since, honing my skills from the various
            applications I have contributed to building, and my goal is to keep
            building accessible, robust and diverse projects that provide the
            best experience for businesses and users.
          </p>
          <p>Below is the list of the technologies I use:</p>
          <div className="my-stack">{displayStackList(stack)}</div>
          <p>I have also worked with:</p>
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
