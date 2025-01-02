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
      <a
        href={href}
        className={`flex flex-col items-center text-[0.813rem] text-[#3b2a2b] font-500 hover:text-[#db784e] no-underline ${
          active ? "text-[#db784e]" : ""
        }`}
      >
        <i className={`${icon} text-xl md:hidden`}></i> {label}
      </a>
    </li>
  );
};

export default NavItem;

