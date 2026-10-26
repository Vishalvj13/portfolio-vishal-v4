import React, { useState } from 'react';
import '../styles/About.css';
import { Coffee, Compass, Heart, Lightbulb } from 'lucide-react';

const aboutTabs = [
  {
    id: 'story', label: 'My story', icon: <Compass size={17} />,
    title: 'Curiosity is the common thread.',
    paragraphs: [
      'My path into software included a degree in engineering, a postgraduate diploma in advanced computing, and 4.5+ years working with enterprise teams. Each stage has given me a different way to approach problems and learn from the people around me.',
      'What keeps me interested is the process: asking questions, understanding why something works the way it does, and making it a little better. I enjoy the moments when a confusing problem starts to make sense — and sharing what I learned along the way.',
    ],
    note: 'Still learning, still experimenting, still keeping too many browser tabs open.',
  },
  {
    id: 'outside', label: 'Beyond work', icon: <Coffee size={17} />,
    title: 'There’s life beyond the keyboard.',
    paragraphs: [
      'Cricket, spontaneous road trips, and finding good food are some of my favourite ways to switch gears. I like the mix of a little competition, a change of scenery, and discovering something I hadn’t planned for.',
      'A binge-worthy show and a cup of chai make a good quieter day, too. Those small breaks help me return to work with fresh eyes — sometimes a problem feels much simpler after stepping away from it.',
    ],
    note: 'My kind of weekend: a new place, a good meal, and time for cricket.',
  },
  {
    id: 'mindset', label: 'How I work', icon: <Lightbulb size={17} />,
    title: 'Understand first. Improve together.',
    paragraphs: [
      'I like to understand the problem before rushing into a solution. That means asking questions, listening to different perspectives, and breaking a complicated task into steps that people can discuss and act on.',
      'Working with QA, DevOps, infrastructure, and application teams has taught me to value clear communication as much as individual execution. I enjoy turning lessons from projects and interview preparation into notes and writeups that I can revisit and share.',
    ],
    note: 'A good outcome leaves the next person with something easier to understand.',
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  const selectedTab = aboutTabs.find(tab => tab.id === activeTab);
  const handleTabKey = (event, index) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % aboutTabs.length;
    if (event.key === 'ArrowLeft') next = (index + aboutTabs.length - 1) % aboutTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = aboutTabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    setActiveTab(aboutTabs[next].id);
    document.getElementById(`about-tab-${aboutTabs[next].id}`)?.focus();
  };
  return (
    <section className="about-section section-card" id="about">
      <div className="section-heading left-aligned">
        <p className="section-kicker">About</p>
        <h2 className="about-title">The Person Behind the Work</h2>
        <p className="about-intro">A little about my journey, what I enjoy, and how I approach the everyday.</p>
      </div>
      <div className="about-person-grid">
        <div className="about-person-main">
          <div className="about-tabs" role="tablist" aria-label="Get to know Vishal">
            {aboutTabs.map((tab, index) => (
              <button type="button" role="tab" key={tab.id} id={`about-tab-${tab.id}`} aria-selected={activeTab === tab.id} aria-controls="about-panel" tabIndex={activeTab === tab.id ? 0 : -1} onClick={() => setActiveTab(tab.id)} onKeyDown={event => handleTabKey(event, index)}>{tab.icon}{tab.label}</button>
            ))}
          </div>
          <div className="about-tab-panel" id="about-panel" role="tabpanel" aria-labelledby={`about-tab-${activeTab}`} tabIndex={0}>
            <h3>{selectedTab.title}</h3>
            {selectedTab.paragraphs.map(text => <p key={text}>{text}</p>)}
            <div className="about-note">{selectedTab.note}</div>
          </div>
        </div>
        <aside className="about-person-aside" aria-label="A few things about me">
          <span className="about-aside-kicker"><Heart size={16} /> A FEW FAVOURITES</span>
          <h3>Outside the daily stand-up</h3>
          <p>Pick an interest to see a little more of that side of me.</p>
          <div className="about-interest-buttons">
            {['Cricket', 'Road trips', 'Food discoveries', 'Chai & a good show'].map(interest => <button type="button" key={interest} onClick={() => { setActiveTab('outside'); document.getElementById('about-tab-outside')?.focus(); }}>{interest}<span aria-hidden="true">↗</span></button>)}
          </div>
          <a className="about-writing-link" href="#writing">Explore what I write about <span aria-hidden="true">→</span></a>
        </aside>
      </div>
    </section>
  );
};

export default About;
