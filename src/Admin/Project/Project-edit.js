import { useState, useEffect, router } from "../../lib";
import { getProject, updateProject } from "../../Api/Projects";
import { getCategories } from "../../Api/Category";
import axios from "axios";

function AdminProjectEdit(param) {
  const [data, setData] = useState([]);
  const [cat, setCat] = useState([]);
  useEffect(() => {
    getCategories().then(({ data }) => setCat(data));
  }, []);
  useEffect(() => {
    getProject(param).then(({ data }) => setData(data));
  }, []);
  useEffect(() => {
    const name = document.querySelector(".name");
    const form_add = document.querySelector(".form_add");
    const pro_cat = document.querySelector(".pro_cat");
    const pr_img = document.querySelector(".pro_img");
    const pro_link = document.querySelector(".pro_link");

    form_add.addEventListener("submit", async (e) => {
      e.preventDefault();
      const urls = await uploadFiles(pr_img.files);
      updateProject(param, {
        name: name.value,
        cat: pro_cat.value,
        link: pro_link.value,
        gallery: urls,
      }).then(router.navigate("/admin/project"));
    });
  });

  const uploadFiles = async (files) => {
    if (files) {
      const CLOUD_NAME = "dl3q8klyg";
      const PRESET_NAME = "portfolio";
      const FOLDER_NAME = "portfolio";
      const urls = [];
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

      const formData = new FormData();
      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);

      for (const file of files) {
        formData.append("file", file);
        const response = await axios.post(api, formData, {
          headers: {
            "Content-type": "multipart/form-data",
          },
        });
        urls.push(response.data.secure_url);
      }
      return urls;
    }
  };

  return /*html */ `
  <div class="mx-auto" style="width: 800px">
  <h4 class = "fs-2">Thêm dự án</h4>
  <form class = "form_add">
  <div class="mb-4">
<label  class="form-label">Tên dự án</label>
<input type="text" class="form-control border-success name"  placeholder="Tên dự án" value = "${
    data.name
  }">
</div>
<div class="mb-4">
<label  class="form-label">Danh mục</label>
<Select class="form-control border-success pro_cat">
  <option value="">Chọn danh mục!!!</option>
  ${cat.map((item) => ` <option value="${item.id}">${item.name}</option>`)}
</Select>
</div>
<div class="mb-4">
<label  class="form-label">Link dự án</label>
<input type="text" class="form-control border-success pro_link"  placeholder="Link dự án" value = "${
    data.link
  }">
</div>
<div class="mb-4">
<label  class="form-label">Ảnh đại diện</label>
<input type="file" multiple class="form-control border-success pro_img" >
</div>
<button class = "btn btn-success">Thêm dự án</button>
  </form>
  </div>
    `;
}

export default AdminProjectEdit;
