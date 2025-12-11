import React from 'react';
import './Experience.css';
import data from '../data/portfolio.json';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const { experience } = data;

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Work Experience</h2>

                <div className="timeline">
                    {experience.map((job, index) => (
                        <div key={job.id} className="timeline-item animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3 className="role">{job.role}</h3>
                                    <span className="company">
                                        <Briefcase size={16} /> {job.company}
                                    </span>
                                    <span className="period">
                                        <Calendar size={16} /> {job.period}
                                    </span>
                                </div>
                                <p className="description">{job.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
