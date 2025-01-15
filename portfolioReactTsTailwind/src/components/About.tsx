import profile from "../assets/img/profile.png";
import CV from "../assets/pdf/CV_KAOUTAR_TAKI_fr.pdf";
const About = () => {
  return (
    <>
      <section className="about p-8 md:p-24 md:pt-24 md:pb-8" id="about">
        <h2 className="text-2xl md:text-4xl text-center">À propos de moi</h2>
        <span className="block text-sm md:text-base mb-12 text-center md:mb-16">
          Mon introduction
        </span>
        <div className="sm:grid-cols-2 md:gap-x-20 max-w-3xl mx-6 sm:mx-4 md:mx-auto grid gap-6">
          <img
            src={profile}
            alt="Profil de Kaoutar Taki"
            className="w-[200px] rounded-lg justify-self-center self-center md:w-[350px]"
          />
          <div>
            <p className="text-center mb-6 md:text-left">
              Bonjour, je suis Kaoutar Taki, Développeuse Full Stack passionnée
              par l'art de transformer des lignes de code en expériences
              interactives et fonctionnelles. Depuis mes premières lignes de
              HTML, je suis fascinée par le potentiel de la programmation pour
              créer des solutions innovantes aux défis du numérique.
            </p>
            <p className="text-center mb-6 md:text-left">
              Je suis constamment à la recherche de nouvelles opportunités pour
              apprendre et grandir en tant que développeuse, et j'ai hâte de
              contribuer à des projets passionnants qui repoussent les limites
              de la technologie.
            </p>
            <div className="flex justify-evenly mb-10 md:justify-between">
              <div>
                <span className="text-xl md:text-2xl font-semibold text-[hsl(23,8%,15%)] dark:text-[hsl(23,8%,95%)]">
                  01+
                </span>
                <span className="text-xs md:text-sm block text-center">
                  Années <br />
                  d'expérience
                </span>
              </div>
              <div>
                <span className="text-xl md:text-2xl font-semibold text-[hsl(23,8%,15%)] dark:text-[hsl(23,8%,95%)]">
                  03+
                </span>
                <span className="text-xs md:text-sm block text-center">
                  Projets <br />
                  réalisés
                </span>
              </div>
              <div>
                <span className="text-xl md:text-2xl font-semibold text-[hsl(23,8%,15%)] dark:text-[hsl(23,8%,95%)]">
                  02+
                </span>
                <span className="text-xs md:text-sm block text-center">
                  Entreprises <br />
                  où j'ai travaillé
                </span>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <a
                download
                href={CV}
                className="inline-block bg-[hsl(23,69%,61%)] text-white p-4 rounded-lg font-medium hover:bg-[hsl(23,57%,53%)] items-center"
              >
                Télécharger le CV
                <i className="uil uil-download-alt text-xl ml-2 transition duration-300"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

