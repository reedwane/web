import "./index.css";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

// Asset
import resume from "../../assets/resume.pdf";

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
    <a href={resume} className="btn btn-resume">
      Resume
    </a>
  </>
);

const Navbar = () => {
  const [navModal, setNavModal] = useState(false);
  const [active, setActive] = useState(false);
  // const [yMovement, setYMovement] = useState(0);
  // const [scrollingUp, setScrollingUp] = useState(true);
  // const [position, setPosition] = useState(null);
  // const [scrolledToTop, setScrolledToTop] = useState(true);
  // const [className, setClassName] = useState("navbar remove");
  // const [y, setY] = useState(0);
  // const [direct, setDirect] = useState(null);

  // const handleScroll = () => {
  //     setScrolledToTop(window.pageYOffset < 50);
  // };

  // console.log('Top',scrolledToTop);

  // useEffect(() => {

  //     window.addEventListener('scroll', handleScroll);

  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  // }, []);

  // const handleNavigation = (e) => {
  //     const window = e.currentTarget;
  //     if (yMovement > window.scrollY) {
  //         console.log('up');
  //         setScrollingUp(true)
  //     } else if (yMovement < window.scrollY) {
  //         console.log('down');
  //         setScrollingUp(false)
  //     }
  //     setYMovement(window.scrollY);
  // };

  // useEffect(() => {

  //     setYMovement(window.scrollY);

  //     window.addEventListener("scroll", (e) => handleNavigation(e));

  //     window.addEventListener("mousemove", getMouseDirection, false);
  // }, [yMovement]);

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
