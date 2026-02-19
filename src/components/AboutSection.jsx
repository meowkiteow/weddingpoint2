import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <section
            id="about"
            className="py-24 md:py-32 overflow-hidden"
            style={{ backgroundColor: '#F0EBE2' }}
        >
            <div className="w-full px-8 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
                {/* Section Label */}
                <motion.div
                    className="mb-16 md:mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2
                        className="text-5xl md:text-7xl lg:text-9xl text-center"
                        style={{
                            fontFamily: "'Moranga', serif",
                            fontWeight: 300,
                            color: '#1A1817',
                        }}
                    >
                        Marquet
                    </h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Image */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative overflow-hidden" style={{ aspectRatio: '3 / 4' }}>
                            <img
                                src="/images/about-anna.avif"
                                alt="Chef Annamarie"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p
                            className="text-xl md:text-2xl leading-relaxed mb-12"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 300,
                                color: 'rgba(26, 24, 23, 0.8)',
                            }}
                        >
                            The chef behind Marquet, Annamarie is known for designing events that
                            celebrate the heart and soul of her clients. Believing that exceptional
                            food and presentation should be the staple of every gathering, Annamarie
                            is committed to creating moments of comfort and connection with each
                            dish she serves up.
                        </p>

                        <a
                            href="/about-us"
                            className="inline-block px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 500,
                                border: '1px solid #1A1817',
                                color: '#1A1817',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#1A1817';
                                e.target.style.color = '#F0EBE2';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = '#1A1817';
                            }}
                        >
                            About Us
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
