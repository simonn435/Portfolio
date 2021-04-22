import React from "react";

const Hero = ({ scroll }) => {
  return (
    <section className="hero">
      <div className="hero-inner container">
        <h1 className="title" style={{ transform: `translateY(${scroll * 0.6}px)` }}>
          Hi there!
          <br />
          I'm Simon
        </h1>

        {/* Svg shapes */}

        <svg style={{ transform: `translateY(${scroll * 0.7}px)` }} className="svg svg-circle" width="60" height="60">
          <circle cx="30" cy="30" stroke="#FF0035" strokeWidth="7" r="15" />
        </svg>

        <svg style={{ transform: `translateY(${scroll * 0.4}px) rotate(${scroll * 0.08}deg)` }} className="svg svg-triangle" width="60" height="60">
          <rect x="10" y="10" rx="5" ry="5" width="30" height="30" stroke="#3590F3" strokeWidth="7" />
        </svg>
      </div>
      {/* Bottom shape divider */}
      <div className="custom-shape-divider-bottom-1618781758">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
