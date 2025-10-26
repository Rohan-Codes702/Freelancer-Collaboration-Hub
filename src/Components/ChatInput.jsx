import React, { useState } from "react";

function ChatInput({ project, projects, setProjects }) {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;
    const newMessage = {
      text: message,
      sender: "User", // In a real app, this would be the current user
      timestamp: new Date().toISOString(),
    };
    const updatedProjects = projects.map((p) =>
      p.id === project.id
        ? { ...p, messages: [...(p.messages || []), newMessage] }
        : p
    );
    setProjects(updatedProjects);
    setMessage("");
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        className="flex-1 p-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />
      <button
        onClick={sendMessage}
        className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition transform hover:scale-105"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
