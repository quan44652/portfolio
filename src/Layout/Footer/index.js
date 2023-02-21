import style from "./Footer.module.css";

function Footer() {
  return `<div class = "${style.wrapper}">
    <span>Stay Connected</span>
    <div class = "${style.icon}"><i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-instagram"></i></div>
    </div>`;
}

export default Footer;
