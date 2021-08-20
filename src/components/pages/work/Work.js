import React from "react";

// Images
import Image from "../../../resources/images/About-me/About-me-img_1.jpg";

import WebDesignEndOfModuleProject from "../../../resources/images/projects/web-design-end-of-module-project.png";
import GithubFinderProject from "../../../resources/images/projects/github-finder-react-project.png";
import ContactKeeperProject from "../../../resources/images/projects/contact-keeper-react-project.png";

const Work = () => {
  const projects = [
    {
      Img: WebDesignEndOfModuleProject,
      Name: "Web Design End Of Module Project",
      Link: "https://web-design-end-of-module-project.netlify.app/",
    },
    {
      Img: GithubFinderProject,
      Name: "Github Finder ReactJS tutorial",
      Link: "https://github-finder-project-reactjs.netlify.app/",
    },
    {
      Img: ContactKeeperProject,
      Name: "Contact Keeper ReactJS tutorial",
      Link: "",
      tooltip: "Link not available",
    },
  ];
  return (
    <section className="container">
      <h1 className="text-center pg-header pb-3">Projects</h1>
      <div
        className="d-grid text-center"
        style={{
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "3rem 0rem",
          justifyItems: "center",
        }}
      >
        {projects.map((i, x) => (
          <div className="projects" key={x}>
            {!i.Name && (
              <p style={{ paddingTop: "6rem", fontSize: "45px" }}>...</p>
            )}
            {!i.Img ? (
              <div
                className="bg-dark text-white"
                style={{ width: "100%", height: "100%" }}
              >
                <p className="text-transition">{i.Name}...</p>
              </div>
            ) : (
              <img src={i.Img} alt={i.Name} />
            )}

            <div className="project-overlay">
              <p
                className="text-white"
                style={{ cursor: "default", marginTop: "5rem" }}
              >
                {i.Name}
              </p>
              <button>View Project</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const gridstyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  rowGap: "1rem",
  columnGap: "2.5rem",
};

export default Work;
