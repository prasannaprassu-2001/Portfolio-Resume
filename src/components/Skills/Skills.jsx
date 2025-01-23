import React from 'react';
import './Skills.scss';

function Skills() {
    return (
        <section className="skills-section">
            <h1 className="skills-title">Skills</h1>
            <ul className="skills-list">
                <li className="skills-item">HTML5, CSS3, SCSS</li>
                <li className="skills-item">JavaScript (ES6+), React.js, Redux</li>
                <li className="skills-item">REST APIs, GraphQL</li>
                <li className="skills-item">Version Control (GIT), Agile (JIRA)</li>
            </ul>
        </section>
    );
}

export default Skills;
