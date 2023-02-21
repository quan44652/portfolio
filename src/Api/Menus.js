import instance from "./config";

const getMenus = () => {
  return instance.get("/menus");
};

const getMenu = (id) => {
  return instance.get(`/menus/${id}`);
};

const addMenu = (callback) => {
  return instance.post("/menus", callback);
};

const updateMenu = (id, callback) => {
  return instance.put(`/menus/${id}`, callback);
};

const deleteMenu = (id) => {
  return instance.delete(`/menus/${id}`);
};

export { addMenu, getMenu, getMenus, updateMenu, deleteMenu };
