import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Personal Chefs",
        link: "/services/personal-chef",
        image: "/images/service-1.avif",
    },
    {
        title: "Wedding Events",
        link: "/services/wedding-events",
        image: "/images/service-2.avif",
    },
    {
        title: "Conference Catering",
        link: "/services/conference-catering",
        image: "/images/service-3.avif",
    },
    {
        title: "Corporate Events",
        link: "/services/corporate-events",
        image: "/images/service-4.avif",
    }
];

const ServicesOverview = () => {
    return (
        <section
            id="services"
            className="py-24 md:py-32"
            style={{ backgroundColor: '#F0EBE2' }}
        >
            <div className="w-full px-8 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
                {/* Section Header */}
                <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm font-medium uppercase tracking-[0.2em] mb-6"
                            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                            Services
                        </p>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1]"
                            style={{ fontFamily: "'Moranga', serif", fontWeight: 300, color: '#1A1817' }}>
                            Serving up <br />
                            <span style={{ fontStyle: 'italic', color: '#B4CCBA' }}>thoughtful</span> <br />
                            menus
                        </h2>
                    </motion.div>

                    <motion.p
                        className="max-w-md text-base md:text-lg leading-relaxed mb-2"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: 'rgba(26, 24, 23, 0.7)' }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        From corporate retreats and professional networking events to anniversaries,
                        birthdays and special life milestones, we transform your event into a memorable
                        moment that connects people together through food.
                    </motion.p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group relative overflow-hidden block"
                            style={{ aspectRatio: '3 / 4' }}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link to={service.link} className="absolute inset-0 z-20" />
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 transition-opacity duration-500"
                                style={{ backgroundColor: 'rgba(26, 24, 23, 0.25)' }} />
                            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                                <h3 className="text-xl md:text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                    style={{ fontFamily: "'Moranga', serif", fontWeight: 300, color: '#F0EBE2' }}>
                                    {service.title}
                                </h3>
                                <div className="h-[1px] w-0 group-hover:w-full transition-all duration-500 mt-3"
                                    style={{ backgroundColor: '#F0EBE2' }} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Link to Menu */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Link
                        to="/menu"
                        className="inline-block px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, border: '1px solid #1A1817', color: '#1A1817' }}
                        onMouseEnter={(e) => { e.target.style.backgroundColor = '#1A1817'; e.target.style.color = '#F0EBE2'; }}
                        onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#1A1817'; }}
                    >
                        Check our Menu
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesOverview;
