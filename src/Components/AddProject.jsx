import React, { useState } from "react";

function AddProject({ projects, setProjects }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("bg-gradient-to-br from-purple-500 to-pink-500");

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

  const colorOptions = [
    { value: "bg-gradient-to-br from-purple-500 to-pink-500", label: "Purple to Pink", preview: "bg-gradient-to-br from-purple-500 to-pink-500" },
    { value: "bg-gradient-to-br from-blue-500 to-cyan-500", label: "Blue to Cyan", preview: "bg-gradient-to-br from-blue-500 to-cyan-500" },
    { value: "bg-gradient-to-br from-green-500 to-emerald-500", label: "Green to Emerald", preview: "bg-gradient-to-br from-green-500 to-emerald-500" },
    { value: "bg-gradient-to-br from-orange-500 to-red-500", label: "Orange to Red", preview: "bg-gradient-to-br from-orange-500 to-red-500" },
    { value: "bg-gradient-to-br from-indigo-500 to-purple-500", label: "Indigo to Purple", preview: "bg-gradient-to-br from-indigo-500 to-purple-500" },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
      {/* Project Name Input */}
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Enter project name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full p-4 rounded-xl border border-slate-600 bg-slate-800/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
        />
      </div>

      {/* Color Selector */}
      <div className="relative">
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="appearance-none p-4 pr-10 rounded-xl border border-slate-600 bg-slate-800/50 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm min-w-[180px]"
        >
          {colorOptions.map((option) => (
            <option key={option.value} value={option.value} className="bg-slate-800">
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <div className={`w-4 h-4 rounded-full ${colorOptions.find(opt => opt.value === color)?.preview || color} border border-slate-500`}></div>
        </div>
      </div>

      {/* Add Project Button */}
      <button
        onClick={addProject}
        disabled={!name.trim()}
        className="px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add Project
      </button>
    </div>
  );
}

export default AddProject;
