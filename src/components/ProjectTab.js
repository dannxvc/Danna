import { useState } from "react";
import ProjectCard from "./shared/ProjectCard";
import {default as ProjectBookmark} from '../img/projects/bookmark.png';
import {default as ProjectPortfolio} from '../img/projects/portfolio.png';
import {default as ProjectGoodsleep} from '../img/projects/goodsleep.png';
import {default as ProjectFCMotors} from '../img/projects/fcmotors.png';
import {default as ProjectComments} from '../img/projects/comments_section.png';
function ProjectTab() {

    const [projectactive,setProjectActive] = useState("Personal");
    const projectItems = {  
        Personal:[
            {
                title:"Interactive Comments Section",
                techs:"HTML5 / CSS / REACT.JS",
                description:"A comment section that allows the current user to interact with four functionalities (CRUD).",
                img:<img className="project-img" src={ProjectComments} alt="Bookmark"/>,
                linkGitRepo:"https://github.com/dannxvc/interactive-comments-section",
                linkLiveSite:"https://interactive-comments-section-danna.pages.dev/"
            },
            {
                title:"Danna Portfolio",
                techs:"HTML5 / CSS / REACT.JS",
                description:"My personal portfolio to display necessary information about me as a developer.",
                img:<img className="project-img" src={ProjectPortfolio} alt="Bookmark"/>,
                linkGitRepo:"https://github.com/dannxvc/danna",
                linkLiveSite:"https://danna.pages.dev/"
            },
            {
                title:"Bookmark Landing Page",
                techs:"HTML5 / CSS / REACT.JS",
                description:"A bookmark landing webpage with interactive areas. (FrontendMentor Challenge)",
                img:<img className="project-img" src={ProjectBookmark} alt="Bookmark"/>,
                linkGitRepo:"https://github.com/dannxvc/bookmark-pg-react",
                linkLiveSite:"https://bookmark-pg-react.pages.dev/"
            },
            {
                title:"Product Website",
                techs:"HTML5 / CSS / JAVASCRIPT",
                description:"A product website to highlight FC Motors Kal company's range of mechanical products.",
                img:<img className="project-img" src={ProjectFCMotors} alt="FC Motors Kal Product Website"/>,
                linkGitRepo:"https://github.com/dannxvc/interactive-products-filter",
                linkLiveSite:"https://fc-motors-kal.netlify.app/"
            }
        ],
        University: [
            {
                title: "Good Sleep Hotel",
                techs: "HTML5 / CSS / JAVASCRIPT / JAVA",
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
                {projectItems[projectactive].map((projectCha,i)=>(
                    <ProjectCard
                        key={projectCha.title}
                        title={projectCha.title}
                        techs={projectCha.techs}
                        description={projectCha.description}
                        img={projectCha.img}
                        linkGitRepo={projectCha.linkGitRepo}
                        linkLiveSite={projectCha.linkLiveSite}
                        i={i}
                     />
            ))}
            </div>
        </div>
     );
}

export default ProjectTab; 