import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="pt-8">
      <div className="bg-first-color py-8 sm:py-12 dark:bg-first-color-second-dark">
        <div className="mx-6 sm:mx-4 max-w-full sm:max-w-4xl md:mx-auto lg:p-0 gap-6 grid sm:grid-cols-2 md:grid-cols-3 md:px-4 lg:px-0">
          <div>
            <h1 className="text-[1.5rem] mb-1 text-container-color dark:text-title-color-dark font-semibold">
              KTAKI
            </h1>
            <span className="text-[0.813rem] text-text-color-light dark:text-text-color-dark">
              Développeur Web
            </span>
          </div>
          <ul className="flex flex-col gap-6 sm:flex-row sm:gap-8 list-none">
            <li>
              <a
                href="#qualification"
                className="text-container-color hover:text-first-color-lighter dark:text-text-color-dark dark:hover:text-first-color-lighter no-underline"
              >
                Qualification
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-container-color hover:text-first-color-lighter dark:text-text-color-dark dark:hover:text-first-color-lighter no-underline"
              >
                Compétences
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-container-color hover:text-first-color-lighter dark:text-text-color-dark dark:hover:text-first-color-lighter no-underline"
              >
                Contactez-moi
              </a>
            </li>
          </ul>
          <div className="text-container-color dark:text-text-color-dark justify-self-end flex sm:justify-center gap-6">
            <a
              href="https://github.com/Kaoutar-Taki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[1.25rem] hover:text-first-color-lighter dark:hover:text-first-color-lighter no-underline"
            >
              <i className="uil uil-github"></i>
            </a>
            <a
              href="www.linkedin.com/in/kaoutar-taki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[1.25rem] hover:text-first-color-lighter dark:hover:text-first-color-lighter no-underline"
            >
              <i className="uil uil-linkedin"></i>
            </a>
          </div>
        </div>
        <p className="text-xs text-center text-text-color-light mt-12 sm:mt-18 dark:text-text-color-dark">
          &#169; 2024 Kaoutar Taki. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

