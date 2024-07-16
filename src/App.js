import "./App.css";
import Navbar from "./Mobile/Navbar";
import Footer from "./Web/Footer";
import HorizontalGrid from "./Web/HorizontalGrid";
import MyWork from "./Web/MyWork";
import Projects from "./Web/Projects";
import VerticalGrid from "./Web/VerticalGrid";
import WorkWithMe from "./Web/WorkWithMe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <VerticalGrid />
      <HorizontalGrid />
      <MyWork />
      <Projects />
      <hr className="mx-auto" style={{ width: "80%" }} />
      <WorkWithMe />
      <Footer />
    </div>
  );
}

export default App;
