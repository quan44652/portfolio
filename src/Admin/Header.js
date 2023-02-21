import { useState, useEffect } from "../lib";

function AdminHeader() {
  useEffect(() => {
    const btns = document.querySelectorAll(".btn");

    for (const btn of btns) {
      btn.addEventListener("click", () => {
        btn.classList.add("active");
      });
    }
  }, []);
  return `<div class="col-2">
  <div class="list-group" id="list-tab" role="tablist">
    <a class="list-group-item list-group-item-action active btn"  href="/admin/project" >Project</a>
    <a class="list-group-item list-group-item-action btn"  href="/admin/category" >Category Project</a>
    <a class="list-group-item list-group-item-action btn"  href="/admin/menus" >Menus</a>
  </div>`;
}

export default AdminHeader;
