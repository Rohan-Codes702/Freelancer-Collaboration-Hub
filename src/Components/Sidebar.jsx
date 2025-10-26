import React from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaProjectDiagram, FaTasks, FaComments, FaUser } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-64 h-screen p-6 hidden md:flex flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700/50 shadow-2xl backdrop-blur-sm overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5"></div>
      <div className="absolute top-20 -right-16 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-2xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 -left-16 w-28 h-28 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 blur-2xl rounded-full animate-pulse delay-1000"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">🚀</span>
          </div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-wide">
            ProjectHub
          </h2>
        </div>

        <nav className="flex flex-col gap-2 font-medium">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `group relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300 overflow-hidden ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 transform scale-105"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50 hover:scale-105"
              }`
            }
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FaTachometerAlt className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Dashboard</span>
            {({ isActive }) => isActive && (
              <div className="absolute right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            )}
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `group relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300 overflow-hidden ${
                isActive
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 transform scale-105"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50 hover:scale-105"
              }`
            }
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FaProjectDiagram className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Projects</span>
            {({ isActive }) => isActive && (
              <div className="absolute right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            )}
          </NavLink>

          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `group relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300 overflow-hidden ${
                isActive
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25 transform scale-105"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50 hover:scale-105"
              }`
            }
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FaTasks className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Tasks</span>
            {({ isActive }) => isActive && (
              <div className="absolute right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            )}
          </NavLink>

          <NavLink
            to="/messages"
            className={({ isActive }) =>
              `group relative flex items-center gap-4 p-4 rounded-xl transition-all duration-300 overflow-hidden ${
                isActive
                  ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg shadow-pink-500/25 transform scale-105"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50 hover:scale-105"
              }`
            }
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FaComments className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Messages</span>
            {({ isActive }) => isActive && (
              <div className="absolute right-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            )}
          </NavLink>
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-700/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
              <FaUser className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">
                Welcome back!
              </p>
              <p className="text-xs text-slate-400">
                Freelancer
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            © 2025 ProjectHub
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
