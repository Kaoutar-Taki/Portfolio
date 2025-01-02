import React, { useState } from "react";

const Qualification: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"education" | "work">("education");

  return (
    <section className="qualification py-8 md:py-24" id="qualification">
      <h2 className="text-xl md:text-4xl text-center text-[hsl(23,8%,15%)] font-semibold">
        Qualification
      </h2>
      <span className="text-sm md:text-base text-center mb-12 md:mb-16">
        My personal journey
      </span>
      <div className="qualification__container mx-6 sm:mx-4 md:mx-auto max-w-full sm:max-w-[768px]">
        <div className="flex justify-evenly mb-8 sm:justify-center">
          <button
            className={`text-[hsl(23,69%,61%)] text-lg font-500 cursor-pointer sm:mx-4 hover:text-[hsl(23,69%,61%)] inline-flex items-center ${
              activeTab === "education" ? "text-[#db784e]" : ""
            }`}
            onClick={() => setActiveTab("education")}
          >
            <i className="uil uil-graduation-cap text-[1.8rem] mr-1"></i>
            Education
          </button>
          <button
            className={`text-[hsl(23,69%,61%)] text-lg font-500 cursor-pointer sm:mx-4 hover:text-[hsl(23,69%,61%)] inline-flex items-center ${
              activeTab === "work" ? "text-[#db784e]" : ""
            }`}
            onClick={() => setActiveTab("work")}
          >
            <i className="uil uil-briefcase-alt text-[1.8rem] mr-1"></i>
            Work
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-[0.6fr] lg:grid-cols-[0.5fr] sm:justify-center">
          {activeTab === "education" && (
            <div className="qualification__content text-[#db784e]">
              <div className="grid grid-cols-3 gap-6 sm:gap-[0.5rem]">
                <div>
                  <h3 className="text-[0.938rem] font-500 text-[hsl(23,8%,15%)] font-semibold">
                    Baccalauréat en séries professionnelles.
                  </h3>
                  <span className="text-[0.813rem] mb-4">
                    Lycée Youssef Ben Tachfine et ISTA NTIC, Marrakech
                  </span>
                  <div className="text-[0.813rem] text-[#3b2a2b]">
                    <i className="uil uil-calendar-alt"></i>
                    2018 - 2021
                  </div>
                </div>
                <div>
                  <span className="w-[13px] h-[13px] bg-[#db784e] rounded-full"></span>
                  <span className="w-[1px] bg-[#db784e] translate-x-[6px] -translate-y-[7px]"></span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 sm:gap-[0.5rem]">
                <div></div>
                <div>
                  <span className="w-[13px] h-[13px] bg-[#db784e] rounded-full"></span>
                  <span className="w-[1px] bg-[#db784e] translate-x-[6px] -translate-y-[7px]"></span>
                </div>
                <div>
                  <h3 className="text-[0.938rem] font-500 text-[hsl(23,8%,15%)] font-semibold">
                    Technicien Spécialisé en Développement Digital.
                  </h3>
                  <span className="text-[0.813rem] mb-4">
                    ISTA NTIC Sidi Youssef Ben Ali, Marrakech
                  </span>
                  <div className="text-[0.813rem] text-[#3b2a2b]">
                    <i className="uil uil-calendar-alt"></i>
                    2021 - 2023
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 sm:gap-[0.5rem]">
                <div>
                  <h3 className="text-[0.938rem] font-500 text-[hsl(23,8%,15%)] font-semibold">
                    Programme de formation en développement digital.
                  </h3>
                  <span className="text-[0.813rem] mb-4">1337</span>
                  <div className="text-[0.813rem] text-[#3b2a2b]">
                    <i className="uil uil-calendar-alt"></i>
                    11 sept. - 6 oct. 2023
                  </div>
                </div>
                <div>
                  <span className="w-[13px] h-[13px] bg-[#db784e] rounded-full"></span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "work" && (
            <div className="qualification__content text-[#db784e]">
              <div className="grid grid-cols-3 gap-6 sm:gap-[0.5rem]">
                <div>
                  <h3 className="text-[0.938rem] font-500 text-[hsl(23,8%,15%)] font-semibold">
                    Digital Capital
                  </h3>
                  <span className="text-[0.813rem] mb-4">
                    Développeur back-end, spécialisé en Symfony.
                  </span>
                  <div className="text-[0.813rem] text-[#3b2a2b]">
                    <i className="uil uil-calendar-alt"></i>
                    26 juil. - 26 août 2022
                  </div>
                </div>
                <div>
                  <span className="w-[13px] h-[13px] bg-[#db784e] rounded-full"></span>
                  <span className="w-[1px] bg-[#db784e] translate-x-[6px] -translate-y-[7px]"></span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 sm:gap-[0.5rem]">
                <div></div>
                <div>
                  <span className="w-[13px] h-[13px] bg-[#db784e] rounded-full"></span>
                  <span className="w-[1px] bg-[#db784e] translate-x-[6px] -translate-y-[7px]"></span>
                </div>
                <div>
                  <h3 className="text-[0.938rem] font-500 text-[hsl(23,8%,15%)] font-semibold">
                    Dabador
                  </h3>
                  <span className="text-[0.813rem] mb-4">
                    Développeur full-stack
                  </span>
                  <div className="text-[0.813rem] text-[#3b2a2b]">
                    <i className="uil uil-calendar-alt"></i>
                    10 oct 2023 - 10 avril 2024
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 sm:gap-[0.5rem]">
                <div>
                  <h3 className="text-[0.938rem] font-500 text-[hsl(23,8%,15%)] font-semibold">
                    Integral Tech
                  </h3>
                  <span className="text-[0.813rem] mb-4">
                    Développement d'une nouvelle solution ERP avec React,
                    TypeScript, Redux, et Tailwind. Traduction de l'ERP en
                    français, anglais, et arabe. Élaboration de la documentation
                    API avec Laravel. Révision des fautes d'orthographe dans
                    l'ancien ERP.
                  </span>
                  <div className="text-[0.813rem] text-[#3b2a2b]">
                    <i className="uil uil-calendar-alt"></i>
                    03 août 2023 - Présent
                  </div>
                </div>
                <div>
                  <span className="w-[13px] h-[13px] bg-[#db784e] rounded-full"></span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualification;

