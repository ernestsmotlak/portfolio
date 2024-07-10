import "./App.css";
import Navbar from "./Mobile/Navbar";
import Description from "./Web/Description";
import HorizontalGrid from "./Web/HorizontalGrid";
import MyWork from "./Web/MyWork";
import VerticalGrid from "./Web/VerticalGrid";

function App() {
  return (
    <div className="App">
      <Description />
      <Navbar />
      <VerticalGrid />
      <HorizontalGrid />
      <MyWork/>
    </div>
  );
}

export default App;
