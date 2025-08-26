import Logo from "/src/assets/Logo.png";
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

function Header() {
    // Mobile menu state
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Transparent header which gains background when you scroll
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Active link styles
    const getNavLinkClass = ({ isActive }) => 
        `hover:opacity-90 text-white hover:bg-secondary p-2 rounded-md transition-all duration-300 ${
            isActive ? 'bg-secondary text-primary' : ''
        }`;

    const getMobileNavLinkClass = ({ isActive }) =>
        `w-full  p-4 hover:bg-primary hover:text-white transition-all rounded-lg cursor-pointer ${
            isActive ? 'bg-secondary/30 border-secondary border-l-4 text-light' : ''
        }`;

    return (
        <div>
            {/* Blur overlay for mobile menu */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 sm:hidden"
                    onClick={closeMenu}
                />
            )}

            <header className={`fixed w-full top-0 left-0 right-0 z-50 p-2 transition-colors duration-500 ${
                 scrolled ? 'bg-slate-900 bg-opacity-90' : 'bg-transparent'
            }`}>
                {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-primary bg-opacity-10 backdrop-blur-md z-40 sm:hidden"
                    onClick={closeMenu}
                />
            )}
                <section className="container mx-auto px-3 flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="text-xl flex items-center gap-3">
                        <h1 className="text-secondary font-bold text-2xl">Appuxs LLC</h1>
                        <h1 className="text-secondary"></h1>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="sm:hidden">
                        <button 
                            onClick={toggleMenu} 
                            className="text-2xl text-white focus:outline-none z-50 relative" 
                        >
                            {isMenuOpen ? "" : "☰"}
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden sm:flex space-x-4 2xl:space-x-10 text-base" aria-label="main">
                        <NavLink to="/" className={getNavLinkClass}>
                            Home
                        </NavLink>
                        <NavLink to="/services" className={getNavLinkClass}>
                            Services
                        </NavLink>
                        <NavLink to="/about" className={getNavLinkClass}>
                            About
                        </NavLink>
                        <NavLink to="/projects" className={getNavLinkClass}>
                            Portfolio
                        </NavLink>
                        <NavLink to="/faq" className={getNavLinkClass}>
                            FAQ
                        </NavLink>
                        <NavLink to="/contacts" className={getNavLinkClass}>
                            Contact Us
                        </NavLink>
                    </nav>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden sm:flex ">
                        
                        <NavLink to="/Project-Estimate" className="bg-secondary text-primary hover:bg-secondary/90 hover:text-light px-4 py-2 rounded-md transition-all duration-300">
                            Get Started
                        </NavLink>
                    </div>
                </section>
            </header>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0   w-3/4 bg-slate-900 text-light z-50 transform transition-transform duration-300 ease-in-out sm:hidden ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center p-4 border-b border-light/20">
                    <div className="flex items-center gap-3">
                        <img src={Logo} className="h-10" alt="Logo" />
                        
                    </div>
                    <button 
                        onClick={closeMenu}
                        className="text-2xl text-secondary px-2 rounded-md hover:bg-light/5 transition-colors"
                    >
                        ✕
                    </button>
                </div>

                {/* Mobile Menu Links */}
                <div className="flex p-2 flex-col">
                    <NavLink 
                        to="/" 
                        onClick={closeMenu} 
                        className={getMobileNavLinkClass}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/services" 
                        onClick={closeMenu} 
                        className={getMobileNavLinkClass}
                    >
                        Services
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        onClick={closeMenu} 
                        className={getMobileNavLinkClass}
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/projects" 
                        onClick={closeMenu} 
                        className={getMobileNavLinkClass}
                    >
                        Portfolio
                    </NavLink>
                    <NavLink 
                        to="/faq" 
                        onClick={closeMenu} 
                        className={getMobileNavLinkClass}
                    >
                        FAQ
                    </NavLink>
                    <NavLink 
                        to="/contacts" 
                        onClick={closeMenu} 
                        className={getMobileNavLinkClass}
                    >
                        Contact Us
                    </NavLink>

                    {/* Mobile Auth Buttons */}
                    <div className="p-4 flex flex-col space-y-3 border-t border-light/20 mt-4">
                        
                        <NavLink to="/Project-Estimate" 
                            onClick={closeMenu}
                            className="w-full text-center bg-secondary text-dark hover:bg-secondary/80  py-2 rounded-md transition-all duration-300"
                        >
                           Get Started
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;