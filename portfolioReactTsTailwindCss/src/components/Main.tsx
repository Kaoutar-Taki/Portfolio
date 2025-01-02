import React from "react";

import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Qualification from "./Qualification";
import Contact from "./Contact";
const Main: React.FC = () => {
  return (
    <main className="px-4 md:px-8 lg:px-0">
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Contact />
    </main>
  );
};

export default Main;

