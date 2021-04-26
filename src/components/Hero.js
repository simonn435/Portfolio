import React, {useRef} from "react";

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero-inner container'>
        <h1 className='title'>
          Hi there!
          <br /> I'm Simon
        </h1>

        <svg className='svg svg-circle' width='60' height='60'>
          <circle cx='30' cy='30' stroke='#FF0035' strokeWidth='7' r='15' />
        </svg>

        <svg className='svg svg-triangle' width='60' height='60'>
          <rect x='10' y='10' rx='5' ry='5' width='30' height='30' stroke='#3590F3' strokeWidth='7' />
        </svg>
      </div>

      <div className='custom-shape-divider-bottom-1618781758'>
        <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
          <path d='M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z' className='shape-fill'></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
