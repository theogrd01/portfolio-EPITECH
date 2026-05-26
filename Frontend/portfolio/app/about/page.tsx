'use client'

import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import './about.css';
import Navbar from '../components/Navbar';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  TooltipContentProps,
  TooltipIndex,
} from 'recharts';

const data = [
  { name: 'JavaScript', skillRate: 42 },
  { name: 'Python', skillRate: 38 },
  { name: 'React', skillRate: 50 },
  { name: 'docker', skillRate: 20 },
  { name: 'SQL', skillRate: 35 }
];

const getIntroOfPage = (label: string, t?: (key: string, values?: Record<string, any>) => string) => {
  switch (label) {
    case 'JavaScript':
      return (
        <div>
          <p>{t ? t('intro.javascript') : 'Framework et librairies acquis : React, Next.js, Node.js, Express.js...'}</p>
          <img src="./js.png" alt="JavaScript" width={40} />
        </div>
      );

    case 'Python':
      return (
        <div>
          <p>{t ? t('intro.python') : 'Framework et librairies acquis : discord.py, aiohttp, asyncio, IA (Ollama / Mistral), pandas, numpy, matplotlib...'}</p>
          <img src="./python.png" alt="Python" width={40} />
        </div>
      );

    case 'React':
      return (
        <div>
          <p>{t ? t('intro.react') : 'Utilisation fréquente de Next.js et React pour projets personnels et scolaires.'}</p>
          <img src="./react.png" alt="React" width={40} />
        </div>
      );
      case 'docker':
        return (
          <div>
            <p>{t ? t('intro.docker') : 'Utilisation très fréquente de docker afin de rendre compatible mes projets sur tout environnement possible.'}</p>
            <img src="./docker.png" alt="Docker" width={40} />
          </div>
      );
      case 'SQL':
        return (

          <div>
            <p>{t ? t('intro.sql') : 'Réalisation de la majorité de mes projets avec un backend MySQL.'}</p>
            <img src="./mysql.png" alt="MySQL" width={40} />
          </div>
        )
    
  }
};

const CustomTooltip = ({ active, payload, label, translations }: TooltipContentProps & { translations?: (key: string, values?: Record<string, any>) => string }) => {
  const isVisible = active && payload && payload.length;
  return (
    <div className="custom-tooltip" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
      {isVisible && (
        <>
          <div className="label">{`${label} : ${payload[0].value}`}</div>
          <div className="intro">{getIntroOfPage(String(label), translations)}</div>
          <div className="desc">{translations ? translations('tooltip.moreProjects', { label }) : `Pour en savoir plus sur les projets réaliser en ${label}, consultez mes projets réalisés.`}</div>
        </>
      )}
    </div>
  );
};

const CustomContentOfTooltip = ({
  isAnimationActive,
  defaultIndex,
  translations,
}: {
  isAnimationActive?: boolean;
  defaultIndex?: TooltipIndex;
  translations?: (key: string, values?: Record<string, any>) => string;
}) => {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '300%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
      
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis domain={[0, 100]} />
      <Tooltip content={(props) => <CustomTooltip {...(props as any)} translations={translations} />} isAnimationActive={isAnimationActive} defaultIndex={defaultIndex} />
      <Legend />
      <Bar dataKey="skillRate" name={translations ? translations('skillRateLabel') : 'Taux de compétence acquise'} barSize={80} fill="#9500ff" isAnimationActive={isAnimationActive} />
    </BarChart>
  );
};

