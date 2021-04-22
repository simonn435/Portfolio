import React, {useRef, useState, useEffect} from "react";
import auctions from "../images/auctions.PNG";
import barenpost from "../images/barenpost.PNG";
import mogulmatter from "../images/mogullmatter.PNG";
import myqualitia from "../images/myqualitia.PNG";
import {FaGithub, FaInstagram} from "react-icons/fa";

const Projects = ({scroll}) => {
    const project = useRef(null);
    const [isMoving, setIsMoving] = useState(false);

    const handleMouseEnter = () => {
        setIsMoving(true);
        console.log(isMoving);
    };

    const handleMouseLeave = () => {
        setIsMoving(false);
        console.log(isMoving);
    };

    const handleMouseMove = e => {
        if (isMoving) {
            var relX = e.pageX - e.offsetLeft;
            var relY = e.pageY - e.offsetTop;
            console.log(e);
        }
    };

    useEffect(() => {
        project.current.addEventListener("mousedown", handleMouseEnter);
        project.current.addEventListener("mouseup", handleMouseLeave);
        // project.current.addEventListener("mousemove", handleMouseMove);
        return () => {
            project.current.removeEventListener("mousedown", handleMouseEnter);
            project.current.removeEventListener("mouseup", handleMouseLeave);
            // project.current.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section className='projects'>
            <div className='projects-inner container'>
                <h3 className='subtitle'>projects</h3>

                <div className='projects-images' ref={project}>
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
