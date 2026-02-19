import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        quote: "The food is healthy, fresh and delicious",
        detail: "The chef will cater to any personal needs.",
        name: "Molly M",
        location: "Glastonbury, CT",
    },
    {
        quote: "Anna has been a lifesaver",
        detail: "Providing beautiful and fresh bowls for my daughter who lives in New York. I really felt like I had a friend and am so grateful.",
        name: "Linda G",
        location: "Redondo Beach, CA",
    },
    {
        quote: "Anna has changed our food lives for the best!",
        detail: "She gets it, is organized, efficient and our lives are better because of what she does.",
        name: "Neeti C",
        location: "New York, NY",
    },
    {
        quote: "Love the concept and the food is outstanding",
        detail: "This is a women-owned company that really delivers on their mission.",
        name: "Robert Y",
        location: "New York, NY",
    },
    {
        quote: "Anna and her food are as good as it gets.",
        detail: "I highly recommend this chef and Marquet!",
        name: "EB",
        location: "New York, NY",
    },
];

const TestimonialsSection = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section
            className="py-24 md:py-32"
            style={{ backgroundColor: '#1A1817' }}
        >
            <div className="w-full px-8 md:px-12 lg:px-16 max-w-[1200px] mx-auto">
                {/* Section Label */}
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2
                        className="text-5xl md:text-7xl lg:text-8xl"
                        style={{
                            fontFamily: "'Moranga', serif",
                            fontWeight: 300,
                            color: '#F0EBE2',
                        }}
                    >
                        Clients
                    </h2>
                </motion.div>

                {/* Testimonial Slider */}
                <div className="relative min-h-[300px] md:min-h-[350px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            {/* Quote */}
                            <p
                                className="text-3xl md:text-5xl lg:text-6xl leading-[1.15] mb-8"
                                style={{
                                    fontFamily: "'Moranga', serif",
                                    fontWeight: 300,
                                    fontStyle: 'italic',
                                    color: '#F0EBE2',
                                }}
                            >
                                "{testimonials[current].quote}"
                            </p>

                            {/* Detail */}
                            <p
                                className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 300,
                                    color: 'rgba(240, 235, 226, 0.6)',
                                }}
                            >
                                "{testimonials[current].detail}"
                            </p>

                            {/* Attribution */}
                            <p
                                className="text-xs md:text-sm uppercase tracking-[0.3em]"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 500,
                                    color: 'rgba(240, 235, 226, 0.5)',
                                }}
                            >
                                {testimonials[current].name} | {testimonials[current].location}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className="w-2 h-2 rounded-full transition-all duration-300"
                            style={{
                                backgroundColor: index === current
                                    ? '#F0EBE2'
                                    : 'rgba(240, 235, 226, 0.25)',
                                transform: index === current ? 'scale(1.3)' : 'scale(1)',
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
