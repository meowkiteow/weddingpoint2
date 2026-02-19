import React from 'react';
import { motion } from 'framer-motion';

/*
 * Page Transition — Sage Green Wipe (#B4CCBA)
 * Replicates the original marquet.nyc left-to-right wipe.
 *
 * Uses TWO overlay divs for a seamless two-phase wipe:
 *
 *  Phase 1 (EXIT — old page unmounting):
 *    "Slide-in" overlay sweeps LEFT → RIGHT to COVER old content.
 *
 *  Phase 2 (ENTER — new page mounting):
 *    "Slide-out" overlay sweeps LEFT → RIGHT to REVEAL new content.
 *
 * The result looks like one continuous green sheet sliding across.
 */

const ease = [0.76, 0, 0.24, 1]; // Smooth cubic-bezier (power4 in/out)

const PageTransition = ({ children }) => {
    return (
        <>
            {children}

            {/* ——— SLIDE-IN: covers the old page during EXIT ——— 
                Starts off-screen left. On exit, slides to cover viewport.
                On mount (enter), it just stays off-screen (no visible effect). */}
            <motion.div
                className="fixed inset-0 z-[100] pointer-events-none"
                style={{ backgroundColor: '#B4CCBA' }}
                initial={{ x: '-100%' }}
                animate={{ x: '-100%' }}
                exit={{ x: '0%', transition: { duration: 0.5, ease } }}
            />

            {/* ——— SLIDE-OUT: reveals the new page during ENTER ———
                Starts covering the viewport. Slides off to the right.
                On exit, it has no exit animation (already off-screen). */}
            <motion.div
                className="fixed inset-0 z-[100] pointer-events-none"
                style={{ backgroundColor: '#B4CCBA' }}
                initial={{ x: '0%' }}
                animate={{ x: '100%', transition: { duration: 0.5, ease, delay: 0.15 } }}
            />
        </>
    );
};

export default PageTransition;
