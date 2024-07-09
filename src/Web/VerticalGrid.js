import React from "react";

const VerticalGrid = () => {
  return (
    <div
      style={{ width: "100%", height: "600px", margin: "0 auto", paddingTop: '5rem' }}
      className="bg-secondary"
    >
      <div className="container text-center bg-primary-subtle">
        <div className="row">
          <div className="col">
            <img style={{borderRadius: '50%', height: '200px', width: '200px', marginTop: '10px'}} src="https://images.unsplash.com/photo-1604162953277-caf22e545661?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <hr style={{margin: '0 auto'}} className="w-25 mt-2"></hr>
          </div>
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
