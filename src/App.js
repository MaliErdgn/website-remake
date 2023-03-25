import React from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import TempatureConverter from "./pages/TempatureConverter";
import HigherOrLower from "./pages/HigherOrLower";
import RockPaperScissors from "./pages/RockPaperScissors";
import ProjectEuler from "./pages/ProjectEuler";
import Home from "./pages/Home";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/TempatureConverter" element={<TempatureConverter />} />
      <Route path="/HigherOrLower" element={<HigherOrLower />} />
      <Route path="/RockPaperScissors" element={<RockPaperScissors />} />
      <Route path="/ProjectEuler" element={<ProjectEuler />} />
    </Routes>
    </>
  );
}

export default App;
