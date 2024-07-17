import React, { useState, useEffect } from "react";
import "../../Mobile/Navbar.css";

const NavbarMobile = () => {
  const [activeButton, setActiveButton] = useState("");
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);

  const checkLocation = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition < 710) {
      setActiveButton("description");
    } else if (scrollPosition >= 710 && scrollPosition < 1345) {
      setActiveButton("techStack");
    } else if (scrollPosition >= 1345 && scrollPosition < 2000) {
      setActiveButton("myWork");
    } else if (scrollPosition >= 2000) {
      setActiveButton("contactMe");
    } else {
      setActiveButton("");
    }
  };

  const scroll = (value) => (event) => {
    event.preventDefault();
    window.scrollTo({ top: value, behavior: "smooth" });
  };

  const toggleNavbar = () => {
    setNavbarCollapsed(!navbarCollapsed);
  };

  useEffect(() => {
    const handleScroll = () => {
      checkLocation();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed-top border"
        style={{ height: "75px", width: "100%" }}
      >
        <div className="container-fluid d-flex justify-content-center">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={!navbarCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-center ${
              !navbarCollapsed ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ps-4 pe-4 fs-5">
              <li className="nav-item ps-4 pe-4">
                <a
                  className={`nav-link ${
                    activeButton === "description"
                      ? "custom-navbar-btn-clicked"
                      : ""
                  }`}
                  href="#"
                  onClick={scroll(0)}
                >
                  Mobile!!!
                </a>
              </li>
              <li className="nav-item ps-4 pe-4">
                <a
                  className={`nav-link ${
                    activeButton === "techStack"
                      ? "custom-navbar-btn-clicked"
                      : ""
                  }`}
                  href="#"
                  onClick={scroll(710)}
                >
                  Tech Stack
                </a>
              </li>
              <li className="nav-item ps-4 pe-4">
                <a
                  className={`nav-link ${
                    activeButton === "myWork" ? "custom-navbar-btn-clicked" : ""
                  }`}
                  href="#"
                  onClick={scroll(1345)}
                >
                  My Work
                </a>
              </li>
              <li className="nav-item ps-4 pe-4">
                <a
                  className={`nav-link ${
                    activeButton === "contactMe"
                      ? "custom-navbar-btn-clicked"
                      : ""
                  }`}
                  href="#"
                  onClick={scroll(document.body.scrollHeight)}
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarMobile;
