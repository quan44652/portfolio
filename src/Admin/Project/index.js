import Header from "../../Layout/Header";
import style from "./Admin.module.css";
import AdminHeader from "../Header";
import { getProjects, deleteProject } from "../../Api/Projects";
import { useEffect, useState } from "../../lib";

function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProjects().then(({ data }) => setData(data));
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn_remove");
    for (const btn of btns) {
      btn.addEventListener("click", async () => {
        const id = btn.dataset.id;
        await deleteProject(id);
        const newProjects = data.filter((item) => item.id != id);
        setData(newProjects);
      });
    }
  }, [data]);

  return /*html*/ ` ${Header()}
  <div class = "${style.wrapper}">
  <div class="row">
    ${AdminHeader()}
    </div>
    <div class="col-8">
      <div class="tab-content" id="nav-tabContent">
      <table class = "table table-bordered">
      <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Link</th>
        <th scope="col">Image</th>
        <th scope="col"></th>
      </tr>
    </thead>
      <tbody>
      ${data
        .map(
          (item) => `<tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td><a href = "${item.link}">${item.link}</a></td>
      <td>${
        item.gallery
          ? item.gallery
              .map(
                (item) =>
                  `<img width = "100px" height = "60px" src = "${item}" />`
              )
              .join("  ")
          : []
      }</td>
      <td class = "text-center" width = "150px"><button data-id = '${
        item.id
      }' class = "btn_remove btn btn-danger">Xóa</button> <button class = "btn btn-success"><a class = "text-decoration-none text-light" href = "/admin/project-edit/${
            item.id
          }">Sửa</a></button></td>
    </tr>`
        )
        .join("")}
    
      
      </tbody>
    </table>
    <button class = "btn btn-success "><a class = "text-decoration-none text-light" href = "/admin/project-add">Thêm dự án</a></button>
      </div>
    </div>
  </div>

 
    </div>`;
}

export default Admin;
