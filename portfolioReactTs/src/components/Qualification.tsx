const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">Mon parcours personnel</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className="qualification__button button--flex qualification__active"
            data-target="#education"
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Éducation
          </div>
          <div
            className="qualification__button button--flex"
            data-target="#work"
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Expérience professionnelle
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className="qualification__content qualification__active"
            data-content
            id="education"
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Baccalauréat en séries professionnelles
                </h3>
                <span className="qualification__subtitle">
                  Lycée Youssef Ben Tachfine et ISTA NTIC, Marrakech
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2021
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
                  Technicien Spécialisé en Développement Digital
                </h3>
                <span className="qualification__subtitle">
                  ISTA NTIC Sidi Youssef Ben Ali, Marrakech
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2023
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Programme de formation en développement digital
                </h3>
                <span className="qualification__subtitle">1337</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 11 sept. - 6 oct.
                  2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
          <div className="qualification__content" data-content id="work">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Digital Capital</h3>
                <span className="qualification__subtitle">
                  Développeur back-end, spécialisé en Symfony
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 26 juil. - 26 août
                  2022
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
                <span className="qualification__subtitle"></span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Integral Tech</h3>
                <span className="qualification__subtitle">
                  Développement d'une nouvelle solution ERP avec React,
                  TypeScript, Redux et Tailwind. Traduction de l'ERP en
                  français, anglais et arabe. Élaboration de la documentation
                  API avec Laravel. Révision des fautes d'orthographe dans
                  l'ancien ERP.
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 3 août 2023 - Présent
                </div>
              </div>
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
