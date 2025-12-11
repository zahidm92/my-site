import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--bg-primary)',
            padding: '2rem 1rem',
            textAlign: 'center',
            marginTop: 'auto',
            borderTop: '1px solid var(--border-color)'
        }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                © {new Date().getFullYear()} Zahid DevOps. Built with React & Vite.
            </p>
        </footer>
    );
};

export default Footer;
