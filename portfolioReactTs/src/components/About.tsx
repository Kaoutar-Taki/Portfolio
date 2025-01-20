import React from "react";
import profile from "../assets/img/profile.png";
import CV from "../assets/pdf/CV_KAOUTAR_TAKI_fr.pdf";

const About = () => (
  <section className="about section" id="about">
    <h2 className="section__title">À propos de moi</h2>
    <span className="section__subtitle">Mon introduction</span>
    <div className="about__container container grid">
      <img src={profile} alt="Profile" className="about__img" />
      <div className="about__data">
        <p className="about__description">
          Bonjour, je suis Kaoutar Taki, Développeuse Full Stack passionnée par
          l'art de transformer des lignes de code en expériences interactives et
          fonctionnelles. Depuis mes premières lignes de HTML, je suis fascinée
          par le potentiel de la programmation pour créer des solutions
          innovantes aux défis du numérique.
        </p>
        <p className="about__description">
          Je suis constamment à la recherche de nouvelles opportunités pour
          apprendre et grandir en tant que développeuse, et j'ai hâte de
          contribuer à des projets passionnants qui repoussent les limites de la
          technologie.
        </p>
        <div className="about__info">
          {[
            { title: "01+", name: "Années\nd'expérience" },
            { title: "03+", name: "Projets\nréalisés" },
            { title: "02+", name: "Entreprises\ncollaborées" },
          ].map((info, index) => (
            <div key={index}>
              <span className="about__info-title">{info.title}</span>
              <span className="about__info-name">
                {info.name.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </span>
            </div>
          ))}
        </div>
        <div className="about__buttons">
          <a download href={CV} className="button button--flex">
            Télécharger CV<i className="uil uil-download-alt button__icon"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;

