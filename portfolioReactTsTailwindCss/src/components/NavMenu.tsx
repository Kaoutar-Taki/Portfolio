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
  { href: "#services", icon: "uil uil-briefcase-alt", label: "Services" },
  { href: "#portfolio", icon: "uil uil-scenery", label: "Portfolio" },
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
      className={`nav__menu md:ml-auto md:p-0 ${isMenuOpen ? "show-menu" : ""}`}
      id="nav-menu"
    >
      <ul className="nav__list grid md:flex md:gap-8">
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
        className="uil uil-times nav__close md:hidden"
        id="nav-close"
        onClick={handleCloseMenu}
      ></i>
      <div
        className="nav__toggle md:hidden"
        id="nav-toggle"
        onClick={handleToggleMenu}
      >
        <i className="uil uil-bars"></i>
      </div>
    </div>
  );
};

export default NavMenu;

