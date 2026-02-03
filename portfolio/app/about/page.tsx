'use client'

import Image from "next/image";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from 'react';
import { useTranslations, } from 'next-intl';

export default function Home() {

  const t = useTranslations('Home');

  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { width, height } = cursor.getBoundingClientRect();
      (cursor as HTMLElement).style.left = `${e.clientX - width/2}px`;
      (cursor as HTMLElement).style.top = `${e.clientY - height/2}px`;
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
    <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black overflow-hidden">

      <img
        className="cursor"
        src="https://i.sstatic.net/GWigb.gif"
      />

      <div className="stars"></div>
      {[...Array(10)].map((_, i) => (
        <div key={i} className="shooting-star"></div>
      ))}
      <div>
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

       </div>
    </div>
  );
}