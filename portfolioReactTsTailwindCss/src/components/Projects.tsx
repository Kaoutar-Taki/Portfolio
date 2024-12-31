import React, { useState } from "react";

const Projects: React.FC = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const handleModalOpen = (index: number) => {
    setActiveModal(index);
  };

  const handleModalClose = () => {
    setActiveModal(null);
  };

  const services = [
    {
      title: "UI/UX Designer",
      icon: "uil uil-web-grid",
      details: [
        "I develop the user interface.",
        "I create engaging and visually appealing designs.",
        "I create responsive and accessible designs.",
      ],
    },
    {
      title: "Frontend Developer",
      icon: "uil uil-arrow",
      details: [
        "I develop the user interface.",
        "I create engaging and visually appealing designs.",
        "I create responsive and accessible designs.",
      ],
    },
    {
      title: "Branding Designer",
      icon: "uil uil-pen",
      details: [
        "I develop the user interface.",
        "I create engaging and visually appealing designs.",
        "I create responsive and accessible designs.",
      ],
    },
  ];

  return (
    <section
      className="services section md:py-[6rem] md:pb-[2rem]"
      id="services"
    >
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle md:mb-16">What I offer</span>

      <div className="services__container container grid md:mx-auto lg:[grid-template-columns:repeat(3,238px)]">
        {services.map((service, index) => (
          <div className="services__content" key={index}>
            <div>
              <i className={`${service.icon} services__icon`}></i>
              <h3 className="services__title">
                {service.title.split(" ").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h3>
            </div>
            <button
              className="button button--flex button--small button--link services__button"
              onClick={() => handleModalOpen(index)}
            >
              View More
              <i className="uil uil-arrow-right button__icon"></i>
            </button>

            {/* Modal */}
            {activeModal === index && (
              <div className="services__modal active-modal">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">
                    {service.title.split(" ").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </h4>
                  <button
                    className="services__modal-close"
                    onClick={handleModalClose}
                  >
                    <i className="uil uil-times"></i>
                  </button>
                  <ul className="services__modal-services grid">
                    {service.details.map((detail, i) => (
                      <li className="services__modal-service" key={i}>
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p>{detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

