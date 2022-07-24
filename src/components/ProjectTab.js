import { useState } from "react";
import ProjectCard from "./shared/ProjectCard";
import {default as ProjectBookmark} from '../img/bookmark.png';
import {default as ProjectPortfolio} from '../img/portfolio.png';
import {default as ProjectGoodsleep} from '../img/goodsleep.png';
function ProjectTab() {

    const [projectActive,setProjectActive] = useState("personal");
    const  personal= [
        {
            title:"Danna Portfolio",
            techs:"html5/css/React.js",
            description:"My personal portfolo developed with React.js from scratch and bootstrapped with Create React App",
            img:<img className="project-img" src={ProjectPortfolio} alt="Bookmark"/>
        },
        {
            title:"Bookmark Manager",
            techs:"html5/css/React.js",
            description:"A frontendmentor challenge.Website developed with React.js from scratch.",
            img:<img className="project-img" src={ProjectBookmark} alt="Bookmark"/>
        }
    ];
    const university= [
        {
            title: "Good Sleep Hotel",
            techs: "html5/css/JavaScript/Java",
            description: "A hotel application, client and administration interfaces, reservation function.",
            img:<img className="project-img" src={ProjectGoodsleep} alt="Bookmark"/>

       },
    ];

    const projectItems = {  
        personal,
        university
    };
    return ( 
        <div className="project">
            <div className="project-btns">
                {Object.keys(projectItems).map((projectType)=>(
                    <button key={projectType} className={`project-btn ${projectActive === projectType&&"project-btn-active"}`} projectActive={projectActive === projectType}  onClick={() => setProjectActive(projectType)}>{projectType}</button>
                ))}
            </div>
            <div className="project-box">
                {projectItems[projectActive].map((projectCha)=>(
                    <ProjectCard
                        key={projectCha.title}
                        title={projectCha.title}
                        techs={projectCha.techs}
                        description={projectCha.description}
                        img={projectCha.img}
                     />
            ))}
            </div>
        </div>
     );
}

export default ProjectTab; 