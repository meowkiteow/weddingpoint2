import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MainLayout from '../layouts/MainLayout';
import SmoothScroll from '../components/SmoothScroll';

/* ===== MENU DATA ===== */
const menuCategories = [
    {
        id: 'canapes',
        title: 'Passed Canapes',
        description: 'A fan favorite that never disappoints. Our collection of standard, elevated and sweet bites keep tastebuds satisfied and conversations flowing at any type of gathering.',
        image: '/images/68d6cc8bbe500c1e31c5a093_passed canapes.avif',
        subcategories: [
            {
                name: 'Standard Bites',
                items: [
                    'Honey glazed chicken skewers',
                    'Pork rillettes with dijon on fennel seed cracker',
                    'Beef meatballs with zhug and tahini',
                    'Champagne grape and blue cheese on seeded cracker',
                    'Whipped goat cheese and fennel on sable',
                    'Truffle pea and edamame with ricotta on sourdough',
                    'Mushroom gougeres',
                    'Avocado mousse on tapioca crisp',
                    'Tomato and watermelon gazpacho',
                    'Pickled daikon saffron summer rolls',
                    'Whipped tofu with honey chili crisp',
                ]
            },
            {
                name: 'Elevated Bites',
                items: [
                    'Spiced melon, chevre, serrano ham',
                    'Duck prosciutto on fig mostarda on baguette',
                    'Chicken liver mousse with cherry coulis',
                    'Beef tartare, lemon aioli',
                    'Steak bites with romesco',
                    'Blini with creme fraiche and caviar',
                    'Tapioca crisp and salmon crudo',
                    'Smoked salmon mousse on rye gougeres',
                    'Fried artichoke hearts with herb aioli',
                    'Beet tartar in lemongrass glaze with a wonton crisp',
                    'Glazed miso eggplant on rice crackers',
                    'Smoked carrot mousse tart with cashew cream',
                ]
            },
            {
                name: 'Sweet Bites',
                items: [
                    'Matcha shortbread cookies with white chocolate',
                    'Anise panna cotta with pear and caramel pecans',
                    'Assorted macarons',
                    'Ginger cake with whipped vanilla ganache',
                ]
            }
        ]
    },
    {
        id: 'grazing',
        title: 'Grazing Tables',
        description: 'Designed to be the centerpiece of your gathering, our artistic grazing tables inspires a casual and intuitive way to gather around food.',
        image: '/images/68d6cc9b194f5e361539f4d3_g tables.avif',
        subcategories: [
            {
                name: 'Standard Bites',
                items: [
                    'Honey glazed chicken skewers',
                    'Pork rillettes with dijon on fennel seed cracker',
                    'Beef meatballs with zhug and tahini',
                ]
            },
            {
                name: 'Elevated Bites',
                items: [
                    'Honey glazed chicken skewers',
                    'Pork rillettes with dijon on fennel seed cracker',
                    'Beef meatballs with zhug and tahini',
                ]
            },
            {
                name: 'Sweet Bites',
                items: [
                    'Honey glazed chicken skewers',
                    'Pork rillettes with dijon on fennel seed cracker',
                    'Beef meatballs with zhug and tahini',
                ]
            }
        ]
    },
    {
        id: 'buffet',
        title: 'Buffet Service',
        description: 'Our most diverse menu offering provides variety, customization and a relaxed environment that allows you to gather at your own pace.',
        image: '/images/68d6ccac2770a10a0a10e391_buffet.avif',
        subcategories: [
            {
                name: 'Breakfast',
                items: [
                    'Beef hash with caramelized onion',
                    'Quiche Lorraine',
                    'Apple and pork sausage hand pies',
                    'Deviled eggs with creme fraiche',
                    'Leek whipped ricotta tartine',
                    'Sweet potato, kale, and feta frittata',
                    'Arugula avocado tartine with citrus vinaigrette',
                    'Vanilla chia seed pudding with cardamom coconut whip',
                    'Whipped mango yogurt with passion fruit and granola',
                    'Coffee buns',
                    'Molasses ginger loaf',
                    'Matcha madelines',
                    'Lemon financiers',
                    'Macarons',
                ]
            },
            {
                name: 'Lunch',
                items: [
                    'Compte cheese, apple, and dijon (baguette)',
                    'Confit eggplant and tomato with cashew ricotta (baguette)',
                    'Salami, cornichons, and whole grain mustard (baguette)',
                    'Smoked salmon with creme fraiche and lemon radicchio (baguette)',
                    'Roast beef with pickled red onion, butter lettuce and blue cheese spread (baguette)',
                    'Duck confit with cherry compote, butter lettuce and aioli (baguette)',
                    'Shaved fennel and apple salad with arugula and tarragon vinaigrette',
                    'Sesame Caesar salad with radicchio and cabbage',
                    'Kale sweet potato salad with maple tahini and cranberry',
                ]
            },
            {
                name: 'Dinner',
                items: [
                    'Duck confit with cherry compote, butter lettuce and aioli',
                    'Shaved fennel and apple salad with arugula and tarragon vinaigrette',
                    'Sesame Caesar salad with radicchio and cabbage',
                    'Kale sweet potato salad with maple tahini and cranberry',
                ]
            }
        ]
    }
];

