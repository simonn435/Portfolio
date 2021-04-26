import React from "react";
import auctions from "../images/auctions.PNG";
import barenpost from "../images/barenpost.PNG";
import mogulmatter from "../images/mogullmatter.PNG";
import myqualitia from "../images/myqualitia.PNG";
import {FaGithub} from "react-icons/fa";

const WorkSlide = () => {
  return (
    <>
      <div className='work-img'>
        <img src={auctions} alt='' />

        <div className='work-link'>
          <a href='https://github.com/simonn435/unicorn-auctions-master' rel='noreferrer' target='_blank'>
            <FaGithub />
          </a>
        </div>
      </div>

      <div className='work-img'>
        <img src={barenpost} alt='' />

        <div className='work-link'>
          <a href='https://github.com/simonn435/barenpost-upwork' rel='noreferrer' target='_blank'>
            <FaGithub />
          </a>
        </div>
      </div>

      <div className='work-img'>
        <img src={mogulmatter} alt='' />

        <div className='work-link'>
          <a href='https://github.com/simonn435/mogulmatterBS5' rel='noreferrer' target='_blank'>
            <FaGithub />
          </a>
        </div>
      </div>

      <div className='work-img'>
        <img src={myqualitia} alt='' />

        <div className='work-link'>
          <a href='https://github.com/simonn435/myqualitia-up' rel='noreferrer' target='_blank'>
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
};

export default WorkSlide;
