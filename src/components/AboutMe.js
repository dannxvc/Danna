import Section from "./shared/Section";
import {ReactComponent as TechHTML} from '../img/html.svg';
import {ReactComponent as TechCSS} from '../img/css.svg';
import {ReactComponent as TechJS} from '../img/js.svg';
import {ReactComponent as TechREACT} from '../img/react.svg';
import {ReactComponent as TechGIT} from '../img/git.svg';
import {ReactComponent as TechSQL} from '../img/sql.svg';
import {ReactComponent as TechJAVA} from '../img/java.svg';
import styles from "./AboutMe.module.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

function AboutMe() {
    const ref=useRef(null);
    const isInView = useInView(ref, { once: false});
    const technologiesItems ={
        htm5:{
            img:<TechHTML className={styles.tech_icon}/>,
            tech:"HTML5"
        },
        css:{
            img:<TechCSS className={styles.tech_icon}/>,
            tech: "CSS"
        },
        js:{
            img:<TechJS className={styles.tech_icon}/>,
            tech: "JavaScript ES6+"
        },
        react:{
            img:<TechREACT className={styles.tech_icon}/>,
            tech: "React.js"
        },
        git:{
            img:<TechGIT className={styles.tech_icon}/>,
            tech: "Git"
        },
        sql:{
            img:<TechSQL className={styles.tech_icon}/>,
            tech: "SQL"
        },
        java:{
            img:<TechJAVA className={styles.tech_icon}/>,
            tech: "Java"
        }
    };
    return ( 
        <Section id="about-me">
            <h2>About me .</h2>
            
            <p className={styles.aboutme_description}>
                I am a <strong>software engineering student</strong> at the 
                technological university of Peru. I am also a self-taught person. 
                Developing programs related to <strong>frontend</strong> and backend development is one of my greatest passions.
            </p>
            <p className={styles.aboutme_description}> 
                I am very passionate about designing & creating things related to technology and art. 
                I enjoy learning from platforms that help me improve my skills, such as FreeCodeCamp, Academia X, and TheOdinProject.
            </p>

            <h3>My skills:</h3>
            
            <ul>
                {Object.keys(technologiesItems).map((tech,i)=>(
                    <li 
                        className={styles.tech_list}
                        key={technologiesItems[tech]["tech"]}
                        ref={ref}
                        style={{
                            transform: isInView ? "none" : "translateY(100px)",
                            opacity: isInView ? 1 : 0,
                            transition: `all .7s cubic-bezier(0.17, 0.55, 0.55, 1) ${i + 2}00ms`
                          }}
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