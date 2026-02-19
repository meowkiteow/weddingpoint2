import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import SmoothScroll from '../components/SmoothScroll';

const values = [
    {
        title: 'Heartfelt',
        description: 'Our culinary masterpieces are made with love and served as a work of art.',
    },
    {
        title: 'Memorable',
        description: 'Everything we do is created to be a moment to remember.',
    },
    {
        title: 'Comforting',
        description: 'We exist to provide moments of bliss.',
    },
    {
        title: 'Connected',
        description: 'We are dedicated to creating personalized gatherings through food.',
    },
    {
        title: 'Thoughtful',
        description: 'We design details that bring our client\'s visions to life.',
    },
];

const AboutPage = () => {
    return (
        <MainLayout>
            <SmoothScroll />

            {/* ===== HERO ===== */}
            <section className="pt-32 pb-8 md:pt-40 md:pb-12" style={{ backgroundColor: '#F0EBE2' }}>
                <div className="w-full px-8 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.9]"
                            style={{ fontFamily: "'Moranga', serif", fontWeight: 300, color: '#1A1817' }}>
                            <span className="block">Anna</span>
                            <span className="block">Marie</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Hero Image */}
            <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
                <motion.img
                    src="/images/68d6e5f41e9b1203de5657cb_landscape-big-about.avif"
                    alt="Chef Annamarie"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
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
                        We are a boutique catering company that creates thoughtful menus for social
                        gatherings. Formed on the belief that catering should be personal, we craft
                        creative, tasteful and intuitive dining experiences that inspire the way we
                        gather. Food should be as beautiful as it is comforting and events should be
                        as simple as they are meaningful.
                    </motion.p>
                </div>
            </section>

            {/* ===== "INSPIRING THE WAY WE GATHER" ===== */}
            <section className="py-8 md:py-12" style={{ backgroundColor: '#F0EBE2' }}>
                <div className="w-full px-8 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
                    <motion.h2
                        className="text-5xl md:text-7xl lg:text-9xl text-center leading-[1.1]"
                        style={{ fontFamily: "'Moranga', serif", fontWeight: 300, color: '#1A1817' }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Inspiring the way<br />we gather
                    </motion.h2>
                </div>
            </section>

            {/* ===== PARALLAX IMAGES ===== */}
            <section className="py-12 md:py-20" style={{ backgroundColor: '#F0EBE2' }}>
                <div className="w-full px-8 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            className="overflow-hidden"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <img src="/images/about-1.jpg" alt="About 1" className="w-full h-[60vh] object-cover" />
                        </motion.div>
                        <motion.div
                            className="overflow-hidden"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            viewport={{ once: true }}
                        >
                            <img src="/images/about-2.jpg" alt="About 2" className="w-full h-[60vh] object-cover" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== MEET CHEF ANNAMARIE ===== */}
            <section className="py-24 md:py-32" style={{ backgroundColor: '#F0EBE2' }}>
                <div className="w-full px-8 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-8xl"
                            style={{ fontFamily: "'Moranga', serif", fontWeight: 300, color: '#1A1817' }}>
                            <span className="block">Meet Chef</span>
                            <span className="block">Annamarie</span>
                        </h2>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        <motion.div
                            className="lg:w-2/5 overflow-hidden"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <img src="/images/68d6cd1e67c6f274f0c5325b_annamarie.avif" alt="Chef Annamarie"
                                className="w-full h-auto object-cover" />
                        </motion.div>

                        <motion.div
                            className="lg:w-3/5"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-lg md:text-xl leading-relaxed"
                                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: 'rgba(26, 24, 23, 0.75)' }}>
                                The visionary and executive chef behind Marquet, Annamarie has been
                                serving up culinary gatherings since 2019. Known for creating masterpieces
                                that celebrate the heart and soul of her clients, Annamarie makes food the
                                centerpiece for people to gather around. She has perfected turning simple
                                ingredients into both delicious food and a delightful work of art that
                                captures the ambiance of any gathering. Believing that exceptional food and
                                presentation should be the staple of every important moment, Annamarie is
                                committed to creating moments of comfort and connection with each dish she
                                serves up.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== ABOUT IMAGE ===== */}
            <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
                <motion.img
                    src="/images/about-gato.jpg"
                    alt="Marquet Food"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.15 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                />
            </section>

            {/* ===== WHAT WE STAND FOR ===== */}
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
                        <span className="block">what we</span>
                        <span className="block">stand for</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="p-8 md:p-10 rounded-lg transition-all duration-500 group cursor-default"
                                style={{
                                    backgroundColor: 'rgba(26, 24, 23, 0.03)',
                                    border: '1px solid rgba(26, 24, 23, 0.06)',
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    backgroundColor: 'rgba(26, 24, 23, 0.06)',
                                    y: -4,
                                }}
                            >
                                <h3 className="text-2xl md:text-3xl mb-4"
                                    style={{ fontFamily: "'Moranga', serif", fontWeight: 300, color: '#1A1817' }}>
                                    {value.title}
                                </h3>
                                <p className="text-base leading-relaxed"
                                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: 'rgba(26, 24, 23, 0.65)' }}>
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== MORE IMAGES ===== */}
            <section className="py-12 md:py-20" style={{ backgroundColor: '#F0EBE2' }}>
                <div className="w-full px-8 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            className="overflow-hidden"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <img src="/images/68d6db243060b3c8a32b3864_about-pae 4.avif" alt="About"
                                className="w-full h-[50vh] object-cover" />
                        </motion.div>
                        <motion.div
                            className="overflow-hidden"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            viewport={{ once: true }}
                        >
                            <img src="/images/68d6db3b7734d5a7bc5b2703_about-pae 5.avif" alt="About"
                                className="w-full h-[50vh] object-cover" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default AboutPage;
