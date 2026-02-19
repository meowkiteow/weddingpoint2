import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import SmoothScroll from '../components/SmoothScroll';

const ServicePage = ({ data }) => {
    const introText = "We are a boutique catering company that serves up thoughtful menus and moments. Known for personalizing our catering, we craft creative, tasteful, and intuitive culinary experiences that inspire the way we gather. Food should be as comforting as it is beautiful. And events should be as simple as they are stunning.";

    return (
        <MainLayout>
            <SmoothScroll />

            {/* ===== HERO ===== */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20" style={{ backgroundColor: '#F0EBE2' }}>
                <div className="w-full px-8 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
                    {/* Title */}
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.9]"
                            style={{ fontFamily: "'Moranga', serif", fontWeight: 300, color: '#1A1817' }}>
                            {data.title.map((line, i) => (
                                <span key={i} className="block">{line}</span>
                            ))}
                        </h1>
                    </motion.div>

                    {/* Subtitle + Image row */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        <motion.p
                            className="text-lg md:text-xl leading-relaxed max-w-lg lg:w-2/5"
                            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: 'rgba(26, 24, 23, 0.7)' }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {data.subtitle}
                        </motion.p>

                        <motion.div
                            className="lg:w-3/5 overflow-hidden"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <img
                                src={data.heroImage}
                                alt={data.title.join(' ')}
                                className="w-full h-[50vh] lg:h-[60vh] object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== INTRO TEXT ===== */}
            <section className="py-20 md:py-28" style={{ backgroundColor: '#F0EBE2' }}>
                <div className="w-full px-8 md:px-12 lg:px-16 max-w-[1200px] mx-auto">
                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-center"
                        style={{ fontFamily: "'Moranga', serif", fontWeight: 300, color: '#1A1817' }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {introText}
                    </motion.p>
                </div>
            </section>

            {/* ===== PARALLAX IMAGE ===== */}
            <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
                <motion.img
                    src={data.images.section1}
                    alt=""
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.15 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                />
            </section>

            {/* ===== HOW IT WORKS ===== */}
            <section className="py-24 md:py-32" style={{ backgroundColor: '#F0EBE2' }}>
                <div className="w-full px-8 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
                    <motion.h2
                        className="text-5xl md:text-7xl lg:text-9xl mb-20"
                        style={{ fontFamily: "'Moranga', serif", fontWeight: 300, color: '#1A1817' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {data.howItWorks.heading.map((line, i) => (
                            <span key={i} className="block">{line}</span>
                        ))}
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                        {data.howItWorks.steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-sm mb-6 block"
                                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: 'rgba(26, 24, 23, 0.4)' }}>
                                    {step.number}
                                </span>
                                <h3 className="text-2xl md:text-3xl mb-5"
                                    style={{ fontFamily: "'Moranga', serif", fontWeight: 300, color: '#1A1817' }}>
                                    {step.title}
                                </h3>
                                <p className="text-base leading-relaxed"
                                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: 'rgba(26, 24, 23, 0.7)' }}>
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PARALLAX IMAGE 2 ===== */}
            <section className="relative h-[50vh] md:h-[70vh] overflow-hidden">
                <motion.img
                    src={data.images.section2}
                    alt=""
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.15 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                />
            </section>

            {/* ===== SERVICES / WHAT WE SERVE ===== */}
            <section className="py-24 md:py-32" style={{ backgroundColor: '#F0EBE2' }}>
                <div className="w-full px-8 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
                    <motion.h2
                        className="text-5xl md:text-7xl lg:text-9xl mb-16"
                        style={{ fontFamily: "'Moranga', serif", fontWeight: 300, color: '#1A1817' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {data.services.heading.map((line, i) => (
                            <span key={i} className="block">{line}</span>
                        ))}
                    </motion.h2>

                    {data.services.description && (
                        <motion.p
                            className="text-lg md:text-xl leading-relaxed max-w-3xl mb-16"
                            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: 'rgba(26, 24, 23, 0.7)' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {data.services.description}
                        </motion.p>
                    )}

                    {data.services.items.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {data.services.items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="border-t pt-8"
                                    style={{ borderColor: 'rgba(26, 24, 23, 0.1)' }}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-2xl md:text-3xl mb-4"
                                        style={{ fontFamily: "'Moranga', serif", fontWeight: 300, color: '#1A1817' }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-base leading-relaxed"
                                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: 'rgba(26, 24, 23, 0.7)' }}>
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ===== PARALLAX IMAGE 3 ===== */}
            <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
                <motion.img
                    src={data.images.section3}
                    alt=""
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.15 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                />
            </section>
        </MainLayout>
    );
};

export default ServicePage;
