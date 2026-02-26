/**
 * Global application Header providing navigation and mobile menu logic.
 * 
 * Lessons & Explanations:
 * - `createPortal`: Used to physically render the mobile menu overlay directly into `document.body`. This solves notorious CSS `z-index` and `overflow: hidden` mapping issues present in complex DOM trees.
 * - `framer-motion`: Utilized via `motion.div` and `AnimatePresence`. `AnimatePresence` enables exit animations when a component is unmounted from the DOM (e.g., closing the mobile menu).
 * - `useLocation`: A React Router hook to determine if the user is currently on the root path `/` or a subpage (like `/terms`), changing the navigation layout dynamically.
 */
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '@iconify/react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Header = () => {
    // State to toggle the full-screen mobile menu overlay
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // React Router hooks for programmatic navigation
    const location = useLocation();
    const navigate = useNavigate();

    // Boolean flag to tailor the UI whether on the landing page or a sub-page
    const isHome = location.pathname === '/';

    /**
     * Helper to scroll gracefully to the top of the main container.
     * If not on the homepage, navigates back home first.
     */
    const scrollToTop = () => {
        if (!isHome) {
            navigate('/');
            return;
        }
        const scrollContainer = document.getElementById('main-scroll-container');
        if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsMenuOpen(false); // Close mobile menu if open
    };

    /**
     * Helper to scroll to a specific ID section on the homepage.
     * @param {string} id - The DOM element ID to scroll to (e.g., 'features', 'pricing').
     */
    const scrollToSection = (id) => {
        if (!isHome) {
            navigate('/');
            return;
        }
        const scrollContainer = document.getElementById('main-scroll-container');
        const element = document.getElementById(id);
        if (scrollContainer && element) {
            scrollContainer.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
        }
        setIsMenuOpen(false); // Close mobile menu if open
    };

    return (
        <div className="sticky top-0 z-50 px-6 sm:px-12 lg:px-16 pt-12 pb-4 bg-gradient-to-b from-[#020205]/80 to-transparent backdrop-blur-sm">
            <div className="flex justify-between items-center border-b border-white/5 pb-8 relative">
                {/* Brand */}
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 cursor-pointer">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        <Icon icon="solar:test-tube-linear" className="text-black text-2xl" />
                    </div>
                    <span className="text-2xl text-white font-normal tracking-tight">NexusLIMS</span>
                </Link>

                {/* Desktop Navigation Tabs */}
                <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
                    {isHome ? (
                        <>
                            <button onClick={scrollToTop} className="px-6 py-2 rounded-full text-white text-sm font-normal bg-white/10 shadow-inner hover:bg-white/20 transition-all">Platform</button>
                            <button onClick={() => scrollToSection('features')} className="px-6 py-2 rounded-full text-white/60 hover:text-white hover:bg-white/5 text-sm font-normal transition-all">Modules</button>
                            <button onClick={() => scrollToSection('pricing')} className="px-6 py-2 rounded-full text-white/60 hover:text-white hover:bg-white/5 text-sm font-normal transition-all">Plans</button>
                            <button onClick={() => scrollToSection('docs')} className="px-6 py-2 rounded-full text-white/60 hover:text-white hover:bg-white/5 text-sm font-normal transition-all">Compliance</button>
                        </>
                    ) : (
                        <button onClick={() => navigate('/')} className="px-6 py-2 rounded-full text-white text-sm font-normal bg-white/10 shadow-inner hover:bg-white/20 transition-all flex items-center gap-2">
                            <Icon icon="solar:arrow-left-linear" /> Back to Platform
                        </button>
                    )}
                </nav>

                {/* Header Actions */}
                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full border border-white/5">
                        <Icon icon="solar:buildings-linear" className="text-teal-400 text-base" />
                        <span className="text-sm text-white font-mono">1.2k Labs</span>
                    </div>
                    <div className="w-px h-6 bg-white/10 hidden lg:block"></div>
                    <Link to="/contact" className="hidden md:flex bg-teal-600/90 hover:bg-teal-500 text-white px-5 py-2 rounded-full text-sm font-normal transition-all shadow-lg shadow-teal-500/20 items-center gap-2">
                        Contact Sales <Icon icon="solar:arrow-right-linear" />
                    </Link>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden text-white/60 hover:text-white transition-colors flex items-center justify-center relative z-[60]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Icon icon={isMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} className="text-[28px]" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Full Screen Overlay via Portal */}
            {/* createPortal attaches this DOM node to the <body> safely circumventing local CSS overflows. */}
            {createPortal(
                <AnimatePresence>
                    {isMenuOpen && (
                        /* Framer Motion declarative animation properties */
                        <motion.div
                            initial={{ opacity: 0, y: -20, backdropFilter: 'blur(0px)' }}
                            animate={{ opacity: 1, y: 0, backdropFilter: 'blur(20px)' }}
                            exit={{ opacity: 0, y: -10, backdropFilter: 'blur(0px)' }}
                            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/60"
                        >
                            <button
                                className="absolute top-8 right-6 text-white/60 hover:text-white transition-colors flex items-center justify-center p-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Icon icon="solar:close-circle-linear" className="text-[36px]" />
                            </button>

                            <div className="flex flex-col items-center gap-4 w-[85%] max-w-sm">
                                {isHome ? (
                                    <>
                                        <motion.button
                                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
                                            onClick={scrollToTop} className="w-full text-center px-6 py-4 rounded-2xl text-white text-xl font-normal bg-white/5 hover:bg-white/10 transition-all border border-white/10 glass-card">
                                            Platform
                                        </motion.button>
                                        <motion.button
                                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                                            onClick={() => scrollToSection('features')} className="w-full text-center px-6 py-4 rounded-2xl text-white/80 hover:text-white hover:bg-white/5 text-xl font-normal transition-all border border-white/10 glass-card">
                                            Modules
                                        </motion.button>
                                        <motion.button
                                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                                            onClick={() => scrollToSection('pricing')} className="w-full text-center px-6 py-4 rounded-2xl text-white/80 hover:text-white hover:bg-white/5 text-xl font-normal transition-all border border-white/10 glass-card">
                                            Plans
                                        </motion.button>
                                        <motion.button
                                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                                            onClick={() => scrollToSection('docs')} className="w-full text-center px-6 py-4 rounded-2xl text-white/80 hover:text-white hover:bg-white/5 text-xl font-normal transition-all border border-white/10 glass-card">
                                            Compliance
                                        </motion.button>
                                    </>
                                ) : (
                                    <motion.button
                                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
                                        onClick={() => { navigate('/'); setIsMenuOpen(false); }} className="w-full text-center px-6 py-4 rounded-2xl text-white text-xl font-normal bg-white/5 hover:bg-white/10 transition-all border border-white/10 glass-card flex justify-center items-center gap-2">
                                        <Icon icon="solar:arrow-left-linear" /> Back to Platform
                                    </motion.button>
                                )}

                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="h-px w-full bg-white/10 my-4"></motion.div>

                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex items-center gap-8">
                                    <div className="flex items-center gap-2 bg-white/5 px-5 py-3 rounded-full border border-white/10 glass-card hover:bg-white/10 transition-colors cursor-pointer">
                                        <Icon icon="solar:buildings-linear" className="text-teal-400 text-xl" />
                                        <span className="text-lg text-white font-mono">1.2k Labs</span>
                                    </div>
                                    <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="bg-teal-600/90 hover:bg-teal-500 text-white px-5 py-3 rounded-full text-sm font-normal transition-all shadow-lg shadow-teal-500/20 flex items-center gap-2">
                                        Contact <Icon icon="solar:arrow-right-linear" />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
};

export default Header;
