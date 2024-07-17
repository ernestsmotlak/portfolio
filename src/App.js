import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./Mobile/Navbar";
import Footer from "./Web/Footer";
import HorizontalGrid from "./Web/HorizontalGrid";
import MyWork from "./Web/MyWork";
import Projects from "./Web/Projects";
import VerticalGrid from "./Web/VerticalGrid";
import WorkWithMe from "./Web/WorkWithMe";
import VerticalGridMobile from "./Mobile/Web/VerticalGridMobile";
import HorizontalGridMobile from "./Mobile/Web/HorizontalGridMobile";
import MyWorkMobile from "./Mobile/Web/MyWorkMobile";
import WorkWithMeMobile from "./Mobile/Web/WorkWithMeMobile";
import ProjectsMobile from "./Mobile/Web/ProjectsMobile";
import FooterMobile from "./Mobile/Web/FooterMobile";
import NavbarMobile from "./Mobile/Web/NavbarMobile";

function App() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      if (window.innerWidth < 995) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    checkIsMobile();

    // Event listener to check window width on resize
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div className="App">
      {mobile ? (
        <>
          <NavbarMobile />
          <VerticalGridMobile />
          <HorizontalGridMobile />
          <MyWorkMobile />
          <ProjectsMobile />
          <hr className="mx-auto" style={{ width: "80%" }} />
          <WorkWithMeMobile />
          <FooterMobile />
        </>
      ) : (
        <>
          <Navbar />
          <VerticalGrid />
          <HorizontalGrid />
          <MyWork />
          <Projects />
          <hr className="mx-auto" style={{ width: "80%" }} />
          <WorkWithMe />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
