import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Dashboard from "./Pages/Dashboard";
import ProjectList from "./Components/ProjectList";
import TaskList from "./Components/ProjectCard";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [projects, setProjects] = useState(
    JSON.parse(localStorage.getItem("projects")) || []
  );
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="flex h-screen transition-colors duration-500 bg-gray-100 dark:bg-gray-900">
      <Sidebar darkMode={darkMode} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="flex-1 overflow-auto p-6">
<Routes>
  <Route path="/" element={<Navigate to="/dashboard" />} />
  <Route path="/dashboard" element={<Dashboard projects={projects} setProjects={setProjects} onSelectProject={setSelectedProject} />} />
  <Route path="/projects" element={<ProjectList projects={projects} setProjects={setProjects} onSelectProject={setSelectedProject} />} />
 <Route
  path="/tasks"
  element={
    selectedProject ? (
      <TaskList
        project={selectedProject}
        projects={projects}
        setProjects={setProjects}
      />
    ) : (
      <p className="text-gray-500 p-4">
        Select a project first to see its tasks.
      </p>
    )
  }
/>


</Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
