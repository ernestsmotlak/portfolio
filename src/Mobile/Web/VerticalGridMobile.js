import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import roundPhoto from "../../Profilna (1).png";
import "../Web/VerticalGridMobile.css";

const VerticalGridMobile = () => {
  return (
    <div
      className="background-custom-mobile"
      style={{
        width: "100%",
        margin: "0 auto",
        paddingTop: "4rem",
        paddingBottom: "4rem",
      }}
    >
      <div
        className="container text-center pb-3"
        style={{
          backgroundColor: "#f2f2f2",
          width: "85%",
          borderRadius: "7.5px",
        }}
      >
        <div className="row">
          <div className="col mt-4">
            <img
              style={{
                height: "200px",
                width: "200px",
                marginTop: "10px",
                borderRadius: "50%",
                border: "1px solid gray",
              }}
              src={roundPhoto}
              alt="Profile"
            ></img>
            <hr
              style={{ margin: "0 auto" }}
              className="w-50 mt-2 border-3 mb-2"
            ></hr>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="fs-3">Ernest Smotlak</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <a href="https://github.com/ernestsmotlak">
              <FaGithubSquare className="fs-1 text-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/ernest-smotlak"
              className="ms-2"
            >
              <FaLinkedin className="fs-1 text-black" />
            </a>
          </div>
        </div>
        <div className="row">
          <div
            className="col mb-4"
            style={{ fontSize: "17.5px", color: "#595959" }}
          >
            An aspiring web developer with a love for building both frontend and
            backend applications.
            <br />I am currently learning React and Node.js as I am eager to
            learn as much as possible about web development and continue
            developing my skills.
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalGridMobile;
