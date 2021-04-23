import React from "react";
import auctions from "../images/auctions.PNG";
import barenpost from "../images/barenpost.PNG";
import mogulmatter from "../images/mogullmatter.PNG";
import myqualitia from "../images/myqualitia.PNG";
import {FaGithub} from "react-icons/fa";
import Fade from "react-reveal/Fade";

const ProjectSlide = () => {
    return (
        <>
            <Fade right>
                <div className='project-img'>
                    <img src={auctions} alt='' />

                    <div className='project-link'>
                        <a href='https://github.com/simonn435/unicorn-auctions-master'>
                            <FaGithub />
                        </a>
                    </div>
                </div>
                <div className='project-img'>
                    <img src={barenpost} alt='' />

                    <div className='project-link'>
                        <a href='https://github.com/simonn435/barenpost-upwork'>
                            <FaGithub />
                        </a>
                    </div>
                </div>
                <div className='project-img'>
                    <img src={mogulmatter} alt='' />

                    <div className='project-link'>
                        <a href='https://github.com/simonn435/mogulmatterBS5'>
                            <FaGithub />
                        </a>
                    </div>
                </div>
                <div className='project-img'>
                    <img src={myqualitia} alt='' />

                    <div className='project-link'>
                        <a href='https://github.com/simonn435/myqualitia-up'>
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default ProjectSlide;
