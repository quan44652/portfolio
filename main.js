import Admin from "./src/Admin/Project";
import { render, router } from "./src/lib";
import AboutPage from "./src/Pages/About";
import ContactPage from "./src/Pages/Contact";
import HomePage from "./src/Pages/Home";
import ProjectsPage from "./src/Pages/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminProjectAdd from "./src/Admin/Project/Project-add";
import AdminProjectEdit from "./src/Admin/Project/Project-edit";
import AdminCategory from "./src/Admin/Category";
import AdminCategoryAdd from "./src/Admin/Category/Category-add";
import AdminCategoryEdit from "./src/Admin/Category/Category-edit";
import AdminMenus from "./src/Admin/Menus";
import AdminMenuAdd from "./src/Admin/Menus/Menu-add";
import ProjectDetail from "./src/Pages/Project-detail";

const app = document.getElementById("app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/projects/:id", () => render(ProjectDetail, app));
router.on("/admin/project", () => render(Admin, app));
router.on("/admin/project-add", () => render(AdminProjectAdd, app));
router.on("/admin/project-edit/:id", (param) =>
  render(() => AdminProjectEdit(param.data.id), app)
);
router.on("/admin/category", () => render(AdminCategory, app));
router.on("/admin/category-add", () => render(AdminCategoryAdd, app));
router.on("/admin/category-edit/:id", (param) =>
  render(() => AdminCategoryEdit(param.data.id), app)
);
router.on("/admin/menus", () => render(AdminMenus, app));
router.on("/admin/menus-add", () => render(AdminMenuAdd, app));
router.resolve();
