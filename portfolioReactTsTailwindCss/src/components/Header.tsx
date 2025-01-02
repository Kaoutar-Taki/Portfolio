import NavMenu from "./NavMenu";

const Header: React.FC = () => {
  return (
    <header
      className="fixed w-full bottom-0 left-0 z-[100] bg-[hsl(23, 60%, 99%)] dark:bg-body-color-dark sm:top-0 sm:bottom-auto sm:px-4 lg:px-0 md:top-0 md:bottom-auto md:px-4 lg:p-0"
      id="header"
    >
      <nav className="h-[3rem] flex justify-between items-center sm:h-[calc(3rem+1.5rem)] sm:gap-4 mx-6 sm:mx-4 md:mx-auto max-w-full sm:max-w-[768px] md:h-[calc(3rem + 1.5rem)] md:gap-4 md:mx-auto">
        <a
          href="#"
          className="text-[#3b2a2b] font-500 hover:text-[#db784e] no-underline"
        >
          Ktaki
        </a>
        <NavMenu />
        <div className="flex items-center">
          <i
            className="uil uil-moon text-h2 text-hsl(23, 8%, 15%)dark:text-[hsl(23, 8%, 95%)] mr-4 cursor-pointer md:m-0 hover:text-[hsl(23, 69%, 61%)]"
            id="theme-button"
          ></i>
          <div
            className="text-main-color font-500 text-base cursor-pointer hover:text-[hsl(23, 57%, 53%)] md:hidden"
            id="nav-toggle"
          >
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

