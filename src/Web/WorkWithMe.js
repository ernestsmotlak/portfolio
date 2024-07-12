import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const WorkWithMe = () => {
  return (
    <div className="pt-4 pb-2">
      <div class="container text-center w-25 mb-4">
        <div className="fs-2 mx-auto">CONTACT ME</div>
        <hr class="border border-secondary border-2 opacity-50"></hr>
        <div class="row">
          <div class="col">ernestsmotlak@gmail.com</div>
        </div>
        <div class="row">
          <div class="col mb-1">+386 41 613 960</div>
        </div>
        <div class="row">
          <div class="col">
            <a href="https://github.com/ernestsmotlak">
              <FaGithubSquare className="fs-1 text-black" />
            </a>
            <a href="https://www.linkedin.com/in/ernest-smotlak" className="ms-2">
              <FaLinkedin className="fs-1 text-black" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithMe;
