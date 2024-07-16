import React, { useState, useEffect } from "react";
import "../../Mobile/Navbar.css";

const NavbarMobile = () => {
  const [activeButton, setActiveButton] = useState("");

  const checkLocation = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition < 710) {
      setActiveButton("description");
    } else if (scrollPosition >= 710 && scrollPosition < 1345) {
      setActiveButton("techStack");
    } else if (scrollPosition >= 1345 && scrollPosition < 2000) {
      // Adjust the value 2000 to your actual contact me position
      setActiveButton("myWork");
    } else if (scrollPosition >= 2000) {
      // Adjust the value 2000 to your actual contact me position
      setActiveButton("contactMe");
    } else {
      setActiveButton("");
    }
  };

  const scroll = (value) => (event) => {
    event.preventDefault();
    window.scrollTo({ top: value, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      checkLocation();
      // console.log(window.scrollY);
      // Log the current scroll position to the console
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
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ps-4 pe-4 fs-5">
              <li className="nav-item ps-4 pe-4">
                <a
                  className={`nav-link active ${
                    activeButton === "description"
                      ? "custom-navbar-btn-clicked"
                      : ""
                  }`}
                  href=""
                  onClick={scroll(0)}
                >
                  Mobile!!!
                </a>
              </li>
              <li className="nav-item ps-4 pe-4">
                <a
                  className={`nav-link active ${
                    activeButton === "techStack"
                      ? "custom-navbar-btn-clicked"
                      : ""
                  }`}
                  href=""
                  onClick={scroll(710)}
                >
                  Tech Stack
                </a>
              </li>
              <li className="nav-item ps-4 pe-4">
                <a
                  className={`nav-link active ${
                    activeButton === "myWork" ? "custom-navbar-btn-clicked" : ""
                  }`}
                  href=""
                  onClick={scroll(1345)}
                >
                  My Work
                </a>
              </li>
              <li className="nav-item ps-4 pe-4">
                <a
                  className={`nav-link active ${
                    activeButton === "contactMe"
                      ? "custom-navbar-btn-clicked"
                      : ""
                  }`}
                  href=""
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
