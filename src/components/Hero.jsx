import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // --- RESPONSIVE TRANSFORMS ---
    // Start values differ for mobile/desktop, end values are full viewport (100vw/100vh)

    // MASK WIDTH: 
    // Mobile: Start wider (65vw) because the oval is the main element
    // Desktop: Start narrower (27vw)
    const maskWidth = useTransform(
        scrollYProgress,
        [0, 0.4],
        [isMobile ? "65vw" : "27vw", "100vw"]
    );

    // MASK HEIGHT:
    // Mobile: Start shorter (55vh)
    // Desktop: Start taller (80vh)
    const maskHeight = useTransform(
        scrollYProgress,
        [0, 0.4],
        [isMobile ? "55vh" : "80vh", "100vh"]
    );

    const maskRadius = useTransform(scrollYProgress, [0, 0.4], ["50%", "0%"]);
    const imageScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.15]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.15], [0, 80]);
    const curvedOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

    const logoLetters = [
        '/images/logo-1.svg',
        '/images/logo-2.svg',
        '/images/logo-3.svg',
        '/images/logo-4.svg',
        '/images/logo-5.svg',
        '/images/logo-6.svg',
        '/images/logo-7.svg',
    ];

    return (
        <section ref={containerRef} className="relative h-[300vh]" style={{ backgroundColor: '#1A1817' }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {/* ═══ OVAL MASK ═══ */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <motion.div
                        className="overflow-hidden relative"
                        style={{
                            width: maskWidth,
                            height: maskHeight,
                            borderRadius: maskRadius,
                        }}
                    >
                        <motion.img
                            src="/images/hero-logo.avif"
                            alt="Marquet Culinary"
                            className="w-full h-full object-cover"
                            style={{ scale: imageScale }}
                        />
                    </motion.div>
                </div>

                {/* ═══ "MARQUET" SVG LOGO ═══ */}
                <motion.div
                    className="relative z-20 pointer-events-none"
                    style={{
                        width: isMobile ? '80vw' : '47vw',
                        aspectRatio: '767 / 170',
                        opacity: textOpacity,
                        y: textY,
                    }}
                >
                    {logoLetters.map((src, index) => (
                        <motion.img
                            key={index}
                            src={src}
                            alt=""
                            className="absolute inset-0 w-full h-full object-contain"
                            style={{ mixBlendMode: 'exclusion' }}
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.15 + index * 0.05,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                        />
                    ))}

                    {/* ® Symbol */}
                    <motion.img
                        src="/images/logo-8.svg"
                        alt="®"
                        className="absolute"
                        style={{
                            width: '2.2%',
                            height: 'auto',
                            top: '5%',
                            right: '-3.5%',
                            mixBlendMode: 'exclusion',
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    />
                </motion.div>

                {/* ═══ CURVED TEXT ═══ */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                    style={{
                        opacity: curvedOpacity,
                    }}
                >
                    {/* 
                      Desktop: Height 91vh (tall SVG wrapping oval) 
                      Mobile: Width 70vw (scaled to width wrapping smaller oval)
                    */}
                    <motion.img
                        src="/images/67b77167515aa1b498a154c4_Renders4.svg"
                        alt="Creating Culinary Gatherings Since 2019"
                        style={{
                            height: isMobile ? '65vh' : '91vh',
                            width: 'auto',
                        }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
