import React from "react";

import AboutmeImg from "../../../resources/images/About-me/About-me-img.jpg";

const About = () => {
  return (
    <div className="container-xl pb-5" id="About">
      <h1 className="py-3 text-center pg-header">About Me</h1>
      <div className="row">
        <div className="col" style={{ paddingTop: "0.41rem" }}>
          <img
            src={AboutmeImg}
            className="img-fluid about-me-img"
            alt="Junaid Salie pic"
          />
        </div>
        <div className="col-7 ps-5">
          <p className="about-me">
            As a developer I'm most passionate about building web api and RL
            (real life)/simulator robots. My passion for computers came from a
            young age and in highschool I was curious about what jobs I can do
            with computers, until I found my next passion coding, I then started
            learning coding on{" "}
            <a
              href="www.w3schools.com"
              style={{
                color: "black",
                textDecoration: "underline",
              }}
            >
              W3Schools
            </a>{" "}
            and after finishing HighSchool I attended{" "}
            <a
              href="www.lifechoices.co.za/academy"
              style={{ color: "black", textDecoration: "underline" }}
            >
              LifeChoices Academy
            </a>{" "}
            I am a dedicated, hardworking and disciplined individual. I have a
            strong religious background which I believe has given me good morals
            and ethics – including taking responsibility when required, being
            respectful and showing good manners. I believe that thinking
            positively will ultimately result in a positive outcome.
          </p>
          <h2 className="text-center" style={{ fontWeight: "bold" }}>
            Hobbies
          </h2>
          <ul style={{ listStyleType: "none" }}>
            <li className="hobby">
              <i class="fas fa-code me-1"></i> Programming
            </li>
            <li className="hobby">
              <i class="fas fa-film me-3"></i>Movies
            </li>
            <li className="hobby">
              <i class="fas fa-gamepad" style={{ marginRight: "0.6rem" }}></i>
              Gaming
            </li>
            <li className="hobby d-inline-flex">
              <span class="material-icons me-3">family_restroom</span>
              <p className="pb-2 mb-0">Family</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
