import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import roundPhoto from "../../Profilna (1).png";
import "../Web/VerticalGridMobile.css";

const VerticalGridMobile = () => {
  return (
    <div
      className="background-custom"
      style={{
        width: "100%",
        margin: "0 auto",
        paddingTop: "9rem",
        paddingBottom: "5rem",
      }}
    >
      <div
        className="container text-center pb-3"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <div className="row">
          <div className="col mt-4">
            <img
              style={{
                height: "300px",
                width: "300px",
                marginTop: "10px",
                borderRadius: "50%",
                border: "1px solid gray",
              }}
              src={roundPhoto}
              alt="Profile"
            ></img>
            <hr
              style={{ margin: "0 auto" }}
              className="w-25 mt-2 border-3 mb-2"
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
          <div className="col mb-4">
            Lorem Ipsilum Lorem Ipsilum Lorem Ipsilum Lorem Ipsilum <br></br>
            Lorem Ipsilum Lorem Ipsilum Lorem Ipsilum Lorem Ipsilum <br></br>
            Lorem Ipsilum Lorem Ipsilum Lorem Ipsilum Lorem Ipsilum
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalGridMobile;
