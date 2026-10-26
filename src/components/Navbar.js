import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import {
  Menu,
  X,
  Home,
  User,
  Brain,
  FolderKanban,
  GraduationCap,
  Mail,
  Briefcase,
  NotebookText,
  Sparkles,
  Moon,
  Sun,
  Command,
  FileText,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const links = [
  { to: 'home', icon: <Home size={16} />, label: 'Home' },
  { to: 'about', icon: <User size={16} />, label: 'About' },
  { to: 'now', icon: <Sparkles size={16} />, label: 'Now' },
  { to: 'experience', icon: <Briefcase size={16} />, label: 'Experience' },
  { to: 'skills', icon: <Brain size={16} />, label: 'Skills' },
  { to: 'projects', icon: <FolderKanban size={16} />, label: 'Projects' },
  { to: 'writing', icon: <NotebookText size={16} />, label: 'Writing' },
  { to: 'education', icon: <GraduationCap size={16} />, label: 'Education' },
  { to: 'contact', icon: <Mail size={16} />, label: 'Contact' },
];

const Navbar = ({ onOpenResume, onOpenCommandPalette }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    let frameId;
    const updateActiveSection = () => {
      const sections = links.map(link => document.getElementById(link.to)).filter(Boolean);
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 8);

      // The last section may never reach the activation line on a short viewport.
      const contact = document.getElementById('contact');
      const atBottom = Math.ceil(scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 4;
      const contactRect = contact?.getBoundingClientRect();
      const visibleContact = contactRect ? Math.max(0, Math.min(contactRect.bottom, window.innerHeight) - Math.max(contactRect.top, 100)) : 0;
      const contactIsInView = contactRect && contactRect.top < window.innerHeight * 0.6 && visibleContact >= Math.min(contactRect.height * 0.5, 240);
      if (contactRect && ((atBottom && visibleContact > 0) || contactIsInView)) {
        setActiveSection('contact');
        return;
      }

      const navBottom = document.querySelector('.navbar')?.getBoundingClientRect().bottom || 80;
      const activationLine = Math.max(navBottom + 100, window.innerHeight * 0.35);
      let current = 'home';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationLine) current = section.id;
      }
      setActiveSection(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    };
    updateActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    const layoutObserver = new ResizeObserver(onScroll);
    layoutObserver.observe(document.body);
    return () => {
      cancelAnimationFrame(frameId);
      layoutObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav aria-label="Main navigation" className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a
          href="#home"
          className="brand-mark brand-mark--compact"
          onClick={closeMenu}
          aria-label="Go to home"
        >
          <span className="brand-badge">VJ</span>
        </a>

        <ul id="main-navigation-links" className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.to}>
              <a
                href={`#${link.to}`}
                className={activeSection === link.to ? 'active' : ''}
                aria-current={activeSection === link.to ? 'location' : undefined}
                onClick={() => { setActiveSection(link.to); closeMenu(); }}
              >
                <span className="icon">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            </li>
          ))}

          <li className="nav-mobile-utilities">
            <button
              type="button"
              className="nav-mobile-btn"
              onClick={() => {
                toggleTheme();
                closeMenu();
              }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
              <span>Theme</span>
            </button>

            <button
              type="button"
              className="nav-mobile-btn"
              onClick={() => {
                onOpenResume?.();
                closeMenu();
              }}
            >
              <FileText size={16} />
              <span>Resume</span>
            </button>

            <button
              type="button"
              className="nav-mobile-btn"
              onClick={() => {
                onOpenCommandPalette?.();
                closeMenu();
              }}
            >
              <Command size={16} />
              <span>Quick actions</span>
            </button>
          </li>
        </ul>

        <div className="nav-actions-desktop">

          <button
            type="button"
            className="nav-icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button type="button" className="nav-resume-btn" onClick={onOpenResume}>Resume</button>
        </div>

        <button
          type="button"
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="main-navigation-links"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
