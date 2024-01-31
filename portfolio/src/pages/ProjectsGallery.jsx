import React from "react";
import Project from '../components/Project';
import projects from '../data/projects.json';

function ProjectsGallery() {
return <div id='projectPage'>
<br></br>
<div className="container-fluid projectsBox row">
    { projects.map((project) => {
    return <Project key={project.id} link={project.link} id={project.id} title={project.title} image={project.image} description={project.description} />
    })}
</div>
</div>
}

export default ProjectsGallery;