import { useState, useEffect, router } from "../../lib";
import { addCategory } from "../../Api/Category";

function AdminCategoryAdd() {
  useEffect(() => {
    const name = document.querySelector(".name");
    const form_add = document.querySelector(".form_add");

    form_add.addEventListener("submit", (e) => {
      e.preventDefault();
      const category = {
        name: name.value,
      };

      addCategory(category).then(() => router.navigate("/admin/category"));
    });
  }, []);

  return /*html */ `
    <div class="mx-auto" style="width: 800px">
    <h4 class = "fs-2">Thêm dự án</h4>
    <form class = "form_add">
    <div class="mb-4">
  <label  class="form-label">Tên dự án</label>
  <input type="text" class="form-control border-success name"  placeholder="Tên dự án">
</div>

<button class = "btn btn-success">Thêm dự án</button>
    </form>
    </div>
    `;
}

export default AdminCategoryAdd;
