import React from "react";
import { FaCode } from "react-icons/fa";
import { GiSpellBook } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";

const Advantages = () => {
  return (
    <section className="advantages">
      <div className="container more">
        <div
          className="section-title-container center wow fade-in"
          data-wow-delay="0.3s"
        >
          <h2 className="section-title">Why work with me?</h2>
          <p>There are many advantages to working with me. Here are a few:</p>
        </div>
        <div className="advantages-content">
          <div className="advantages-card wow fade-in" data-wow-delay="0.5s">
            <FaCode className="advantage-icon" />
            <h2 className="advantage-title">Passionate about development</h2>
            <p>
              Big believer in the fact that the greatest work is done by
              passionate people.
            </p>
          </div>
          <div className="advantages-card wow fade-in" data-wow-delay="0.7s">
            <GiSpellBook className="advantage-icon" />
            <h2 className="advantage-title">Quick learner</h2>
            <p>
              Confident in my ability to learn something new and put it into
              production. Thrive in fast-paced and competitive environments.
            </p>
          </div>
          <div className="advantages-card wow fade-in" data-wow-delay="0.9s">
            <BsFillPeopleFill className="advantage-icon" />
            <h2 className="advantage-title">Adaptable</h2>
            <p>
              Always excited to learn new things. The most valuable thing I can
              provide to your company is the ability to be molded to your stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
