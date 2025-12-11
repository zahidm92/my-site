import React, { useState } from 'react';
import './Contact.css'; // We'll add basic styles in a css file or reuse utils

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            e.target.reset();
        }, 1500);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-intro">
                    Interested in working together or have a question?
                    Feel free to reach out. I'm always open to discussing new projects,
                    creative ideas or opportunities to be part of your visions.
                </p>

                <div className="contact-card">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" required placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" required placeholder="john@example.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" required placeholder="Hello, I'd like to discuss..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : (status === 'success' ? 'Message Sent!' : 'Send Message')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
