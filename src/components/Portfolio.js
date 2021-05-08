import React from "react";
import PortfolioCards from "./PortfolioCards";

const Projects = () => {
  return (
    <section className='portfolio' id='portfolio'>
      <div className='portfolio-inner container'>
        <h3 className='subtitle'>portfolio</h3>
        <PortfolioCards />
      </div>
    </section>
  );
};

export default Projects;
