import React from 'react';
import { motion } from 'framer-motion';

const menuItems = [
    {
        id: "01",
        title: "Canapes",
        subtitle: "Passed",
        description: "A fan favorite that never disappoints. Our collection of light, small and sweet bites are the perfect amount of creative and comforting, designed as canapes that keep tastebuds satisfied and conversations flowing at any type of gathering.",
        image: "/images/menu-canapes.avif",
    },
    {
        id: "02",
        title: "Tables",
        subtitle: "Grazing",
        description: "Designed to be the centerpiece of your gathering, our artistic grazing tables are thoughtfully arranged to encourage an interactive dining experience that inspires a casual and intuitive way to connect around food.",
        image: "/images/menu-grazing.avif",
    },
    {
        id: "03",
        title: "Buffet",
        subtitle: "",
        description: "Our most diverse menu offering caters to a wide range of food preferences and event types. Best for large groups, our buffets offer variety, customization, and a relaxed environment that does not disrupt conversation and allows you to dine at your own pace.",
        image: "/images/menu-buffet.avif",
    },
    {
        id: "04",
        title: "Style",
        subtitle: "Family",
        description: "The most intimate way to gather, our family style menu is focused on sharing and connecting through food. Guests will be encouraged to help serve the variety of dishes to one another as they pass each dish around the table in a true communal dining experience.",
        image: "/images/menu-family.avif",
    },
    {
        id: "05",
        title: "Plated",
        subtitle: "",
        description: "Our plated menus are the most formal of our offerings, with professionally arranged dishes served to each guest individually. More elegant and refined in presentation, this menu offers structure, polish and elegance to your gathering.",
        image: "/images/menu-plated.avif",
    }
];

const MenuItem = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 lg:gap-28 py-16 md:py-24"
            style={{
                borderBottom: index < menuItems.length - 1 ? '1px solid rgba(26, 24, 23, 0.08)' : 'none',
            }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            {/* Image */}
            <div className={`w-full md:w-1/2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                <div className="relative overflow-hidden" style={{ aspectRatio: '4 / 5' }}>
                    <motion.img
                        initial={{ scale: 1.15 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Content */}
            <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:order-2 items-start text-left' : 'md:order-1 items-end text-right'}`}>
                <h2
                    className="text-5xl md:text-6xl lg:text-8xl leading-[0.95] mb-8"
                    style={{
                        fontFamily: "'Moranga', serif",
                        fontWeight: 300,
                        color: '#1A1817',
                    }}
                >
                    {item.subtitle && (
                        <span className="block">{item.subtitle}</span>
                    )}
                    <span className="block">{item.title}</span>
                </h2>
                <p
                    className="text-base md:text-lg leading-relaxed max-w-md mb-10"
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 300,
                        color: 'rgba(26, 24, 23, 0.7)',
                    }}
                >
                    {item.description}
                </p>
                <a
                    href="#menu"
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
                    Check our Menu
                </a>
            </div>
        </motion.div>
    );
};

const MenuSection = () => {
    return (
        <section
            id="menu"
            className="py-20 md:py-28"
            style={{ backgroundColor: '#F0EBE2' }}
        >
            <div className="w-full px-8 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
                {/* Section heading */}
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
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
                        Get-togethers
                    </h2>
                </motion.div>

                {/* Menu Items */}
                <div className="flex flex-col">
                    {menuItems.map((item, index) => (
                        <MenuItem key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
