'use client'

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';


export default function Contact() {
    const t = useTranslations('Home');
    const f = useTranslations('Form');
    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const locale = e.target.value.toLowerCase();
      
        document.cookie = `language=${locale}; path=/; max-age=999999`;
        
        
        window.location.reload();
    
        
      };
    const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    if (!cursor) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { width, height } = cursor.getBoundingClientRect();
      (cursor as HTMLElement).style.left = `${e.clientX - width / 2}px`;
      (cursor as HTMLElement).style.top = `${e.clientY - height / 2}px`;
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async () => {
    if (!prenom || !nom || !email || !message) return;
    setLoading(true);
    // TODO: remplace par ton API route ou service (Resend, EmailJS...)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (

    
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0b0b2b, #1b2735 70%, #090a0f)' }}>
<nav className="navbar">
          <div className="navbar-left">
            <a href="/" className="logo">
              Théo Garde
            </a>
            
            <select className="language" defaultValue="" onChange={handleLanguageChange}>
              <option value="" disabled>{t('language')}</option>
              <option value="FR">FR </option>
              <option value="EN">EN </option>
              <option value="DEU">DEU </option>
              <option value="ESP">ESP </option>
              <option value="chin">中文 </option>
              
            </select>
          </div>
          <div className="navbar-center">
            <ul className="nav-links">
              <li>
                <a href="/about">{t('nav.about')}</a>
              </li>
              <li>
                <a href="/about">{t('nav.projects')}</a>
              </li>
              <li>
                <a href="/cv">{t('nav.cv')}</a>
              </li>
              <li>
                <a href="/contact">{t('nav.contact')}</a>
              </li>
            </ul>
          </div>
        </nav>
      {/* Curseur personnalisé */}
      <img className="cursor" style={{ position: 'fixed', width: 30, height: 30, pointerEvents: 'none', zIndex: 9999, transition: 'transform 0.1s ease' }} src="https://i.sstatic.net/GWigb.gif" alt="" />

      {/* Étoiles */}
      <div className="stars" style={{ width: 1, height: 1, position: 'absolute', background: 'white', boxShadow: '2vw 5vh 2px white, 10vw 8vh 2px white, 15vw 15vh 1px white, 22vw 22vh 1px white, 28vw 12vh 2px white, 32vw 32vh 1px white, 38vw 18vh 2px white, 42vw 35vh 1px white, 48vw 25vh 2px white, 53vw 42vh 1px white, 58vw 15vh 2px white, 63vw 38vh 1px white, 68vw 28vh 2px white, 73vw 45vh 1px white, 78vw 32vh 2px white, 83vw 48vh 1px white, 88vw 20vh 2px white, 93vw 52vh 1px white' }} />

      {/* Carte formulaire */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: 520,
        background: 'rgba(255,255,255,0.04)',
        border: '0.5px solid rgba(255,255,255,0.15)',
        borderRadius: 20,
        padding: '2.5rem',
        backdropFilter: 'blur(12px)',
        margin: '2rem',
      }}>
        {/* Titre typewriter */}
        <h1 style={{
          color: '#fff',
          fontFamily: 'monospace',
          fontSize: '1.4rem',
          letterSpacing: '0.15em',
          overflow: 'hidden',
          borderRight: '2px solid orange',
          whiteSpace: 'nowrap',
          margin: '0 0 0.3rem',
          animation: 'typing 2s steps(20, end) forwards, blink-caret .5s step-end infinite',
        }}>
          {f('contact')} 
        </h1>
        <p style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', marginBottom: '2rem' }}>
            N'hésite pas à me transmettre un message, une question, ou même une opportunité de collaboration. Je suis toujours ouvert à échanger et à explorer de nouvelles idées.
        </p>

        {/* Prénom + Nom */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
          <div>
            <label style={labelStyle}>{f('firstname')} </label>
            <input style={inputStyle} type="text" placeholder="Jean" value={prenom} onChange={e => setPrenom(e.target.value)} />
          </div>
          <div>
            <label style={labelStyle}>{f('lastname')}</label>
            <input style={inputStyle} type="text" placeholder="Dupont" value={nom} onChange={e => setNom(e.target.value)} />
          </div>
        </div>

        {/* Email */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={labelStyle}>{f('email')}</label>
          <input style={inputStyle} type="email" placeholder="jean.dupont@email.com" value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        {/* Séparateur */}
        <div style={{ height: '0.5px', background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)', margin: '1.5rem 0' }} />

        {/* Message */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={labelStyle}>{f('message')}</label>
          <textarea
            style={{ ...inputStyle, height: 110, resize: 'none', lineHeight: 1.5 }}
            placeholder={f('messagePlaceholder')}
            value={message}
            maxLength={500}
            onChange={e => setMessage(e.target.value)}
          />
          <div style={{ textAlign: 'right', fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace', marginTop: 4 }}>
            {message.length}/500
          </div>
        </div>

        {/* Bouton */}
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.85rem 1.5rem',
              background: 'linear-gradient(135deg, rgba(255,165,0,0.15), rgba(255,165,0,0.05))',
              border: '1px solid rgba(255,165,0,0.5)',
              borderRadius: 9999,
              color: '#fff',
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              letterSpacing: '0.2em',
              cursor: 'none',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
            }}
          >
            {loading ? f('sending') : f('submit')}
          </button>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            background: 'rgba(100,255,150,0.08)',
            border: '0.5px solid rgba(100,255,150,0.25)',
            borderRadius: 8,
            color: 'rgba(100,255,150,0.9)',
            fontFamily: 'monospace',
            fontSize: '0.8rem',
            letterSpacing: '0.1em',
          }}>
            ✓ {f('success')}
          </div>
        )}
      </div>

      {/* Animations CSS */}
      <style>{`
        @keyframes typing { from { width: 0 } to { width: 100% } }
        @keyframes blink-caret { from, to { border-color: transparent } 50% { border-color: orange } }
        @keyframes twinkle { 0%, 100% { opacity: 0.8 } 50% { opacity: 0.4 } }
        .stars { animation: twinkle 8s infinite linear; }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }
        input:focus, textarea:focus { outline: none; border-color: rgba(255,165,0,0.6) !important; box-shadow: 0 0 12px rgba(255,165,0,0.1); }
      `}</style>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.7rem',
  letterSpacing: '0.15em',
  color: 'rgba(255,165,0,0.8)',
  marginBottom: '0.4rem',
  fontFamily: 'monospace',
  textTransform: 'uppercase',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '0.5px solid rgba(255,255,255,0.15)',
  borderRadius: 8,
  color: '#fff',
  fontFamily: 'inherit',
  fontSize: '0.9rem',
  padding: '0.65rem 0.9rem',
  boxSizing: 'border-box',
};
