import React from 'react'; 
import './Contact.scss';

function Contact() {
    return (
        <section className="contact-section">
            <h1 className="contact-title">Contact</h1>
            <p className="contact-info">Email: <a href="mailto:mirapakayalaprasanna2001@gmail.com" className="contact-link">mirapakayalaprasanna2001@gmail.com</a></p>
            <p className="contact-info">Phone: <a href="tel:+919490598882" className="contact-link">9490598882</a></p>
            <p className="contact-info">
                <a href="https://www.linkedin.com/in/mirapakayala-prasanna-aa8315256" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
            </p>
            <p className="contact-info">
                <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
            </p>
            <p className="contact-info">
                <a href="https://prasanna-ecommerce.vercel.app/" target="_blank" rel="noopener noreferrer" className="contact-link">Vercel Project</a>
            </p>
        </section>
    );
}

export default Contact;
