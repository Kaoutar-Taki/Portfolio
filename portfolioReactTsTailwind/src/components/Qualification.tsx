import { useState } from "react";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div
          className="qualification__tabs"
          role="tablist"
          aria-label="Qualification tabs"
        >
          <div
            className={`qualification__button button--flex ${
              activeTab === "education" ? "qualification__active" : ""
            }`}
            role="tab"
            aria-selected={activeTab === "education"}
            aria-controls="education"
            onClick={() => handleTabClick("education")}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={`qualification__button button--flex ${
              activeTab === "work" ? "qualification__active" : ""
            }`}
            role="tab"
            aria-selected={activeTab === "work"}
            aria-controls="work"
            onClick={() => handleTabClick("work")}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Work
          </div>
        </div>

        <div className="qualification__sections">
          {/* Education Tab Content */}
          {activeTab === "education" && (
            <div
              className="qualification__content qualification__active"
              data-content
              id="education"
              role="tabpanel"
              aria-labelledby="education-tab"
            >
              {/* Education 1 */}
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
              {/* Education 2 */}
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
              {/* Education 3 */}
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

          {/* Work Tab Content */}
          {activeTab === "work" && (
            <div
              className="qualification__content qualification__active"
              data-content
              id="work"
              role="tabpanel"
              aria-labelledby="work-tab"
            >
              {/* Work 1 */}
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
              {/* Work 2 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Dabador</h3>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                  </div>
                </div>
              </div>
              {/* Work 3 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Integral Tech</h3>
                  <span className="qualification__subtitle">
                    Développement d'une nouvelle solution ERP avec React,
                    TypeScript, Redux, et Tailwind.
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

