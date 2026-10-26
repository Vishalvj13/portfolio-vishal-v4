import React, { useState } from 'react';
import '../styles/Experience.css';
import amdocsLogo from '../assets/amdocsLogo.png';
import globalLogicLogo from '../assets/globalLogicLogo.png';
import { ChevronDown, ShieldCheck, Layers3 } from 'lucide-react';

const experienceData = [
  {
    role: 'Software Engineer - 2',
    company: 'GlobalLogic',
    logo: globalLogicLogo,
    date: 'Jun 2025 – Present',
    client: 'Leading iPaaS Provider · Pune, India',
    badge: 'Cloud Security & Governance',
    summary: 'Applying backend engineering depth to cloud security, policy-as-code, and automated remediation across a multi-account enterprise AWS environment.',
    achievements: [
      'Built automated cloud security remediation tools and a validation engine that reduced unnecessary API calls by 95%.',
      'Implemented policy-driven governance workflows to automate compliance checks and enforce AWS security standards at scale.',
      'Led vulnerability remediation across 15+ microservices, working with application teams to resolve high-priority security issues.',
    ],
    details: [
      'Analyzed enterprise security findings to identify cloud misconfigurations, policy violations, and risks, and recommended preventive controls.',
      'Developed reliable validation and cleanup workflows with multi-account access controls and safeguards for cloud resources.',
      'Provisioned cloud environments from scratch, including AWS account and network setup, deployment pipelines, and web application firewall hardening.',
      'Built reusable infrastructure and security-testing pipelines so engineering teams could independently validate remediated services end-to-end.',
      'Integrated automated remediation with CI/CD, audit trails, retry handling, and compliance reporting.',
    ],
    impactLine: 'Making cloud governance and remediation more efficient, repeatable, and easier for engineering teams to validate.',
    tech: ['Python', 'AWS', 'Cloud Security', 'CI/CD', 'Automation', 'Governance'],
    icon: <ShieldCheck size={18} />,
  },
  {
    role: 'Software Developer',
    company: 'Amdocs Pvt. Ltd.',
    logo: amdocsLogo,
    date: 'May 2022 – Apr 2025',
    client: 'Telecom clients in UK and South Africa · Pune, India',
    badge: 'Backend Services & Security Hardening',
    summary: 'Built Java and Spring Boot services for enterprise telecom platforms, progressing from Associate Software Engineer to Software Developer within 1.5 years.',
    achievements: [
      'Designed scalable microservices and secure REST APIs for Customer, Order, and Billing Management, improving system performance by up to 20%.',
      'Optimized database queries and introduced caching to reduce core telecom service latency by 15% under high-volume traffic.',
      'Resolved 100+ Checkmarx security vulnerabilities, including XSS and cleartext password exposure.',
    ],
    details: [
      'Integrated payment, credit, and inventory systems across connected telecom applications, maintaining reliable data flow with zero API failures.',
      'Delivered enterprise application upgrades and improved third-party integrations, reducing deployment issues by up to 25%.',
      'Developed customized CRM portals and advanced reports aligned with client workflows, improving process efficiency and user adoption by 15%.',
      'Streamlined build and deployment workflows and improved pre-production bug detection by nearly 25% through unit testing, integration validation, and service simulation.',
      'Collaborated with QA, DevOps, and infrastructure teams through sprint planning, code reviews, and retrospectives in an Agile Scrum environment.',
    ],
    impactLine: 'Improving the performance, security, and release reliability of connected enterprise telecom systems.',
    tech: ['Java', 'Spring Boot', 'REST APIs', 'EJB', 'MySQL', 'Checkmarx', 'Maven', 'Jenkins', 'JUnit', 'Postman'],
    icon: <Layers3 size={18} />,
  },
];

const Experience = () => {
  const [active, setActive] = useState(-1);
  return (
    <section id="experience" className="timeline-section section-card">
      <div className="section-heading left-aligned">
        <p className="section-kicker">Experience</p>
        <h2 className="timeline-title">Where I’ve Created Impact</h2>
        <div className="title-underline" />
      </div>
      <div className="timeline-container">
        {experienceData.map((item, index) => {
          const expanded = active === index;
          return (
            <article className="timeline-item" key={item.company}>
              <div className="timeline-badge"><img src={item.logo} alt={`${item.company} logo`} /></div>
              <div className="experience-card">
                <div className="experience-card-top">
                  <div>
                    <p className="experience-date">{item.date}</p>
                    <h3>{item.role}</h3>
                    <div className="company-row"><span>{item.company}</span><span className="dot" /><span>{item.client}</span></div>
                  </div>
                  <div className="experience-pill">{item.icon}{item.badge}</div>
                </div>
                <p className="experience-summary">{item.summary}</p>
                <ul className="experience-list">{item.achievements.map(text => <li key={text}>{text}</li>)}</ul>
                <div className="experience-tech-row">{item.tech.map(tech => <span className="experience-chip" key={tech}>{tech}</span>)}</div>
                <button className="experience-toggle" aria-expanded={expanded} aria-controls={`experience-details-${index}`} onClick={() => setActive(expanded ? -1 : index)}>
                  {expanded ? 'Show less detail' : 'Expand role details'}<ChevronDown size={18} className={expanded ? 'rotated' : ''} />
                </button>
                <div id={`experience-details-${index}`} hidden={!expanded} className="experience-expand-panel">
                  {item.details.map(text => <p key={text}>{text}</p>)}
                  <div className="experience-impact-row">{item.impactLine}</div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
