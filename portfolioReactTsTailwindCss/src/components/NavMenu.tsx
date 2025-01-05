import React, { useState } from "react";
import NavItem from "./NavItem";

const navItems = [
  { href: "#home", icon: "uil uil-estate", label: "Home" },
  { href: "#about", icon: "uil uil-user", label: "About" },
  { href: "#skills", icon: "uil uil-file-alt", label: "Skills" },
  {
    href: "#qualification",
    icon: "uil uil-graduation-cap",
    label: "Qualification",
  },
  { href: "#contact", icon: "uil uil-message", label: "Contact" },
];

const NavMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <div className="relative">
      {/* Bouton d'ouverture du menu pour petits écrans */}
      <button
        className="md:hidden text-gray-600 dark:text-gray-300 text-2xl"
        onClick={handleToggleMenu}
        aria-label="Toggle Menu"
      >
        <i className="uil uil-bars"></i>
      </button>

      {/* Menu mobile */}
      <ul
        className={`absolute top-[60px] left-0 w-full bg-white dark:bg-gray-900 p-4 shadow-md rounded-lg flex flex-col gap-4 transition-transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:static md:translate-y-0 md:flex-row md:w-auto md:p-0 md:shadow-none md:bg-transparent`}
      >
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            href={item.href}
            icon={item.icon}
            label={item.label}
          />
        ))}
        <li className="md:hidden">
          <button
            className="text-gray-600 dark:text-gray-300 text-2xl"
            onClick={handleCloseMenu}
            aria-label="Close Menu"
          >
            <i className="uil uil-times"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;

