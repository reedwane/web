import "./index.css";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

// Components
import Navbar from "../../components/Navbar";
import { FaLaptopCode } from "react-icons/fa";

const Hero = ({ aos }) => {
  return (
    <div className="hero">
      <Navbar />
      <div data-aos={aos} className="hero-body">
        <div className="body-wrapper">
          <h4>Welcome, I am</h4>
          <h1 title="name">Ridwan Gboyega Abdulkareem.</h1>
          <h2 title="role">
            Front-End Engineer
            <span>
              <FaLaptopCode size={50} />
            </span>
          </h2>
          <span title="caption" className="title_caption">
            Building innovative solutions that drive business growth and exceed
            expectations
          </span>
          <p>
            As a results-driven front-end engineer proficient in React.js,
            Next.js, JavaScript, TypeScript, and more, I collaborate on critical
            projects, working seamlessly with cross-functional teams to deliver
            innovative and responsive solutions. Passionate about staying
            current with technology trends and driving business growth.
          </p>
          <a href="mailto:ridwangboyega.ak@gmail.com" className="btn btn-hero">
            Send a Message
          </a>
        </div>
      </div>
      <div className="sticky-bottom">
        <div className="sticky-left">
          <div className="social-icons">
            <a href="https://github.com/reedwane">
              <FiGithub className="horizontal-icon" />
            </a>
            <a href="https://twitter.com/RidwanGboyegaAK">
              <FiTwitter className="horizontal-icon" />
            </a>
            <a href="https://www.linkedin.com/in/ridwan-abdulkareem/">
              <FiLinkedin className="horizontal-icon" />
            </a>
          </div>
          <span className="left-line"></span>
        </div>

        <div className="sticky-right">
          <div className="my-mail">
            <a href="mailto:ridwangboyega.ak@gmail.com">
              ridwangboyega.ak@gmail.com
            </a>
          </div>
          <span className="right-line"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
