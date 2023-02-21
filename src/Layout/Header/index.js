import style from "./Header.module.css";
import axios from "axios";
import { useEffect, useState } from "../../lib";
function Header() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/menus").then(({ data }) => setMenu(data));
  }, []);
  return `<div class = "${style.wrapper}">
    <div class = '${style.logo}'>
    <img src="./src/asset/images/logo.png.webp" alt="">
    </div>
    <ul class = "${style.navbar}">
    ${menu
      .map((item) => `<li><a href = '${item.link}'>${item.name}</a></li>`)
      .join("")}
    </ul>
    </div>`;
}

export default Header;
