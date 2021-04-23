import React, {useRef, useEffect} from "react";
import ProjectSlide from "./ProjectSlide";
import Zoom from "react-reveal/Zoom";
import {FaArrowRight, FaGithub} from "react-icons/fa";

const ProjectsSlider = () => {
    useEffect(() => {
        const slider = document.getElementById("slider");
        let isScrolling, start, scrollLeft;

        const handleDown = e => {
            isScrolling = true;
            slider.classList.add("active");
            start = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };

        const handleLeave = () => {
            isScrolling = false;
            slider.classList.remove("active");
        };

        const handleUp = () => {
            isScrolling = false;
            slider.classList.remove("active");
        };

        const handleMove = e => {
            if (isScrolling) {
                const x = e.pageX - slider.offsetLeft;
                slider.scrollLeft = scrollLeft - (x - start) * 1.5;
            }
        };

        slider.addEventListener("mousedown", handleDown);
        slider.addEventListener("mouseleave", handleLeave);
        slider.addEventListener("mouseup", handleUp);
        slider.addEventListener("mousemove", handleMove);

        return () => {
            slider.removeEventListener("mousedown", handleDown);
            slider.removeEventListener("mouseleave", handleLeave);
            slider.removeEventListener("mouseup", handleUp);
            slider.removeEventListener("mousemove", handleMove);
        };
    }, []);

    return (
        <div className='projects-images' id='slider'>
            <ProjectSlide />
        </div>
    );
};

export default ProjectsSlider;
