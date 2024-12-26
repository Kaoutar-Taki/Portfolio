import React from "react";
import NavItem from "./NavItem";

const navItems = [
  { href: "#home", icon: "uil uil-estate", label: "Home", active: true },
  { href: "#about", icon: "uil uil-user", label: "About" },
  { href: "#skills", icon: "uil uil-file-alt", label: "Skills" },
  { href: "#services", icon: "uil uil-briefcase-alt", label: "Services" },
  { href: "#portfolio", icon: "uil uil-scenery", label: "Portfolio" },
  { href: "#contact", icon: "uil uil-message", label: "Contactme" },
];

const NavMenu: React.FC = () => {
  return (
    <div className="nav__menu md:ml-auto md:p-0" id="nav-menu">
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
      <i className="uil uil-times nav__close md:hidden" id="nav-close"></i>
    </div>
  );
};

export default NavMenu;

