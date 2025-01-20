import { useState } from "react";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState<string>("#education");

  const handleTabClick = (target: string) => {
    setActiveTab(target);
  };

  const renderTabButton = (
    target: string,
    iconClass: string,
    label: string
  ) => (
    <div
      className={`qualification__button button--flex ${
        activeTab === target ? "qualification__active" : ""
      }`}
      data-target={target}
      onClick={() => handleTabClick(target)}
    >
      <i className={`uil ${iconClass} qualification__icon`}></i>
      {label}
    </div>
  );

  const renderQualificationData = (
    title: string,
    subtitle: string,
    date: string
  ) => (
    <div>
      <h3 className="qualification__title">{title}</h3>
      <span className="qualification__subtitle">{subtitle}</span>
      <div className="qualification__calendar">
        <i className="uil uil-calendar-alt"></i> {date}
      </div>
    </div>
  );
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">Mon parcours personnel</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          {renderTabButton("#education", "uil-graduation-cap", "Éducation")}
          {renderTabButton(
            "#work",
            "uil-briefcase-alt",
            "Expérience professionnelle"
          )}
        </div>
        <div className="qualification__sections">
          <div
            className={`qualification__content ${
              activeTab === "#education" ? "qualification__active" : ""
            }`}
            data-content
            id="education"
          >
            <div className="qualification__data">
              {renderQualificationData(
                "Baccalauréat en séries professionnelles",
                "Lycée Youssef Ben Tachfine et ISTA NTIC, Marrakech",
                "2018 - 2021"
              )}
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
              {renderQualificationData(
                "Technicien Spécialisé en Développement Digital",
                "ISTA NTIC Sidi Youssef Ben Ali, Marrakech",
                "2021 - 2023"
              )}
            </div>
            <div className="qualification__data">
              {renderQualificationData(
                "Programme de formation en développement digital",
                "1337",
                "11 sept. - 6 oct. 2023"
              )}
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
          <div
            className={`qualification__content ${
              activeTab === "#work" ? "qualification__active" : ""
            }`}
            data-content
            id="work"
          >
            <div className="qualification__data">
              {renderQualificationData(
                "Digital Capital",
                "Développeur back-end, spécialisé en Symfony",
                "26 juil. - 26 août 2022"
              )}
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
              {renderQualificationData("Dabador", "", "")}
            </div>
            <div className="qualification__data">
              {renderQualificationData(
                "Integral Tech",
                "Développement d'une nouvelle solution ERP avec React, TypeScript, Redux et Tailwind. Traduction de l'ERP en français, anglais et arabe. Élaboration de la documentation API avec Laravel. Révision des fautes d'orthographe dans l'ancien ERP.",
                "3 août 2023 - Présent"
              )}
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

