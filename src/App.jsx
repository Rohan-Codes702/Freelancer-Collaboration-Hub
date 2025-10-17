import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Dashboard from "./Pages/Dashboard";
import ProjectList from "./Components/ProjectList";
import TaskList from "./Components/ProjectCard";

function App() {
  // Initialize theme from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const v = localStorage.getItem("darkMode");
      return v ? JSON.parse(v) : false;
    } catch {
      return false;
    }
  });

  // Initialize projects safely from localStorage
  const [projects, setProjects] = useState(() => {
    try {
      const raw = localStorage.getItem("projects");
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [selectedProject, setSelectedProject] = useState(null);

  // Save projects to localStorage
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  // Apply dark mode and save preference
  useEffect(() => {
    try {
      if (darkMode) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    } catch (error) {
      console.error("Error applying dark mode:", error);
    }
  }, [darkMode]);

  return (
    <div className="flex h-screen transition-colors duration-500 bg-gray-100 dark:bg-gray-900">
      <Sidebar darkMode={darkMode} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="flex-1 overflow-auto p-6">
          <Routes>
            {/* Default redirect to dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" />} />

            {/* Dashboard Page */}
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  projects={projects}
                  setProjects={setProjects}
                  onSelectProject={setSelectedProject}
                />
              }
            />

            {/* Projects Page */}
            <Route
              path="/projects"
              element={
                <ProjectList
                  projects={projects}
                  setProjects={setProjects}
                  onSelectProject={setSelectedProject}
                />
              }
            />

            {/* Tasks Page */}
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
                  <div className="flex flex-col items-center justify-center h-full text-gray-500">
                    <p className="text-lg font-medium">No project selected</p>
                    <p className="text-sm">Go to the Projects tab and choose one.</p>
                  </div>
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
