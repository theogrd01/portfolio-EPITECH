
'use client'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'

import 'bootstrap-icons/font/bootstrap-icons.css';

import { useTranslations } from 'next-intl';
import Navbar from '../components/Navbar';


export default function Project() {
    const p = useTranslations('Projects');

 
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
    <div>
       <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2025 - 2028"
    dateClassName="timeline-date-right"
    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
    icon={
  <img 
    src="/epilogo.png" 
    alt="Icon" 
    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
  />
}
  >
    <h3 className="vertical-timeline-element-title">{p('rentrée-epi.title')}</h3>
    <h4 className="vertical-timeline-element-subtitle">{p('rentrée-epi.description')}</h4>

    <p>
      {p('rentrée-epi.text')}
    </p>
  </VerticalTimelineElement >
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="03/11/2025"
    dateClassName='timeline-date-left'
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">  {p('todo-app.title')}</h3>
    <h4 className="vertical-timeline-element-subtitle">{p('todo-app.description')}</h4>
    <p>
      {p('todo-app.text')}
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="16/10/2025"
    dateClassName="timeline-date-right"

    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">  {p('cv-digital.title')}</h3>
    <h4 className="vertical-timeline-element-subtitle">{p('cv-digital.description')}</h4>
    <p>
      {p('cv-digital.text')}
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="04/12/2025"
    dateClassName='timeline-date-left'
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">  {p('social-network.title')}</h3>
    <h4 className="vertical-timeline-element-subtitle">{p('social-network.description')}</h4>
    <p>
      {p('social-network.text')}
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="23/02/2026"
    dateClassName='timeline-date-right'
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">  {p('yowl.title')}</h3>
    <h4 className="vertical-timeline-element-subtitle">{p('yowl.description')}</h4>
    <p>
      {p('yowl.text')}
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="05/01/2026"
     dateClassName="timeline-date-left"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">  {p('portfolio.title')}</h3>
    <h4 className="vertical-timeline-element-subtitle">{p('portfolio.description')}</h4>
    <p>
      {p('portfolio.text')}
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="01/12/2025"
    dateClassName='timeline-date-right'
    
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">  {p('owasp-juice-shop.title')}</h3>
    <h4 className="vertical-timeline-element-subtitle">{p('owasp-juice-shop.description')}</h4>
    <p>
      {p('owasp-juice-shop.text')}
  
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="23/02/2026"
    dateClassName='timeline-date-left'
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">  {p('tardis.title')}</h3>
    <h4 className="vertical-timeline-element-subtitle">{p('tardis.description')}</h4>
    <p>
      {p('tardis.text')}
    </p>
  </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="02/03/2026"
    dateClassName='timeline-date-right'
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">  {p('nextbuy.title')}</h3>
    <h4 className="vertical-timeline-element-subtitle">{p('nextbuy.description')}</h4>
    <p>
      {p('nextbuy.text')}
    </p>
  </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="16/03/2026"
    dateClassName='timeline-date-left'
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">  {p('alice-in-wonderland.title')}</h3>
    <h4 className="vertical-timeline-element-subtitle">{p('alice-in-wonderland.description')}</h4>
    <p>
      {p('alice-in-wonderland.text')}
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    
  />
</VerticalTimeline>



    </div>
    </div>
    </div>


    )}



