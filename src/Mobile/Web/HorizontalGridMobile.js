import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { BiSolidFileCss } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";

const HorizontalGridMobile = () => {
  return (
    <div
      style={{ paddingTop: "3rem", marginBottom: "4rem" }}
      //   className="bg-info-subtle"
    >
      <div className="fs-2 text-center">
        TECH STACK
        <hr class="border border-secondary border-2 opacity-50 mx-auto w-25 mb-4"></hr>
      </div>
      <div
        class="container text-center border w-75"
        // style={{ height: "300px", marginTop: "2rem" }}
      >
        <div class="row" style={{ marginTop: "2rem" }}>
          <div class="col">
            <TiHtml5 style={{ width: "200px", height: "200px" }} />
          </div>
          <div class="col">
            <BiSolidFileCss style={{ width: "175px", height: "200px" }} />
          </div>
          <div class="col">
            <RiJavascriptFill style={{ width: "175px", height: "200px" }} />
          </div>
        </div>
        <div class="row w-75" style={{ marginTop: "2rem", margin: "0 auto" }}>
          <div class="col">
            <FaReact style={{ width: "175px", height: "200px" }} />
          </div>
          <div class="col">
            <IoLogoNodejs style={{ width: "175px", height: "200px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalGridMobile;
