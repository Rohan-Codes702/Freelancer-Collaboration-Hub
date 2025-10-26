import React from "react";

function MessageList({ project }) {
  if (!project || !Array.isArray(project.messages)) {
    return <p className="text-gray-500 dark:text-gray-400">No messages yet.</p>;
  }

  return (
    <div className="space-y-4 mb-6">
      {project.messages.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No messages yet.</p>
      ) : (
        project.messages.map((message, index) => (
          <div
            key={index}
            className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {message.sender || "User"}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(message.timestamp).toLocaleString()}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{message.text}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default MessageList;
