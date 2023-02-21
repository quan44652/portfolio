import style from "../Project/Project.module.css";
function ProjectList({ pro }) {
  return `
  ${pro.map(
    (item, index) => `
  <a href = "/projects/1" class = "${style.project_item}">
 
  <img src = "${item.gallery[0]}" />
   <div class = "${style.project_info}">
   <h4 class = "${style.project_title}">Project Number ${index + 1}</h4>
 <p>${item.name}</p>
 </div>
 </a>
  `
  )}
  `;
}

export default ProjectList;
