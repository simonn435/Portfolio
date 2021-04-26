import React from "react";
import ProjectsCards from "./ProjectsCards";

const Projects = () => {
  return (
    <section className='projects'>
      <div className='projects-inner container' id='projects'>
        <h3 className='subtitle'>Self-Projects</h3>
        <ProjectsCards />
      </div>
    </section>
  );
};

export default Projects;
