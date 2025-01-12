const Footer = () => {
  return (
    <>
      <footer className="pt-8">
        <div className="pt-8 pb-12 bg-[hsl(23,69%,61%)] dark:bg-[hsl(23,30%,8%)] md:pt-12 md:pb-14">
          <div className="max-w-3xl mx-6 sm:mx-4 md:mx-auto grid gap-6 gap-y-14 md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:px-0">
            <div>
              <h1 className="text-white text-2xl md:text-4xl mb-1">KTAKI</h1>
              <span className="text-white text-sm md:text-base">
                Développeur Web
              </span>
            </div>
            <ul className="flex flex-col gap-y-6 md:flex-row md:gap-x-8">
              <li>
                <a
                  href="#skills"
                  className="text-white hover:text-[hsl(23,92%,85%)]"
                >
                  Compétences
                </a>
              </li>
              <li>
                <a
                  href="#qualification"
                  className="text-white hover:text-[hsl(23,92%,85%)]"
                >
                  Qualification
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white hover:text-[hsl(23,92%,85%)]"
                >
                  Contactez-moi
                </a>
              </li>
            </ul>
            <div className="md:justify-self-end">
              <a
                href="https://github.com/Kaoutar-Taki"
                target="_blank"
                className="text-white text-xl mr-6 hover:text-[hsl(23,92%,85%)]"
              >
                <i className="uil uil-github"></i>
              </a>
              <a
                href="www.linkedin.com/in/kaoutar-taki"
                target="_blank"
                className="text-white text-xl mr-6 hover:text-[hsl(23,92%,85%)]"
              >
                <i className="uil uil-linkedin"></i>
              </a>
            </div>
          </div>
          <p className="text-center text-[hsl(23,8%,65%)] text-xs mt-12 md:mt-18">
            &#169; 2024 Kaoutar Taki. Tous droits réservés.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

