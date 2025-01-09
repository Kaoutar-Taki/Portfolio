import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Vérifiez si le mode sombre est déjà activé dans localStorage
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);

    if (savedMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    // Sauvegarder l'état du mode sombre dans localStorage
    localStorage.setItem("darkMode", darkMode ? "true" : "false");

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white dark:bg-gray-900 sm:px-4 lg:px-0 ">
      <nav className="flex justify-between items-center px-6 py-4 sm:max-w-[768px] md:max-w-[1024px] lg:max-w-[1280px] mx-auto">
        <a
          href="#"
          className="text-xl font-bold text-gray-800 dark:text-white hover:text-orange-500 transition"
        >
          Ktaki
        </a>
        <NavMenu />
        <div className="flex items-center space-x-4">
          <i
            className="uil uil-moon text-xl text-gray-600 dark:text-gray-300 cursor-pointer hover:text-orange-500 transition"
            id="theme-button"
            onClick={toggleDarkMode}
          ></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

