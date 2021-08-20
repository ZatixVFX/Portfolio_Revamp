import React from "react";

import FamilyImg from "../../../resources/images/family-icon.png";
import PopcornImg from "../../../resources/images/popcorn.png";

const Hobbies = () => {
  return (
    <section
      className="hero is-fullheight is-fullheight-style-hobbies"
      id="Hobbies"
    >
      <div className="hero-header has-text-centered">
        <h1
          className="title header-title"
          style={{ letterSpacing: "2px", fontSize: "45px" }}
        >
          Hobbies
        </h1>
      </div>
      <div className="hero-body">
        <div style={{ fontSize: "23px" }}>
          <i
            className="fa fa-laptop fa-6x"
            aria-hidden="true"
            style={{ paddingLeft: "4rem", paddingRight: "2rem" }}
          ></i>
        </div>
        <div className="columns is-variable is-mobile is-desktop is-vcentered">
          <div className="column is-mobile is-12-desktop">
            <h1
              className="about-me-title has-text-left"
              style={{ letterSpacing: "1px" }}
            >
              Gaining computer and programming knowledge
            </h1>
            <p className="about-me-subtitle line-height">
              My inspiration for coding came from a young age 7+. My Dad would
              bring computers from work and give it to me and my siblings to
              use. I’ve gained knowledge of how to build a computer, how to
              install an operating system, how to troubleshoot problems with the
              operating system and as a hobby I used to make videos, design
              logos and make 3D animations of the logo. Some time in High School
              I did some research on programming and I knew that I wanted to do
              programming as a full-time job. I started learning HTML in Grade
              11 from a website called w3schools.com. I finished their tutorial
              but didn’t manage to finish their quiz because I had to focus on
              Grade 12.
            </p>
          </div>
        </div>
      </div>
      <div className="hero-body">
        <div className="columns is-variable is-mobile is-desktop">
          <div className="column is-mobile is-12-desktop is-offset-1">
            <h1
              className="title has-text-left"
              style={{ letterSpacing: "2px" }}
            >
              Spending time with family
            </h1>
            <p className="subtitle line-height">
              I love spending time with my family if I managed to have time be
              with them because I believe that communicating with family will
              strengthen our family because they are an important part of my
              life{" "}
            </p>
          </div>
        </div>
        <img
          src={FamilyImg}
          alt="family-icon"
          width={240}
          height={240}
          style={{ paddingRight: "4rem" }}
        />
      </div>
      <div className="hero-body">
        <img
          src={PopcornImg}
          alt="popcorn-img"
          width={280}
          height={240}
          style={{ paddingLeft: "7rem" }}
        />
        <div className="columns is-variable is-mobile is-desktop">
          <div className="column is-mobile is-10-desktop is-offset-2">
            <h1 className="title has-text-left">Watching movies or series</h1>
            <p className="subtitle">
              In my spare time I love to watch Movies or Series. My favourite
              series is the flash
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
