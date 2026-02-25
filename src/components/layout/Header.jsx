import React from 'react';
import { Icon } from '@iconify/react';

const Header = () => {
    const scrollToTop = () => {
        const scrollContainer = document.getElementById('main-scroll-container');
        if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const scrollToSection = (id) => {
        const scrollContainer = document.getElementById('main-scroll-container');
        const element = document.getElementById(id);
        if (scrollContainer && element) {
            scrollContainer.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
        }
    };

    return (
        <div className="sticky top-0 z-50 px-6 sm:px-12 lg:px-16 pt-12 pb-4 bg-gradient-to-b from-[#020205]/80 to-transparent backdrop-blur-sm">
            <div className="flex justify-between items-center border-b border-white/5 pb-8">
                {/* Brand */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        <Icon icon="solar:test-tube-linear" className="text-black text-2xl" />
                    </div>
                    <span className="text-2xl text-white font-normal tracking-tight">NexusLIMS</span>
                </div>

                {/* Navigation Tabs */}
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
                    <button className="text-white/60 hover:text-white transition-colors flex items-center justify-center">
                        <Icon icon="solar:user-circle-linear" className="text-[28px]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
