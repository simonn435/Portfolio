import React, {useState} from "react";
import Fade from "react-reveal/Fade";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [show, setShow] = useState(false);

    const toggleNav = () => {
        setShow(!show);
    };

    return (
        <nav className='navbar'>
            <div className={show ? "navbar-inner container active" : "navbar-inner container"}>
                <Link to='/' className='navbar-brand'>
                    <Fade left cascade>
                        Simon Villaverde
                    </Fade>
                </Link>
                <button className='navbar-toggler' onClick={toggleNav}>
                    <div className={show ? "line line1" : "line"}></div>
                    <div className={show ? "line line2" : "line"}></div>
                    <div className={show ? "line line3" : "line"}></div>
                </button>
                <ul className='nav-items'>
                    <li>
                        <Link to='/' className='nav-link'>
                            <Fade right cascade>
                                Home
                            </Fade>
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className='nav-link'>
                            <Fade right cascade>
                                About
                            </Fade>
                        </Link>
                    </li>
                    <li>
                        <Link to='/projects' className='nav-link'>
                            <Fade right cascade>
                                Projects
                            </Fade>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
