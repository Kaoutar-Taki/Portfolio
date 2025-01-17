import profile from "../assets/img/profile.png";
const Home = () => {
  return (
    <>
      <section className="home p-8 md:p-24 md:pt-24 md:pb-8" id="home">
        {/* home */}
        <div className="home__container max-w-3xl mx-6 sm:mx-4 md:mx-auto grid gap-6">
          {/* home__container */}
          <div className="home__content grid gap-6">
            {/* home__content  */}
            <div className="home__social">
              {/* home__social  */}
              <a
                href="https://www.linkedin.com/in/kaoutar-taki/"
                className="home__social-icon"
                target="_blank"
              >
                <i className="uil uil-linkedin-alt"></i>
              </a>
              {/* home__social-icon */}
              <a
                href="https://github.com/Kaoutar-Taki"
                className="home__social-icon"
                target="_blank"
              >
                <i className="uil uil-github-alt"></i>
              </a>
              {/* home__social-icon  */}
            </div>
            <div className="home__img">
              {/* home__img  */}
              <svg
                className="home__blob"
                viewBox="0 0 200 187"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                {/* home__blob  */}
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
                  {/* home__blob-img */}
                </g>
              </svg>
            </div>
            <div className="home__data">
              {/* home__data  */}
              <h1 className="home__title">Hi, I'am Kaoutar Taki</h1>
              {/* home__title */}
              <h3 className="home__subtitle">Full Stack Developer</h3>
              {/* home__subtitle  */}
              <p className="home__description">
                {/* home__description */}
                Développeuse Full Stack avec une expérience approfondie dans le
                développement front-end et back-end. Passionnée par la création
                de solutions innovantes et efficaces.
              </p>
              <a
                href="contact"
                className="inline-block bg-[hsl(23,69%,61%)] text-white p-4 rounded-lg font-medium hover:bg-[hsl(23,57%,53%)] items-center"
              >
                Contact Me
                <i className="uil uil-message text-xl ml-2 transition duration-300"></i>
              </a>
            </div>
          </div>
          <div className="home__scroll">
            {/* home__scroll  */}
            <a
              href="#about"
              className="home__scroll-button inline-flex items-center"
            >
              {/* home__scroll-button  */}
              <i className="uil uil-mouse-alt home__scroll-mouse"></i>
              {/* home__scroll-mouse  */}
              <span className="home__scroll-name">Scroll Down</span>
              {/* home__scroll-name  */}
              <i className="uil uil-arrow-down home__scroll-arrow"></i>
              {/* home__scroll-arrow   */}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

