import React from "react";
import { GiLaptop } from "react-icons/gi";

const MyWork = () => {
  return (
    <div style={{ height: "500px" }} className="bg-secondary-subtle">
      <div class="container text-center" style={{paddingTop: '3rem'}}>
        <div class="row">
          <div className="col mb-5 fs-1">My Projects</div>
          <div class="row">
            <GiLaptop style={{ fontSize: "10rem", marginLeft: "10px" }} />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <hr className="mx-auto" style={{border: '5px solid green', width: '15rem'}}></hr>
          </div>
        </div>
        <div class="row">
          <div class="col mx-auto mt-3" style={{maxWidth: '40rem'}}>Lorem ipsilum Lorem ipsilum Lorem ipsilum Lorem ipsilum Lorem ipsilum Lorem ipsilum Lorem ipsilum </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
