import instance from "./config";

const getCategories = () => {
  return instance.get("/categoies");
};

const getCategory = (id) => {
  return instance.get(`/categoies/${id}`);
};

const addCategory = (callback) => {
  return instance.post("/categoies", callback);
};

const updateCategory = (id, callback) => {
  return instance.put(`/categoies/${id}`, callback);
};

const deleteCategory = (id) => {
  return instance.delete(`/categoies/${id}`);
};

export {
  getCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
};
