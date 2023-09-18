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
            Front-End Engineer and React Developer{" "}
            <span>
              <FaLaptopCode size={50} />
            </span>
          </h2>
          <span title="caption" className="title_caption">
            Building innovative and responsive web solutions that drive business
            growth and exceed client expectations
          </span>
          <p>
            A growth-driven Front End Developer with a passion for creating
            innovative and impactful web applications and websites. With my
            strong focus on collaboration, I thrive in distributed teams of
            engineers, designers, and other professionals, delivering
            high-quality solutions that exceed client expectations.
            <br /> <br />
            With a track record of driving business growth and customer
            satisfaction, I take on important roles in critical projects from
            inception to successful delivery. Let's work together to create
            something amazing!
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
