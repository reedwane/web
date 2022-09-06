import "./index.css";
import { useEffect } from "react";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

// Components
import Navbar from "../../components/Navbar";

const Hero = ({ aos }) => {
  return (
    <div className="hero">
      <Navbar />
      <div data-aos={aos} className="hero-body">
        <div className="body-wrapper">
          <h4>Welcome, I am</h4>
          <h1>Ridwan Abdulkareem.</h1>
          <h2>I develop amazing things for the web</h2>
          <p>
            I am a web developer passionate about making impact and creating
            solutions through technology. I have collaborated with different
            teams and organizations, and I am focused on developing products
            that provide outstanding experiences and are accessible to users.
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
            <a href="https://twitter.com/Reed_tope?s=09">
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