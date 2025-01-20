import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const headerRef = useRef<HTMLElement>(null);
  const navMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("selected-theme") as
      | "dark"
      | "light";
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.toggle("dark-theme", savedTheme === "dark");
    }
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
    <header
      className="w-full fixed bottom-0 left-0 z-20 bg-[hsl(23,60%,99%)] dark:bg-[hsl(23,28%,12%)] md:bottom-auto md:px-4 lg:px-0"
      id="header"
      ref={headerRef}
    >
      <nav className="nav max-w-3xl mx-6 sm:mx-4 md:mx-auto">
        {/* nav */}
        <a href="#" className="nav__logo">
          Ktaki
        </a>
        {/* nav__logo */}

        <div
          // className="nav__menu"
          className="fixed md:relative -bottom-full md:bottom-auto left-0 md:left-auto w-full bg-[hsl(23,60%,99%)] dark:bg-[hsl(23,28%,12%)] p-8 sm:p-[2rem_1rem_4rem] md:p-0 shadow-[0_-1px_4px_rgba(0,0,0,0.15)] md:shadow-none rounded-t-[1.5rem] transition-all duration-300"
          id="nav-menu"
          ref={navMenuRef}
        >
          {/* nav__menu  */}
          <ul className="grid-cols-3 sm:gap-x-0 md:flex md:gap-x-8 grid gap-6">
            <li>
              <a
                href="#home"
                className="flex flex-col items-center text-xs md:text-sm text-[hsl(23,8%,15%)] dark:text-[hsl(23,8%,95%)] font-medium hover:text-[hsl(23,69%,61%)] text-[hsl(23, 69%, 61%)]"
                onClick={handleLinkClick}
              >
                <i className="uil uil-estate text-[1.2rem] md:hidden"></i>
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="flex flex-col items-center text-xs md:text-sm text-[hsl(23,8%,15%)] dark:text-[hsl(23,8%,95%)] font-medium hover:text-[hsl(23,69%,61%)]"
                onClick={handleLinkClick}
              >
                <i className="uil uil-user text-[1.2rem] md:hidden"></i>
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="flex flex-col items-center text-xs md:text-sm text-[hsl(23,8%,15%)] dark:text-[hsl(23,8%,95%)] font-medium hover:text-[hsl(23,69%,61%)]"
                onClick={handleLinkClick}
              >
                <i className="uil uil-file-alt text-[1.2rem] md:hidden"></i>
                Skills
              </a>
            </li>
            <li>
              <a
                href="#qualification"
                className="flex flex-col items-center text-xs md:text-sm text-[hsl(23,8%,15%)] dark:text-[hsl(23,8%,95%)] font-medium hover:text-[hsl(23,69%,61%)]"
                onClick={handleLinkClick}
              >
                <i className="uil uil-briefcase-alt text-[1.2rem] md:hidden"></i>
                Qualification
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex flex-col items-center text-xs md:text-sm text-[hsl(23,8%,15%)] dark:text-[hsl(23,8%,95%)] font-medium hover:text-[hsl(23,69%,61%)]"
                onClick={handleLinkClick}
              >
                <i className="uil uil-message text-[1.2rem] md:hidden"></i>
                Contact Me
              </a>
            </li>
          </ul>
          <button
            className="absolute right-5 bottom-2 text-2xl cursor-pointer text-[hsl(23,69%,61%)] hover:text-[hsl(23,57%,53%)] md:hidden"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <i className="uil uil-times"></i>
          </button>
        </div>

        <div className="flex items-center">
          <button
            className="text-[hsl(23,8%,15%)] dark:text-[hsl(23,8%,95%)] font-medium text-lg cursor-pointer hover:text-[hsl(23,69%,61%)] md:hidden"
            onClick={openMenu}
          >
            <i className="uil uil-apps"></i>
          </button>
          <button
            className="text-xl text-[hsl(23,8%,15%)] dark:text-[hsl(23,8%,95%)] mr-4 cursor-pointer hover:text-[hsl(23,69%,61%)] md:m-0"
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

