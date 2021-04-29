import React, {useEffect} from "react";
import ProjectSlide from "./WorkSlide";

const WorkSlider = () => {
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
        const scrollX = (x - start) * 2;
        slider.scrollLeft = scrollLeft - scrollX;
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
    <div className='work-images to-reveal opacity' id='slider'>
      <ProjectSlide />
    </div>
  );
};

export default WorkSlider;
