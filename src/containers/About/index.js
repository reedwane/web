import "./index.css";
import { useState } from "react";
import { BsCaretRight } from "react-icons/bs";

// Asset
import myImage from "../../assets/my_picture.webp";

// Component
import Header from "../../components/Header";

const About = ({ aos }) => {
  const stack = [
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript  (ES6+)",
    "Typescript",
    "React JS",
    "Next Js",
    "Context API",
    "REST API",
  ];
  const comfyStack = ["Redux Toolkit", "GraphQl", "Wordpress", "Figma"];
  const [imgHover, setImgHover] = useState(false);

  const displayStackList = (list) => {
    return list.map((each, i) => (
      <div className="stack-list" key={i}>
        <span>
          <BsCaretRight />
        </span>
        <p>{each}</p>
      </div>
    ));
  };

  return (
    <section data-aos={aos} className="about-section" id="about">
      <Header label={"01."} title={"About Me"} />
      <div className="about-body">
        <div className="about-content">
          <p>
            Hi there! I am Ridwan. I am fascinated and interested in developing
            software solutions that make businesses thrive and users happy. I am
            naturally concerned about the wellbeing of others, I enjoy
            interesting challenges and being able to solve them, and I am
            committed to learning as ever
          </p>
          <p>
            My journey into the technology space started on a different route,
            but I have liked working on web applications more ever since. I
            appreciate the endless list of use-cases, and my goal is to keep
            building projects that provide the best experience for users, while
            maintaing accessibility and being robust in the diverse areas of
            application.
          </p>
          <p>Below is the list of the technologies I use:</p>
          <div className="my-stack">{displayStackList(stack)}</div>
          <p>I can also work with:</p>
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
