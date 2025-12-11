import React, { useState } from 'react';
import './Projects.css';
import data from '../data/portfolio.json';
import { Github, ExternalLink, Tag } from 'lucide-react';

const Projects = () => {
    const { projects } = data;
    const [filter, setFilter] = useState('All');

    // Extract unique categories
    const categories = ['All', ...new Set(projects.map(p => p.category))];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div key={project.id} className="project-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} className="project-link" aria-label="View Code" target="_blank" rel="noopener noreferrer">
                                            <Github size={24} />
                                        </a>
                                        <a href={project.link} className="project-link" aria-label="View Project" target="_blank" rel="noopener noreferrer">
                                            <ExternalLink size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <span className="project-category">{project.category}</span>
                                </div>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="project-tag">
                                            <Tag size={12} className="tag-icon" /> {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
