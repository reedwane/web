import "./index.css";

// Component
import Header from "../../components/Header";
import MajorProject from "../../components/MajorProject";
import OtherProject from "../../components/OtherProject";

// Provider
import Projects from "../../provider/projects";

const WorkedOn = ({ aos }) => {
  return (
    <section data-aos={aos} className="project-section" id="project">
      <Header label={"03."} title={"Projects I Have Worked On"} />

      <div className="project-body">
        <div className="major-project">
          {Projects.map(
            (project) =>
              project.id < 4 && (
                <MajorProject project={project} key={project.id} />
              )
          )}
        </div>

        <h1 className="sub-heading">Other Noteworthy Projects</h1>

        <div className="other-project">
          {Projects.map(
            (project) =>
              project.id > 3 && (
                <OtherProject project={project} key={project.id} />
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkedOn;
