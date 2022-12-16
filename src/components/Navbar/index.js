import "./index.css";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

// Asset
// import resume from "../../assets/Ridwan_Gboyega_Abdulkareem.pdf";
let resume =
  "https://docs.google.com/document/d/1eWxkchqknFR_kzS6epLJAocV-E9xEf57xABXN_Q4gGA/edit?usp=sharing";

const navItems = (handleLink) => (
  <>
    <ul>
      <li>
        01.{" "}
        <a href="#about" onClick={(event) => handleLink(event, "about")}>
          About
        </a>
      </li>
      <li>
        02.{" "}
        <a
          href="#experience"
          onClick={(event) => handleLink(event, "experience")}
        >
          Experience
        </a>
      </li>
      <li>
        03.{" "}
        <a href="#project" onClick={(event) => handleLink(event, "project")}>
          Work
        </a>
      </li>
      <li>
        04.{" "}
        <a href="#contact" onClick={(event) => handleLink(event, "contact")}>
          Contact
        </a>
      </li>
    </ul>
    <a
      href={resume}
      target="_blank"
      rel="noreferrer"
      className="btn btn-resume"
    >
      Resume
    </a>
  </>
);

const Navbar = () => {
  const [navModal, setNavModal] = useState(false);
  const [active, setActive] = useState(false);

  const handleModal = () => {
    setNavModal(!navModal);
    setActive(!active);
  };

  const handleLink = (event, section) => {
    setNavModal(false);
    setActive(false);
    event.preventDefault();
    document
      .getElementById(section)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };
  //className={`navbar ${scrollingUp || 'remove'}`}
  return (
    <div className="navbar">
      <div className="top-nav-container">
        <a href="/" className="logo">
          <span></span>
          <div>R</div>
        </a>
        <div className="menu-list-container">{navItems(handleLink)}</div>
        <div className="side-nav">
          <BiMenuAltRight
            className="menu-btn open-side-nav"
            onClick={handleModal}
          />
        </div>
      </div>
      <div
        className={active ? "side-nav-wrapper active" : "side-nav-wrapper"}
        onClick={handleModal}
      >
        <div className="side-blur-effect"></div>
        <div className="side-nav-content" onClick={(e) => e.stopPropagation()}>
          <div className="close-nav-wrapper">
            <AiOutlineClose
              className="menu-btn close-side-nav"
              onClick={handleModal}
            />
          </div>
          {navItems(handleLink)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
