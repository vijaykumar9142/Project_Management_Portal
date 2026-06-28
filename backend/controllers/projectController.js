const Project = require("../models/Project");

const getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

const createProject = async (req, res) => {
  const project = await Project.create(req.body);

  res.status(201).json(project);
};

module.exports = {
  getProjects,
  createProject,
};