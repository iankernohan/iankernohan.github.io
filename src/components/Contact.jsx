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
      <h3>Contact Me</h3>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          id="name"
          name="user_name"
          placeholder="Name"
          required
        />
        <input
          type="email"
          id="email"
          name="user_email"
          placeholder="Email"
          required
        />
        <textarea
          id="message"
          cols="30"
          rows="5"
          name="message"
          placeholder="Message"
          required
        ></textarea>
        <button>Send</button>
      </form>
    </section>
  );
}
