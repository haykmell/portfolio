import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { SiUpwork } from "react-icons/si";
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container more wow fade-in-up " data-wow-delay="0.5s">
        <div className="section-title-container">
          <h2 className="section-title">Connect with me:</h2>
          <p>
            Want to get in touch? I share my passion for development anywhere I
            can.
          </p>
        </div>
        <div className="contact-content">
          <a
            href="https://github.com/haykmell"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            <AiOutlineGithub />
          </a>
          <a
            href="mailto:softwareisfine@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            <MdEmail />
          </a>
          <a
            href="https://www.youtube.com/channel/UCASIsrBaf4gZu8NItXCbpZA"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            <AiFillYoutube />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01c8b5ccfe523c0000"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            <SiUpwork />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
