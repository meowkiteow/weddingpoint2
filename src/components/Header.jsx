import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const serviceLinks = [
    { label: 'Personal Chefs', href: '/services/personal-chef' },
    { label: 'Wedding Events', href: '/services/wedding-events' },
    { label: 'Conference Catering', href: '/services/conference-catering' },
    { label: 'Corporate Events', href: '/services/corporate-events' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
        setServicesOpen(false);
        window.scrollTo(0, 0);
    }, [location]);

    // On non-home pages, header starts scrolled (cream bg / dark text)
    const showDark = isHome ? isScrolled : true;

    const textColor = showDark ? '#1A1817' : '#F0EBE2';
    const bgColor = showDark ? 'rgba(240, 235, 226, 0.95)' : 'transparent';

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
            style={{
                backgroundColor: bgColor,
                backdropFilter: showDark ? 'blur(12px)' : 'none',
            }}
        >
            <div className="w-full px-6 md:px-12 lg:px-16 py-4 md:py-5 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-xl md:text-2xl tracking-tight z-50 relative transition-colors duration-500"
                    style={{
                        fontFamily: "'Moranga', serif",
                        fontWeight: 300,
                        color: textColor,
                    }}
                >
                    Marquet
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {/* Services+ Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <Link
                            to="/menu"
                            className="text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 flex items-center gap-1"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 500,
                                color: textColor,
                            }}
                        >
                            Services
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5">
                                <path d="M1 1L5 5L9 1" stroke={textColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>

                        <AnimatePresence>
                            {servicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 8 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 mt-2 py-3 px-1 min-w-[220px] rounded-lg shadow-xl"
                                    style={{ backgroundColor: '#F0EBE2', border: '1px solid rgba(26, 24, 23, 0.08)' }}
                                >
                                    {serviceLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            to={link.href}
                                            className="block px-4 py-2.5 text-sm rounded-md transition-all duration-200 hover:bg-[rgba(26,24,23,0.05)]"
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontWeight: 400,
                                                color: '#1A1817',
                                            }}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link
                        to="/menu"
                        className="text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                            color: textColor,
                        }}
                    >
                        Menu
                    </Link>

                    <Link
                        to="/about-us"
                        className="text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                            color: textColor,
                        }}
                    >
                        About Us
                    </Link>

                    {/* Desktop Get In Touch */}
                    <a
                        href="https://calendly.com/marquet-nyc/book-me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-7 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                            border: `1px solid ${textColor}`,
                            color: textColor,
                            backgroundColor: 'transparent',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = showDark ? '#1A1817' : '#F0EBE2';
                            e.target.style.color = showDark ? '#F0EBE2' : '#1A1817';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = textColor;
                        }}
                    >
                        Get In Touch
                    </a>
                </nav>

                {/* Mobile Actions (Button + Hamburger) */}
                <div className="md:hidden flex items-center gap-4">
                    <a
                        href="https://calendly.com/marquet-nyc/book-me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                            border: `1px solid ${textColor}`,
                            color: textColor,
                            backgroundColor: 'transparent',
                        }}
                    >
                        Get In Touch
                    </a>

                    <button
                        className="z-50 relative p-1"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{ color: mobileMenuOpen ? '#1A1817' : textColor }}
                    >
                        <div className="flex flex-col gap-1.5">
                            <motion.div
                                className="w-6 h-[1.5px] rounded-full bg-current"
                                animate={mobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                            />
                            <motion.div
                                className="w-6 h-[1.5px] rounded-full bg-current"
                                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            />
                            <motion.div
                                className="w-6 h-[1.5px] rounded-full bg-current"
                                animate={mobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6"
                        style={{ backgroundColor: '#EEB4BB' }} // Dusty Rose
                    >
                        <div className="flex flex-col items-center gap-6 mt-12">
                            {[
                                { label: 'Home', to: '/' },
                                { label: 'About Us', to: '/about-us' },
                                { label: 'Menu', to: '/menu' },
                                ...serviceLinks.map(s => ({ label: s.label, to: s.href })),
                            ].map((link, i) => (
                                <motion.div
                                    key={link.to}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                                >
                                    <Link
                                        to={link.to}
                                        className="text-3xl md:text-4xl block text-center"
                                        style={{
                                            fontFamily: "'Moranga', serif",
                                            fontWeight: 300,
                                            color: '#1A1817'
                                        }}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Menu Socials */}
                        <motion.div
                            className="absolute bottom-8 right-8 flex gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            {/* Add Social Icons if needed, for now just text or placeholders */}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
