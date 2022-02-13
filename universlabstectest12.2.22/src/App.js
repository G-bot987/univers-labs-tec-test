import { useState, useEffect } from "react";
import { Slides } from "./components/slides/Slides";
import { slideObjArr } from "./data/slideinfo";
import "./App.css";
import PrimaryCarousel from "./components/PrimaryCarousel";

function App() {
  return (
    <div className="">
      {/* <div class="pulsating-circle"></div> */}
      <div class="pulse-circle"></div>
      <div class="hr"> </div>
      <Slides />
      {/* <PrimaryCarousel slide={slideObjArr} /> */}
    </div>
  );
}

export default App;
