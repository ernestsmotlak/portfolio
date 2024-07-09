import React from "react";

const HorizontalGrid = () => {
  return (
    <div
      style={{ height: "600px", paddingTop: "5rem" }}
    //   className="bg-info-subtle"
    >
        Technologies
      <div class="container text-center border" style={{height: '300px', marginTop: '2rem'}}>
        <div class="row" style={{marginTop: '2rem'}}>
          <div class="col">
          <img src="..." class="img-fluid" alt="React Logo"></img>
          </div>
          <div class="col">
          <img src="..." class="img-fluid" alt="..."></img>
          </div>
          <div class="col">
          <img src="..." class="img-fluid" alt="..."></img>
          </div>
        </div>
        <div class="row" style={{marginTop: '10rem'}}>
          <div class="col">
          <img src="..." class="img-fluid" alt="..."></img>
          </div>
          <div class="col">
          <img src="..." class="img-fluid" alt="..."></img>
          </div>
          <div class="col">
          <img src="..." class="img-fluid" alt="..."></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalGrid;
