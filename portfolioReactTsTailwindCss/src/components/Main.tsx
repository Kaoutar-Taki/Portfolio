import React from "react";

import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Qualification from "./Qualification";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
const Main: React.FC = () => {
  return (
    <main className="main md:px-4 lg:p-0">
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Main;

