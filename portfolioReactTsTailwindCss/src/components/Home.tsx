import React, { useEffect } from "react";
import profile from "../img/perfil.png";

const Home: React.FC = () => {
  useEffect(() => {
    // Scroll Active Link
    const sections = document.querySelectorAll("section[id]");
    const scrollActive = () => {
      const scrollY = window.pageYOffset;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(`.nav__menu a[href*=${sectionId}]`)
            ?.classList.add("active-link");
        } else {
          document
            .querySelector(`.nav__menu a[href*=${sectionId}]`)
            ?.classList.remove("active-link");
        }
      });
    };

    // Scroll Header
    const scrollHeader = () => {
      const nav = document.getElementById("header");
      if (nav) {
        if (window.scrollY >= 80) {
          nav.classList.add("scroll-header");
        } else {
          nav.classList.remove("scroll-header");
        }
      }
    };

    // Show Scroll Up
    const scrollUp = () => {
      const scrollUp = document.getElementById("scroll-up");
      if (scrollUp) {
        if (window.scrollY >= 560) {
          scrollUp.classList.add("show-scroll");
        } else {
          scrollUp.classList.remove("show-scroll");
        }
      }
    };

    window.addEventListener("scroll", () => {
      scrollActive();
      scrollHeader();
      scrollUp();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        scrollActive();
        scrollHeader();
        scrollUp();
      });
    };
  }, []);

  return (
    <section className="home section md:py-[6rem] md:pb-[2rem]" id="home">
      <div className="home__container container grid md:gap-20 md:mx-auto">
        <div className="home__content grid md:pt-[5.5rem] md:gap-8">
          <div className="home__social lg:-translate-x-24">
            <a
              href="https://www.linkedin.com/in/kaoutar-taki/"
              className="home__social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
              href="https://github.com/Kaoutar-Taki"
              className="home__social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-github-alt"></i>
            </a>
          </div>
          <div className="home__img">
            <svg
              className="home__blob md:w-[270px] lg:w-[320px]"
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
              Développeuse Full Stack avec une expérience approfondie dans le
              développement front-end et back-end. Passionnée par la création de
              solutions innovantes et efficaces.
            </p>
            <a href="contact" className="button button--flex">
              Contact Me <i className="uil uil-message button__icon"></i>
            </a>
          </div>
        </div>
        <div className="home__scroll md:block">
          <a
            href="#about"
            className="home__scroll-button button--flex md:ml-12"
          >
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <span className="home__scroll-name">Scroll Down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
