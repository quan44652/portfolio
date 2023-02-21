import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import Projects from "../../Layout/Project";
import style from "./Projects.module.css";
function ProjectsPage() {
  return `<div>
  ${Header()}
  <div class = "${style.banner}">
  <h2>Projects Us</h2>
  </div>
  ${Projects()}
  ${Footer()}
  </div>`;
}

export default ProjectsPage;
