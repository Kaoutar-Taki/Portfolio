const Header = () => (
  <header className="header" id="header">
    <nav className="nav container">
      <a href="#" className="nav__logo">
        Ktaki
      </a>
      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list grid">
          {[
            {
              href: "#home",
              icon: "uil uil-estate",
              text: "Accueil",
              active: true,
            },
            { href: "#about", icon: "uil uil-user", text: "À propos" },
            { href: "#skills", icon: "uil uil-file-alt", text: "Compétences" },
            {
              href: "#qualification",
              icon: "uil uil-scenery",
              text: "Qualifications",
            },
            {
              href: "#contact",
              icon: "uil uil-message",
              text: "Contactez-moi",
            },
          ].map((item, index) => (
            <li key={index} className="nav__item">
              <a
                href={item.href}
                className={`nav__link ${item.active ? "active-link" : ""}`}
              >
                <i className={`${item.icon} nav__icon`}></i> {item.text}
              </a>
            </li>
          ))}
        </ul>
        <i className="uil uil-times nav__close" id="nav-close"></i>
      </div>
      <div className="nav__btns">
        <i className="uil uil-moon change-theme" id="theme-button"></i>
        <div className="nav__toggle" id="nav-toggle">
          <i className="uil uil-apps"></i>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;