export default function Home() {
  

  const a = useTranslations('About');


  useEffect(() => {
    const hello = document.querySelector<HTMLElement>('.hello__div');

    if (!hello) return;

    const helloFunction = () => {
      hello.style.display = 'none';
      window.setTimeout(() => {
        hello.style.display = 'flex';
      }, 10);
    };

    const intervalId = window.setInterval(helloFunction, 20000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.text-part-left, .text-part-right');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            // reset animation
            el.style.animation = 'none';
            el.offsetHeight; // force reflow
            
            if (el.classList.contains('text-part-left')) {
              el.style.animation = 'slideIn 1s ease-out forwards';
            } else {
              el.style.animation = 'slideInRight 1s ease-out forwards';
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value.toLowerCase();
  
    document.cookie = `language=${locale}; path=/; max-age=999999`;
    window.location.reload();
  };
   return (
      
         <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black  overflow: hidden">

      <img
        className="cursor"
        src="https://i.sstatic.net/GWigb.gif"
      />

      <div className="stars"></div>
      {[...Array(10)].map((_, i) => (
        <div key={i} className="shooting-star"></div>
      ))}
      <div>
        <Navbar />
        
 <div className="new__bg">
          <div className="hello__div ">
            <svg className="hello__svg " viewBox="0 0 1230.94 414.57">
              <path
                d="M-293.58-104.62S-103.61-205.49-60-366.25c9.13-32.45,9-58.31,0-74-10.72-18.82-49.69-33.21-75.55,31.94-27.82,70.11-52.22,377.24-44.11,322.48s34-176.24,99.89-183.19c37.66-4,49.55,23.58,52.83,47.92a117.06,117.06,0,0,1-3,45.32c-7.17,27.28-20.47,97.67,33.51,96.86,66.93-1,131.91-53.89,159.55-84.49,31.1-36.17,31.1-70.64,19.27-90.25-16.74-29.92-69.47-33-92.79,16.73C62.78-179.86,98.7-93.8,159-81.63S302.7-99.55,393.3-269.92c29.86-58.16,52.85-114.71,46.14-150.08-7.44-39.21-59.74-54.5-92.87-8.7-47,65-61.78,266.62-34.74,308.53S416.62-58,481.52-130.31s133.2-188.56,146.54-256.23c14-71.15-56.94-94.64-88.4-47.32C500.53-375,467.58-229.49,503.3-127a73.73,73.73,0,0,0,23.43,33.67c25.49,20.23,55.1,16,77.46,6.32a111.25,111.25,0,0,0,30.44-19.87c37.73-34.23,29-36.71,64.58-127.53C724-284.3,785-298.63,821-259.13a71,71,0,0,1,13.69,22.56c17.68,46,6.81,80-6.81,107.89-12,24.62-34.56,42.72-61.45,47.91-23.06,4.45-48.37-.35-66.48-24.27a78.88,78.88,0,0,1-12.66-25.8c-14.75-51,4.14-88.76,11-101.41,6.18-11.39,37.26-69.61,103.42-42.24,55.71,23.05,100.66-23.31,100.66-23.31"
                transform="translate(311.08 476.02)"
                style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: 35 }}
              />
            </svg>
            <div className="scroll-hint" >
              <i className="bi bi-chevron-down scroll-hint__icon" />
            </div>
          </div>
        </div>

      </div>

    
      <div className="snap-section ">
        <main>
         <img
                   src="/aboutme.png"
                   className="img rounded-full text-part-right"
                   width={300}
                   height={300}
                 />

      
          <h1 className="text-part-left">Théo Garde</h1>
     
            <div className="text-part-right large-text">{a('aboutMeText')}</div>
        </main>
      </div>
    
    {/* soft skills */}

    <div className="about-footer">
        <h1 className='presentation-title'>{a('softSkillsTitle')}</h1>
        <div className="barre"></div>  
        <br/>
        <div className="container">
        <p className='buble-text'>{a('skill.fr')}</p>
        <p className='buble-text'>{a('skill.en')}</p>
        <p className='buble-text'>{a('skill.license')}</p>
        <p className='buble-text'>{a('skill.teamwork')}</p>
        <p className='buble-text'>{a('skill.autonomy')}</p>
        <p className='buble-text'>{a('skill.curiosity')}</p>
      </div>
      </div>

      {/* formation */}

      <div className="about-footer">
        <h1 className="presentation-title">{a('educationTitle')}</h1>
        <div className="barre"></div>

        <div className="education-item">
          <span className="education-bar" aria-hidden="true" />
          <div className="education-content">
            <h2 className="education-title">Epitech</h2>
            <p className="education-date">{a('epitechDates')}</p>
            <p className="education-subtitle">{a('epitechSubtitle')}</p>
          </div>
        </div>

        <div className="education-item">
          <span className="education-bar" />
          <div className="education-content">
            <h2 className="education-title">{a('lyceeTitle')}</h2>
            <p className="education-date">{a('lyceeDates')}</p>
            <p className="education-subtitle">{a('lyceeSubtitle')}</p>
          </div>
        </div>

      </div>


      {/* graduation  */}

       <div className="about-footer">
        <h1 className="presentation-title">{a('diplomasTitle')}</h1>
        <div className="barre"></div>

        <div className="education-item">
          <span className="education-bar" aria-hidden="true" />
          <div className="education-content">
            <h2 className="education-title">{a('diplomaTitle')}</h2>
            <p className="education-date">{a('diplomaDate')}</p>
            <p className="education-subtitle">{a('diplomaSubtitle')}</p>
          </div>
        </div>

      </div>

      {/* passion */}

      <div className="about-footer">
        <h1 className="presentation-title">{a('passionTitle')}</h1>
        <div className="barre"></div>

        <div className="education-item">
          <span className="education-bar" aria-hidden="true" />
          <div className="education-content">
            <h2 className="education-title">{a('football')}</h2>
             <div className="education-content"></div>
        
            
          </div>
        </div>
         <div className="education-item">
          <span className="education-bar" />
          <div className="education-content">
            <h2 className="education-title">{a('travel')}</h2>
          </div>
        </div>

      </div>
    
      

      {/* ✅ SECTION 3 — Footer */}
      <footer className="about-footer">
        <h1 className='presentation-title'>{a('skillsLangTitle')}</h1>
        <div className="barre"></div>  
        <br/>
        <CustomContentOfTooltip isAnimationActive defaultIndex="0" translations={a} />
      </footer>
    </div>

    


  );
}