import Header from "../../Layout/Header";
import AdminHeader from "../Header";
import { useEffect, useState } from "../../lib";
import { getCategories, deleteCategory } from "../../Api/Category";

function AdminCategory() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCategories().then(({ data }) => setData(data));
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn_remove");
    for (const btn of btns) {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        deleteCategory(id);
        const newCategoies = data.filter((item) => item.id != id);
        setData(newCategoies);
      });
    }
  }, [data]);

  return /*html*/ ` ${Header()}
  <div style = "padding: 50px 200px">
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
        <th scope="col"></th>
      </tr>
    </thead>
      <tbody>
  
      ${data
        .map(
          (item) => `<tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td class = "text-center" width = "150px"><button data-id = '${item.id}' class = "btn_remove btn btn-danger">Xóa</button> <button class = "btn btn-success"><a class = "text-decoration-none text-light" href = "/admin/category-edit/${item.id}">Sửa</a></button></td>
    </tr>`
        )
        .join("")}
    
      
      </tbody>
    </table>
    <button class = "btn btn-success "><a class = "text-decoration-none text-light" href = "/admin/category-add">Thêm dự án</a></button>
      </div>
    </div>
  </div>

 
    </div>`;
}

export default AdminCategory;
