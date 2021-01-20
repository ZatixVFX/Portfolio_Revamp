import React from "react";

import Navbar from "../layout/Navbar";

const LandingPage = () => {
  return (
    <div className="container-fluid section_divider" id="landing-page">
      <div className="row">
        <div className="col-xxl col-sm-12 align-self-center">
          <div className="typewriter">
            <h1 className="text-center text_1" style={{ fontSize: "2.5rem" }}>
              {" "}
              Hello, My name is Junaid Salie
            </h1>
            <br />
            <h2 className="text-center text_2" style={{ fontSize: "2.5rem" }}>
              and I'am a full stack developer
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
