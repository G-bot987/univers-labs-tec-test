// import { useState, useEffect } from "react";
import { Slides } from "./components/slides/Slides";
// import { slideObjArr } from "./data/slideinfo";
import "./App.css";
// import PrimaryCarousel from "./components/PrimaryCarousel";

function App() {
  return (
    <div>
      <Slides />
      {/* <PrimaryCarousel slide={slideObjArr} /> */}
      <div className="vector37"></div>
      <p className="scrollformore">SCROLL FOR MORE</p>
      <div className="vector35"></div>
    </div>
  );
}

export default App;
