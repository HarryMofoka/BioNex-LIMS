/**
 * HeroSection Component capturing the top fold of the landing page.
 * 
 * Lessons & Explanations:
 * - **State mapped to CSS**: The `activeTab` state natively toggles thick glowing borders or muted opacity classes dynamically utilizing ES6 Template Literals.
 * - **Responsive Design**: Uses Tailwind prefixes like `sm:text-5xl lg:text-7xl` to effortlessly scale the huge headline down for small devices.
 * - **Component Composition**: Integrates complex logic by rendering `<Tabs activeTab={activeTab} />` as a child, allowing the parent (Hero) to retain control over the UI state while the child does heavy DOM lifting.
 */
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Tabs from './Tabs';

const HeroSection = () => {
    // Tracks which data preview widget is visible (Track, Audit, or Dash)
    const [activeTab, setActiveTab] = useState('trace');

    /**
     * Programmatic scrolling to direct users downward to the modules when clicking "Scroll".
     */
    const scrollToFeatures = () => {
        const scrollContainer = document.getElementById('main-scroll-container');
        const element = document.getElementById('features');
        if (scrollContainer && element) {
            // Native DOM behavior smooth scrolls without needing heavy external libraries
            scrollContainer.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-[calc(90vh-140px)] px-6 sm:px-12 lg:px-16 flex flex-col justify-between pb-12 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between lg:items-end mt-8 gap-4">
                <div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white font-normal tracking-tight mb-4 text-glow drop-shadow-2xl leading-[1.1]">
                        The intelligent<br /> inventory platform.
                    </h1>
                </div>

                <div className="flex flex-col items-start lg:items-end gap-2 mb-2 mt-4 lg:mt-0">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)] animate-pulse"></div>
                        <span className="text-xs font-mono text-teal-400/80 tracking-widest uppercase">System Secure</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-white/60 text-xs font-mono">21 CFR Part 11</span>
                        <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-white/60 text-xs font-mono">ISO 17025</span>
                    </div>
                </div>
            </div>

            {/* Central Content */}
            <div className="flex flex-col lg:flex-row flex-grow items-start lg:items-center gap-8 lg:gap-12 z-10 my-12">
                {/* Tab Controls: Responsive button array. 
                    Notice the template literal `className={\`...\`}` conditionally appending .active styling based on state. 
                */}
                <div className="flex lg:flex-col gap-2 sm:gap-4 flex-wrap justify-center w-full lg:w-auto">
                    <button
                        className={`font-mono text-[10px] sm:text-xs tracking-widest transition-all duration-400 cubic-bezier w-[72px] h-[72px] sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl sm:rounded-[1.5rem] flex flex-col gap-1 sm:gap-2 items-center justify-center group shrink-0 ${activeTab === 'trace' ? 'active text-white bg-white/15 border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.15)]' : 'text-white/40 hover:text-white bg-white/3 border-white/5 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)]'
                            }`}
                        onClick={() => setActiveTab('trace')}
                    >
                        <Icon icon="solar:box-linear" className="text-[24px] sm:text-[32px] group-hover:scale-110 transition-transform duration-300" />
                        <span className="opacity-70">TRACK</span>
                    </button>
                    <button
                        className={`font-mono text-[10px] sm:text-xs tracking-widest transition-all duration-400 cubic-bezier w-[72px] h-[72px] sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl sm:rounded-[1.5rem] flex flex-col gap-1 sm:gap-2 items-center justify-center group shrink-0 ${activeTab === 'evals' ? 'active text-white bg-white/15 border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.15)]' : 'text-white/40 hover:text-white bg-white/3 border-white/5 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)]'
                            }`}
                        onClick={() => setActiveTab('evals')}
                    >
                        <Icon icon="solar:clipboard-list-linear" className="text-[24px] sm:text-[32px] group-hover:scale-110 transition-transform duration-300" />
                        <span className="opacity-70">AUDIT</span>
                    </button>
                    <button
                        className={`font-mono text-[10px] sm:text-xs tracking-widest transition-all duration-400 cubic-bezier w-[72px] h-[72px] sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl sm:rounded-[1.5rem] flex flex-col gap-1 sm:gap-2 items-center justify-center group shrink-0 ${activeTab === 'demo' ? 'active text-white bg-white/15 border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.15)]' : 'text-white/40 hover:text-white bg-white/3 border-white/5 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)]'
                            }`}
                        onClick={() => setActiveTab('demo')}
                    >
                        <Icon icon="solar:widget-5-linear" className="text-[24px] sm:text-[32px] group-hover:scale-110 transition-transform duration-300" />
                        <span className="opacity-70">DASH</span>
                    </button>
                </div>

                {/* Tab Content Rendering */}
                <div className="flex-grow w-full h-full min-h-[400px] relative">
                    <Tabs activeTab={activeTab} />
                </div>
            </div>

            <div className="flex items-end justify-between z-10 pt-4 border-t border-white/5 mt-4 sm:mt-0">
                <div className="w-full md:w-1/2 bg-black/20 h-auto py-3 sm:py-0 sm:h-20 rounded-2xl border border-white/10 flex items-center justify-between px-6 relative overflow-hidden group cursor-pointer backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="flex items-center gap-3 sm:gap-4 z-10 w-full sm:w-auto">
                        <Icon icon="solar:api-linear" className="text-white/60 text-xl sm:text-2xl shrink-0" />
                        <div className="flex flex-col whitespace-nowrap overflow-hidden">
                            <span className="font-mono text-[10px] sm:text-xs text-white/40 mb-0.5 sm:mb-1">CONNECT INSTRUMENTS</span>
                            <span className="font-mono text-sm sm:text-lg text-white/90 truncate">nexus.api.connect()</span>
                        </div>
                    </div>
                    <div className="h-8 w-px bg-white/10 mx-2 hidden sm:block"></div>
                    <div className="hidden sm:flex items-center gap-2 z-10 opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500">
                        <Icon icon="solar:server-square-linear" className="text-white text-xl" />
                        <span className="font-mono text-base text-white">REST / GraphQL</span>
                    </div>
                </div>

                <div className="hidden md:flex flex-col items-end gap-3 pb-1">
                    <button onClick={scrollToFeatures} className="group flex items-center gap-3 text-white/60 hover:text-white text-sm font-normal transition-colors py-2 animate-bounce">
                        <span>Scroll</span>
                        <Icon icon="solar:arrow-down-linear" className="text-base" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
