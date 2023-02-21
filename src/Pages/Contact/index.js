import style from "./Contact.module.css";
import Header from "../../Layout/Header";
import Contact from "../../Layout/Contact";
import Footer from "../../Layout/Footer";
function ContactPage() {
  return `<div>
  ${Header()}
  <div class = "${style.banner}">
  <h2>Contact Us</h2>
  </div>
<div class = "${style.address}">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8639810443356!2d105.74459841485445!3d21.03812778599324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2sFPT%20Polytechnic%20Hanoi!5e0!3m2!1sen!2s!4v1676619652261!5m2!1sen!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

  ${Contact()}
  ${Footer()}
  </div>`;
}

export default ContactPage;
