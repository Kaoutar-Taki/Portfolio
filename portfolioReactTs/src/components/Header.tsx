import { useEffect } from "react";

interface MenuItem {
  href: string;
  icon: string;
  text: string;
  active?: boolean;
}

const Header = () => {
  useEffect(() => {
    const navMenu = document.getElementById("nav-menu") as HTMLElement | null;
    const navToggle = document.getElementById(
      "nav-toggle"
    ) as HTMLElement | null;
    const navClose = document.getElementById("nav-close") as HTMLElement | null;
    const navLinks = document.querySelectorAll(".nav__link");

    const toggleMenu = () => navMenu?.classList.add("show-menu");
    const closeMenu = () => navMenu?.classList.remove("show-menu");

    navToggle?.addEventListener("click", toggleMenu);
    navClose?.addEventListener("click", closeMenu);

    // Close menu when a nav link is clicked
    navLinks.forEach((link) =>
      link.addEventListener("click", () => {
        navMenu?.classList.remove("show-menu");
      })
    );

    return () => {
      navToggle?.removeEventListener("click", toggleMenu);
      navClose?.removeEventListener("click", closeMenu);
      navLinks.forEach((link) =>
        link.removeEventListener("click", () => {
          navMenu?.classList.remove("show-menu");
        })
      );
    };
  }, []);

  const menuItems: MenuItem[] = [
    { href: "#home", icon: "uil uil-estate", text: "Accueil", active: true },
    { href: "#about", icon: "uil uil-user", text: "À propos" },
    { href: "#skills", icon: "uil uil-file-alt", text: "Compétences" },
    { href: "#qualification", icon: "uil uil-scenery", text: "Qualifications" },
    { href: "#contact", icon: "uil uil-message", text: "Contactez-moi" },
  ];

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Ktaki
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            {menuItems.map((item, index) => (
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
};

export default Header;

