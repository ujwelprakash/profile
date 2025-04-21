import "./Main.css"; // This imports the combined CSS file

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <p>
        If you'd like to get in touch, feel free to reach out via email or the
        form below!
      </p>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>Email: ujwelprakash@gmail.com</p>
        <p>Location: India</p>
      </div>
    </section>
  );
};

export default Contact;
