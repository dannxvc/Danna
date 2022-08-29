import { useRef } from "react";
import { useInView } from "framer-motion";
function ProjectCard({title,techs,description,img,linkGitRepo,linkLiveSite,i}) {
    const ref=useRef(null);
    const isInView = useInView(ref, { once: true});
    const styleDes = {
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
      };

    return (  
        <div 
            className="project-card"
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: `all .7s cubic-bezier(0.17, 0.55, 0.55, 1) ${i + 1}00ms`
              }}    
        >
            <h3
            ref={ref}
            style={styleDes}
            >{title}</h3>
            <p 
                className="project-techs"
                ref={ref}
                style={styleDes}
            >
                {techs}
            </p>
            <span 
                className="project-description"
                ref={ref}
                style={styleDes}    
            >
                {description}
            </span>
            {img}
            <div className="project-links">
                <a href={linkGitRepo}>
                    <svg className="icon-project" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path fill="var(--icon)" d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/>
                    </svg>
                </a>
                {linkLiveSite&&
                    <a href={linkLiveSite}>    
                        <svg className="icon-project" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="var(--icon)" d="M6 2H4C2.89543 2 2 2.89543 2 4V10C2 11.1046 2.89543 12 4 12H10C11.1046 12 12 11.1046 12 10V8H10V10H4V4H6V2Z"/>
                            <path fill="var(--icon)" d="M9.20711 1H12.5C12.7761 1 13 1.22386 13 1.5V4.79289C13 5.23835 12.4614 5.46143 12.1464 5.14645L11.182 4.18197L8.82493 6.53902C8.43441 6.92954 7.80124 6.92954 7.41072 6.53902C7.0202 6.14849 7.0202 5.51533 7.41072 5.1248L9.76776 2.76776L8.85355 1.85355C8.53857 1.53857 8.76165 1 9.20711 1Z"/>
                        </svg>
                    </a>
                }
            </div>

        </div>
    );
}

export default ProjectCard;