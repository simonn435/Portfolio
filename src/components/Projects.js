import React from "react";
import ProjectsSlider from "./ProjectsSlider";

const Projects = () => {
    return (
        <section className='projects'>
            <div className='projects-inner container'>
                <h3 className='subtitle'>projects</h3>
                <ProjectsSlider />
            </div>
        </section>
    );
};

export default Projects;
