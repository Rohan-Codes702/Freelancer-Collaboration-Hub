import React, { useRef } from "react";

function FileUpload({ project, projects, setProjects }) {
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Check file size (limit to 5MB for localStorage)
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const newFile = {
        name: file.name,
        data: reader.result, // base64 encoded
        size: file.size,
        type: file.type,
        timestamp: new Date().toISOString(),
      };
      const updatedProjects = projects.map((p) =>
        p.id === project.id
          ? { ...p, files: [...(p.files || []), newFile] }
          : p
      );
      setProjects(updatedProjects);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-6">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current.click()}
        className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition transform hover:scale-105"
      >
        + Upload File
      </button>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        Max file size: 5MB
      </p>
    </div>
  );
}

export default FileUpload;
