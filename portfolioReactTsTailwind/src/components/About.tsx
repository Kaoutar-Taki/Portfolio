import profile from "../assets/img/profile.png";
import CV from "../assets/pdf/CV_KAOUTAR_TAKI_fr.pdf";
const About = () => {
  return (
    <>
      <section className="about section" id="about">
        {/* about,section */}
        <h2 className="section__title">About Me</h2>
        {/* section__title  */}
        <span className="section__subtitle">My introduction</span>
        {/* section__subtitle  */}
        <div className="about__container max-w-3xl mx-6 sm:mx-4 md:mx-auto grid gap-6">
          {/* about__container  */}
          <img src={profile} alt="" className="about__img" />
          {/* about__img  */}
          <div className="about__data">
            {/* about__data  */}
            <p className="about__description">
              {/* about__description  */}
              Bonjour, je suis Kaoutar Taki, Développeuse Full Stack passionné
              par l'art de transformer des lignes de code en expériences
              interactives et fonctionnelles. Depuis mes premières lignes de
              HTML, je suis fasciné par le potentiel de la programmation pour
              créer des solutions innovantes aux défis du numérique.
            </p>
            <p className="about__description">
              {/* about__description */}
              Je suis constamment à la recherche de nouvelles opportunités pour
              apprendre et grandir en tant que développeuse, et j'ai hâte de
              contribuer à des projets passionnants qui repoussent les limites
              de la technologie.
            </p>
            <div className="about__info">
              {/* about__info  */}
              <div>
                <span className="about__info-title">01+</span>
                {/* about__info-title  */}
                <span className="about__info-name">
                  {/* about__info-name  */}
                  Years <br />
                  experience
                </span>
              </div>
              <div>
                <span className="about__info-title">03+</span>
                {/* about__info-title */}
                <span className="about__info-name">
                  {/* about__info-name */}
                  Completed <br />
                  project
                </span>
              </div>
              <div>
                <span className="about__info-title">02+</span>
                {/* about__info-title */}
                <span className="about__info-name">
                  {/* about__info-name */}
                  Companies <br />
                  worked
                </span>
              </div>
            </div>
            <div className="about__buttons">
              {/* about__buttons  */}
              <a download="" href={CV} className="button button--flex">
                {/* button ,button--flex  */}
                Download CV
                <i className="uil uil-download-alt button__icon"></i>
                {/* button__icon   */}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

