import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../styles/Home.css';
import profileImg from '../assets/photo_primary2.png';
import Navbar from './Navbar';
import { ArrowRight, ArrowDown, Download } from 'lucide-react';
import awsPractitioner from '../assets/aws-practitioner.png';
import awsSAA from '../assets/aws-saa.png';
import awsDVA from '../assets/aws-dva.png';
import isc2CC from '../assets/isc2CC.png';
import githubFoundation from '../assets/githubFoundation.png';

const certifications = [
  { src: awsPractitioner, alt: 'AWS Cloud Practitioner', href: 'https://www.credly.com/badges/0b298bc1-6a33-45f2-9882-18abf4f931fc/public_url' },
  { src: awsSAA, alt: 'AWS Solutions Architect Associate', href: 'https://www.credly.com/badges/a3f78562-dc4d-4cfd-8ad6-353e1c2c7e18/public_url' },
  { src: awsDVA, alt: 'AWS Developer Associate', href: 'https://www.credly.com/badges/3d8c0290-02a1-4998-b922-5c0b74e1b819/public_url' },
  { src: isc2CC, alt: 'ISC2 Certified in Cybersecurity', href: 'https://www.credly.com/users/vishal-junghare' },
  { src: githubFoundation, alt: 'GitHub Foundations', href: 'https://learn.microsoft.com/en-us/users/vishaljunghare-1428/credentials/e69e282efd095b2a?ref=https%3A%2F%2Fwww.credly.com%2F' },
];

const Home = ({ onOpenResume, onOpenCommandPalette }) => (
  <section className="home" id="home">
    <Navbar onOpenResume={onOpenResume} onOpenCommandPalette={onOpenCommandPalette} />
    <div className="hero-stage">
      <div className="hero-intro">
        <p className="hero-eyebrow">HELLO, I’M</p>
        <h1 className="hero-name">Vishal Junghare</h1>
        <p className="hero-position">Software Engineer <span> · </span><strong>4.5+ Years of Experience.</strong></p>
        <p className="hero-description">Building scalable Java applications, cloud-native microservices, and modern web experiences.</p>
        <p className="hero-specialization">
          <span aria-hidden="true" className="hero-typewriter-animated">Specializing in <span className="hero-typewriter-value"><Typewriter words={['Java & Spring Boot', 'AWS & Cloud Security', 'React.js & Modern Web']} loop cursor cursorStyle="|" typeSpeed={70} deleteSpeed={40} delaySpeed={1800} /></span></span>
          <span className="hero-typewriter-static">Specializing in Java & Spring Boot, AWS & Cloud Security, and React.js & Modern Web.</span>
        </p>
        <div className="hero-actions">
          <a href="https://drive.google.com/uc?export=download&id=1RsoWIo2fpRE1joYaiEC6AuJeWnMZi8gj" className="hero-primary"><Download size={18} /> Download Resume</a>
          <a href="#contact" className="hero-secondary">Contact Me</a>
          <a href="#projects" className="hero-project-action">View Projects <ArrowRight size={16} /></a>
        </div>

      </div>
      <div className="hero-portrait-area">
        <div className="hero-portrait-ring">
          <img src={profileImg} alt="Vishal Junghare" className="hero-portrait" fetchPriority="high" />
        </div>
        <div className="hero-availability"><span className="availability-dot" /> Open to Opportunities<small>Backend · Cloud · Full stack</small></div>
        <p className="hero-portrait-caption">BACKEND FOCUS. CLOUD MINDSET.</p>
      </div>
      <a className="hero-scroll" href="#about"><ArrowDown size={16} /> Get to know me</a>
    </div>
    <section className="hero-credentials" aria-label="Certifications">
      <div><p className="hero-credentials-label">CERTIFICATIONS</p><p className="hero-credentials-copy">Certified across cloud, security & developer tools.</p></div>
      <div className="hero-certifications">
        {certifications.map(cert => <a href={cert.href} key={cert.alt} target="_blank" rel="noopener noreferrer"><img src={cert.src} alt={cert.alt} loading="lazy" /></a>)}
      </div>
    </section>
  </section>
);

export default Home;
