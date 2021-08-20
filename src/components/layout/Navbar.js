import React, { useState } from "react";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState("");
  const [nav_bg, setNavBg] = useState("bg-transparent");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
      setNavBg("bg-dark");
    } else {
      setNavBg("bg-transparent");
    }
  });
  return (
    <nav
      className={`navbar navbar-expand-lg ${nav_bg} navbar-fixed-top`}
      id="Navbar"
    >
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <h1
            className="fs-4 junaid-salie"
            style={{
              color: "white",
              fontWeight: "bolder",
              fontFamily: "sans-serif",
            }}
          >
            Junaid Salie
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="navbar"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          onClick={() => {
            if (!expanded) {
              setExpanded(true);
              setShow("show");
            } else {
              setExpanded(false);
              setShow("");
            }
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${show}`} id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="About" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="Skills" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="Work" className="nav-link">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a href="Testimonials" className="nav-link">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a href="Contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
