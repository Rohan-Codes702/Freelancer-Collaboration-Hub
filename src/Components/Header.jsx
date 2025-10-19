import React from "react";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Freelancer Collaboration Hub
      </h1>
      <button
        type="button"
        aria-pressed={!!darkMode}
        onClick={() => setDarkMode((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded-lg shadow hover:scale-105 transform transition"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}

export default Header;
