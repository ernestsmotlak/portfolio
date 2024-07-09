import React from "react";

const VerticalGrid = () => {
  return (
    <div
      style={{ width: "100%", height: "600px", margin: "0 auto", paddingTop: '15rem' }}
      className="bg-secondary"
    >
      <div className="container text-center bg-primary-subtle">
        <div className="row">
          <div className="col">1 of 3</div>
        </div>
        <div className="row">
          <div className="col">1 of 3</div>
        </div>
        <div className="row">
          <div className="col">1 of 3</div>
        </div>
        <div className="row">
          <div className="col">1 of 3</div>
        </div>
        <div className="row">
          <div className="col">1 of 3</div>
        </div>
      </div>
    </div>
  );
};

export default VerticalGrid;
