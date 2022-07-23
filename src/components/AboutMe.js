import Section from "./shared/Section";
import {ReactComponent as TechHTML} from '../img/html.svg';
import {ReactComponent as TechCSS} from '../img/css.svg';
import {ReactComponent as TechJS} from '../img/js.svg';
import {ReactComponent as TechREACT} from '../img/react.svg';
import {ReactComponent as TechGIT} from '../img/git.svg';
function AboutMe() {
    const technologiesItems ={
        htm5:{
            img:<TechHTML/>,
            tech:"HTML5"
        },
        css:{
            img:<TechCSS/>,
            tech: "CSS"
        },
        js:{
            img:<TechJS/>,
            tech: "JavaScript"
        },
        react:{
            img:<TechREACT/>,
            tech: "React.js"
        },
        git:{
            img:<TechGIT/>,
            tech: "Git"
        }
    };
    return ( 
        <Section>
            <h2>about me .</h2>
            <p>I am a fourth year <strong>software development student</strong> at the technological university of Peru. I am also a self-taught person. I have great interest in <strong>frontend</strong> and <strong>backend</strong> development.</p>
            <h3>Technologies I’ve been working with:</h3>
            
            <div>
                {Object.keys(technologiesItems).map((tech)=>(
                    <div key={tech}>
                        {technologiesItems[tech]["img"]}
                        <p>{technologiesItems[tech]["tech"]}</p>
                    </div>
                ))}
            </div>
        </Section>
     );
}

export default AboutMe;