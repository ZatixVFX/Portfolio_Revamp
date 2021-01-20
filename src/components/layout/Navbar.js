import React from "react";
//import { Link } from "react-scroll";

//import JunaidSalieLogo from "../../resources/images/JunaidSalieLogo.png";

/*
const NavbarBurger = (props) => (
  <a
    onClick={props.toggleMenu}
    href="#none"
    rel="noopener noreferrer"
    role="button"
    className={`navbar-burger burger ${props.active ? "is-active" : ""}`}
    aria-label="menu"
    aria-expanded="false"
    data-taget="navbarBasicExample"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
);
*/

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">
          <div className="wave-wrap">
            <div className="j wave">J</div>
            <div className="u wave">u</div>
            <div className="n wave">n</div>
            <div className="a wave">a</div>
            <div className="i wave">i</div>
            <div className="d wave">d</div>
            <div className="blank_space wave" style={{ marginLeft: "10px" }}>
              {" "}
            </div>
            <div className="s wave">S</div>
            <div className="aa wave">a</div>
            <div className="l wave">l</div>
            <div className="ii wave">i</div>
            <div className="e wave">e </div>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
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
              <a href="Hobbies" className="nav-link">
                Hobbies
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

/*
class Navbar extends React.Component {
  state = {
    navBackground: "transparent",
    activeMenu: false,
  };

  toggleMenu = () => {
    this.setState({ activeMenu: !this.state.activeMenu });
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 70 ? "transparent" : "#C98642";

      this.setState({ navBackground: backgroundcolor });
    });
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top is-transparent"
        role="navigation"
        aria-label="main navigation"
        style={{ backgroundColor: `${this.state.navBackground}` }}
      >
        <div className="navbar-brand">
          <Link
            activeClass="active"
            to="landing-page"
            spy={true}
            smooth={true}
            duration={500}
            className="navbar-item"
          >
            <img
              src={JunaidSalieLogo}
              alt="JunaidSalieLogo"
              width={112}
              height={28}
            />
          </Link>
          <NavbarBurger
            active={this.state.activeMenu}
            toggleMenu={this.toggleMenu}
          />
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${
            this.state.activeMenu ? "is-active activeMenuM" : ""
          }`}
        >
          <div className="navbar-end">
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-item has-text-white"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-item has-text-white"
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="Hobbies"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-item has-text-white"
            >
              Hobbies
            </Link>
            <Link
              activeClass="active"
              to="Work"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-item has-text-white"
            >
              Work
            </Link>
            <Link
              activeClass="active"
              to="Testimonials"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-item has-text-white"
            >
              Testimonials
            </Link>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              duration={500}
              className="navbar-item has-text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
*/
export default Navbar;
