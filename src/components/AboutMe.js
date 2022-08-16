import Section from "./shared/Section";
import {ReactComponent as TechHTML} from '../img/html.svg';
import {ReactComponent as TechCSS} from '../img/css.svg';
import {ReactComponent as TechJS} from '../img/js.svg';
import {ReactComponent as TechREACT} from '../img/react.svg';
import {ReactComponent as TechGIT} from '../img/git.svg';
import {ReactComponent as TechSQL} from '../img/sql.svg';
import {ReactComponent as TechJAVA} from '../img/java.svg';
import "../css/AboutMe.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

function AboutMe() {
    const ref=useRef(null);
    const isInView = useInView(ref, { once: true});
    const styleDes = {
        transform: isInView ? "none" : "translateY(60px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
    };
    const technologiesItems ={
        htm5:{
            img:<TechHTML className="tech-icon"/>,
            tech:"HTML5"
        },
        css:{
            img:<TechCSS className="tech-icon"/>,
            tech: "CSS"
        },
        js:{
            img:<TechJS className="tech-icon"/>,
            tech: "JavaScript ES6+"
        },
        react:{
            img:<TechREACT className="tech-icon"/>,
            tech: "React.js"
        },
        git:{
            img:<TechGIT className="tech-icon"/>,
            tech: "Git"
        },
        sql:{
            img:<TechSQL className="tech-icon"/>,
            tech: "SQL"
        },
        java:{
            img:<TechJAVA className="tech-icon"/>,
            tech: "Java"
        }
    };
    return ( 
        <Section id="about-me">
            <h2>about me .</h2>
            <p 
                className="aboutme-description"
                ref={ref}
                style={styleDes}
            >I am a fourth year <strong>software development student</strong> at the technological university of Peru. I am also a self-taught person. I have great interest in <strong>frontend</strong> and <strong>backend</strong> development.</p>
            <p 
                className="aboutme-description"
                ref={ref}
                style={styleDes}
            > I am very interested in creating stuff, related to technology and art. I enjoy learning from platforms that help me improving my skills, like FreeCodeCamp, Academia X and TheOdinProject.
            </p>
            <h3>Technologies I’ve been working with:</h3>
            
            <ul>
                {Object.keys(technologiesItems).map((tech)=>(
                    <li 
                        className="tech-list" 
                        key={technologiesItems[tech]["tech"]}
                        ref={ref}
                        style={styleDes}
                    >
                        {technologiesItems[tech]["img"]}
                        {technologiesItems[tech]["tech"]}
                    </li>
                ))}
            </ul>
        </Section>
     );
}

export default AboutMe;