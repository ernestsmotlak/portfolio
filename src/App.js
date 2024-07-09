import "./App.css";
import Navbar from "./Mobile/Navbar";
import Description from "./Web/Description";
import VerticalGrid from "./Web/VerticalGrid";

function App() {
  return (
    <div className="App">
      <Description />
      <Navbar />
      <VerticalGrid />
    </div>
  );
}

export default App;
