import { useState, useEffect, router } from "../../lib";
import { addMenu } from "../../Api/Menus";

function AdminMenuAdd() {
  useEffect(() => {
    const name = document.querySelector(".name");
    const link = document.querySelector(".link");
    const form_add = document.querySelector(".form_add");

    form_add.addEventListener("submit", (e) => {
      e.preventDefault();
      const menu = {
        name: name.value,
        link: link.value,
      };

      addMenu(menu).then(() => router.navigate("/admin/menus"));
    });
  }, []);

  return /*html */ `
    <div class="mx-auto" style="width: 800px">
    <h4 class = "fs-2">Thêm menu</h4>
    <form class = "form_add">
    <div class="mb-4">
  <label  class="form-label">Tên menu</label>
  <input type="text" class="form-control border-success name"  placeholder="Tên dự án">
</div>
<div class="mb-4">
<label  class="form-label">Link</label>
<input type="text" class="form-control border-success link"  placeholder="Link dự án">
</div>

<button class = "btn btn-success">Thêm dự án</button>
    </form>
    </div>
    `;
}

export default AdminMenuAdd;
