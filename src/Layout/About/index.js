import style from "./About.module.css";

function AboutArea() {
  return /*html*/ `<div class = "${style.wrapper}">
  <div class = "${style.about_caption}">
  <h3>Designing With Passion While Exploring The World.</h3>
  <ul>
  <li>Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida.
   Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</li>
   <li>Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua.</li>
   <li>Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua.</li>
  </ul>
  </div>
  <div class = "${style.about_caption2}">
  <h3>Any Type Of Query <br>
  & Discussion.</h3>
  <h6>Late talk with me </h6>
  <p><a href = "">quannaph28225@fpt.edu.vn</a></p>
  </div>
  </div>`;
}

export default AboutArea;
