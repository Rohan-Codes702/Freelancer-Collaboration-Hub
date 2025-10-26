import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProjectCard from "./ProjectCard";
import SearchBar from "./SearchBar";

function ProjectList({ projects, setProjects, onSelectProject, darkMode }) {
  const [name, setName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addProject = () => {
    if (!name.trim()) return;
    const colors = [
      "bg-gradient-to-br from-indigo-50 to-indigo-100",
      "bg-gradient-to-br from-green-50 to-green-100",
      "bg-gradient-to-br from-pink-50 to-pink-100",
      "bg-gradient-to-br from-yellow-50 to-yellow-100",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const newProject = { id: uuidv4(), name, tasks: [], color };
    setProjects([...projects, newProject]);
    setName("");
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Projects
      </h2>

      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} darkMode={darkMode} />

      {/* Add Project */}
      <div className="flex flex-col md:flex-row gap-3 mb-8">
        <input
          type="text"
          placeholder="Enter project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 p-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
        <button
          onClick={addProject}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition transform hover:scale-105"
        >
          + Add Project
        </button>
      </div>

      {/* Projects Cards */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <p className="text-slate-400 text-lg font-medium">
            {searchTerm ? "No projects match your search." : "No projects yet. Add a new one to get started."}
          </p>
          <p className="text-slate-500 text-sm mt-2">
            {searchTerm ? "Try adjusting your search terms." : "Create your first project to begin organizing your tasks."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              projects={projects}
              setProjects={setProjects}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectList;
