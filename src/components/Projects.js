import React, {useRef} from "react";
import auctions from "../images/auctions.PNG";
import barenpost from "../images/barenpost.PNG";
import mogulmatter from "../images/mogullmatter.PNG";
import myqualitia from "../images/myqualitia.PNG";
import {FaGithub} from "react-icons/fa";

const Projects = () => {
    const slider = useRef(null);

    let isDown = false;
    let startX, scrollLeft;

    const mouseDown = e => {
        isDown = true;
        slider.current.classList.add("active");
        startX = e.pageX - slider.current.offsetLeft;
        scrollLeft = slider.current.scrollLeft;
    };

    const mouseLeave = () => {
        slider.current.classList.remove("active");
        isDown = false;
    };

    const mouseUp = () => {
        slider.current.classList.remove("active");
        isDown = false;
    };

    const mouseMove = e => {
        if (!isDown) return;
        e.preventDefault();
        console.log("4");
        const x = e.pageX - slider.current.offsetLeft;
        const scroll = x - startX;
        slider.current.scrollLeft = scrollLeft - scroll;
    };

    return (
        <section className='projects'>
            <div className='projects-inner container'>
                <h3 className='subtitle'>projects</h3>

                <div className='projects-images' ref={slider} onMouseDown={mouseDown} onMouseLeave={mouseLeave} onMouseUp={mouseUp} onMouseMove={mouseMove}>
                    <div className='project-img'>
                        <img src={auctions} alt='' />
                        <div className='project-link'>
                            <a href=''>
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    <div className='project-img'>
                        <img src={barenpost} alt='' />
                        <div className='project-link'>
                            <a href=''>
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    <div className='project-img'>
                        <img src={mogulmatter} alt='' />
                        <div className='project-link'>
                            <a href=''>
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    <div className='project-img'>
                        <img src={myqualitia} alt='' />
                        <div className='project-link'>
                            <a href=''>
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
