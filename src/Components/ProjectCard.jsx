import React from "react";
import TaskList from "./TaskList";
import { useNavigate } from "react-router-dom";

function ProjectCard({ project, projects, setProjects, onSelectProject }) {
  const navigate = useNavigate();

  const deleteProject = () => {
    setProjects(projects.filter((p) => p.id !== project.id));
  };

  const selectForTasks = () => {
    onSelectProject(project);
    navigate("/tasks");
  };

  const totalTasks = project.tasks?.length || 0;
  const completedTasks = project.tasks?.filter((task) => task.completed)?.length || 0;
  const progressPercentage =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div
      className="
        relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto
        p-4 sm:p-6 rounded-2xl
        bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
        border border-slate-700/50
        shadow-xl
        hover:shadow-[0_8px_32px_rgba(0,255,200,0.2)]
        hover:scale-105 hover:-translate-y-1
        transition-all duration-500 ease-out
        backdrop-blur-sm
        overflow-visible
        group
      "
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute -bottom-20 -left-16 w-36 h-36 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 blur-3xl rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Border Glow Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
          <div className="flex-1 min-w-0">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide break-words group-hover:text-cyan-100 transition-colors duration-300">
              {project.name}
            </h2>

            <div className="flex gap-3 mt-2 text-xs sm:text-sm text-slate-400">
              <span>📌 {totalTasks} Tasks</span>
              <span>✅ {completedTasks} Done</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              onClick={selectForTasks}
              className="
                text-cyan-400 hover:text-white
                border border-cyan-400/50 hover:border-cyan-400
                hover:bg-cyan-500/20
                p-2 rounded-xl transition-all duration-300
              "
              title="Open Tasks"
            >
              📂
            </button>

            <button
              onClick={deleteProject}
              className="
                text-red-400 hover:text-white
                border border-red-400/50 hover:border-red-400
                hover:bg-red-500/20
                p-2 rounded-xl transition-all duration-300
              "
              title="Delete Project"
            >
              🗑️
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        {totalTasks > 0 && (
          <div className="mb-4">
            <div className="flex justify-between items-center text-xs sm:text-sm mb-2">
              <span className="text-slate-400">Progress</span>
              <span className="font-bold text-white bg-slate-700/50 px-2 py-1 rounded-lg">
                {progressPercentage}%
              </span>
            </div>

            <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 h-full rounded-full transition-all duration-700"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Task Preview */}
        {totalTasks > 0 && (
          <div>
            <div className="text-xs sm:text-sm font-medium text-slate-400 mb-2">
              Recent Tasks
            </div>

            <div className="space-y-2 max-h-40 sm:max-h-48 overflow-y-auto pr-1">
              {project.tasks.slice(0, 3).map((task) => (
                <div
                  key={task.id}
                  className={`flex items-center gap-2 p-2 rounded-lg text-xs sm:text-sm border
                  ${
                    task.completed
                      ? "bg-green-500/10 border-green-500/30 text-green-300 line-through"
                      : "bg-slate-800/50 border-slate-600/40 text-slate-300"
                  }`}
                >
                  ✅ {task.name}
                  <span
                    className={`ml-auto text-[10px] px-2 py-0.5 rounded-full
                    ${
                      task.priority === "high"
                        ? "bg-red-600/20 text-red-300"
                        : task.priority === "medium"
                        ? "bg-yellow-500/20 text-yellow-300"
                        : "bg-green-500/20 text-green-300"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
              ))}

              {project.tasks.length > 3 && (
                <p className="text-center text-slate-500 text-xs">
                  +{project.tasks.length - 3} more…
                </p>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
