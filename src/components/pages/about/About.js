import React from "react";

import AboutmeImg from "../../../resources/images/About-me-img.jpg";

const About = () => {
  return (
    <section className="hero is-fullheight is-fullheight-style" id="About">
      <div className="hero-body">
        <figure className="image">
          <img src={AboutmeImg} alt="Example-img" />
        </figure>

        <div className="columns">
          <div className="column is-offset-1">
            <h1
              className="title has-text-left"
              style={{ marginBottom: "0.2rem" }}
            >
              About Me
            </h1>
            <p className="about-me-subtitle line-height">
              I am a dedicated, hardworking and disciplined individual. I have a
              strong religious background which I believe has given good morals
              and ethics – including taking responsibility when required, being
              respectful and showing good manners. I believe that thinking
              positively will ultimately result in a positive outcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
