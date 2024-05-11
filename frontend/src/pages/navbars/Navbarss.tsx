import React, { useState } from 'react';
import './Navbar.css';

function Navbarss() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle mobile menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="custom-navbar">
            {/* Container */}
            <div className="custom-navbar-container">
                {/* Logo */}
                <div className="custom-logo">
                    <a href="/">Profiler</a>
                </div>

                {/* Navigation Links for larger screens */}
                <div className={`custom-nav-links ${isMenuOpen ? 'open' : ''} md:block`}>
                    <a href="" className="custom-nav-link">Home</a>
                    <a href="" className="custom-nav-link">About</a>
                    <a href="" className="custom-nav-link">Ranking</a>
                    <a href="/" className="custom-nav-link">Logout</a>
                </div>

                {/* Mobile Menu Button */}
                <button className="custom-menu-button md:hidden" onClick={toggleMenu}>
                    <span className="custom-menu-icon">{isMenuOpen ? '×' : '☰'}</span>
                </button>
            </div>
        </nav>
    );
}

export default Navbarss;
