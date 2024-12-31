import NavMenu from "./NavMenu";

const Header: React.FC = () => {
  return (
    <header
      className="header md:top-0 md:bottom-auto md:px-4 lg:p-0"
      id="header"
    >
      <nav className="nav container md:h-[calc(3rem + 1.5rem)] md:gap-4 md:mx-auto">
        <a href="#" className="nav__logo">
          Ktaki
        </a>
        <NavMenu />
        <div className="nav__btns">
          {/* Theme change button */}
          <i className="uil uil-moon change-theme md:m-0" id="theme-button"></i>
          <div className="nav__toggle md:hidden" id="nav-toggle">
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

