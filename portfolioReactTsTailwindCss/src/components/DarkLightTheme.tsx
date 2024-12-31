import React, { useEffect, useState } from "react";

const DarkLightTheme: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [iconTheme, setIconTheme] = useState<string>("uil-sun");

  // Check for saved theme in localStorage and set it on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("selected-theme");
    const savedIcon = localStorage.getItem("selected-icon");

    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
      setIconTheme(savedIcon || "uil-sun");
    }
  }, []);

  // Toggle theme and save the selected theme and icon to localStorage
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    setIconTheme(newTheme ? "uil-moon" : "uil-sun");

    // Save the theme and icon to localStorage
    localStorage.setItem("selected-theme", newTheme ? "dark" : "light");
    localStorage.setItem("selected-icon", newTheme ? "uil-moon" : "uil-sun");
  };

  return (
    <button id="theme-button" onClick={toggleTheme}>
      <i className={`uil ${iconTheme}`}></i>
    </button>
  );
};

export default DarkLightTheme;

