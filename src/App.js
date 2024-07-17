import "./App.css";
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
  return (
    <div className="App">
      {/* <Navbar />
      <VerticalGrid />
      <HorizontalGrid />
      <MyWork />
      <Projects />
      <hr className="mx-auto" style={{ width: "80%" }} />
      <WorkWithMe />
      <Footer /> */}

      {/* <NavbarMobile /> */}
      <VerticalGridMobile />
      <HorizontalGridMobile />
      <MyWorkMobile />
      <ProjectsMobile />
      <hr className="mx-auto" style={{ width: "80%" }} />
      <WorkWithMeMobile />
      <FooterMobile />
    </div>
  );
}

export default App;
