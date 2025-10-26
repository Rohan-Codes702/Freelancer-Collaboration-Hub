import React from "react";

function Dashboard({ projects, darkMode }) {
  const totalTasks = projects.reduce(
    (acc, project) => acc + (project.tasks?.length || 0),
    0
  );

  const completedTasks = projects.reduce(
    (acc, project) =>
      acc + (project.tasks?.filter((task) => task.completed)?.length || 0),
    0
  );

  const pendingTasks = totalTasks - completedTasks;

  const highPriorityTasks = projects.reduce(
    (acc, project) =>
      acc + (project.tasks?.filter((task) => task.priority === "high")?.length || 0),
    0
  );

  const totalMessages = projects.reduce(
    (acc, project) => acc + (project.messages?.length || 0),
    0
  );

  const totalFiles = projects.reduce(
    (acc, project) => acc + (project.files?.length || 0),
    0
  );

  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
          Dashboard
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">Welcome back! Here's your project overview.</p>
      </div>

      {projects.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No projects yet</h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">Create your first project to get started with task management and collaboration</p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Create Your First Project
          </div>
        </div>
      )}

      {projects.length > 0 && (
        <>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
      <div className={`group relative p-6 ${darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50' : 'bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200'} rounded-2xl shadow-xl hover:shadow-[0_8px_32px_rgba(0,255,200,0.2)] transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Projects</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{projects.length}</p>
          </div>
        </div>

        <div className={`group relative p-6 ${darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50' : 'bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200'} rounded-2xl shadow-xl hover:shadow-[0_8px_32px_rgba(34,197,94,0.2)] transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Total Tasks</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalTasks}</p>
          </div>
        </div>

        <div className={`group relative p-6 ${darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50' : 'bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200'} rounded-2xl shadow-xl hover:shadow-[0_8px_32px_rgba(59,130,246,0.2)] transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Completed</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{completedTasks}</p>
          </div>
        </div>

        <div className={`group relative p-6 ${darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50' : 'bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200'} rounded-2xl shadow-xl hover:shadow-[0_8px_32px_rgba(239,68,68,0.2)] transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">High Priority</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{highPriorityTasks}</p>
          </div>
        </div>

        <div className={`group relative p-6 ${darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50' : 'bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200'} rounded-2xl shadow-xl hover:shadow-[0_8px_32px_rgba(168,85,247,0.2)] transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Messages</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalMessages}</p>
          </div>
        </div>

        <div className={`group relative p-6 ${darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50' : 'bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200'} rounded-2xl shadow-xl hover:shadow-[0_8px_32px_rgba(245,158,11,0.2)] transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Files</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalFiles}</p>
          </div>
        </div>
      </div>

      {/* Progress Chart */}
      <div className={`relative p-8 ${darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50' : 'bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200'} rounded-2xl shadow-xl backdrop-blur-sm overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Task Completion Progress</h3>
          </div>

          <div className="space-y-4">
            <div className="w-full bg-slate-700/50 rounded-full h-6 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 h-full rounded-full transition-all duration-1000 ease-out relative"
                style={{ width: `${completionPercentage}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                {completionPercentage}% completed
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                {completedTasks} of {totalTasks} tasks
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700/50">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">{completedTasks}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-400">{pendingTasks}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pending</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
