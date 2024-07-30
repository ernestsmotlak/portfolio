import React from "react";
import { GiLaptop } from "react-icons/gi";

const MyWorkMobile = () => {
  return (
    <div className="myWork-background-mobile pb-5">
      <div class="container text-center" style={{ paddingTop: "3rem" }}>
        <div class="row">
          <div className="col mb-4 fs-2">
            MY WORK
            <hr
              className="mx-auto"
              style={{ border: "2.5px solid", width: "15rem" }}
            ></hr>
          </div>
          <div class="row">
            <GiLaptop style={{ fontSize: "8.5rem", marginLeft: "10px" }} />
          </div>
        </div>
        <div class="row">
          <div class="col"></div>
        </div>
        <div class="row">
          <div class="col mx-auto mt-3" style={{ maxWidth: "40rem", color: '#595959' }}>
            My work is showcased here.
            <br />
            Most of my projects are made with React, Node.js, and Bootstrap.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWorkMobile;
