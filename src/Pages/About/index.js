import style from "./About.module.css";
import Header from "../../Layout/Header";
import About from "../../Layout/About";
import Footer from "../../Layout/Footer";
import axios from "axios";
import { useState, useEffect } from "../../lib";

function AboutPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/about").then(({ data }) => setData(data));
  }, []);

  return `<div>
  ${Header()}
  <div class = "${style.banner}">
  <h2>About Us</h2>
  </div>
  <div class = "${style.about_me}">
  <div class = "${
    style.about_img
  }"> <img src = "https://preview.colorlib.com/theme/personalportfolio/assets/img/gallery/aboutme.png"/> </div>
  <div class = "${style.about_info}">
  <h1>
 ${data.title}</h1>
<ul>
<li class = "${
    style.about_info_item
  }"> enjoy attracti exible ayment options global usage.</li>
<li class = "${
    style.about_info_item
  }">Unlimited rewards. enjoy attractive discounts flexible Payme options global usage. Unlimited rewards. enjoy attracti exible ayment options global usage.</li>
</ul>
  </div>
  </div>
  ${About()}
  ${Footer()}
  </div>`;
}

export default AboutPage;
