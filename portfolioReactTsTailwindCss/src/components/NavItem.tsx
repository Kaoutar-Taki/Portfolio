import React from "react";

interface NavItemProps {
  href: string;
  icon: string;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label, active }) => {
  return (
    <li className="nav__item">
      <a href={href} className={`nav__link ${active ? "active-link" : ""}`}>
        <i className={`${icon} nav__icon md:hidden`}></i> {label}
      </a>
    </li>
  );
};

export default NavItem;

