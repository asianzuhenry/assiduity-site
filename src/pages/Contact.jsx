import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/pages/Contact.css"; // make sure this CSS file exists

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
// src/pages/Contact.jsx

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We would love to hear from you! Whether it's a question about our services, a quote for your next project, or general inquiries — just drop us a message.
        </p>
      </div>

      <div className="contact-wrapper">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>
            Your Name
            <input type="text" name="name" required />
          </label>

          <label>
            Your Email
            <input type="email" name="email" required />
          </label>

          <label>
            Message
            <textarea name="message" rows="6" required />
          </label>

          <button type="submit">Send Message</button>

          {status === "success" && <p className="status success">✅ Message sent successfully!</p>}
          {status === "error" && <p className="status error">❌ Failed to send. Try again.</p>}
          {status === "sending" && <p className="status sending">⏳ Sending...</p>}
        </form>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Assiduity Engineering Ltd</strong></p>
          <p>Kampala, Uganda</p>
          <p>Email: <a href="mailto:info@assiduity.co.ug">info@assiduity.co.ug</a></p>
          <p>Phone: +256 743 755 232</p>
          <p>Mon – Fri: 8:00am – 5:00pm</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
