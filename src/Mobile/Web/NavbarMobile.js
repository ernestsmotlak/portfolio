import React, { useState, useEffect } from "react";
import "../../Mobile/Navbar.css";

const NavbarMobile = () => {
  const [activeButton, setActiveButton] = useState("");
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);

  const checkLocation = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition < 710) {
      setActiveButton("description");
    } else if (scrollPosition >= 710 && scrollPosition < 1345) {
      setActiveButton("techStack");
    } else if (scrollPosition >= 1345 && scrollPosition < 2000) {
      setActiveButton("myWork");
    } else if (scrollPosition >= 2000) {
      setActiveButton("contactMe");
    } else {
      setActiveButton("");
    }
  };

  const scroll = (value) => (event) => {
    event.preventDefault();
    window.scrollTo({ top: value, behavior: "smooth" });
  };

  const toggleNavbar = () => {
    setNavbarCollapsed(!navbarCollapsed);
  };

  useEffect(() => {
    const handleScroll = () => {
      checkLocation();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "5rem"}} className="bg-body-tertiary border">
      <div className="fs-1 text-center" style={{ marginTop: "1.25rem" }}>
        PORTFOLIO
      </div>
    </div>
  );
};

export default NavbarMobile;
