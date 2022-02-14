import { Slides } from "./components/slides/Slides";
import "./App.css";
import { CgArrowLongDown } from "react-icons/cg";

function App() {
  return (
    <div className="container">
      <Slides />

      <div className="hLine"></div>
      <div className="">
        <CgArrowLongDown className="arrow" />
      </div>
      <p className="scrollformore">SCROLL FOR MORE</p>
      <div className="vector35"></div>
    </div>
  );
}

export default App;
