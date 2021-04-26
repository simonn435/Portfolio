import React from "react";

import {SiUpwork} from "react-icons/si";
import {FaGithub, FaInstagram} from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div>&copy; Simon Villaverde</div>
      <div className='footer-links'>
        <a href='https://www.upwork.com/freelancers/~015d69c5f3b0a6b8b9' target='_blank' rel='noreferrer'>
          <SiUpwork />
        </a>
        <a href='https://github.com/simonn435' target='_blank' rel='noreferrer'>
          <FaGithub />
        </a>
        <a href='https://instagram.com/simonvillaverde_' target='_blank' rel='noreferrer'>
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
