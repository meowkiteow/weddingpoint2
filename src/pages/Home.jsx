import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import SmoothScroll from '../components/SmoothScroll';

const Home = () => {
    return (
        <MainLayout>
            <SmoothScroll />
            <Hero />
            <ServicesOverview />
            <MenuSection />
            <AboutSection />
            <TestimonialsSection />
        </MainLayout>
    );
};

export default Home;
