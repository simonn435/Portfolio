import React from "react";
import todoapp from "../images/todoapp.PNG";
import chatapp from "../images/chatapp.PNG";
import pokeapi from "../images/pokeapi.PNG";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectsCards = () => {
  return (
    <div className="projects-cards">
      <div className="projects-card to-reveal bottom">
        <img src={todoapp} alt="" />
        <div className="project-link">
          <a href="https://github.com/simonn435/todoapp-react" rel="noreferrer" target="_blank">
            <FaGithub />
          </a>
          <a href="https://goofy-colden-0a46fb.netlify.app/" rel="noreferrer" target="_blank">
            <FiExternalLink />
          </a>
        </div>
      </div>
      <div className="projects-card to-reveal bottom">
        <img src={chatapp} alt="" />
        <div className="project-link">
          <a href="https://github.com/simonn435/chat-app-react" rel="noreferrer" target="_blank">
            <FaGithub />
          </a>
          <a href="https://epic-swanson-fde322.netlify.app/" rel="noreferrer" target="_blank">
            <FiExternalLink />
          </a>
        </div>
      </div>
      <div className="projects-card to-reveal bottom">
        <img src={pokeapi} alt="" />
        <div className="project-link">
          <a href="https://github.com/simonn435/pokeapi-test" rel="noreferrer" target="_blank">
            <FaGithub />
          </a>
          <a href="https://sad-brown-1f385c.netlify.app/" rel="noreferrer" target="_blank">
            <FiExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
