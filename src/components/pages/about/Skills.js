import React from "react";

import Developer from "../../../resources/images/developer.png";
import Python from "../../../resources/images/Skills-images/python.png";
import Javascript from "../../../resources/images/Skills-images/javascript.png";
import HTML_CSS from "../../../resources/images/Skills-images/HTML_CSS.png";
import MERN_Stack from "../../../resources/images/Skills-images/MERN_Stack.png";
import MySQL from "../../../resources/images/Skills-images/MySQL.png";

const Skills = () => {
  return (
    <section className="container" id="Skills">
      <h1 className="text-center pg-header">Skills</h1>
      <div className="d-flex">
        <div className="row w-100">
          <div className="col">
            <img
              src={Developer}
              style={{ width: "400px", height: "500px" }}
              alt="Developer"
            />
          </div>
        </div>
        <div className="row row-cols-1 w-100">
          <div className="col  d-flex">
            <img
              src={Python}
              className="skills-img"
              style={{
                marginRight: "1rem",
                width: "82px",
                paddingLeft: "0.5rem",
              }}
              alt="Python programming language"
            />
            <div className="d-block" style={{ width: "100%" }}>
              <h1 className="skills-header">Python</h1>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  80%
                </div>
              </div>
            </div>
          </div>
          <div className="col  d-flex">
            <img
              src={Javascript}
              className="skills-img"
              style={{
                marginRight: "1rem",
                width: "82px",
                paddingLeft: "0.5rem",
              }}
              alt="Javascript programming language"
            />
            <div className="d-block" style={{ width: "100%" }}>
              <h1 className="skills-header">Javascript</h1>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  80%
                </div>
              </div>
            </div>
          </div>
          <div className="col  d-flex">
            <img src={HTML_CSS} className="skills-img" alt="HTML_CSS" />
            <div style={{ width: "100%" }}>
              <h1 className="skills-header">HTML & CSS3</h1>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  75%
                </div>
              </div>
            </div>
          </div>
          <div className="col  d-flex">
            <img src={MERN_Stack} className="skills-img" alt="MERN Stack" />
            <div className="d-block" style={{ width: "100%" }}>
              <h1 className="skills-header">MERN_Stack</h1>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  70%
                </div>
              </div>
            </div>
          </div>
          <div className="col  d-flex">
            <img src={MySQL} className="skills-img" alt="MySQL" />
            <div className="d-block" style={{ width: "100%" }}>
              <h1 className="skills-header">MySQL</h1>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "65%" }}
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  65%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
