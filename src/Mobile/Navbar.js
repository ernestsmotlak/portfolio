import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = (value) => (event) => {
    event.preventDefault();
    window.scrollTo({ top: value, behavior: "smooth" });
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary border ${
          isFixed ? "fixed-top" : ""
        }`}
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
              <a className="nav-link active" href="#" onClick={scroll(85)}>
                Description!
              </a>
              <li className="nav-item ps-4 pe-4">
                <a className="nav-link active" aria-current="page" href="#">
                  Tech Stack
                </a>
              </li>
              <li className="nav-item ps-4 pe-4">
                <a className="nav-link active" href="#">
                  My Work
                </a>
              </li>
              <li className="nav-item bg-secondary-subtle ps-4 pe-4">
                <a className="nav-link active" href="#">
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

export default Navbar;
