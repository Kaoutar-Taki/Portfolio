import React from "react";

const Skills: React.FC = () => {
  return (
    <section className="skills section md:py-[6rem] md:pb-[2rem]" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle md:mb-16">My technical level</span>
      <div className="skills__container container grid md:mx-auto">
        <div>
          {/* <!--==================== SKILLS 1 ====================--> */}
          <div className="skills__content skills__open">
            <div className="skills__header">
              <i className="uil uil-brackets-curly skills__icon"></i>
              <div>
                <h1 className="skills__titles">Frontend developer</h1>
                <span className="skills__subtitle">More than 1 years</span>
              </div>
              <i className="uil uil-angle-down skills__arrow"></i>
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">85%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>
          </div>
          {/* <!--==================== SKILLS 2 ====================--> */}
          <div className="skills__content skills__close">
            <div className="skills__header">
              <i className="uil uil-server-network skills__icon"></i>
              <div>
                <h1 className="skills__titles">Backend developer</h1>
                <span className="skills__subtitle">More than 1 years</span>
              </div>
              <i className="uil uil-angle-down skills__arrow"></i>
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">PHP</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__php"></span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">LARAVEL</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__laravel"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <!--==================== SKILLS 3 ====================--> */}
          <div className="skills__content skills__close">
            <div className="skills__header">
              <i className="uil uil-swatchbook skills__icon"></i>
              <div>
                <h1 className="skills__titles">Designer</h1>
                <span className="skills__subtitle">More than 1 years</span>
              </div>
              <i className="uil uil-angle-down skills__arrow"></i>
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">FIGMA</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__figma"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

