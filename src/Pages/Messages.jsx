import React, { useState, useEffect } from "react";
import MessageList from "../Components/MessageList";
import ChatInput from "../Components/ChatInput";
import FileList from "../Components/FileList";
import FileUpload from "../Components/FileUpload";

function Messages({ projects, setProjects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("messages");

  // Update selectedProject when projects change to reflect updates
  useEffect(() => {
    if (selectedProject) {
      const updatedProject = projects.find(p => p.id === selectedProject.id);
      if (updatedProject) {
        setSelectedProject(updatedProject);
      }
    }
  }, [projects, selectedProject]);

  if (!selectedProject) {
    return (
      <div className="p-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Messages & Files
        </h2>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select a Project
          </label>
          <select
            value={selectedProject?.id || ""}
            onChange={(e) => {
              const project = projects.find((p) => p.id === e.target.value);
              setSelectedProject(project);
            }}
            className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          >
            <option value="">Choose a project...</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          Select a project to view messages and files.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        {selectedProject.name} - Messages & Files
      </h2>

      {/* Project Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Switch Project
        </label>
        <select
          value={selectedProject.id}
          onChange={(e) => {
            const project = projects.find((p) => p.id === e.target.value);
            setSelectedProject(project);
          }}
          className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        >
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6">
        <button
          onClick={() => setActiveTab("messages")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            activeTab === "messages"
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          Messages
        </button>
        <button
          onClick={() => setActiveTab("files")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            activeTab === "files"
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          Files
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "messages" && (
        <div>
          <MessageList project={selectedProject} />
          <ChatInput project={selectedProject} projects={projects} setProjects={setProjects} />
        </div>
      )}

      {activeTab === "files" && (
        <div>
          <FileUpload project={selectedProject} projects={projects} setProjects={setProjects} />
          <FileList project={selectedProject} />
        </div>
      )}
    </div>
  );
}

export default Messages;
