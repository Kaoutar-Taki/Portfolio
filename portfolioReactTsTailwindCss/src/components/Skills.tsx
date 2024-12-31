import React, { useState } from "react";

interface Skill {
  name: string;
  level: string;
  percentageClass: string;
}

interface SkillGroup {
  title: string;
  subtitle: string;
  icon: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const skillGroups: SkillGroup[] = [
    {
      title: "Frontend developer",
      subtitle: "More than 1 years",
      icon: "uil uil-brackets-curly",
      skills: [
        { name: "HTML", level: "90%", percentageClass: "skills__html" },
        { name: "CSS", level: "80%", percentageClass: "skills__css" },
        { name: "JavaScript", level: "60%", percentageClass: "skills__js" },
        { name: "React", level: "85%", percentageClass: "skills__react" },
      ],
    },
    {
      title: "Backend developer",
      subtitle: "More than 1 years",
      icon: "uil uil-server-network",
      skills: [
        { name: "PHP", level: "80%", percentageClass: "skills__php" },
        { name: "LARAVEL", level: "70%", percentageClass: "skills__laravel" },
      ],
    },
    {
      title: "Designer",
      subtitle: "More than 1 years",
      icon: "uil uil-swatchbook",
      skills: [
        { name: "FIGMA", level: "80%", percentageClass: "skills__figma" },
      ],
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="skills section md:py-[6rem] md:pb-[2rem]" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle md:mb-16">My technical level</span>
      <div className="skills__container container grid md:mx-auto">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className={`skills__content ${
              activeIndex === index ? "skills__open" : "skills__close"
            }`}
          >
            <div
              className="skills__header"
              onClick={() => toggleAccordion(index)}
            >
              <i className={`${group.icon} skills__icon`}></i>
              <div>
                <h1 className="skills__titles">{group.title}</h1>
                <span className="skills__subtitle">{group.subtitle}</span>
              </div>
              <i
                className={`uil ${
                  activeIndex === index ? "uil-angle-up" : "uil-angle-down"
                } skills__arrow`}
              ></i>
            </div>
            <div className="skills__list grid">
              {group.skills.map((skill, i) => (
                <div className="skills__data" key={i}>
                  <div className="skills__titles">
                    <h3 className="skills__name">{skill.name}</h3>
                    <span className="skills__number">{skill.level}</span>
                  </div>
                  <div className="skills__bar">
                    <span
                      className={`skills__percentage ${skill.percentageClass}`}
                    ></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

