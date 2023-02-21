import instance from "./config";

const getProjects = () => {
  return instance.get("/projects");
};

const getProject = (id) => {
  return instance.get(`/projects/${id}`);
};

const addProjects = (callback) => {
  return instance.post("/projects", callback);
};

const updateProject = (id, callback) => {
  return instance.put(`/projects/${id}`, callback);
};

const deleteProject = (id) => {
  return instance.delete(`/projects/${id}`);
};

export { getProject, getProjects, addProjects, deleteProject, updateProject };
