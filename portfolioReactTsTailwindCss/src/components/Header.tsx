import React from "react";
import NavMenu from "./NavMenu";

const Header: React.FC = () => {
  return (
    <header className="header lg:p-0" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Ktaki
        </a>
        <NavMenu />
        <div className="nav__btns">
          {/* Theme change button */}
          <i className="uil uil-moon change-theme" id="theme-button"></i>
          <div className="nav__toggle" id="nav-toggle">
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

