import style from "./Contact.module.css";

function Contact() {
  return `<div class = "${style.wrapper}">
  <div class = "${style.contact_caption}">
  <h1>If Not Now, When? <br> Let’s Work Together!</h1>
  <p>Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra.</p>
  </div>
  <form class = "${style.contact_form}">
  <input type = 'text' placeholder = "Full name" />
  <input type = 'text' placeholder = "Email Address" />
  <input type = 'text' placeholder = "Your Message" />
  <button class = "${style.btn}">Send Message</button>
  </form>
  </div>`;
}

export default Contact;
