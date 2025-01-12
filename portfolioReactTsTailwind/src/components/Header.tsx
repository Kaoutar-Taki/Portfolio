import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const headerRef = useRef<HTMLElement>(null);
  const navMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialiser le thème à partir du localStorage
    const savedTheme = localStorage.getItem("selected-theme") as
      | "dark"
      | "light";
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.toggle("dark-theme", savedTheme === "dark");
    }

    // Gestionnaire d'événements pour le scroll
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle(
          "scroll-header",
          window.scrollY >= 80
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.classList.toggle("dark-theme", newTheme === "dark");
    localStorage.setItem("selected-theme", newTheme);
  };

  const openMenu = () => {
    if (navMenuRef.current) {
      navMenuRef.current.classList.add("show-menu");
    }
  };

  const closeMenu = () => {
    if (navMenuRef.current) {
      navMenuRef.current.classList.remove("show-menu");
    }
  };

  const handleLinkClick = () => {
    if (navMenuRef.current) {
      navMenuRef.current.classList.remove("show-menu");
    }
  };

  return (
    <header className="header" id="header" ref={headerRef}>
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Ktaki
        </a>

        <div className="nav__menu" id="nav-menu" ref={navMenuRef}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className="nav__link active-link"
                onClick={handleLinkClick}
              >
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={handleLinkClick}>
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={handleLinkClick}>
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#qualification"
                className="nav__link"
                onClick={handleLinkClick}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Qualification
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className="nav__link"
                onClick={handleLinkClick}
              >
                <i className="uil uil-message nav__icon"></i>
                Contact Me
              </a>
            </li>
          </ul>
          <button
            className="nav__close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <i className="uil uil-times"></i>
          </button>
        </div>

        <div className="nav__btns">
          <button className="nav__toggle" onClick={openMenu}>
            <i className="uil uil-apps"></i>
          </button>
          <button
            className="change-theme"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <i
              className={`uil ${theme === "dark" ? "uil-sun" : "uil-moon"}`}
            ></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

