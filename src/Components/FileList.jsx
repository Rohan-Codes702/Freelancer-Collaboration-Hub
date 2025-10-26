import React from "react";

function FileList({ project }) {
  if (!project || !Array.isArray(project.files)) {
    return <p className="text-gray-500 dark:text-gray-400">No files shared yet.</p>;
  }

  const downloadFile = (file) => {
    const link = document.createElement("a");
    link.href = file.data;
    link.download = file.name;
    link.click();
  };

  return (
    <div className="space-y-4">
      {project.files.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No files shared yet.</p>
      ) : (
        project.files.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">{file.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(file.timestamp).toLocaleString()} • {(file.size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>
            <button
              onClick={() => downloadFile(file)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Download
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default FileList;
