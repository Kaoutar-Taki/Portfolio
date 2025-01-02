import React, { useState } from "react";
import NavItem from "./NavItem";

interface NavItemType {
  href: string;
  icon: string;
  label: string;
  active?: boolean;
}

const navItems: NavItemType[] = [
  { href: "#home", icon: "uil uil-estate", label: "Home", active: true },
  { href: "#about", icon: "uil uil-user", label: "About" },
  { href: "#skills", icon: "uil uil-file-alt", label: "Skills" },
  {
    href: "#qualification",
    icon: "uil uil-graduation-cap",
    label: "Qualification",
  },
  { href: "#contact", icon: "uil uil-message", label: "Contactme" },
];

const NavMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`md:ml-auto md:p-0 ${isMenuOpen ? "bottom-0" : ""}`}
      id="nav-menu"
    >
      <ul className="grid-cols-3 md:space-x-8 sm:gap-0 gap-6 grid md:flex md:gap-8 list-none">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            href={item.href}
            icon={item.icon}
            label={item.label}
            active={item.active}
          />
        ))}
      </ul>
      <i
        className="uil uil-times absolute right-5 bottom-2 text-xl cursor-pointer text-first-color hover:text-[hsl(23, 57%, 53%)] md:hidden"
        id="nav-close"
        onClick={handleCloseMenu}
      ></i>
      <div
        className="text-main-color font-500 text-base cursor-pointer hover:text-[hsl(23, 57%, 53%)] md:hidden"
        id="nav-toggle"
        onClick={handleToggleMenu}
      >
        <i className="uil uil-bars"></i>
      </div>
    </div>
  );
};

export default NavMenu;

