import React from "react";

import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Qualification from "./Qualification";
import Projects from "./Projects";
import Portfolio from "./Portfolio";
import ProjectInMind from "./ProjectInMind";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
const Main: React.FC = () => {
  return (
    <main className="main lg:p-0">
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Projects />
      <Portfolio />
      <ProjectInMind />
      <Testimonial />
      <Contact />
    </main>
  );
};

export default Main;

