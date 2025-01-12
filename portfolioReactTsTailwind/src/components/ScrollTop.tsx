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
    <a href="#" className="scrollup" id="scroll-up" aria-label="Scroll to top">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollTop;

