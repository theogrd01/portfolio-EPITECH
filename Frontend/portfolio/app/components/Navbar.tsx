'use client'

import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const t = useTranslations('Home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { width, height } = cursor.getBoundingClientRect();
      (cursor as HTMLElement).style.left = `${e.clientX - width / 2}px`;
      (cursor as HTMLElement).style.top = `${e.clientY - height / 2}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value.toLowerCase();
    document.cookie = `language=${locale}; path=/; max-age=999999`;
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          Théo Garde
        </a>

        <select className="language" defaultValue="" onChange={handleLanguageChange}>
          <option value="" disabled>{t('language')}</option>
          <option value="FR">🇫🇷 </option>
          <option value="EN">🇺🇸 </option>
          <option value="DEU">🇩🇪 </option>
          <option value="ESP">🇪🇸 </option>
          <option value="zh-CN">🇨🇳 </option>
        </select>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/about">{t('nav.about')}</a>
          </li>
          <li>
            <a href="/project">{t('nav.projects')}</a>
          </li>
          <li>
            <a href="./CV Théo Garde.pdf" download>{t('nav.cv')}</a>
          </li>
          <li>
            <a href="/contact">{t('nav.contact')}</a>
          </li>
        </ul>
      </div>

      {/* Mobile menu button */}
      <button
        className="mobile-menu-button"
        aria-label="Toggle menu"
        onClick={() => setOpen((s) => !s)}
      >
        <i className={open ? 'bi bi-x-lg' : 'bi bi-list'} style={{fontSize: '1.25rem'}} />
      </button>

      {/* Mobile menu content */}
      <div className="mobile-menu" style={{display: open ? 'flex' : 'none'}}>
        <a href="/about" onClick={() => setOpen(false)}>{t('nav.about')}</a>
        <a href="/project" onClick={() => setOpen(false)}>{t('nav.projects')}</a>
        <a href="./CV Théo Garde.pdf" download onClick={() => setOpen(false)}>{t('nav.cv')}</a>
        <a href="/contact" onClick={() => setOpen(false)}>{t('nav.contact')}</a>
      </div>
    </nav>
  );
}
