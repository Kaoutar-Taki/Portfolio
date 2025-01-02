import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="pt-8">
      <div className="bg-hsl(23, 69%, 61%) dark:bg-first-color-second-dark py-8 sm:py-12">
        <div className="mx-6 sm:mx-4 max-w-full sm:max-w-[768px] md:mx-auto lg:p-0 gap-6 grid sm:grid-cols-2 md:grid-cols-3 md:px-4 lg:px-0">
          <div>
            <h1 className="text-[1.5rem] mb-1 text-[hsl(23,8%,15%)] font-semibold">
              KTAKI
            </h1>
            <span className="text-[0.813rem]">Web Developer</span>
          </div>
          <ul className="flex flex-col gap-6 sm:flex-row sm:gap-8 list-none">
            <li>
              <a href="#services" className="hover:text-[#e3b7b7] no-underline">
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-[#e3b7b7] no-underline"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#e3b7b7] no-underline">
                Contactme
              </a>
            </li>
          </ul>
          <div className="justify-self-end">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[1.25rem] mr-6 hover:text-[#e3b7b7] no-underline"
            >
              <i className="uil uil-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[1.25rem] mr-6 hover:text-[#e3b7b7] no-underline"
            >
              <i className="uil uil-instagram"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[1.25rem] mr-6 hover:text-[#e3b7b7] no-underline"
            >
              <i className="uil uil-twitter-alt"></i>
            </a>
          </div>
        </div>
        <p className="text-[0.75rem] text-[hsl(23, 8%, 45%)] text-center m-12 sm:mt-18">
          &#169; 2024 Kaoutar Taki. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

