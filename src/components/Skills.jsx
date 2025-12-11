import React from 'react';
import './Skills.css';
import data from '../data/portfolio.json';
import { Server, Cloud, Code, Terminal, Activity, Database } from 'lucide-react';

const Skills = () => {
    const { skills } = data;

    // Helper to get icon for category
    const getIcon = (category) => {
        switch (category) {
            case 'Cloud Platforms': return <Cloud size={24} />;
            case 'Containerization': return <Server size={24} />;
            case 'IAC': return <Code size={24} />;
            case 'CI/CD': return <Activity size={24} />;
            case 'Monitoring': return <Activity size={24} />;
            case 'Scripting': return <Terminal size={24} />;
            default: return <Database size={24} />;
        }
    };

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>

                <div className="skills-grid">
                    {Object.entries(skills).map(([category, items], index) => (
                        <div key={category} className="skill-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="skill-header">
                                <span className="skill-icon">{getIcon(category)}</span>
                                <h3 className="skill-category">{category}</h3>
                            </div>
                            <div className="skill-tags">
                                {items.map((skill) => (
                                    <span key={skill} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
