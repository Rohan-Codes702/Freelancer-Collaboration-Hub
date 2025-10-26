import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="relative flex justify-between items-center p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50 shadow-2xl backdrop-blur-sm overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 animate-pulse"></div>
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-2xl rounded-full animate-pulse delay-1000"></div>
      <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 blur-2xl rounded-full animate-pulse delay-2000"></div>

      <div className="relative z-10 flex items-center gap-4">
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-lg">🚀</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-wide">
          Freelancer Collaboration Hub
        </h1>
      </div>

      <div className="relative z-10">
        <button
          type="button"
          aria-pressed={!!darkMode}
          onClick={() => setDarkMode((prev) => !prev)}
          className="
            group relative flex items-center gap-3 px-6 py-3
            bg-gradient-to-r from-slate-800 to-slate-700
            border border-slate-600/50
            hover:border-cyan-400/50
            rounded-xl shadow-lg
            hover:shadow-[0_0_20px_rgba(0,255,200,0.3)]
            transition-all duration-300
            hover:scale-105
            backdrop-blur-sm
            overflow-hidden
          "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 flex items-center gap-3">
            {darkMode ? (
              <FaSun className="text-yellow-400 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            ) : (
              <FaMoon className="text-blue-400 w-5 h-5 group-hover:-rotate-12 transition-transform duration-300" />
            )}
            <span className="text-white font-medium text-sm">
              {darkMode ? "Light" : "Dark"}
            </span>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
