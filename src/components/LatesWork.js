import React from "react";
import data from "../assets/data/latest-works.json";
import { Link } from "react-router-dom";

const LatesWork = ({ setSelectedWork }) => {
  return (
    <section className="latest-work" id="works">
      <div className="container more">
        <div
          className="section-title-container wow fade-in-up"
          data-wow-delay="0.5s"
        >
          <h2 className="section-title">My Latest Work</h2>
          <p>Some of my greatest and latest projects.</p>
        </div>

        <div className="works">
          {data.map((work) => {
            return (
              <div
                className="card wow fade-in"
                data-wow-delay="0.5s"
                key={work.id}
              >
                <div className="project-image">
                  <img src={work.image} alt="Work" />

                  <Link
                    onClick={() => {
                      setSelectedWork(work);
                    }}
                    to="/work/#selected"
                  >
                    <div className="project-image-overlay fade-in-hover"></div>
                  </Link>
                  <a href="/work"></a>
                </div>
                <p>{work.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatesWork;
