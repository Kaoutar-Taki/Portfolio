import React, { useEffect } from "react";
import profile from "../img/profile.png";

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
            .querySelector(
              `fixed bottom-[-100%] left-0 w-full bg-[hsl(23,60%,99%)] p-8 pb-16 sm:p-1 sm:pb-16 md:ml-auto md:p-0 shadow-md rounded-t-[1.5rem] transition-all a[href*=${sectionId}]`
            )
            ?.classList.add("text-[#db784e]");
        } else {
          document
            .querySelector(
              `fixed bottom-[-100%] left-0 w-full bg-[hsl(23,60%,99%)] p-8 pb-16 sm:p-1 sm:pb-16 md:ml-auto md:p-0 shadow-md rounded-t-[1.5rem] transition-all a[href*=${sectionId}]`
            )
            ?.classList.remove("text-[#db784e]");
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
    // .show-scroll {
    //   bottom: 5rem;
    // }
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
    <section className="home py-8 md:py-24" id="home">
      <div className="sm:gap-20 mx-6 sm:mx-4 max-w-full sm:max-w-[768px] grid gap-6 md:gap-20 md:mx-auto">
        <div className="grid gap-6 grid-cols-[0.5fr_3fr] pt-14 md:grid-cols-[0.25fr_3fr] sm:grid-cols-[max-content_1fr_1fr] md:pt-20 md:gap-8">
          <div className="grid gap-6 md:translate-x-[-6rem] lg:-translate-x-24">
            <a
              href="https://www.linkedin.com/in/kaoutar-taki/"
              className="text-xl text-[hsl(23, 69%, 61%)] hover:text-[hsl(23, 57%, 53%)] no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
              href="https://github.com/Kaoutar-Taki"
              className="text-xl text-[hsl(23, 69%, 61%)] hover:text-[hsl(23, 57%, 53%)] no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="uil uil-github-alt"></i>
            </a>
          </div>
          <div className="home__img md:order-1 md:justify-self-center">
            <svg
              className="fill-[hsl(23, 69%, 61%)] w-[200px] sm:w-[180px] md:w-[270px] lg:w-[320px]"
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
                  className="w-[170px]"
                  x="12"
                  y="30"
                  xlinkHref={profile}
                />
              </g>
            </svg>
          </div>
          <div className="grid-column-1/3 md:grid-cols-1">
            <h1 className="text-[hsl(23,8%,15%)] font-semibold text-[2rem]">
              Hi, I'am Kaoutar Taki
            </h1>
            <h3 className="text-[1.125rem] text-[#3b2a2b] font-500 mb-3">
              Full Stack Developer
            </h3>
            <p className="mb-8">
              Développeuse Full Stack avec une expérience approfondie dans le
              développement front-end et back-end. Passionnée par la création de
              solutions innovantes et efficaces.
            </p>
            <a
              href="contact"
              className="bg-[#db784e] text-white py-4 px-6 rounded-lg font-500 hover:bg-[#ca4f3f] inline-flex items-center no-underline"
            >
              Contact Me{" "}
              <i className="uil uil-message text-[1.25rem] ml-2 transition-all"></i>
            </a>
          </div>
        </div>
        <div className="hidden sm:block md:block">
          <a
            href="#about"
            className="text-[#d56a00] transition-all hover:translate-y-1 sm:ml-12 inline-flex items-center md:ml-12 no-underline"
          >
            <i className="uil uil-mouse-alt text-2xl"></i>
            <span className="text-sm text-[#3a2e23] font-500 mr-1">
              Scroll Down
            </span>
            <i className="uil uil-arrow-down text-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

