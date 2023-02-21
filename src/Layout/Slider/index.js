import style from "./Slider.module.css";

function Slider() {
  return `<div class = '${style.wrapper}'>
    <div class= "${style.hero_caption}">
    <h1>I'm Designer <br> <span style = "font-weight: 500;color: #464d65;" ${style.hero_name}>Nguyen Anh Quan</span></h1>
    <p>jhorem rfpsum golor sidt amet, consectetur adipiscing elit, eiusmod tempor incididunt utcjhg labore bet dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
    <div class = "${style.hero_btn}">
    <button class = "${style.btn} ${style.btn_hero}">Learn more</button>
    <button class = "${style.btn} ${style.btn_boder}">Hire me</button>
    
    </div>
    </div>
     </div>`;
}

export default Slider;
