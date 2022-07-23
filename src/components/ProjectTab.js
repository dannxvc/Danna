function ProjectTab() {
    const projectItems = {
        "personal": {
            title: "personal",
            description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
            img:"img1"
        },
        "university": {
            title: "Intelligent search",
            description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
            img:"img1"
        }
    };

    return ( 
        <div className="project">
            <div className="project-btns">
                {Object.keys(projectItems).map((project)=>(
                    <button key={project} className="btn-feature">{project}</button>
                ))}
            </div>
        </div>
     );
}

export default ProjectTab;