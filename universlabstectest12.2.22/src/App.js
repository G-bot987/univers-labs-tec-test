import { useState, useEffect } from "react";
import { Slides } from "./components/slides/Slides";
import { slideObjArr } from "./data/slideinfo";
import "./App.css";
import PrimaryCarousel from "./components/PrimaryCarousel";

function App() {
  return (
    <div>
      <div class="pulsating-circle"></div>
      <div class="pulse-circle"></div>
      <Slides />
      {/* <PrimaryCarousel slide={slideObjArr} /> */}
    </div>
  );
}

export default App;
