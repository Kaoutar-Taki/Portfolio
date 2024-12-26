import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="lg:p-0 footer__container container grid">
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
              rel="noopener noreferrer"
              className="footer__social"
            >
              <i className="uil uil-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
            >
              <i className="uil uil-instagram"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
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
  );
};

export default Footer;

