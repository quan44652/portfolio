import instance from "./config";

const getAbout = () => {
  return instance.get(`/about/`);
};

const addAbout = (callback) => {
  return instance.post("/about", callback);
};

const updateAbout = (callback) => {
  return instance.put(`/about/`, callback);
};

const deleteAbout = () => {
  return instance.delete(`/about/`);
};

export { getCategories, getAbout, addAbout, updateAbout, deleteAbout };
