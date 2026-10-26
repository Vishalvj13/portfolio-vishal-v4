import React, { useMemo, useState } from 'react';
import '../styles/Skills.css';
import {
    Brain,
    Blocks,
    Code2,
    Cloud,
    Database,
    Wrench,
    ShieldCheck,
    Coffee,
    Leaf,
    Network,
    Webhook,
    FileJson,
    Palette,
    MonitorSmartphone,
    Layers3,
    CloudCog,
    Container,
    ServerCog,
    KeyRound,
    GitBranch,
    GitPullRequest,
    Bug,
    TestTube2,
    LockKeyhole,
    Gauge,
    Users,
} from 'lucide-react';

const skillCategories = [
    {
        key: 'backend',
        label: 'Backend',
        icon: <Brain size={18} />,
        colorClass: 'icon-backend',
        title: 'Backend',
        description:
            'Java services, APIs, and enterprise application development.',
        skills: [
            {
                title: 'Java',
                icon: <Coffee size={18} />,
                colorClass: 'icon-java',
                description:
                    'Enterprise services and business logic.',
            },
            {
                title: 'Spring Boot',
                icon: <Leaf size={18} />,
                colorClass: 'icon-spring',
                description:
                    'REST services, validation, and application configuration.',
            },
            {
                title: 'Hibernate / JPA',
                icon: <Database size={18} />,
                colorClass: 'icon-hibernate',
                description:
                    'Entity relationships and relational persistence.',
            },
            {
                title: 'Microservices',
                icon: <Network size={18} />,
                colorClass: 'icon-microservices',
                description:
                    'Service boundaries, communication, and integration.',
            },
            {
                title: 'REST APIs',
                icon: <Webhook size={18} />,
                colorClass: 'icon-api',
                description:
                    'API contracts, error handling, and integration.',
            },
            {
                title: 'JSON & Payload Design',
                icon: <FileJson size={18} />,
                colorClass: 'icon-json',
                description:
                    'Request models and consistent data contracts.',
            },
        ],
    },
    {
        key: 'frontend',
        label: 'Frontend',
        icon: <Blocks size={18} />,
        colorClass: 'icon-frontend',
        title: 'Frontend',
        description:
            'Responsive interfaces and component-based development.',
        skills: [
            {
                title: 'React',
                icon: <Code2 size={18} />,
                colorClass: 'icon-react',
                description:
                    'Reusable components and interactive interfaces.',
            },
            {
                title: 'JavaScript',
                icon: <Code2 size={18} />,
                colorClass: 'icon-js',
                description:
                    'Events, state updates, and API integration.',
            },
            {
                title: 'HTML / CSS',
                icon: <Palette size={18} />,
                colorClass: 'icon-htmlcss',
                description:
                    'Responsive layouts, typography, and styling.',
            },
            {
                title: 'Theme Systems',
                icon: <MonitorSmartphone size={18} />,
                colorClass: 'icon-theme',
                description:
                    'Consistent light and dark appearances.',
            },
            {
                title: 'State-driven UI',
                icon: <Layers3 size={18} />,
                colorClass: 'icon-state',
                description:
                    'Component state and conditional rendering.',
            },
            {
                title: 'UX-minded Delivery',
                icon: <Users size={18} />,
                colorClass: 'icon-ux',
                description:
                    'Clear interactions and useful feedback.',
            },
        ],
    },
    {
        key: 'cloud',
        label: 'Cloud & DevOps',
        icon: <Cloud size={18} />,
        colorClass: 'icon-cloud',
        title: 'Cloud & DevOps',
        description:
            'AWS infrastructure, security automation, and delivery pipelines.',
        skills: [
            {
                title: 'AWS Core Services',
                icon: <CloudCog size={18} />,
                colorClass: 'icon-aws',
                description:
                    'EC2, S3, IAM, and cloud monitoring.',
            },
            {
                title: 'Cloud Security',
                icon: <ShieldCheck size={18} />,
                colorClass: 'icon-security',
                description:
                    'Governance policies and automated remediation.',
            },
            {
                title: 'CI/CD Pipelines',
                icon: <GitPullRequest size={18} />,
                colorClass: 'icon-cicd',
                description:
                    'Build, deployment, and security pipelines.',
            },
            {
                title: 'Docker',
                icon: <Container size={18} />,
                colorClass: 'icon-docker',
                description:
                    'Application packaging and portable environments.',
            },
            {
                title: 'Automation Workflows',
                icon: <ServerCog size={18} />,
                colorClass: 'icon-automation',
                description:
                    'Validation, cleanup, and repeatable workflows.',
            },
            {
                title: 'IAM / Access Control',
                icon: <KeyRound size={18} />,
                colorClass: 'icon-iam',
                description:
                    'Roles, permissions, and multi-account access.',
            },
        ],
    },
    {
        key: 'databases',
        label: 'Databases',
        icon: <Database size={18} />,
        colorClass: 'icon-database',
        title: 'Databases',
        description:
            'Relational data, persistence, and query design.',
        skills: [
            {
                title: 'MySQL',
                icon: <Database size={18} />,
                colorClass: 'icon-mysql',
                description:
                    'Relational schemas and application storage.',
            },
            {
                title: 'SQL',
                icon: <Database size={18} />,
                colorClass: 'icon-sql',
                description:
                    'Queries, joins, aggregation, and optimization.',
            },
            {
                title: 'Entity Mapping',
                icon: <Layers3 size={18} />,
                colorClass: 'icon-entity',
                description:
                    'Mapping application models to database tables.',
            },
            {
                title: 'Repository Patterns',
                icon: <Database size={18} />,
                colorClass: 'icon-repository',
                description:
                    'Organized and reusable data access.',
            },
        ],
    },
    {
        key: 'tools',
        label: 'Tools',
        icon: <Wrench size={18} />,
        colorClass: 'icon-tools',
        title: 'Tools & Collaboration',
        description:
            'Tools for development, testing, and team delivery.',
        skills: [
            {
                title: 'Git & GitHub',
                icon: <GitBranch size={18} />,
                colorClass: 'icon-git',
                description:
                    'Version control, branches, and code reviews.',
            },
            {
                title: 'Postman',
                icon: <Webhook size={18} />,
                colorClass: 'icon-postman',
                description:
                    'API testing and request validation.',
            },
            {
                title: 'Jira / Agile Delivery',
                icon: <Users size={18} />,
                colorClass: 'icon-jira',
                description:
                    'Sprint planning, issue tracking, and delivery.',
            },
            {
                title: 'IntelliJ / VS Code',
                icon: <Code2 size={18} />,
                colorClass: 'icon-editor',
                description:
                    'Development, debugging, and code navigation.',
            },
            {
                title: 'Documentation & Writeups',
                icon: <FileJson size={18} />,
                colorClass: 'icon-docs',
                description:
                    'Technical notes and clear implementation guides.',
            },
        ],
    },
    {
        key: 'practices',
        label: 'Practices',
        icon: <ShieldCheck size={18} />,
        colorClass: 'icon-practices',
        title: 'Engineering Practices',
        description:
            'Reliable, secure, and maintainable software.',
        skills: [
            {
                title: 'Debugging',
                icon: <Bug size={18} />,
                colorClass: 'icon-debug',
                description:
                    'Tracing issues across services and environments.',
            },
            {
                title: 'Testing Mindset',
                icon: <TestTube2 size={18} />,
                colorClass: 'icon-testing',
                description:
                    'Unit tests, integration checks, and edge cases.',
            },
            {
                title: 'Secure Coding',
                icon: <LockKeyhole size={18} />,
                colorClass: 'icon-securecoding',
                description:
                    'Vulnerability fixes and defensive implementation.',
            },
            {
                title: 'Performance Awareness',
                icon: <Gauge size={18} />,
                colorClass: 'icon-performance',
                description:
                    'Efficient queries, caching, and validation.',
            },
            {
                title: 'API & Service Design',
                icon: <Webhook size={18} />,
                colorClass: 'icon-servicedesign',
                description:
                    'Clear contracts and maintainable services.',
            },
            {
                title: 'Collaborative Delivery',
                icon: <Users size={18} />,
                colorClass: 'icon-collaboration',
                description:
                    'Working across QA, DevOps, and security teams.',
            },
        ],
    },
];

