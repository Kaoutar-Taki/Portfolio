import React, { useEffect, useState } from "react";

const ScrollTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <a
        href="#"
        className="fixed right-4 bottom-4 bg-[#e24a32] opacity-80 px-3 py-3 rounded-md z-10 transition-all hover:bg-[#d23e30] no-underline"
        id="scroll-up"
      >
        <i className="uil uil-arrow-up text-white text-xl"></i>
      </a>
    )
  );
};

export default ScrollTop;

