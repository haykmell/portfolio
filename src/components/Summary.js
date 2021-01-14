import React from "react";

const Summary = () => {
  return (
    <section className="summary" id="summary">
      <div className="container more">
        <div className="summary-info wow fade-in-left" data-wow-delay="0.5s">
          <div className="section-title-container">
            <h2 className="section-title">Who am I...</h2>
            <h3>Hello there! My name is Hayk and I'm a Front End Developer</h3>
            <p>
              Like many other people, I enjoy spending my free time increasing
              my knowledge of Web Development and building new and challenging
              projects.
            </p>
          </div>
          <a href="/#footer-contact" className="findOutBtn">
            Find out more
          </a>
        </div>
        <div
          className="image-container fast-fade-in-right wow"
          data-wow-delay=".5s"
        >
          <img src="/images/internet.png" alt="internet " />
        </div>
      </div>
    </section>
  );
};

export default Summary;
