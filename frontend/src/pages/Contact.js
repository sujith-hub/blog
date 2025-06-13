import React, { useState } from 'react';

import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/contact', {
        name,
        email,
        message,
      });
      setResponse(res.data.message);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setResponse('Error sending message');
    }
  };

  return (
    <div className="contact container">
      <h1>Contact Me</h1>
      <p>Reach out for doubts in IoT, Web technology, and communication-related subjects.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
      {response && (
        <p className={response.includes('Error') ? 'error' : 'success'}>{response}</p>
      )}
    </div>
  );
};

export default Contact;