import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary border"
        style={{ height: "75px" }}
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
              <a className="nav-link active" href="#">
                Navbar
              </a>
              <li className="nav-item ps-4 pe-4">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ps-4 pe-4">
                <a className="nav-link active" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item ps-4 pe-4">
                <a className="nav-link active" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item bg-secondary-subtle ps-4 pe-4">
                <a className="nav-link active" href="#">
                  Link
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
