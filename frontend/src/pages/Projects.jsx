import { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [projectName, setProjectName] = useState("");
  const [status, setStatus] = useState("Pending");
  const [githubLink, setGithubLink] = useState("");

  useEffect(() => {
    const savedProjects =
      JSON.parse(localStorage.getItem("projects")) || [];

    setProjects(savedProjects);
  }, []);

  const handleAddProject = () => {
    if (!projectName || !githubLink) {
      alert("Please fill all fields");
      return;
    }

    const newProject = {
      id: Date.now(),
      projectName,
      status,
      githubLink,
    };

    const updatedProjects = [...projects, newProject];

    setProjects(updatedProjects);

    localStorage.setItem(
      "projects",
      JSON.stringify(updatedProjects)
    );

    setProjectName("");
    setStatus("Pending");
    setGithubLink("");
    setShowForm(false);

    alert("✅ Project Added Successfully");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <h1 className="text-4xl font-bold">
            My Projects
          </h1>

          <button
            onClick={() => setShowForm(!showForm)}
            className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {showForm ? "Close Form" : "+ Add Project"}
          </button>
        </div>

        {/* Add Project Form */}
        {showForm && (
          <div className="bg-white p-6 rounded-xl shadow mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Add New Project
            </h2>

            <input
              type="text"
              placeholder="Project Name"
              className="w-full border p-3 rounded mb-4"
              value={projectName}
              onChange={(e) =>
                setProjectName(e.target.value)
              }
            />

            <select
              className="w-full border p-3 rounded mb-4"
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>

            <input
              type="url"
              placeholder="GitHub Repository Link"
              className="w-full border p-3 rounded mb-4"
              value={githubLink}
              onChange={(e) =>
                setGithubLink(e.target.value)
              }
            />

            <button
              onClick={handleAddProject}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Save Project
            </button>
          </div>
        )}

        {/* Project List */}
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h2 className="text-2xl font-bold mb-3">
                  {project.projectName}
                </h2>

                <p className="mb-3">
                  <strong>Status:</strong>{" "}
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : project.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </p>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  🔗 View GitHub Repository
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-10 rounded-xl shadow text-center text-gray-500">
            No projects added yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;