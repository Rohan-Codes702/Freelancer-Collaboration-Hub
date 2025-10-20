import React, { useState } from "react";
import TaskList from "./TaskList";

function ProjectCard({ project, projects, setProjects }) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("low");

  const addTask = () => {
    if (!taskName.trim()) return;
    const updatedProjects = projects.map((p) =>
      p.id === project.id
        ? {
            ...p,
            tasks: [
              ...(p.tasks || []),
              { id: Date.now(), name: taskName, priority },
            ],
          }
        : p
    );
    setProjects(updatedProjects);
    setTaskName("");
  };

  const deleteProject = () => {
    setProjects(projects.filter((p) => p.id !== project.id));
  };

  return (
    <div
      className={`p-5 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 ${project.color}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {project.name}
        </h2>
        <button
          onClick={deleteProject}
          className="text-red-600 hover:text-red-800 font-bold"
        >
          ❌
        </button>
      </div>

      {/* Task Input */}
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="New Task..."
          className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 shadow-sm transition"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          onClick={addTask}
          className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg hover:scale-105 transition-transform shadow"
        >
          ➕ Add Task
        </button>
      </div>

      {/* Tasks List */}
      <TaskList project={project} projects={projects} setProjects={setProjects} />
    </div>
  );
}

export default ProjectCard;
