import React from "react";
import project from "../img/perfil.png";

const ProjectInMind: React.FC = () => {
  return (
    <section className="project section md:py-[6rem] md:pb-[2rem]">
      <div className="project__bg">
        <div className="project__container container md:mx-auto grid">
          <div className="project__data">
            <h2 className="project__title">You have a new project</h2>
            <p className="project__description">
              Contact me now and get a 20% discount on your first project.
            </p>
            <a href="#contact" className="button button--flex button--white">
              Contact Me!
              <i className="uil uil-message project__icon button__icon"></i>
            </a>
          </div>
          <img src={project} alt="" className="project__img" />
        </div>
      </div>
    </section>
  );
};

export default ProjectInMind;

