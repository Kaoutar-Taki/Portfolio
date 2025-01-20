import { useState } from "react";

interface Skill {
  name: string;
  level: string;
  className: string;
}

const Skills = () => {
  const [openSkill, setOpenSkill] = useState<number | null>(null);

  const toggleSkill = (index: number) => {
    if (openSkill === index) {
      setOpenSkill(null);
    } else {
      setOpenSkill(index);
    }
  };

  const frontendSkills: Skill[] = [
    { name: "HTML", level: "90%", className: "skills__html" },
    { name: "CSS", level: "80%", className: "skills__css" },
    { name: "JavaScript", level: "60%", className: "skills__js" },
    { name: "React", level: "85%", className: "skills__react" },
  ];

  const backendSkills: Skill[] = [
    { name: "PHP", level: "80%", className: "skills__php" },
    { name: "Laravel", level: "70%", className: "skills__laravel" },
  ];

  const designSkills: Skill[] = [
    { name: "Figma", level: "80%", className: "skills__figma" },
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Compétences</h2>
      <span className="section__subtitle">Mon niveau technique</span>
      <div className="skills__container container grid">
        <div
          className={`skills__content ${
            openSkill === 0 ? "skills__open" : "skills__close"
          }`}
        >
          <div className="skills__header" onClick={() => toggleSkill(0)}>
            <i className="uil uil-brackets-curly skills__icon"></i>
            <div>
              <h1 className="skills__titles">Développeur Frontend</h1>
              <span className="skills__subtitle">Plus d'1 an d'expérience</span>
            </div>
            <i className="uil uil-angle-down skills__arrow"></i>
          </div>
          <div className="skills__list grid">
            {frontendSkills.map((skill, index) => (
              <div className="skills__data" key={index}>
                <div className="skills__titles">
                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__number">{skill.level}</span>
                </div>
                <div className="skills__bar">
                  <span
                    className={`skills__percentage ${skill.className}`}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`skills__content ${
            openSkill === 1 ? "skills__open" : "skills__close"
          }`}
        >
          <div className="skills__header" onClick={() => toggleSkill(1)}>
            <i className="uil uil-server-network skills__icon"></i>
            <div>
              <h1 className="skills__titles">Développeur Backend</h1>
              <span className="skills__subtitle">Plus d'1 an d'expérience</span>
            </div>
            <i className="uil uil-angle-down skills__arrow"></i>
          </div>
          <div className="skills__list grid">
            {backendSkills.map((skill, index) => (
              <div className="skills__data" key={index}>
                <div className="skills__titles">
                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__number">{skill.level}</span>
                </div>
                <div className="skills__bar">
                  <span
                    className={`skills__percentage ${skill.className}`}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`skills__content ${
            openSkill === 2 ? "skills__open" : "skills__close"
          }`}
        >
          <div className="skills__header" onClick={() => toggleSkill(2)}>
            <i className="uil uil-swatchbook skills__icon"></i>
            <div>
              <h1 className="skills__titles">Designer</h1>
              <span className="skills__subtitle">Plus d'1 an d'expérience</span>
            </div>
            <i className="uil uil-angle-down skills__arrow"></i>
          </div>
          <div className="skills__list grid">
            {designSkills.map((skill, index) => (
              <div className="skills__data" key={index}>
                <div className="skills__titles">
                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__number">{skill.level}</span>
                </div>
                <div className="skills__bar">
                  <span
                    className={`skills__percentage ${skill.className}`}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

