import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TaskList({ project, projects, setProjects }) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("low");

  if (!project) {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <p className="text-slate-400 text-sm">
          Select a project to view and manage tasks.
        </p>
      </div>
    );
  }

  const addTask = () => {
    if (!taskName.trim()) return;
    const newTask = { id: uuidv4(), name: taskName, priority, completed: false };
    const updatedProjects = projects.map((p) =>
      p.id === project.id ? { ...p, tasks: [...(p.tasks || []), newTask] } : p
    );
    setProjects(updatedProjects);
    setTaskName("");
    setPriority("low");
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedProjects = projects.map((p) =>
      p.id === project.id
        ? {
            ...p,
            tasks: p.tasks.map((t) =>
              t.id === taskId ? { ...t, completed: !t.completed } : t
            ),
          }
        : p
    );
    setProjects(updatedProjects);
  };

  const deleteTask = (taskId) => {
    const updatedProjects = projects.map((p) =>
      p.id === project.id
        ? { ...p, tasks: p.tasks.filter((t) => t.id !== taskId) }
        : p
    );
    setProjects(updatedProjects);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-400 border-red-400/50 bg-red-500/10";
      case "medium":
        return "text-yellow-400 border-yellow-400/50 bg-yellow-500/10";
      default:
        return "text-green-400 border-green-400/50 bg-green-500/10";
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Enter task name..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTask()}
          className="flex-1 p-3 rounded-xl border border-slate-600 bg-slate-800/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-3 rounded-xl border border-slate-600 bg-slate-800/50 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm min-w-[120px]"
        >
          <option value="low" className="bg-slate-800">Low</option>
          <option value="medium" className="bg-slate-800">Medium</option>
          <option value="high" className="bg-slate-800">High</option>
        </select>
        <button
          onClick={addTask}
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm font-medium"
        >
          + Add Task
        </button>
      </div>

      {(!project.tasks || project.tasks.length === 0) ? (
        <div className="text-center py-8">
          <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <p className="text-slate-400 text-sm font-medium">No tasks yet</p>
          <p className="text-slate-500 text-xs mt-1">Add your first task above to get started</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {project.tasks.map((task) => (
            <div
              key={task.id}
              className={`
                group relative p-4 rounded-xl border backdrop-blur-sm transition-all duration-300
                ${task.completed
                  ? "bg-slate-800/50 border-slate-600/50 opacity-75"
                  : "bg-slate-800/30 border-slate-600/30 hover:bg-slate-700/40 hover:border-slate-500/50"
                }
              `}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                    className="w-5 h-5 rounded border-2 border-slate-500 bg-transparent checked:bg-cyan-500 checked:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-0 transition-all duration-200 cursor-pointer"
                  />
                  {task.completed && (
                    <svg className="absolute inset-0 w-5 h-5 text-white pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <span
                    className={`block font-medium transition-all duration-300 ${
                      task.completed
                        ? "text-slate-500 line-through"
                        : "text-white group-hover:text-cyan-100"
                    }`}
                  >
                    {task.name}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 p-2 rounded-lg hover:bg-red-500/10 transition-all duration-300"
                  title="Delete task"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskList;
