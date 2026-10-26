import React, { useEffect, useRef, useState } from 'react';
import '../styles/Contact.css';
import { Mail, Linkedin, Github, ArrowUpRight, Copy, Check, FileText } from 'lucide-react';

const email = 'moodyjester35@gmail.com';

const Contact = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState('');
  const resetTimer = useRef(null);
  useEffect(() => () => clearTimeout(resetTimer.current), []);
  const handleCopy = async () => {
    clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setMessage('Email copied to clipboard.');
    } catch {
      setMessage('Couldn’t copy automatically. You can select the email address below.');
    }
    resetTimer.current = setTimeout(() => { setCopied(false); setMessage(''); }, 3500);
  };
  return (
    <section className="contact-section section-card" id="contact" aria-labelledby="contact-heading">
      <div className="contact-simple-layout">
        <div>
          <div className="section-heading">
            <p className="section-kicker">Contact</p>
            <h2 id="contact-heading" className="contact-simple-title">Let’s start a conversation.</h2>
          </div>
          <p className="contact-simple-copy">Have a role, a collaboration, or an idea in mind? I’d love to hear about it.</p>
          <p className="contact-open"><span aria-hidden="true" />Open to backend, cloud, and full-stack opportunities</p>
          <div className="contact-simple-actions">
            <a className="contact-email-action" href={`mailto:${email}`}><Mail size={18} /> Email me <ArrowUpRight size={17} /></a>
            <button type="button" className="contact-copy-action" onClick={handleCopy}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? 'Copied' : 'Copy email'}</button>
          </div>
          <p className="contact-visible-email">{email}</p>
          <p className="contact-copy-status" role="status">{message}</p>
        </div>
        <div className="contact-profile-links">
          <a href="https://www.linkedin.com/in/vishal-junghare-vj" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /><span><strong>Connect on LinkedIn</strong><small>Professional updates and conversations</small></span><ArrowUpRight size={17} /></a>
          <a href="https://github.com/Vishalvj13" target="_blank" rel="noopener noreferrer"><Github size={20} /><span><strong>Explore my GitHub</strong><small>Projects and implementation work</small></span><ArrowUpRight size={17} /></a>
          <button type="button" onClick={onOpenResume}><FileText size={20} /><span><strong>View my resume</strong><small>Experience, skills, and achievements</small></span><ArrowUpRight size={17} /></button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
