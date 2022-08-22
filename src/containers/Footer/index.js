import "./index.css";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/reedwane">
          <FiGithub size={21} className="small-icon" />
        </a>
        <a href="https://twitter.com/Reed_tope?s=09">
          <FiTwitter size={21} className="small-icon" />
        </a>
        <a href="https://www.linkedin.com/in/ridwan-abdulkareem/">
          <FiLinkedin size={21} className="small-icon" />
        </a>
      </div>
      <p>
        Design inspired by{" "}
        <a href="https://brittanychiang.com/">Brittany Chiang</a>
      </p>
    </footer>
  );
};

export default Footer;
