import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  // EmailJS configuration - Replace with your actual IDs
  const SERVICE_ID = 'service_xoa49ow';
  const TEMPLATE_ID = 'template_b0e100k';
  const PUBLIC_KEY = 'bGg0Iu7WJCRIrTkHv';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'daltonshort2001@gmail.com', // Your email
        },
        PUBLIC_KEY
      );
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="contact-section">
      <h1>Contact Me</h1>
      <div className="contact-content">
        <div className="contact-info">
          <p>Feel free to reach out for collaborations, questions, or just to say hi!</p>
          <div className="social-links">
            <a href="mailto:daltonshort2001@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope /> Email
            </a>
            <a href="https://github.com/daltonshort" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://linkedin.com/in/daltonshort" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" disabled={status === 'Sending...'}>Send Message</button>
          {status && (
            <p className={`status ${status.includes('successfully') ? 'success' : status.includes('Failed') ? 'error' : ''}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;