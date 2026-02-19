import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import PageTransition from './components/PageTransition';
import { personalChefData, weddingData, conferenceData, corporateData } from './data/serviceData';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/menu" element={
          <PageTransition>
            <MenuPage />
          </PageTransition>
        } />
        <Route path="/about-us" element={
          <PageTransition>
            <AboutPage />
          </PageTransition>
        } />
        <Route path="/services/personal-chef" element={
          <PageTransition>
            <ServicePage data={personalChefData} />
          </PageTransition>
        } />
        <Route path="/services/wedding-events" element={
          <PageTransition>
            <ServicePage data={weddingData} />
          </PageTransition>
        } />
        <Route path="/services/conference-catering" element={
          <PageTransition>
            <ServicePage data={conferenceData} />
          </PageTransition>
        } />
        <Route path="/services/corporate-events" element={
          <PageTransition>
            <ServicePage data={corporateData} />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
