import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <img src="/images/brian.png" alt="Brian" className="navbar-img" />
        <ul className="navbar-links">
          <li>
            <Link to="hero" smooth={true} duration={300}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={300}>
              About
            </Link>
          </li>
          <li>
            <Link to="project" smooth={true} duration={300}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={300}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;