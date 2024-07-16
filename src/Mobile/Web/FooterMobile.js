import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FooterMobile = () => {
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
        <div style={{ opacity: "0.5" }}>2024 | MADE BY ERNEST SMOTLAK</div>
      </div>
    </div>
  );
};

export default FooterMobile;
