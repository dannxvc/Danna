import ProjectTab from "./ProjectTab";
import Section from "./shared/Section";
import "../css/Projects.css";
function MyProjects() {
    return (  
        <Section  id="my-projects">
            <h2>My projects .</h2>
            <ProjectTab/> 
        </Section>
    );
}

export default MyProjects;