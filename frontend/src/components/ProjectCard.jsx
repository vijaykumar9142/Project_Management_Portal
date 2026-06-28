const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-xl font-bold">
        {project.title}
      </h2>

      <p className="mt-2 text-gray-500">
        {project.status}
      </p>
    </div>
  );
};

export default ProjectCard;