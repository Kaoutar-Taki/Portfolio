import React from "react";
import about from "../img/profile.png";
import pdf from "../pdf/CV_KAOUTAR_TAKI_fr.pdf";

const About: React.FC = () => {
  return (
    <section
      className="py-8 md:py-24 dark:bg-first-color-second-dark"
      id="about"
    >
      <h2 className="text-xl text-center text-title-color font-semibold md:text-4xl dark:text-title-color-dark">
        À propos de moi
      </h2>
      <span className="text-sm text-center text-text-color-light block mb-10 md:text-base dark:text-text-color-dark">
        Mon introduction
      </span>
      <div className="grid gap-6 mx-6 sm:mx-4 max-w-full sm:max-w-[768px] md:grid-cols-2 md:mx-auto md:gap-20">
        <img
          src={about}
          alt="Profil de Kaoutar Taki"
          className="max-w-full h-auto rounded-full border-4 border-first-color md:w-[350px] dark:border-first-color-alt"
        />
        <div className="about__data">
          <p className="text-center mb-4 text-title-color md:text-left dark:text-text-color-dark">
            Bonjour, je suis Kaoutar Taki, Développeuse Full Stack passionnée
            par l'art de transformer des lignes de code en expériences
            interactives et fonctionnelles. Depuis mes premières lignes de HTML,
            je suis fascinée par le potentiel de la programmation pour créer des
            solutions innovantes aux défis du numérique.
          </p>
          <p className="text-center mb-4 text-title-color md:text-left dark:text-text-color-dark">
            Je suis constamment à la recherche de nouvelles opportunités pour
            apprendre et grandir en tant que développeuse, et j'ai hâte de
            contribuer à des projets passionnants qui repoussent les limites de
            la technologie.
          </p>
          <div className="flex justify-evenly mb-4 md:flex md:justify-between">
            <div>
              <span className="block text-center text-xl font-semibold text-title-color dark:text-first-color">
                01+
              </span>
              <span className="text-xs block text-center text-text-color-light dark:text-text-color-dark">
                Années <br /> d'expérience
              </span>
            </div>
            <div>
              <span className="block text-center text-xl font-semibold text-title-color dark:text-first-color">
                03+
              </span>
              <span className="text-xs block text-center text-text-color-light dark:text-text-color-dark">
                Projets <br /> réalisés
              </span>
            </div>
            <div>
              <span className="block text-center text-xl font-semibold text-title-color dark:text-first-color">
                02+
              </span>
              <span className="text-xs block text-center text-text-color-light dark:text-text-color-dark">
                Entreprises <br /> où j'ai travaillé
              </span>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <a
              download="CV_KAOUTAR_TAKI_fr.pdf"
              href={pdf}
              className="inline-block bg-first-color text-white py-4 px-6 rounded-lg font-medium hover:bg-first-color-lighter dark:bg-first-color-lighter dark:hover:bg-first-color"
            >
              Télécharger le CV
              <i className="uil uil-download-alt text-xl ml-2 transition-all"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

