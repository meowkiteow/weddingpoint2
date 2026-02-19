import React from 'react';
import { Link } from 'react-router-dom';

const serviceLinks = [
    { label: 'Personal Chefs', href: '/services/personal-chef' },
    { label: 'Wedding Events', href: '/services/wedding-events' },
    { label: 'Conference Catering', href: '/services/conference-catering' },
    { label: 'Corporate Events', href: '/services/corporate-events' },
];

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1A1817' }}>
            {/* CTA Section */}
            <div className="py-20 md:py-28 text-center" style={{ borderTop: '1px solid rgba(240, 235, 226, 0.1)' }}>
                <div className="w-full px-8 md:px-12 lg:px-16 max-w-[800px] mx-auto">
                    <p className="text-base md:text-lg mb-10" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: 'rgba(240, 235, 226, 0.7)' }}>
                        We are a boutique catering company that serves up thoughtful menus and moments.
                    </p>
                    <a
                        href="https://calendly.com/marquet-nyc/book-me" target="_blank" rel="noopener noreferrer"
                        className="inline-block px-10 py-4 rounded-full text-base font-medium tracking-wide transition-all duration-300"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, border: '1px solid #F0EBE2', color: '#F0EBE2' }}
                        onMouseEnter={(e) => { e.target.style.backgroundColor = '#F0EBE2'; e.target.style.color = '#1A1817'; }}
                        onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#F0EBE2'; }}
                    >
                        Schedule a Call
                    </a>
                </div>
            </div>

            {/* Footer Nav */}
            <div className="py-12 px-8 md:px-12 lg:px-16" style={{ borderTop: '1px solid rgba(240, 235, 226, 0.1)' }}>
                <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="flex flex-col gap-6">
                        <Link to="/" className="text-2xl" style={{ fontFamily: "'Moranga', serif", fontWeight: 300, color: '#F0EBE2' }}>Marquet</Link>
                        <nav className="flex flex-wrap gap-x-6 gap-y-3">
                            {[
                                { label: 'Home', to: '/' },
                                { label: 'About Us', to: '/about-us' },
                                { label: 'Menu', to: '/menu' },
                            ].map((link) => (
                                <Link key={link.to} to={link.to} className="text-sm transition-opacity duration-300 hover:opacity-100"
                                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: 'rgba(240, 235, 226, 0.5)' }}>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Service Links */}
                    <div className="flex flex-col gap-3">
                        {serviceLinks.map((link) => (
                            <Link key={link.href} to={link.href} className="text-sm transition-opacity duration-300 hover:opacity-100"
                                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: 'rgba(240, 235, 226, 0.5)' }}>
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Contact + Socials */}
                    <div className="flex flex-col items-start md:items-end gap-4">
                        <a href="mailto:contact@marquet.nyc" className="text-sm transition-opacity duration-300 hover:opacity-100"
                            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: 'rgba(240, 235, 226, 0.7)' }}>
                            contact@marquet.nyc
                        </a>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/marquet.nyc/" target="_blank" rel="noopener noreferrer"
                                className="transition-opacity duration-300 hover:opacity-100" style={{ color: 'rgba(240, 235, 226, 0.5)' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="5" />
                                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/annamarie-marquet111/" target="_blank" rel="noopener noreferrer"
                                className="transition-opacity duration-300 hover:opacity-100" style={{ color: 'rgba(240, 235, 226, 0.5)' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
