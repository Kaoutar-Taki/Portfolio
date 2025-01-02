import React from "react";
import about from "../img/profile.png";
import pdf from "../pdf/CV_KAOUTAR_TAKI_fr.pdf";

const About: React.FC = () => {
  return (
    <section className="py-8 md:py-24 dark:bg-[#292623]" id="about">
      <h2 className="text-xl text-center text-[#292623] font-semibold md:text-4xl dark:text-white">
        À propos de moi
      </h2>
      <span className="text-sm text-center text-[#746963] block mb-10 md:text-base dark:text-[#b0b0b0]">
        Mon introduction
      </span>
      <div className="grid gap-6 mx-6 sm:mx-4 max-w-full sm:max-w-[768px] md:grid-cols-2 md:mx-auto md:gap-20">
        <img
          src={about}
          alt="Profil de Kaoutar Taki"
          className="max-w-full h-auto rounded-full border-4 border-[#e08c57] md:w-[350px] dark:border-[#cb7743]"
        />
        <div className="about__data">
          <p className="text-center mb-4 text-[#292623]  md:text-left dark:text-[#f0f0f0]">
            Bonjour, je suis Kaoutar Taki, Développeuse Full Stack passionnée
            par l'art de transformer des lignes de code en expériences
            interactives et fonctionnelles. Depuis mes premières lignes de HTML,
            je suis fascinée par le potentiel de la programmation pour créer des
            solutions innovantes aux défis du numérique.
          </p>
          <p className="text-center mb-4  text-[#292623] md:text-left dark:text-[#f0f0f0]">
            Je suis constamment à la recherche de nouvelles opportunités pour
            apprendre et grandir en tant que développeuse, et j'ai hâte de
            contribuer à des projets passionnants qui repoussent les limites de
            la technologie.
          </p>
          <div className="flex justify-evenly mb-4 md:flex md:justify-between">
            <div>
              <span className="block text-center text-xl font-semibold text-[#3b2a2b] dark:text-[#e08c57]">
                01+
              </span>
              <span className="text-xs block text-center text-[#746963] dark:text-[#b0b0b0]">
                Années <br /> d'expérience
              </span>
            </div>
            <div>
              <span className="block text-center text-xl font-semibold text-[#3b2a2b] dark:text-[#e08c57]">
                03+
              </span>
              <span className="text-xs block text-center text-[#746963] dark:text-[#b0b0b0]">
                Projets <br /> réalisés
              </span>
            </div>
            <div>
              <span className="block text-center text-xl font-semibold text-[#3b2a2b] dark:text-[#e08c57]">
                02+
              </span>
              <span className="text-xs block text-center text-[#746963] dark:text-[#b0b0b0]">
                Entreprises <br /> où j'ai travaillé
              </span>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <a
              download="CV_KAOUTAR_TAKI_fr.pdf"
              href={pdf}
              className="inline-block bg-[#e08c57] text-white py-4 px-6 rounded-lg font-medium hover:bg-[#cb7743] dark:bg-[#cb7743] dark:hover:bg-[#e08c57]"
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

