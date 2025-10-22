import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects, setProjects }) {
  const [name, setName] = useState("");

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

  

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Projects
      </h2>

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
      {projects.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          No projects yet. Add a new one to get started.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              projects={projects}
              setProjects={setProjects}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectList;
