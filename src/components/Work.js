import React from "react";
import {FaArrowRight} from "react-icons/fa";
import WorkSlider from "./WorkSlider";

const Projects = () => {
  return (
    <section className='work' id='work'>
      <div className='work-inner container'>
        <h3 className='subtitle'>work</h3>
        <WorkSlider />
        <div style={{textAlign: "right"}}>
          <FaArrowRight style={{color: "#fff"}} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
