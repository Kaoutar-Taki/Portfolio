import React from "react";

interface NavItemProps {
  href: string;
  icon: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label }) => {
  return (
    <li>
      <a
        href={href}
        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 transition text-sm font-medium"
      >
        <i className={`${icon} text-lg`}></i>
        <span>{label}</span>
      </a>
    </li>
  );
};

export default NavItem;

