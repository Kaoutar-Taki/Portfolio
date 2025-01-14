import { useEffect } from "react";

const ScrollTop = () => {
  useEffect(() => {
    const scrollUpHandler = () => {
      const scrollUp = document.getElementById("scroll-up");

      if (scrollUp) {
        if (window.scrollY >= 560) {
          scrollUp.classList.add("show-scroll");
        } else {
          scrollUp.classList.remove("show-scroll");
        }
      }
    };

    window.addEventListener("scroll", scrollUpHandler);

    return () => {
      window.removeEventListener("scroll", scrollUpHandler);
    };
  }, []);

  return (
    <a
      href="#"
      className="fixed right-4 bottom-[-20%] bg-[hsl(23,69%,61%)] opacity-80 px-1 py-0.5 rounded-md z-10 transition duration-500 hover:bg-[hsl(23,57%,53%)]"
      id="scroll-up"
      aria-label="Scroll to top"
    >
      <i className="uil uil-arrow-up text-xl text-white"></i>
    </a>
  );
};

export default ScrollTop;

