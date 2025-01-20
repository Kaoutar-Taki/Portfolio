const Footer = () => (
  <footer className="footer" id="footer">
    <div className="footer__bg">
      <div className="footer__container container grid">
        <div>
          <h1 className="footer__title">KTAKI</h1>
          <span className="footer__subtitle">Développeuse Web</span>
        </div>
        <ul className="footer__links">
          {[
            { href: "#about", text: "À propos" },
            { href: "#skills", text: "Compétences" },
            { href: "#qualification", text: "Qualifications" },
            { href: "#contact", text: "Contactez-moi" },
          ].map((link, index) => (
            <li key={index}>
              <a href={link.href} className="footer__link">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer__socials">
          {[
            {
              href: "https://github.com/Kaoutar-Taki",
              icon: "uil uil-github",
            },
            {
              href: "https://www.linkedin.com/in/kaoutar-taki",
              icon: "uil uil-linkedin",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
      <p className="footer__copy">
        &#169; 2024 Kaoutar Taki. Tous droits réservés.
      </p>
    </div>
  </footer>
);

export default Footer;

