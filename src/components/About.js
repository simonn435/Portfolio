import React from "react";
import me from "../images/me.png";
import {SiUpwork, SiGmail} from "react-icons/si";
import {FaGithub, FaInstagram} from "react-icons/fa";
import Zoom from "react-reveal/Zoom";

const About = ({scroll}) => {
    return (
        <div className='about'>
            <div className='about-inner container'>
                <div className='about-content'>
                    <Zoom left>
                        <div className='about-img-container'>
                            <img src={me} alt='' className='about-img' />
                        </div>
                    </Zoom>

                    <Zoom right>
                        <div className='about-text'>
                            <h3 className='subtitle'>about me</h3>
                            <p className='text'>I am a self taught web developer who loves to do everything from small websites to complex web apps. I have experience working as a freelancer in upwork for different clients with HTML, CSS, Javascript and React.</p>

                            <div className='about-text--gmail'>
                                <h4>Contact me!</h4>
                                <span>
                                    <SiGmail />
                                    simonvillaverde9@gmail.com
                                </span>
                            </div>

                            <div className='about-text--links'>
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
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default About;
