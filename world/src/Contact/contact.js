import "./contact.css";
function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you. Please fill out the form below.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Send  message" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
export default Contact;