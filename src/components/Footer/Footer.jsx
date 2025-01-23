import React from "react";
import './Footer.scss';

let Footer = () => {

    return <>
    <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2025 Mirapakayala Prasanna. All rights reserved.</p>
                    <p>
                        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a> | 
                        <a href="https://www.linkedin.com/in/mirapakayala-prasanna-aa8315256" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                    </p>
                </div>
            </footer>
    </>
}
export default Footer;