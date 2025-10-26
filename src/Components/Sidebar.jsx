import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ darkMode }) {
  return (
    <aside
      className={`w-64 h-screen p-6 hidden md:flex flex-col shadow-lg rounded-tr-xl rounded-br-xl transition-colors duration-300
        ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}
      `}
    >
      <h2 className="text-2xl font-bold mb-8 tracking-wide text-indigo-700 dark:text-indigo-400">
        🚀 ProjectHub
      </h2>
      <nav className="flex flex-col gap-3 font-medium">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `p-3 rounded-lg transition-colors duration-200 ${isActive
              ? "bg-indigo-600 text-white shadow-md"
              : "hover:bg-gray-200 dark:hover:bg-gray-800"
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `p-3 rounded-lg transition-colors duration-200 ${isActive
              ? "bg-indigo-600 text-white shadow-md"
              : "hover:bg-gray-200 dark:hover:bg-gray-800"
            }`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/tasks"  // This must be /tasks
          className={({ isActive }) =>
            `p-3 rounded-lg transition-colors duration-200 ${isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-700"
            }`
          }
        >
          Tasks
        </NavLink>

      </nav>
      <div className="mt-auto pt-6 border-t border-gray-300 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2025 ProjectHub
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
