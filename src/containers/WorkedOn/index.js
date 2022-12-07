import "./index.css";

// Component
import Header from "components/Header";
import MajorProject from "components/MajorProject";
import OtherProject from "components/OtherProject";

// Provider
import Projects from "provider/projects";

const WorkedOn = ({ aos }) => {
  return (
    <section data-aos={aos} className="project-section" id="project">
      <Header label={"03."} title={"Few Other Projects I Have Worked On"} />

      <div className="project-body">
        <div className="major-project">
          {Projects.slice(0, 5).map((project, i) => (
            <MajorProject project={project} key={i} id={i + 1} />
          ))}
        </div>

        <h1 className="sub-heading">Other Noteworthy Projects</h1>

        <div className="other-project">
          {Projects.slice(5).map((project, i) => (
            <OtherProject project={project} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkedOn;
