import React from "react";

import prj from "./Projects";

const Work = () => {
  return (
    <section
      className="hero is-fullheight is-fullheight-style-hobbies"
      id="Work"
    >
      <div className="hero-header has-text-centered">
        <h1 className="title header-title">Work</h1>
        <h2 className="subtitle">View my work</h2>
        <div className="horizontal-line"></div>
      </div>
      <div className="hero-body work-body-spacing">
        <div className="columns is-variable is-desktop" style={gridstyle}>
          {prj.map((p, id) => (
            <div className="column hover-effect is-12 " key={id}>
              <div className="card">
                <div className="card-image">
                  <figure
                    className="image image-box"
                    style={{ overflow: "hidden" }}
                  >
                    <img src={p.Img} alt={p.Name} className="img-size" />
                    <div className="after has-text-centered">
                      <div className="image-overlay">
                        <p style={{ marginTop: "6rem" }}>{p.Name}</p>
                        <a
                          href={p.Link}
                          className="button is-link is-inverted is-outlined button-hover"
                          style={{ marginTop: "0.6rem" }}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-body">
        <div className="container-1">
          <i className="fas fa-hands fa-9x"></i>
          <i className="fas fa-heart fa-9x"></i>
        </div>
        <div className="columns is-variable is-mobile is-desktop">
          <div className="column is-9 is-offset-3">
            <h1 className="title has-text-left">Volunteer work</h1>
            <p style={{ fontSize: "19px" }}>
              <b>Company: </b> {`SSS (Sports Stepping Stones)`}
              <br />
              <b>Period: </b> 2 months+
              <br />
              <b>Role: </b> To help out the team with the children
            </p>
            <b style={{ fontSize: "19px" }}>Duties:</b>
            <ul
              style={{
                listStyleType: "circle",
                listStylePosition: "outside",
                marginLeft: "4.82rem",
                fontSize: "19px",
              }}
            >
              <li>Help feed the children</li>
              <li>
                Help with activities with children (such as sports drills and
                fun outside activities)
              </li>
              <li>Helping in disciplining the children</li>
              <li>
                Helping to bring in the children from their transport vehicle
                and escorting the children to their transport vehicle to go
                home.
              </li>
            </ul>
          </div>
        </div>
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
