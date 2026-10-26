import React from 'react';
import { BrainCircuit, Workflow, ShieldCheck } from 'lucide-react';
import '../styles/NowSection.css';

const focusAreas = [
  {
    icon: <BrainCircuit size={20} />,
    title: 'Generative AI & RAG',
    text: 'Learning how LLM applications retrieve useful context through vector databases and retrieval-augmented generation.',
    topics: ['LLM fundamentals', 'RAG', 'Vector databases'],
  },
  {
    icon: <Workflow size={20} />,
    title: 'Agentic workflows',
    text: 'Exploring how agents use tools and coordinate tasks, alongside AI-assisted debugging and documentation.',
    topics: ['LangChain', 'MCP fundamentals', 'AI-assisted development'],
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Cloud security automation',
    text: 'Deepening my approach to policy-driven governance, reliable validation, and reusable security workflows.',
    topics: ['Policy-as-code', 'AWS governance', 'Automation'],
  },
];

const NowSection = () => (
  <section className="now-section section-card" id="now" aria-labelledby="now-heading">
    <header className="now-heading">
      <p className="section-kicker">Now</p>
      <h2 id="now-heading">Currently Learning</h2>
      <p>Topics I’m exploring through coursework, hands-on experiments, and writing.</p>
    </header>
    <div className="now-grid">
      {focusAreas.map(area => (
        <article className="now-card" key={area.title}>
          <div className="now-card-icon" aria-hidden="true">{area.icon}</div>
          <h3>{area.title}</h3>
          <p>{area.text}</p>
          <ul className="now-topics" aria-label={`${area.title} topics`}>
            {area.topics.map(topic => <li key={topic}>{topic}</li>)}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default NowSection;