const Skills = () => {
    const [activeTab, setActiveTab] = useState('backend');
    const activeCategory = useMemo(() => skillCategories.find(item => item.key === activeTab), [activeTab]);
    const handleKeyDown = (event, index) => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % skillCategories.length;
        if (event.key === 'ArrowLeft') next = (index + skillCategories.length - 1) % skillCategories.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = skillCategories.length - 1;
        if (next === undefined) return;
        event.preventDefault();
        setActiveTab(skillCategories[next].key);
        document.getElementById(`skill-tab-${skillCategories[next].key}`)?.focus();
    };
    return (
        <section className="skills-section section-card" id="skills">
            <div className="section-heading left-aligned">
                <p className="section-kicker">Skills</p>
                <h2 className="skills-title">Technical Toolkit</h2>
                <p className="skills-intro">Java, Spring Boot, and AWS are at the core of my work. Explore the tools and practices I use around them.</p>
            </div>
            <div className="skills-tab-row" role="tablist" aria-label="Skill categories">
                {skillCategories.map((category, index) => (
                    <button key={category.key} type="button" id={`skill-tab-${category.key}`} className={`skills-tab ${activeTab === category.key ? 'active' : ''}`} role="tab" aria-selected={activeTab === category.key} aria-controls="skills-panel" tabIndex={activeTab === category.key ? 0 : -1} onClick={() => setActiveTab(category.key)} onKeyDown={event => handleKeyDown(event, index)}>
                        {category.icon}<span>{category.label}</span>
                    </button>
                ))}
            </div>
            <div id="skills-panel" role="tabpanel" aria-labelledby={`skill-tab-${activeTab}`} tabIndex={0}>
                <p className="skills-category-description">{activeCategory.description}</p>
                <div className="skills-grid">
                    {activeCategory.skills.map(skill => (
                        <article className="skill-card" key={skill.title}>
                            <div className="skill-card-title-row">
                                <span className={`skill-card-icon ${skill.colorClass}`}>{skill.icon}</span>
                                <h3>{skill.title}</h3>
                            </div>
                            <p>{skill.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
