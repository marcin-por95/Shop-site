import React, { useState } from 'react';
import Navbar from '../../common/NavBar/NavBar';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj można dodać logikę obsługi wysyłki formularza
    console.log('Dane formularza:', formData);
    // Po obsłudze formularza można wyczyścić pola
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div>
      <Navbar />
      <h2>Formularz Kontaktowy</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Imię:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Temat:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Wiadomość:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
};

export default ContactPage;
