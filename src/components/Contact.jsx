export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <section className="contact">
      <h4>Contact Me</h4>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          cols="30"
          rows="5"
          name="message"
          required
        ></textarea>

        <button onClick={handleSubmit}>Send</button>
      </form>
    </section>
  );
}
