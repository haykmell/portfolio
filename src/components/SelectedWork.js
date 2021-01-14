import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";

const SelectedWork = ({ selectedWork }) => {
  const { description, image, urlCode, website } = selectedWork;

  return (
    <section className="selected-work" id="selected">
      <div className="container more">
        <div className="section-title-container center">
          <h2 className="section-title fast-fade-in-left wow">Overview:</h2>
        </div>

        <div className="work-content">
          <div className="work-info fast-fade-in-left wow" data-wow-delay=".5s">
            <p className="work-description">{description}</p>
          </div>

          <div
            className="work-info-right fast-fade-in-right wow"
            data-wow-delay=".5s"
          >
            <div className="work-image">
              <img src={image} alt="work" />

              <div className="work-info-buttons">
                <a href={website} target="_blank">
                  Visit Project{" "}
                  <FaAngleDoubleRight className="work-info-icon" />
                </a>
                <a href={urlCode} target="_blank">
                  View Code <FaAngleDoubleRight className="work-info-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <a
          href="/#works"
          className="back-btn fast-fade-in-left wow"
          data-wow-delay=".5s"
        >
          <FaAngleDoubleLeft /> Go back to projects
        </a>
      </div>
    </section>
  );
};

export default SelectedWork;
