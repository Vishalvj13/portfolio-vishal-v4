import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import '../styles/WritingSection.css';

const articles = [
  {
    title: 'Agents in Production: What Breaks at Scale',
    type: 'AI Engineering',
    description: 'A series exploring the challenges of putting AI agents into production.',
    href: 'https://medium.com/@vishal_13_/agents-in-production-what-breaks-at-scale-f722a2c6953d',
  },
  {
    title: 'Two Agents, One Deadlock',
    type: 'Agentic Systems',
    description: 'A closer look at coordination problems when multiple agents work together.',
    href: 'https://medium.com/@vishal_13_/6-two-agents-one-deadlock-32ee6f8f013e',
  },
  {
    title: 'Crack AWS DVA & SAA: The No-Fluff Prep Guide #6',
    type: 'AWS Preparation',
    description: 'Notes from my AWS Developer and Solutions Architect certification preparation.',
    href: 'https://medium.com/@vishal_13_/crack-aws-dva-saa-the-no-fluff-prep-guide-6-c4cd0d6e3e38',
  },
  {
    title: 'A User Made My Agent Leak Data',
    type: 'AI Security',
    description: 'Exploring the risks when an agent trusts instructions from untrusted inputs.',
    href: 'https://medium.com/@vishal_13_/5-a-user-made-my-agent-leak-data-114692fe4ce6',
  },
  {
    title: 'The Infinite Loop of Doom',
    type: 'Agent Reliability',
    description: 'What happens when an agent keeps retrying the same failing action.',
    href: 'https://medium.com/@vishal_13_/4-the-infinite-loop-of-doom-%EF%B8%8F-f4af5346c8ae',
  },
  {
    title: 'It Worked Yesterday, Failed Today',
    type: 'LLM Behaviour',
    description: 'Exploring why the same LLM test can produce different results.',
    href: 'https://medium.com/@vishal_13_/3-it-worked-yesterday-failed-today-c041eba5fe8a',
  },
];

const WritingSection = () => {
  return (
    <section className="writing-section section-card" id="writing">
      <div className="section-heading left-aligned">
        <p className="section-kicker">Writing</p>
        <h2 className="writing-title">
          Notes & Articles
        </h2>

      </div>

      <div className="writing-intro">
        <p>
          Lessons from building, preparing, and exploring — shared on Medium.
        </p>
      </div>

      <div className="writing-grid">
        {articles.map((article) => (
          <a
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            key={article.title}
            className="writing-card"

          >
            <div className="writing-topline">
              <span>{article.type}</span>
              <ArrowUpRight size={16} />
            </div>

            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <span className="writing-read-link">Read on Medium <ArrowUpRight size={15} /></span>
          </a>
        ))}
      </div>
      <a className="writing-all-link" href="https://medium.com/@vishal_13_" target="_blank" rel="noopener noreferrer">More writing on Medium <ArrowUpRight size={16} /></a>
    </section>
  );
};

export default WritingSection;
