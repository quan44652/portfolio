import { useEffect, useState } from "../../lib";
import { getCategories, deleteCategory } from "../../Api/Category";

function Categories({ click }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCategories().then(({ data }) => setData(data));
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll("._btn");
    for (const btn of btns) {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        click(id);
      });
    }
  }, [data]);

  return `<ul>
  <li><button>All</button></li>
  ${data
    .map(
      (item) => `  <li>
  <button class = "_btn" data-id = '${item.id}'>${item.name}</button>
  </li>`
    )
    .join("")}
  </ul>`;
}

export default Categories;
