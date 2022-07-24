function ProjectCard({title,techs,description,img}) {
    return (  
        <div className="project-card">
            <h3>{title}</h3>
            <p className="project-techs">{techs}</p>
            <span className="project-description">{description}</span>
            {img}
        </div>
    );
}

export default ProjectCard;