import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

function Navbar() {
    const [responsiveNav, setResponsiveNav] = useState('collapse navbar-collapse');
    const [collapseNavbar, setCollapseNavbar] = useState('navbar-toggler collapsed');
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        // Set navbar color based on theme
        const navbarColor = theme === 'light' ? 'bg-white' : 'bg-dark-blue';
        setResponsiveNav(`collapse navbar-collapse ${navbarColor}`);
    }, [theme]);

    const handleResponsive = () => {
        setResponsiveNav(responsiveNav === 'collapse navbar-collapse' ? 'navbar-collapse collapse show' : 'collapse navbar-collapse');
        setCollapseNavbar(collapseNavbar === 'navbar-toggler collapsed' ? 'navbar-toggler' : 'navbar-toggler collapsed');
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-light py-3 ${theme === 'light' ? 'bg-white' : 'bg-dark-blue'}`}>
            <div className="container px-5">
                <Link className="navbar-brand" to="#"><span className="fw-bolder text-primary">Web Dev Sweta</span></Link>
                <button className={collapseNavbar} type="button" onClick={handleResponsive} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={responsiveNav} id="navbarSupportedContent" >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder d-flex justify-content-center align-items-center" >
                        <li className="nav-item"><Link className={`nav-link ${theme === 'light' ? 'text-grey' : 'text-white'}`} to="/">Home</Link></li>
                        <li className="nav-item"><Link className={`nav-link ${theme === 'light' ? 'text-grey' : 'text-white'}`} to="/resume">Resume</Link></li>
                        <li className="nav-item"><Link className={`nav-link ${theme === 'light' ? 'text-grey' : 'text-white'}`} to="/projects">Projects</Link></li>
                        <li className="nav-item"><Link className={`nav-link ${theme === 'light' ? 'text-grey' : 'text-white'}`} to="/contact">Contact</Link></li>
                        <li className='nav-item'><i className={`bi ${theme === 'light' ? 'bi-brightness-high' : 'bi-moon'} mode`} onClick={toggleTheme} style={{ fontSize: '30px', cursor: 'pointer' }}></i></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
