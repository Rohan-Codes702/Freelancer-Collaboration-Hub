import React, { useState } from "react";

function AddProject({ projects, setProjects }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("bg-purple-200");

  const addProject = () => {
    if (!name.trim()) return;

    const newProject = {
      id: Date.now(),
      name,
      color,
      tasks: [],
    };

    setProjects([...projects, newProject]);
    setName("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addProject();
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
      {/* Project Name Input */}
      <input
        type="text"
        placeholder="Enter project name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyPress}
        className="flex-1 p-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />

      {/* Color Selector */}
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      >
        <option value="bg-purple-200">Purple</option>
        <option value="bg-blue-200">Blue</option>
        <option value="bg-green-200">Green</option>
        <option value="bg-pink-200">Pink</option>
        <option value="bg-yellow-200">Yellow</option>
      </select>

      {/* Add Project Button */}
      <button
        onClick={addProject}
        className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow hover:scale-105 transition-transform hover:from-indigo-600 hover:to-purple-700"
      >
        ➕ Add Project
      </button>
    </div>
  );
}

export default AddProject;
