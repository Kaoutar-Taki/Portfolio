import React from "react";

const ScrollTop: React.FC = () => {
  return (
    <a
      href="#"
      className="fixed right-4 bottom-[-20%] bg-[#e24a32] opacity-80 px-1 rounded-md z-10 transition-all hover:bg-[#d23e30] no-underline"
      id="scroll-up"
    >
      <i className="uil uil-arrow-up text-white text-xl"></i>
    </a>
  );
};

export default ScrollTop;

