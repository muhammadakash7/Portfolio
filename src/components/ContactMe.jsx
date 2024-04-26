export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Feel free to contact me. I am looking forward to hear from you!
        </p>
        <ul class="contact--icon ">
            <li><span class="fa-solid fa-location-dot"></span> Waris Colony, Lahore</li>
            <li><span class="fa-brands fa-whatsapp" style={{color:"green", fontWeight:"bold"}}></span>+923032241851</li>
            <li><span class="fa-solid fa-envelope"></span>muhammadakash297@gmail.com</li>
        </ul>
      </div>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="contact--form--container"
      >
        <div className="container">
          <input
            type="hidden"
            name="access_key"
            value="e14d8e7e-a89c-44b5-bed8-1a68b93f8c51"
          />
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Subject</span>
          <input
            type="text"
            className="contact--input text-md"
            name="Subject"
            id="choode-topic"
            required
          />
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            type="text"
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
