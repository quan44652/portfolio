import Categories from "../Category";
import ProjectList from "../List-project";
import style from "./Project.module.css";

import { getProjects, getProject } from "../../Api/Projects";
import { useEffect, useState } from "../../lib";

function Projects() {
  const [pro, setPro] = useState([]);
  const [id, setId] = useState();
  useEffect(() => {
    getProjects().then(({ data }) => setPro(data));
  }, []);

  const handleClick = (id) => {
    console.log(id);
    const newPro = pro.filter((item) => item.cat == id);
    setPro(newPro);
  };

  return /*html*/ `<div class = "${style.wrapper}">
  <div class = "${style.project_heading}">
  <h1>What Services you will Get from me!</h1>
  ${Categories({ click: handleClick })}
  </div>
  <div class= "${style.projects}">
  ${ProjectList({ pro })}
  </div>
  </div>`;
}

export default Projects;
