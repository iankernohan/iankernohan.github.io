import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l8xi024",
        "template_67zv3vy",
        form.current,
        "ckRiIYsl9EWD3S-FE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.message.value = "";
  }

  return (
    <section className="contact">
      <h4>Contact Me</h4>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="user_name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="user_email" required />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          cols="30"
          rows="5"
          name="message"
          required
        ></textarea>
        <button>Send</button>
      </form>
    </section>
  );
}
