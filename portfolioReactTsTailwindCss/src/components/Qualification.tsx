import React, { useState } from "react";

const Qualification: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"education" | "work">("education");

  return (
    <section
      className="qualification section md:py-[6rem] md:pb-[2rem]"
      id="qualification"
    >
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle md:mb-16">My personal journey</span>
      <div className="qualification__container container md:mx-auto">
        <div className="qualification__tabs">
          <button
            className={`qualification__button button--flex ${
              activeTab === "education" ? "qualification__active" : ""
            }`}
            onClick={() => setActiveTab("education")}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </button>
          <button
            className={`qualification__button button--flex ${
              activeTab === "work" ? "qualification__active" : ""
            }`}
            onClick={() => setActiveTab("work")}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Work
          </button>
        </div>

        <div className="qualification__sections">
          {activeTab === "education" && (
            <div className="qualification__content qualification__active">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Baccalauréat en séries professionnelles.
                  </h3>
                  <span className="qualification__subtitle">
                    Lycée Youssef Ben Tachfine et ISTA NTIC, Marrakech
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2018 - 2021
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">
                    Technicien Spécialisé en Développement Digital.
                  </h3>
                  <span className="qualification__subtitle">
                    ISTA NTIC Sidi Youssef Ben Ali, Marrakech
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2021 - 2023
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Programme de formation en développement digital.
                  </h3>
                  <span className="qualification__subtitle">1337</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    11 sept. - 6 oct. 2023
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "work" && (
            <div className="qualification__content qualification__active">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Digital Capital</h3>
                  <span className="qualification__subtitle">
                    Développeur back-end, spécialisé en Symfony.
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    26 juil. - 26 août 2022
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Dabador</h3>
                  <span className="qualification__subtitle">
                    Développeur full-stack
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    10 oct 2023 - 10 avril 2024
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Integral Tech</h3>
                  <span className="qualification__subtitle">
                    Développement d'une nouvelle solution ERP avec React,
                    TypeScript, Redux, et Tailwind. Traduction de l'ERP en
                    français, anglais, et arabe. Élaboration de la documentation
                    API avec Laravel. Révision des fautes d'orthographe dans
                    l'ancien ERP.
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    03 août 2023 - Présent
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
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

