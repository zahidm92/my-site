import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import './Hero.css';
import data from '../data/portfolio.json';

const Hero = () => {
    const { profile } = data;

    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-content animate-fade-in">
                    <span className="hero-greeting">Hello, I'm</span>
                    <h1 className="hero-name">{profile.name}</h1>
                    <h2 className="hero-title">{profile.title}</h2>
                    <p className="hero-tagline">{profile.tagline}</p>
                    <p className="hero-description">{profile.about}</p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </div>

                    <div className="hero-socials">
                        <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="Github">
                            <Github size={24} />
                        </a>
                        <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Twitter size={24} />
                        </a>
                        <a href={`mailto:${profile.email}`} aria-label="Email">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                {/* Optional: Add a hero image or visual element here if desired */}
                <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="code-block">
                        <div className="code-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <pre>
                            <code>
                                <span className="keyword">resource</span> <span className="string">"aws_instance"</span> <span className="variable">"web"</span> {'{'}
                                <span className="property">ami</span>           = <span className="string">"ami-0c55b159cbfafe1f0"</span>
                                <span className="property">instance_type</span> = <span className="string">"t3.micro"</span>

                                <span className="property">tags</span> = {'{'}
                                <span className="property">Name</span> = <span className="string">"DevOps-Portfolio"</span>
                                {'}'}
                                {'}'}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
