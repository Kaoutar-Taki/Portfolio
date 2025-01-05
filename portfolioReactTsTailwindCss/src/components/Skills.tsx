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
        { name: "HTML", level: "90%", percentageClass: "w-[90%]" },
        { name: "CSS", level: "80%", percentageClass: "w-[80%]" },
        { name: "JavaScript", level: "60%", percentageClass: "w-[60%]" },
        { name: "React", level: "85%", percentageClass: "w-[85%]" },
      ],
    },
    {
      title: "Backend developer",
      subtitle: "More than 1 years",
      icon: "uil uil-server-network",
      skills: [
        { name: "PHP", level: "80%", percentageClass: "w-[80%]" },
        { name: "LARAVEL", level: "70%", percentageClass: "w-[70%]" },
      ],
    },
    {
      title: "Designer",
      subtitle: "More than 1 years",
      icon: "uil uil-swatchbook",
      skills: [{ name: "FIGMA", level: "80%", percentageClass: "w-[80%]" }],
    },
  ];

  const toggleAccordion = (index: number) => {
    console.log("Toggling index:", index);
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="skills py-8 md:py-24" id="skills">
      <h2 className="text-xl md:text-4xl text-center text-[hsl(23,8%,15%)] font-semibold">
        Skills
      </h2>
      <span className="text-sm md:text-base text-center text-[hsl(23,8%,42%)] block mb-10">
        My technical level
      </span>
      <div className="gap-6 mx-6 sm:mx-4 md:mx-auto max-w-full sm:max-w-[768px] md:grid md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className={`skills__content ${
              activeIndex === index ? "skills__open" : "skills__close"
            }`}
          >
            <div
              className="flex items-center mb-10 cursor-pointer"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index ? "true" : "false"}
            >
              <i className={`${group.icon} text-[2rem] text-[#db784e]`}></i>
              <div>
                <h1 className="flex justify-between mb-2 text-[hsl(23,8%,15%)] font-semibold">
                  {group.title}
                </h1>
                <span className="text-[0.813rem] text-[#3b2a2b]">
                  {group.subtitle}
                </span>
              </div>
              <i
                className={`uil ${
                  activeIndex === index ? "uil-angle-up" : "uil-angle-down"
                } text-[2rem] text-[#db784e]`}
              ></i>
            </div>
            <div
              className={`pl-11 gap-6 ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              {group.skills.map((skill, i) => (
                <div className="skills__data" key={i}>
                  <div className="flex justify-between mb-2">
                    <h3 className="text-[0.938rem] font-semibold text-[hsl(23,8%,15%)]">
                      {skill.name}
                    </h3>
                    <span className="text-[0.875rem] text-[#3b2a2b]">
                      {skill.level}
                    </span>
                  </div>
                  <div className="h-[5px] rounded-sm bg-[#e3b7b7]">
                    <span
                      className={`block h-[5px] rounded-sm bg-[#db784e] ${skill.percentageClass}`}
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

