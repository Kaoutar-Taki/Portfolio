import React, { useEffect } from "react";
import profile from "../img/profile.png";

const Home: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionHeight = element.offsetHeight;
        const sectionTop = element.offsetTop - 50;
        const sectionId = section.getAttribute("id");

        const link = document.querySelector(`a[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link?.classList.add("active-link");
        } else {
          link?.classList.remove("active-link");
        }
      });

      const header = document.getElementById("header");
      if (header) {
        if (scrollY >= 80) {
          header.classList.add("scroll-header");
        } else {
          header.classList.remove("scroll-header");
        }
      }

      const scrollUpButton = document.getElementById("scroll-up");
      if (scrollUpButton) {
        if (scrollY >= 560) {
          scrollUpButton.classList.add("show-scroll");
        } else {
          scrollUpButton.classList.remove("show-scroll");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="home py-16 md:py-32 " id="home">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="grid gap-12 md:gap-20 items-center md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold text-[#3a2e23] leading-tight">
              Hi, I'm <span className="text-[#db784e]">Kaoutar Taki</span>
            </h1>
            <h3 className="text-xl font-medium text-[#6d4e4e] mt-4">
              Full Stack Developer
            </h3>
            <p className="text-[#6d4e4e] mt-4 leading-relaxed">
              Développeuse Full Stack avec une expérience approfondie dans le
              développement front-end et back-end. Passionnée par la création de
              solutions innovantes et efficaces.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-block bg-[#db784e] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#ca4f3f] transition-all"
            >
              Contact Me
            </a>
          </div>
          <div className="flex justify-center">
            <div className="order-1 justify-self-center">
              {/* <img
                src={profile}
                alt="Kaoutar Taki"
                className="object-cover w-full h-full"
              /> */}
              <svg
                className="w-[200px] fill-[#db784e]"
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
                    y="18"
                    xlinkHref={profile}
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#about"
            className="inline-flex items-center text-[#d56a00] hover:text-[#ca4f3f] transition-all"
          >
            <i className="uil uil-mouse-alt text-2xl mr-2"></i>
            <span className="font-medium">Scroll Down</span>
            <i className="uil uil-arrow-down text-xl ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

