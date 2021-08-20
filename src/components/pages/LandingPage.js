import React from "react";

const LandingPage = () => {
  return (
    <div
      className="container-fluid section_divider"
      id="landing-page"
      style={{ position: "relative" }}
    >
      <div className="landing-pg-bg-img">
        <div className="cover-layer"></div>
      </div>

      <div className="row">
        <div className="col-xxl col-sm-12 align-self-center">
          <h1 className="text-center text-white header">FullStack Developer</h1>
          <h2 className="text-center text-white sub-header">
            Mogamad Junaid Salie
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
