import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiReact } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { DiWordpress } from "react-icons/di";
import { BiGitBranch } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { MdReportProblem } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const Skills = () => {
  return (
    <section className="skills">
      <div className="container more">
        <div className="section-title-container center">
          <h2 className="section-title">Technological Skills</h2>
          <p>
            I always enjoy learning new things. Especially the technologies that
            make your company special.
          </p>
        </div>

        <div className="skills-content">
          <div className="row row-1">
            <div>
              Semantic HTML5 <AiFillHtml5 />
            </div>
            <div>
              Responsive CSS3 <DiCss3 />
            </div>
            <div>
              Interactive JavaScript <SiJavascript />
            </div>
          </div>
          <div className="row row-1">
            <div>
              Sass <FaSass />
            </div>
            <div>
              jQuery <DiJqueryLogo />
            </div>
            <div>
              Bootstrap <BsFillBootstrapFill />
            </div>
          </div>
          <div className="row row-2">
            <div>
              React <DiReact />
            </div>
            <div>
              Redux <SiRedux />
            </div>
          </div>
          <div className="row row-3">
            <div>
              Problem Solver <MdReportProblem />
            </div>
            <div>
              git <BiGitBranch />
            </div>
            <div>
              github <AiOutlineGithub />
            </div>
          </div>
          <div className="row row-4">
            <div>
              Transform PSD / Wireframes into web applications <FiEdit />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
