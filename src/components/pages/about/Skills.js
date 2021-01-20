import React from "react";

import FullStackLogo from "../../../resources/images/full-stack-logo.png";

const Skills = () => {
  return (
    <section
      className="hero is-medium is-medium-style"
      id="Skills"
      style={{ backgroundColor: "lightblue" }}
    >
      <div className="hero-header has-text-centered">
        <h1
          className="title header-title"
          style={{ letterSpacing: "2px", fontSize: "45px" }}
        >
          Skills
        </h1>
      </div>
      <div className="hero-body">
        <div className="columns is-variable is-6-desktop">
          <div className="column is-5-desktop">
            <progress className="progress" value={80} max={100}>
              80%
            </progress>
            <h2 className="subtitle">Python</h2>
            <progress className="progress" value={65} max={100}>
              65%
            </progress>
            <h2 className="subtitle">HTML/CSS</h2>
            <progress className="progress" value={70} max={100}>
              70%
            </progress>
            <h2 className="subtitle">Javascript</h2>
          </div>
          <div className="column is-2-desktop is-offset-3">
            <img
              src={FullStackLogo}
              alt="full-stack-logo"
              width={430}
              height={240}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
