import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Header.scss';

let Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState); 
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false); 
    };

    return (
        <header>
            <nav>
                <div className="menu-icon" onClick={toggleSidebar}>
                    <span className={`bar ${isSidebarOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${isSidebarOpen ? 'active' : ''}`}></span>
                    <span className={`bar ${isSidebarOpen ? 'active' : ''}`}></span>
                </div>
                <ul className={`menu-list ${isSidebarOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
                    <li><Link to="/skills" onClick={closeSidebar}>Skills</Link></li>
                    <li><Link to="/projects" onClick={closeSidebar}>Projects</Link></li>
                    <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
                </ul>
            </nav>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
                    <li><Link to="/skills" onClick={closeSidebar}>Skills</Link></li>
                    <li><Link to="/projects" onClick={closeSidebar}>Projects</Link></li>
                    <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
