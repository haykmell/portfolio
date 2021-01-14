import React from "react";
import { FaChevronCircleDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="main-header-container long-fade-in">
          <div className="main-header-content">
            <div className="logo">
              <a href="/" className="main-logo">
                HM<span>TECHNOLOGIES</span>
              </a>
            </div>
            <h2>PEOPLE WORK BETTER TOGETHER</h2>
            <p>
              The power of one, if fearless and focused, is formidable, but the
              power of many working together is better.
              <span>-Gloria Macapagal Arroyo</span>
            </p>
          </div>
          <div className="main-header-side-content">
            <p>
              Want to work with me? I'm always looking for new projects or a
              coding buddy. Don't be shy, get in touch!
            </p>
            <a href="/#footer-contact" className="getTouchBtn">
              Get in touch
            </a>
          </div>
        </div>
        <a href="#summary" className="click-down">
          <FaChevronCircleDown className="click-down-icon  long-fade-in" />
        </a>
      </div>
    </header>
  );
};

export default Header;
