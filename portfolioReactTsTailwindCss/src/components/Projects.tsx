import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        {/* <!--==================== SERVICES 1 ====================--> */}
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              UI/UX <br />
              Designer
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View More
            <i className="uil uil-arrow-right button__icon"></i>
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                UI/UX <br />
                Designer
              </h4>
              <i className="uil uil-times services__modal-close"></i>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I create engaging and visually appealing designs.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I create responsive and accessible designs.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!--==================== SERVICES 2 ====================--> */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Frontend <br />
              Developer
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View More
            <i className="uil uil-arrow-right button__icon"></i>
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Frontend <br />
                Developer
              </h4>
              <i className="uil uil-times services__modal-close"></i>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I create engaging and visually appealing designs.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I create responsive and accessible designs.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!--==================== SERVICES 3 ====================--> */}
        <div className="services__content">
          <div>
            <i className="uil uil-pen services__icon"></i>
            <h3 className="services__title">
              Branding <br />
              Designer
            </h3>
          </div>
          <span className="button button--flex button--small button--link services__button">
            View More
            <i className="uil uil-arrow-right button__icon"></i>
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Branding <br />
                Designer
              </h4>
              <i className="uil uil-times services__modal-close"></i>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I develop the user interface.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I create engaging and visually appealing designs.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>I create responsive and accessible designs.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

