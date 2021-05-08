import React, {useState} from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleNav = () => {
    setShow(!show);
  };

  return (
    <nav className='navbar'>
      <div className={show ? "navbar-inner container active" : "navbar-inner container"}>
        <a href='#home' className='navbar-brand'>
          Simon Villaverde
        </a>
        <button className='navbar-toggler' onClick={toggleNav}>
          <div className={show ? "line line1" : "line"}></div>
          <div className={show ? "line line2" : "line"}></div>
          <div className={show ? "line line3" : "line"}></div>
        </button>
        <ul className='nav-items'>
          <li>
            <a href='#home' className='nav-link'>
              Home
            </a>
          </li>
          <li>
            <a href='#work' className='nav-link'>
              Work
            </a>
          </li>
          <li>
            <a href='#projects' className='nav-link'>
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
