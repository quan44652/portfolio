import Header from "../../Layout/Header";
import Slider from "../../Layout/Slider";
import style from "./Home.module.css";
import AboutArea from "../../Layout/About";
import Skill from "../../Layout/Skill";
import Projects from "../../Layout/Project";
import Contact from "../../Layout/Contact";
import Footer from "../../Layout/Footer";
function HomePage() {
  return `<div class = '${style.wrapper}'>
  ${Header()}
  ${Slider()}
  ${AboutArea()}
  ${Skill()}
  ${Projects()}
  ${Contact()}
  ${Footer()}
  </div>`;
}

export default HomePage;
