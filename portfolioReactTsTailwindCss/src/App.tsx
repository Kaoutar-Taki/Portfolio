import "./App.css";
import profile from "./img/perfil.png";
import about from "./img/about.jpg";
import pdf from "./pdf/Alexa-Cv.pdf";
import portfolio1 from "./img/portfolio1.jpg";
import portfolio2 from "./img/portfolio2.jpg";
import portfolio3 from "./img/portfolio3.jpg";
import project from "./img/project.png";
import testimonial1 from "./img/testimonial1.jpg";
import testimonial2 from "./img/testimonial2.jpg";
import testimonial3 from "./img/testimonial3.jpg";

function App() {
  return (
    <>
      {/* <!--==================== HEADER ====================--> */}
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            Ktaki
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <i className="uil uil-estate nav__icon"></i> Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil uil-user nav__icon"></i> About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon"></i> Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="uil uil-briefcase-alt nav__icon"></i> Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="uil uil-scenery nav__icon"></i> Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil-message nav__icon"></i> Contactme
                </a>
              </li>
            </ul>
            <i className="uil uil-times nav__close" id="nav-close"></i>
          </div>
          <div className="nav__btns">
            {/* <!-- Theme change button --> */}
            <i className="uil uil-moon change-theme" id="theme-button"></i>
            <div className="nav__toggle" id="nav-toggle">
              <i className="uil uil-apps"></i>
            </div>
          </div>
        </nav>
      </header>

      {/* <!--==================== MAIN ====================--> */}
      <main className="main">
        {/* <!--==================== HOME ====================--> */}
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <div className="home__social">
                <a
                  href="https://www.linkedin.com/in/kaoutar-taki/"
                  className="home__social-icon"
                  target="_blank"
                >
                  <i className="uil uil-linkedin-alt"></i>
                </a>
                <a
                  href="https://github.com/Kaoutar-Taki"
                  className="home__social-icon"
                  target="_blank"
                >
                  <i className="uil uil-github-alt"></i>
                </a>
              </div>
              <div className="home__img">
                <svg
                  className="home__blob"
                  viewBox="0 0 200 187"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <mask id="mask0" mask-type="alpha">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                  </mask>
                  <g mask="url(#mask0)">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                    />
                    <image
                      className="home__blob-img"
                      x="12"
                      y="18"
                      xlinkHref={profile}
                    />
                  </g>
                </svg>
              </div>
              <div className="home__data">
                <h1 className="home__title">Hi, I'am Kaoutar Taki</h1>
                <h3 className="home__subtitle">Full Stack Developer</h3>
                <p className="home__description">
                  Développeuse Full Stack avec une expérience approfondie dans
                  le développement front-end et back-end. Passionnée par la
                  création de solutions innovantes et efficaces.
                </p>
                <a href="contact" className="button button--flex">
                  Contact Me <i className="uil uil-message button__icon"></i>
                </a>
              </div>
            </div>
            <div className="home__scroll">
              <a href="#about" className="home__scroll-button button--flex">
                <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                <span className="home__scroll-name">Scroll Down</span>
                <i className="uil uil-arrow-down home__scroll-arrow"></i>
              </a>
            </div>
          </div>
        </section>

        {/* <!--==================== ABOUT ====================--> */}
        <section className="about section" id="about">
          <h2 className="section__title">About Me</h2>
          <span className="section__subtitle">My introduction</span>
          <div className="about__container container grid">
            <img src={about} alt="" className="about__img" />
            <div className="about__data">
              <p className="about__description">
                Bonjour, je suis Kaoutar Taki, Développeuse Full Stack passionné
                par l'art de transformer des lignes de code en expériences
                interactives et fonctionnelles. Depuis mes premières lignes de
                HTML, je suis fasciné par le potentiel de la programmation pour
                créer des solutions innovantes aux défis du numérique.
              </p>
              <p className="about__description">
                Je suis constamment à la recherche de nouvelles opportunités
                pour apprendre et grandir en tant que développeuse, et j'ai hâte
                de contribuer à des projets passionnants qui repoussent les
                limites de la technologie.
              </p>
              <div className="about__info">
                <div>
                  <span className="about__info-title">01+</span>
                  <span className="about__info-name">
                    Years <br />
                    experience
                  </span>
                </div>
                <div>
                  <span className="about__info-title">03+</span>
                  <span className="about__info-name">
                    Completed <br />
                    project
                  </span>
                </div>
                <div>
                  <span className="about__info-title">02+</span>
                  <span className="about__info-name">
                    Companies <br />
                    worked
                  </span>
                </div>
              </div>
              <div className="about__buttons">
                <a download="" href={pdf} className="button button--flex">
                  Download CV
                  <i className="uil uil-download-alt button__icon"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <!--==================== SKILLS ====================--> */}
        <section className="skills section" id="skills">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My technical level</span>
          <div className="skills__container container grid">
            <div>
              {/* <!--==================== SKILLS 1 ====================--> */}
              <div className="skills__content skills__open">
                <div className="skills__header">
                  <i className="uil uil-brackets-curly skills__icon"></i>
                  <div>
                    <h1 className="skills__titles">Frontend developer</h1>
                    <span className="skills__subtitle">More than 1 years</span>
                  </div>
                  <i className="uil uil-angle-down skills__arrow"></i>
                </div>
                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">HTML</h3>
                      <span className="skills__number">90%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__html"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">CSS</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__css"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">JavaScript</h3>
                      <span className="skills__number">60%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__js"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">React</h3>
                      <span className="skills__number">85%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__react"></span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--==================== SKILLS 2 ====================--> */}
              <div className="skills__content skills__close">
                <div className="skills__header">
                  <i className="uil uil-server-network skills__icon"></i>
                  <div>
                    <h1 className="skills__titles">Backend developer</h1>
                    <span className="skills__subtitle">More than 1 years</span>
                  </div>
                  <i className="uil uil-angle-down skills__arrow"></i>
                </div>
                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">PHP</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__php"></span>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">LARAVEL</h3>
                      <span className="skills__number">70%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__laravel"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <!--==================== SKILLS 3 ====================--> */}
              <div className="skills__content skills__close">
                <div className="skills__header">
                  <i className="uil uil-swatchbook skills__icon"></i>
                  <div>
                    <h1 className="skills__titles">Designer</h1>
                    <span className="skills__subtitle">More than 1 years</span>
                  </div>
                  <i className="uil uil-angle-down skills__arrow"></i>
                </div>
                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">FIGMA</h3>
                      <span className="skills__number">80%</span>
                    </div>
                    <div className="skills__bar">
                      <span className="skills__percentage skills__figma"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--==================== QUALIFICATION ====================--> */}
        <section className="qualification section">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">My personal journey</span>
          <div className="qualification__container container">
            <div className="qualification__tabs">
              <div
                className="qualification__button button--flex qualification__active"
                data-target="#education"
              >
                <i className="uil uil-graduation-cap qualification__icon"></i>
                Education
              </div>
              <div
                className="qualification__button button--flex"
                data-target="#work"
              >
                <i className="uil uil-briefcase-alt qualification__icon"></i>
                Work
              </div>
            </div>
            <div className="qualification__sections">
              {/* <!--==================== QUALIFICATION CONTENT 1 ====================--> */}
              <div
                className="qualification__content qualification__active"
                data-content
                id="education"
              >
                {/* <!--==================== QUALIFICATION 1 ====================--> */}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">
                      Baccalauréat en séries professionnelles.
                    </h3>
                    <span className="qualification__subtitle">
                      Lycée Youssef Ben Tachfine et ISTA NTIC, Marrakech
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2018 - 2021
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
                {/* <!--==================== QUALIFICATION 2 ====================--> */}
                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">
                      Technicien Spécialisé en Développement Digital.
                    </h3>
                    <span className="qualification__subtitle">
                      ISTA NTIC Sidi Youssef Ben Ali, Marrakech
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2021 - 2023
                    </div>
                  </div>
                </div>
                {/* <!--==================== QUALIFICATION 3 ====================--> */}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">
                      Programme de formation en développement digital.
                    </h3>
                    <span className="qualification__subtitle"> 1337 </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      11 sept. - 6 oct. 2023
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    {/* <!-- <span className="qualification__line"></span> --> */}
                  </div>
                </div>
              </div>
              {/* <!--==================== QUALIFICATION CONTENT 2 ====================--> */}
              <div className="qualification__content" data-content id="work">
                {/* <!--==================== QUALIFICATION 1 ====================--> */}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Digital Capital</h3>
                    <span className="qualification__subtitle">
                      Développeur back-end, spécialisé en Symfony.
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      26 juil. - 26 août 2022
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                </div>
                {/* <!--==================== QUALIFICATION 2 ====================--> */}
                <div className="qualification__data">
                  <div></div>
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>
                  <div>
                    <h3 className="qualification__title">Dabador</h3>
                    <span className="qualification__subtitle"> </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                    </div>
                  </div>
                </div>
                {/* <!--==================== QUALIFICATION 3 ====================--> */}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Integral Tech</h3>
                    <span className="qualification__subtitle">
                      Développement d'une nouvelle solution ERP avec React,
                      TypeScript, Redux, et Tailwind. Traduction de l'ERP en
                      français, anglais, et arabe. Élaboration de la
                      documentation API avec Laravel. Révision des fautes
                      d'orthographe dans l'ancien ERP.
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      03 août 2023 - Présent
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder"></span>
                    {/* <!-- <span className="qualification__line"></span> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--==================== SERVICES ====================--> */}
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

        {/* <!--==================== PORTFOLIO ====================--> */}
        <section className="portfolio section" id="portfolio">
          <h2 className="section__title">Portfolio</h2>
          <span className="section__subtitle">Most recent work</span>
          <div className="portfolio__container container swiper-container">
            <div className="swiper-wrapper">
              {/* <!--==================== PORTFOLIO 1 ====================--> */}
              <div className="portfolio__content grid swiper-slide">
                <img src={portfolio1} alt="" className="portfolio__img" />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">Modern Website</h3>
                  <p className="portfolio__description">
                    A modern and responsive website designed to showcase my
                    skills.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
              {/* <!--==================== PORTFOLIO 2 ====================--> */}
              <div className="portfolio__content grid swiper-slide">
                <img src={portfolio2} alt="" className="portfolio__img" />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">Brand Design</h3>
                  <p className="portfolio__description">
                    A brand design project that showcases my branding skills.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
              {/* <!--==================== PORTFOLIO 3 ====================--> */}
              <div className="portfolio__content grid swiper-slide">
                <img src={portfolio3} alt="" className="portfolio__img" />
                <div className="portfolio__data">
                  <h3 className="portfolio__title">Online Store</h3>
                  <p className="portfolio__description">
                    An online store project that demonstrates my e-commerce
                    skills.
                  </p>
                  <a
                    href="#"
                    className="button button--flex button--small portfolio__button"
                  >
                    Demo
                    <i className="uil uil-arrow-right button__icon"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Add Arrows --> */}
            <div className="swiper-button-next">
              <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
            </div>
            <div className="swiper-button-prev">
              <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
            </div>

            {/* <!-- Add Pagination --> */}
            <div className="swiper-pagination"></div>
          </div>
        </section>

        {/* <!--==================== PROJECT IN MIND ====================--> */}
        <section className="project section">
          <div className="project__bg">
            <div className="project__container container grid">
              <div className="project__data">
                <h2 className="project__title">You have a new project</h2>
                <p className="project__description">
                  Contact me now and get a 20% discount on your first project.
                </p>
                <a
                  href="#contact"
                  className="button button--flex button--white"
                >
                  Contact Me!
                  <i className="uil uil-message project__icon button__icon"></i>
                </a>
              </div>
              <img src={project} alt="" className="project__img" />
            </div>
          </div>
        </section>

        {/* <!--==================== TESTIMONIAL ====================--> */}
        <section className="testimonial section">
          <h2 className="section__title">Testimonial</h2>
          <span className="section__subtitle">My client saying</span>
          <div className="testimonial__container container swiper-container">
            <div className="swiper-wrapper">
              {/* <!--==================== TESTIMONIAL 1 ====================--> */}
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img
                      src={testimonial1}
                      alt=""
                      className="testimonial__img"
                    />
                    <div>
                      <h3 className="testimonial__name">John Doe</h3>
                      <span className="testimonial__client">Client</span>
                    </div>
                  </div>
                  <div>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                  </div>
                </div>
                <p className="testimonial__description">
                  I've worked with John on several projects and he has always
                  exceeded my expectations. His creativity, attention to detail,
                  and communication are unparalleled. I highly recommend him!
                </p>
              </div>
              {/* <!--==================== TESTIMONIAL 2 ====================--> */}
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img
                      src={testimonial2}
                      alt=""
                      className="testimonial__img"
                    />
                    <div>
                      <h3 className="testimonial__name">Jane Smith</h3>
                      <span className="testimonial__client">Client</span>
                    </div>
                  </div>
                  <div>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                  </div>
                </div>
                <p className="testimonial__description">
                  I've worked with John on several projects and he has always
                  exceeded my expectations. His creativity, attention to detail,
                  and communication are unparalleled. I highly recommend him!
                </p>
              </div>
              {/* <!--==================== TESTIMONIAL 3 ====================--> */}
              <div className="testimonial__content swiper-slide">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img
                      src={testimonial3}
                      alt=""
                      className="testimonial__img"
                    />
                    <div>
                      <h3 className="testimonial__name">oussama tailaba</h3>
                      <span className="testimonial__client">Client</span>
                    </div>
                  </div>
                  <div>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                  </div>
                </div>
                <p className="testimonial__description">
                  I've worked with John on several projects and he has always
                  exceeded my expectations. His creativity, attention to detail,
                  and communication are unparalleled. I highly recommend him!
                </p>
              </div>
            </div>
            {/* <!-- Add Pagination --> */}
            <div className="swiper-pagination swiper-pagination-testimonial"></div>
          </div>
        </section>

        {/* <!--==================== CONTACT ME ====================--> */}
        <section className="contact section" id="contact">
          <h2 className="section__title">COntact Me</h2>
          <span className="section__subtitle">Get in touch</span>
          <div className="contact__container container grid">
            <div>
              <div className="contact__information">
                <i className="uil uil-phone contact__icon"></i>
                <div>
                  <h3 className="contact__title">Call Me</h3>
                  <span className="contact__subtitle">+212 6 41 89 90 24</span>
                </div>
              </div>
              <div className="contact__information">
                <i className="uil uil-envelope contact__icon"></i>
                <div>
                  <h3 className="contact__title">Email</h3>
                  <span className="contact__subtitle">
                    takikaoutar01@gmail.com
                  </span>
                </div>
              </div>
              <div className="contact__information">
                <i className="uil uil-map-marker contact__icon"></i>
                <div>
                  <h3 className="contact__title">Location</h3>
                  <span className="contact__subtitle">Morocco - MARRAKECH</span>
                </div>
              </div>
            </div>
            <form action="" className="contact__form grid">
              <div className="contact__inputs grid">
                <div className="contact__content">
                  <label className="contact__label">Name</label>
                  <input type="text" className="contact__input" />
                </div>
                <div className="contact__content">
                  <label className="contact__label">Email</label>
                  <input type="email" className="contact__input" />
                </div>
              </div>
              <div className="contact__content">
                <label className="contact__label">Project</label>
                <input type="text" className="contact__input" />
              </div>
              <div className="contact__content">
                <label className="contact__label">Message</label>
                <textarea
                  name=""
                  id=""
                  cols={0}
                  rows={7}
                  className="contact__input"
                ></textarea>
              </div>
              <div>
                <a href="#" className="button button--flex">
                  Send Message
                  <i className="uil uil-message button__icon"></i>
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* <!--==================== FOOTER ====================--> */}
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">KTAKI</h1>
              <span className="footer__subtitle">Web Developer</span>
            </div>
            <ul className="footer__links">
              <li>
                <a href="#services" className="footer__link">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer__link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="footer__link">
                  Contactme
                </a>
              </li>
            </ul>
            <div className="footer__socials">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="footer__social"
              >
                <i className="uil uil-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="footer__social"
              >
                <i className="uil uil-instagram"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="footer__social"
              >
                <i className="uil uil-twitter-alt"></i>
              </a>
            </div>
          </div>
          <p className="footer__copy">
            &#169; 2024 Kaoutar Taki. Tous droits réservés.
          </p>
        </div>
      </footer>

      {/* <!--==================== SCROLL TOP ====================--> */}
      <a href="#" className="scrollup" id="scroll-up">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </>
  );
}

export default App;

