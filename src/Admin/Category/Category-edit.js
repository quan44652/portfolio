import { useState, useEffect, router } from "../../lib";
import { updateCategory, getCategory } from "../../Api/Category";

function AdminCategoryEdit(param) {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    getCategory(param).then(({ data }) => setCat(data));
  }, []);

  useEffect(() => {
    const name = document.querySelector(".name");
    const form_add = document.querySelector(".form_add");

    form_add.addEventListener("submit", (e) => {
      e.preventDefault();
      const category = {
        name: name.value,
      };
      console.log(category);

      updateCategory(param, category).then(() =>
        router.navigate("/admin/category")
      );
    });
  }, [cat]);

  return /*html */ `
    <div class="mx-auto" style="width: 800px">
    <h4 class = "fs-2">Thêm dự án</h4>
    <form class = "form_add">
    <div class="mb-4">
  <label  class="form-label">Tên dự án</label>
  <input type="text" class="form-control border-success name" value = "${cat.name}"  placeholder="Tên dự án">
</div>
<button class = "btn btn-success">Edit</button>
    </form>
    </div>
    `;
}

export default AdminCategoryEdit;
