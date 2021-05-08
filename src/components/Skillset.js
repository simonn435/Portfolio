import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiSass, SiBootstrap, SiReact, SiGithub, SiGitlab, SiFigma, SiFilezilla, SiNpm } from "react-icons/si";

const Skillset = () => {
  return (
    <section className="skillset">
      <div className="skillset-inner">
        <h3 className="subtitle">Skillset</h3>
        <div className="skillset-icons">
          <div className="skillset-icon to-reveal bottom">
            <SiHtml5 style={{ color: "#E63946" }} />
          </div>

          <div className=" skillset-icon to-reveal bottom">
            <SiCss3 style={{ color: "#457B9D" }} />
          </div>

          <div className="skillset-icon to-reveal bottom">
            <SiJavascript style={{ color: "#FFD166" }} />
          </div>

          <div className="skillset-icon to-reveal bottom">
            <SiSass style={{ color: "#B81365" }} />
          </div>

          <div className="skillset-icon to-reveal bottom">
            <SiBootstrap style={{ color: "#67597A" }} />
          </div>

          <div className="skillset-icon to-reveal bottom">
            <SiReact style={{ color: "#00A6FB" }} />
          </div>

          <div className="skillset-icon to-reveal bottom">
            <SiGithub style={{ color: "#051923" }} />
          </div>

          <div className="skillset-icon to-reveal bottom">
            <SiGitlab style={{ color: "#FB5012" }} />
          </div>

          <div className="skillset-icon to-reveal bottom">
            <SiNpm style={{ color: "#fb1212" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillset;