const faqData = [
    {
        q: "What type of events do you cater?",
        a: "We cater for all types of social gatherings. This includes corporate events and retreats, professional networking events, brand launches, birthday parties, private dinners, or any other special occasion you want to gather for."
    },
    {
        q: "What type of food do you cater?",
        a: "We create very thoughtful menus for our clients. This means that while we have our popular dishes we love to include, we will also work with you to customize for any specific dietary requirements or preferences and can support vegan catering, gluten-free catering, and allergy-friendly catering."
    },
    {
        q: "What types of catering do you offer?",
        a: "We love to offer personalized catering for any gathering. Our most popular catering options are our Passed Bytes and Grazing Tables because they encourage guests to gather around food for a moment of connection. We also offer Buffet Service, Family Style and Plated Feasts."
    },
    {
        q: "How much does your catering cost?",
        a: "Our cost of catering depends on the specifics of your event and we're very happy to work within your budgets to create memorable moments of gathering. While there are no requirements on the number of people, we do require a minimum of a $1200 spend."
    },
    {
        q: "How far in advance do I need to book your service?",
        a: "We recommend booking our catering service at least two weeks in advance, especially for holidays. But we do accept week-of catering requests with an added rush fee."
    },
    {
        q: "Do you offer delivery and setup services?",
        a: "Yes, we offer catering delivery and catering set up services. While you can select to do this yourself, our team can beautifully present and plate your food throughout the gathering and provide any additional assistance you may need."
    },
    {
        q: "Can I make special requests to the catering?",
        a: "We love to accommodate the special requests of our clients. While we do have a set style and catering services, we're happy to work with you to make sure that the catering inspires the way you gather. Depending on the request, it may come at an extra cost."
    },
];

/* ===== FAQ ITEM ===== */
const FaqItem = ({ item, isOpen, onClick }) => (
    <div className="border-b" style={{ borderColor: 'rgba(26, 24, 23, 0.1)' }}>
        <button
            className="w-full py-6 flex justify-between items-center text-left group"
            onClick={onClick}
        >
            <span className="text-base md:text-lg pr-8"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: '#1A1817' }}>
                {item.q}
            </span>
            <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
            >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <line x1="9" y1="0" x2="9" y2="18" stroke="#1A1817" strokeWidth="1.5" />
                    <line x1="0" y1="9" x2="18" y2="9" stroke="#1A1817" strokeWidth="1.5" />
                </svg>
            </motion.div>
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <p className="pb-6 text-base leading-relaxed max-w-3xl"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: 'rgba(26, 24, 23, 0.7)' }}>
                        {item.a}
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

/* ===== MENU CATEGORY ===== */
const MenuCategory = ({ category, index }) => (
    <motion.div
        className="py-16 md:py-24"
        style={{ borderBottom: '1px solid rgba(26, 24, 23, 0.08)' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
    >
        <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20`}>
            {/* Image */}
            <div className="w-full lg:w-2/5 overflow-hidden" style={{ aspectRatio: '4 / 5' }}>
                <motion.img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                />
            </div>

            {/* Content */}
            <div className="w-full lg:w-3/5">
                <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6"
                    style={{ fontFamily: "'Moranga', serif", fontWeight: 300, color: '#1A1817' }}>
                    {category.title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-10 max-w-xl"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: 'rgba(26, 24, 23, 0.7)' }}>
                    {category.description}
                </p>

                {/* Subcategories */}
                <div className="space-y-8">
                    {category.subcategories.map((sub, si) => (
                        <div key={si}>
                            <h4 className="text-lg font-medium mb-3"
                                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: '#1A1817' }}>
                                {sub.name}
                            </h4>
                            <ul className="space-y-1.5">
                                {sub.items.map((item, ii) => (
                                    <li key={ii} className="text-sm leading-relaxed"
                                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: 'rgba(26, 24, 23, 0.65)' }}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

/* ===== MENU PAGE ===== */
const MenuPage = () => {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <MainLayout>
            <SmoothScroll />

            {/* Hero */}
            <section className="pt-32 pb-8 md:pt-40 md:pb-12" style={{ backgroundColor: '#F0EBE2' }}>
                <div className="w-full px-8 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.9]"
                            style={{ fontFamily: "'Moranga', serif", fontWeight: 300, color: '#1A1817' }}>
                            <span className="block">Our</span>
                            <span className="block">Menu</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Menu Header Image */}
            <section className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
                <motion.img
                    src="/images/67b77167515aa1b498a154d8_landscape-big-home.avif"
                    alt="Our Menu"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </section>

            {/* Menu Categories */}
            <section className="py-12 md:py-20" style={{ backgroundColor: '#F0EBE2' }}>
                <div className="w-full px-8 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
                    <motion.h2
                        className="text-5xl md:text-7xl lg:text-9xl text-center mb-8"
                        style={{ fontFamily: "'Moranga', serif", fontWeight: 300, color: '#1A1817' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Menu
                    </motion.h2>

                    {menuCategories.map((category, index) => (
                        <MenuCategory key={category.id} category={category} index={index} />
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 md:py-32" style={{ backgroundColor: '#F0EBE2' }}>
                <div className="w-full px-8 md:px-12 lg:px-16 max-w-[1000px] mx-auto">
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm font-medium uppercase tracking-[0.2em] mb-4"
                            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: 'rgba(26, 24, 23, 0.5)' }}>
                            Clarify
                        </p>
                        <h2 className="text-4xl md:text-6xl"
                            style={{ fontFamily: "'Moranga', serif", fontWeight: 300, color: '#1A1817' }}>
                            Your Doubts
                        </h2>
                    </motion.div>

                    <div>
                        {faqData.map((item, index) => (
                            <FaqItem
                                key={index}
                                item={item}
                                isOpen={openFaq === index}
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default MenuPage;
