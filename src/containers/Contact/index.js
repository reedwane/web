import "./index.css";
import { useEffect } from "react";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <section data-aos="fade-up" className="contact-section" id="contact">
      <h2>04. What's Next?</h2>
      <h1>Reach Out To Me</h1>
      <p>
        Interested in working with me or have any question? I am open to taking
        new challenges and working on new solutions. Send me a message with the
        button below and I will respond promptly.
      </p>
      <a href="mailto:ridwangboyega.ak@gmail.com" className="btn">
        Send A Message
      </a>
    </section>
  );
};

export default Contact;
