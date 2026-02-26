import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToTop = () => {
        const scrollContainer = document.getElementById('main-scroll-container');
        if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const scrollToSection = (id) => {
        const scrollContainer = document.getElementById('main-scroll-container');
        const element = document.getElementById(id);
        if (scrollContainer && element) {
            scrollContainer.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="sticky top-0 z-50 px-6 sm:px-12 lg:px-16 pt-12 pb-4 bg-gradient-to-b from-[#020205]/80 to-transparent backdrop-blur-sm">
            <div className="flex justify-between items-center border-b border-white/5 pb-8 relative">
                {/* Brand */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        <Icon icon="solar:test-tube-linear" className="text-black text-2xl" />
                    </div>
                    <span className="text-2xl text-white font-normal tracking-tight">NexusLIMS</span>
                </div>

                {/* Desktop Navigation Tabs */}
                <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
                    <button onClick={scrollToTop} className="px-6 py-2 rounded-full text-white text-sm font-normal bg-white/10 shadow-inner hover:bg-white/20 transition-all">Platform</button>
                    <button onClick={() => scrollToSection('features')} className="px-6 py-2 rounded-full text-white/60 hover:text-white hover:bg-white/5 text-sm font-normal transition-all">Modules</button>
                    <button onClick={() => scrollToSection('pricing')} className="px-6 py-2 rounded-full text-white/60 hover:text-white hover:bg-white/5 text-sm font-normal transition-all">Plans</button>
                    <button onClick={() => scrollToSection('docs')} className="px-6 py-2 rounded-full text-white/60 hover:text-white hover:bg-white/5 text-sm font-normal transition-all">Compliance</button>
                </nav>

                {/* Header Actions */}
                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full border border-white/5">
                        <Icon icon="solar:buildings-linear" className="text-teal-400 text-base" />
                        <span className="text-sm text-white font-mono">1.2k Labs</span>
                    </div>
                    <div className="w-px h-6 bg-white/10 hidden lg:block"></div>
                    <button className="hidden md:flex text-white/60 hover:text-white transition-colors items-center justify-center">
                        <Icon icon="solar:user-circle-linear" className="text-[28px]" />
                    </button>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden text-white/60 hover:text-white transition-colors flex items-center justify-center"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Icon icon={isMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} className="text-[28px]" />
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 mt-4 p-4 rounded-2xl glass-card flex flex-col gap-2 md:hidden animate-fadeIn shadow-2xl z-50 border border-white/10 overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-black/60 before:backdrop-blur-xl">
                        <button onClick={scrollToTop} className="w-full text-left px-4 py-3 rounded-xl text-white text-sm font-normal bg-white/5 hover:bg-white/10 transition-all">Platform</button>
                        <button onClick={() => scrollToSection('features')} className="w-full text-left px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5 text-sm font-normal transition-all">Modules</button>
                        <button onClick={() => scrollToSection('pricing')} className="w-full text-left px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5 text-sm font-normal transition-all">Plans</button>
                        <button onClick={() => scrollToSection('docs')} className="w-full text-left px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5 text-sm font-normal transition-all">Compliance</button>

                        <div className="h-px w-full bg-white/10 my-2"></div>

                        <div className="flex items-center justify-between px-4 py-2">
                            <div className="flex items-center gap-2">
                                <Icon icon="solar:buildings-linear" className="text-teal-400 text-base" />
                                <span className="text-sm text-white font-mono">1.2k Labs</span>
                            </div>
                            <button className="text-white hover:text-teal-400 transition-colors flex items-center justify-center">
                                <Icon icon="solar:user-circle-linear" className="text-[28px]" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
