'use client'

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Navbar from '../components/Navbar';


export default function Contact() {

    const f = useTranslations('Form');
 
    
  const [name, setname] = useState('');
  const [firstname, setfirstname] = useState('');
  const [mail, setmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

 
  

  const handleSubmit = async () => {
  if (!name || !firstname || !mail || !message) return;

  setLoading(true);
  setSubmitted(false);

  try {
    const response = await fetch('http://localhost:8000/sendformular', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        firstname,
        mail,
        message,
      }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      console.error('Backend error:', data || response.statusText);
      throw new Error(`HTTP error ${response.status}`);
    }

    
    setSubmitted(true);
  } catch (error) {
    console.error('Error submitting form:', error);
    alert("L'envoi a échoué.");
  } finally {
    setLoading(false);
  }
};

  return (

    
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden contact-page">
<Navbar />
   
      <img className="cursor" src="https://i.sstatic.net/GWigb.gif" alt="" />

  
      <div className="stars" />

      <div className="contact-card">
  
        <h1 className="contact-title">
          {f('contact')} 
        </h1>
        <p className="contact-subtitle">
          {f('subtitle')}
        </p>

        {/* Préfirstname + firstname */}
        <div className="contact-grid">
          <div>
            <label className="contact-label">{f('firstname')} </label>
            <input className="contact-input" type="text" placeholder="Jean" value={name} onChange={e => setname(e.target.value)} />
          </div>
          <div>
            <label className="contact-label">{f('lastname')}</label>
            <input className="contact-input" type="text" placeholder="Dupont" value={firstname} onChange={e => setfirstname(e.target.value)} />
          </div>
        </div>

      
        <div style={{ marginBottom: '1.25rem' }}>
          <label className="contact-label">{f('mail')}</label>
          <input className="contact-input" type="email" placeholder="jean.dupont@mail.com" value={mail} onChange={e => setmail(e.target.value)} />
        </div>

 
        <div className="contact-separator" />

      
        <div style={{ marginBottom: '1.25rem' }}>
          <label className="contact-label">{f('message')}</label>
          <textarea
            className="contact-input contact-textarea"
            placeholder={f('messagePlaceholder')}
            value={message}
            maxLength={500}
            onChange={e => setMessage(e.target.value)}
          />
          <div className="contact-count">
            {message.length}/500
          </div>
        </div>


        {!submitted ? (
          <button onClick={handleSubmit} disabled={loading} className="contact-button">
            {loading ? f('sending') : f('submit')}
          </button>
        ) : (
          <div className="contact-success">✓ {f('success')}</div>
        )}
      </div>
    </div>
  );
}


