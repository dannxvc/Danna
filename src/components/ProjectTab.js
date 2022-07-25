import { useState } from "react";
import ProjectCard from "./shared/ProjectCard";
import {default as ProjectBookmark} from '../img/bookmark.png';
import {default as ProjectPortfolio} from '../img/portfolio.png';
import {default as ProjectGoodsleep} from '../img/goodsleep.png';
function ProjectTab() {

    const [projectactive,setProjectActive] = useState("personal");
    const projectItems = {  
        personal:[
            {
                title:"Danna Portfolio",
                techs:"html5/css/React.js",
                description:"My personal portfolio developed with React.js from scratch and bootstrapped with Create React App",
                img:<img className="project-img" src={ProjectPortfolio} alt="Bookmark"/>,
                linkGitRepo:"https://github.com/dannxvc/danna-portfolio",
                linkLiveSite:"https://bookmark-pg-react.pages.dev/"
            },
            {
                title:"Bookmark Manager",
                techs:"html5/css/React.js",
                description:"A frontendmentor challenge.Website developed with React.js from scratch.",
                img:<img className="project-img" src={ProjectBookmark} alt="Bookmark"/>,
                linkGitRepo:"https://github.com/dannxvc/bookmark-pg-react",
                linkLiveSite:"https://bookmark-pg-react.pages.dev/"
            }
        ],
        university: [
            {
                title: "Good Sleep Hotel",
                techs: "html5/css/JavaScript/Java",
                description: "A hotel application, client and administration interfaces, reservation function.",
                img:<img className="project-img" src={ProjectGoodsleep} alt="Bookmark"/>,
                linkGitRepo:"https://github.com/dannxvc/goodsleepproyecto",
           },
        ]
    };
    return ( 
        <div className="project">
            <div className="project-btns">
                {Object.keys(projectItems).map((projectType)=>(
                    <button key={projectType}
                        className={`project-btn ${projectactive === projectType && "project-btn-active"}`} 
                        projectactive={projectactive === projectType}  
                        onClick={() => setProjectActive(projectType)}>
                            {projectType}
                    </button>
                ))}
            </div>
            <div className="project-box">
                {projectItems[projectactive].map((projectCha)=>(
                    <ProjectCard
                        key={projectCha.title}
                        title={projectCha.title}
                        techs={projectCha.techs}
                        description={projectCha.description}
                        img={projectCha.img}
                        linkGitRepo={projectCha.linkGitRepo}
                        linkLiveSite={projectCha.linkLiveSite}
                        
                     />
            ))}
            </div>
        </div>
     );
}

export default ProjectTab; 