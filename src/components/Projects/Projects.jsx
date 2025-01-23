import React from 'react';
import './Projects.scss';

function Projects() {
    return (
        <section className="projects-section">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-cards-container">
                <article className="project-card">
                    <h2 className="project-title">TAFE Queensland</h2>
                    <p className="project-description">Developed components and optimized the website using React.js and SCSS. Made the site responsive and browser-compatible.</p>
                    <a href="https://tafeqld.edu.au/" target="_blank" rel="noopener noreferrer" className="project-link">Visit TAFE Queensland</a>
                </article>
                <article className="project-card">
                    <h2 className="project-title">Western Sydney University</h2>
                    <p className="project-description">Created new UI components and ensured responsiveness across web applications using AEM and React.js.</p>
                    <a href="https://www.westernsydney.edu.au/" target="_blank" rel="noopener noreferrer" className="project-link">Visit WSU</a>
                </article>
            </div>
        </section>
    );
}

export default Projects;
