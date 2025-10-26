import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TaskList({ project, projects, setProjects }) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("low");

  if (!project) {
    return (
      <p className="text-gray-500 dark:text-gray-400">
        Please select a project to view tasks.
      </p>
    );
  }

  const addTask = () => {
    if (!taskName.trim()) return;
    const newTask = { id: uuidv4(), name: taskName, priority };
    const updatedProjects = projects.map((p) =>
      p.id === project.id ? { ...p, tasks: [...p.tasks, newTask] } : p
    );
    setProjects(updatedProjects);
    setTaskName("");
    setPriority("low");
  };

  const deleteTask = (taskId) => {
    const updatedProjects = projects.map((p) =>
      p.id === project.id
        ? { ...p, tasks: p.tasks.filter((t) => t.id !== taskId) }
        : p
    );
    setProjects(updatedProjects);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">{project.name} - Tasks</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="p-2 border rounded flex-1 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-2 border rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          onClick={addTask}
          className="bg-green-600 text-white px-4 rounded hover:bg-green-700 transition"
        >
          Add
        </button>
      </div>

      {project.tasks.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-sm">No tasks yet.</p>
      ) : (
        <ul className="space-y-2">
          {project.tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-white dark:bg-gray-700 p-2 rounded-lg shadow hover:shadow-md transition"
            >
              <span
                className={`font-medium ${
                  task.priority === "high"
                    ? "text-red-600"
                    : task.priority === "medium"
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                {task.name} ({task.priority})
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-600 hover:text-red-800 font-bold"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
