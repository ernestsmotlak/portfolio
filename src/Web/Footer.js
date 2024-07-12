import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div
        className="text-center p-3"
        // style={{ backgroundColor: '#e5e5e5' }}
        style={{
          backgroundColor: "#e5e5e5",
          borderColor: "#cdcccd",
          borderWidth: "1px",
          borderStyle: "solid",
          borderRadius: "5px",
        }}
      >
       <div style={{opacity: '0.5'}}>
       2024 | MADE BY ERNEST SMOTLAK
       </div>
        {/* <a href="https://github.com/ernestsmotlak/portfolio">
          <FaGithub className="fs-4 text-black" />
        </a> */}
      </div>
    </div>
  );
};

export default Footer;
