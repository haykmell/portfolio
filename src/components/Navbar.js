import React from "react";
import { FaDownload } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ hamburger, setHamburger }) => {
  return (
    <nav>
      <GiHamburgerMenu
        onClick={() => setHamburger(!hamburger)}
        className="hamburger"
      />
      <div className="logo">
        <a href="/" className="navbar-logo">
          HM<span>T</span>
        </a>
      </div>
      <ul className={`${hamburger && "block"} nav-links`}>
        <li className="delayed-fade-in-left">
          <a href="/#summary">About Me</a>
        </li>
        <li className="delayed-fade-in-left delay-2">
          <a href="/#works">Projects</a>
        </li>
        <li className="delayed-fade-in-left delay-3">
          <a href="/#contact">Connect With me </a>
        </li>
        <li className="delayed-fade-in-left delay-4">
          <a href="/#footer-contact">Contact</a>
        </li>
        <li className="delayed-fade-in-left delay-5">
          <a href="resume.pdf" download>
            RESUME <FaDownload />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
