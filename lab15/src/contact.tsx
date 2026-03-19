import './styles.css';
function Contact(){
return (
    <div className="page">
      <h1>Contact Us</h1>

      <form className="form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;