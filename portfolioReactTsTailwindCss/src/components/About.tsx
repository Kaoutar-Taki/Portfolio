import React from "react";
import about from "../img/profile.png";
import pdf from "../pdf/CV_KAOUTAR_TAKI_fr.pdf";
const About: React.FC = () => {
  return (
    <section className="py-8 md:py-24" id="about">
      <h2 className="text-xl md:text-4xl text-center text-[hsl(23,8%,15%)] font-semibold">
        About Me
      </h2>
      <span className="text-sm md:text-base text-center mb-12 md:mb-16">
        My introduction
      </span>
      <div className="gap-6 about__container md:grid-cols-2 mx-6 sm:mx-4 max-w-full sm:max-w-[768px] grid md:mx-auto md:gap-20">
        <img src={about} alt="" className="md:w-[350px] max-w-full h-auto" />
        <div className="about__data">
          <p className="text-center mb-10 md:text-left">
            Bonjour, je suis Kaoutar Taki, Développeuse Full Stack passionné par
            l'art de transformer des lignes de code en expériences interactives
            et fonctionnelles. Depuis mes premières lignes de HTML, je suis
            fasciné par le potentiel de la programmation pour créer des
            solutions innovantes aux défis du numérique.
          </p>
          <p className="text-center mb-10 md:text-left">
            Je suis constamment à la recherche de nouvelles opportunités pour
            apprendre et grandir en tant que développeuse, et j'ai hâte de
            contribuer à des projets passionnants qui repoussent les limites de
            la technologie.
          </p>
          <div className="flex justify-evenly mb-10 md:flex md:justify-between">
            <div>
              <span className="text-[1.25rem] font-semibold text-[#3b2a2b]">
                01+
              </span>
              <span className="text-[0.75rem]">
                Years <br />
                experience
              </span>
            </div>
            <div>
              <span className="text-[1.25rem] font-semibold text-[#3b2a2b]">
                03+
              </span>
              <span className="text-[0.75rem]">
                Completed <br />
                project
              </span>
            </div>
            <div>
              <span className="text-[1.25rem] font-semibold text-[#3b2a2b]">
                02+
              </span>
              <span className="text-[0.75rem]">
                Companies <br />
                worked
              </span>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <a
              download=""
              href={pdf}
              className="bg-[#db784e] text-white py-4 px-6 rounded-lg font-500 hover:bg-[#ca4f3f] inline-flex items-center no-underline"
            >
              Download CV
              <i className="uil uil-download-alt text-[1.25rem] ml-2 transition-all"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

