import React from "react";

function Dashboard({ projects }) {
  const totalTasks = projects.reduce(
    (acc, project) => acc + (project.tasks?.length || 0),
    0
  );

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
            Total Projects
          </h3>
          <p className="text-3xl font-bold text-indigo-600 mt-2">{projects.length}</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
            Total Tasks
          </h3>
          <p className="text-3xl font-bold text-green-600 mt-2">{totalTasks}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
