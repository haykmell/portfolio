import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiListSettingsLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { BiMap } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer" id="footer-contact">
      <div className="container more wow fade-in-up" data-wow-delay="0.5s">
        <div className="footer-left-content">
          <h2>About HAYK</h2>
          <p>Hello there! My name is Hayk and I'm a Front End Developer.</p>
          <p>
            Like many other people, I enjoy spending my free time increasing my
            knowledge of Web Development and building new and challenging
            projects.
          </p>
          <p>
            Nowadays I tend to code all of my projects from scratch in order to
            deliver a unique experience to every company.
          </p>
          <p>Some of my favorite things to do include:</p>
          <ul className="favorite-things">
            <li>
              <BsFillPeopleFill className="favorite-icon" /> 1 on 1 tutoring on
              development
            </li>
            <li>
              <RiListSettingsLine className="favorite-icon" /> Contributing to
              open source projects
            </li>
            <li>
              <FaCode className="favorite-icon" /> Learning modern standards and
              best practices of the industry
            </li>
          </ul>
        </div>
        <div className="footer-right-content">
          <h2>Say hello:</h2>
          <ul className="my-contacts">
            <li>
              <BiMap />
              Address: Armenia, Erevan
            </li>
            <li>
              <a href="mailto:softwareisfine@gmail.com">
                <MdEmail />
                Email: softwareisfine@gmail.com
              </a>
            </li>
            <li>
              <AiFillPhone />
              Phone: (374) 98-708-739
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright wow fade-in-up" data-wow-delay="0.9s">
        © 2021 Hayk Meliqyan
      </div>
    </footer>
  );
};

export default Footer;
