import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const DocsSection = () => {
    return (
        <div id="docs" className="px-6 sm:px-12 lg:px-16 pt-24 pb-32 relative z-10 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 feature-card visible">
                <div>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-mono tracking-widest uppercase mb-4 inline-block">Security & Compliance</span>
                    <h2 className="text-4xl md:text-5xl text-white font-normal tracking-tight text-glow mt-2">
                        POPIA-ready.<br />Locally hosted.
                    </h2>
                </div>

                {/* Search Bar Visual */}
                <div className="w-full md:w-auto min-w-[300px] relative group">
                    <div className="absolute inset-0 bg-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-black/40 border border-white/10 rounded-full flex items-center px-4 py-3 gap-3 focus-within:border-indigo-500/50 transition-colors">
                        <Icon icon="solar:magnifer-linear" className="text-white/40 text-xl" />
                        <input type="text" placeholder="Search compliance docs..." className="bg-transparent border-none outline-none text-white text-sm w-full placeholder-white/30 font-mono" />
                        <div className="px-2 py-0.5 rounded bg-white/10 border border-white/10 text-xs text-white/40 font-mono">⌘K</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Doc Link 1 */}
                <a href="#" className="feature-card visible border border-indigo-500/30 bg-indigo-500/5 rounded-2xl p-6 hover:bg-indigo-500/10 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/20 blur-[40px] rounded-full"></div>
                    <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 relative z-10">
                        <Icon icon="solar:shield-check-linear" className="text-indigo-400 text-xl" />
                    </div>
                    <h4 className="text-white font-normal mb-1 relative z-10 text-indigo-200">POPIA Compliance Overview</h4>
                    <p className="text-white/40 text-xs font-thin relative z-10">How BioNex aligns with the Protection of Personal Information Act.</p>
                </a>

                {/* Doc Link 2 */}
                <a href="#" className="feature-card visible border border-teal-500/30 bg-teal-500/5 rounded-2xl p-6 hover:bg-teal-500/10 transition-all group relative overflow-hidden" style={{ transitionDelay: '50ms' }}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/20 blur-[40px] rounded-full"></div>
                    <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4 relative z-10">
                        <Icon icon="solar:server-square-linear" className="text-teal-400 text-xl" />
                    </div>
                    <h4 className="text-white font-normal mb-1 relative z-10 text-teal-200">Local Data Residency</h4>
                    <p className="text-white/40 text-xs font-thin relative z-10">Architected for ISO 27001 data centers located exclusively in SA.</p>
                </a>

                {/* Doc Link 3 */}
                <a href="#" className="feature-card visible block bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/10 transition-all group" style={{ transitionDelay: '100ms' }}>
                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                        <Icon icon="solar:document-medicine-linear" className="text-white text-xl" />
                    </div>
                    <h4 className="text-white font-normal mb-1 group-hover:text-indigo-200 transition-colors">Global Standards</h4>
                    <p className="text-white/40 text-xs font-thin">Continued support for 21 CFR Part 11 & GLP/GMP requirements.</p>
                </a>

                {/* Doc Link 4 */}
                <a href="#" className="feature-card visible block bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/10 transition-all group" style={{ transitionDelay: '150ms' }}>
                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                        <Icon icon="solar:users-group-two-rounded-linear" className="text-white text-xl" />
                    </div>
                    <h4 className="text-white font-normal mb-1 group-hover:text-indigo-200 transition-colors">Data Subject Privileges</h4>
                    <p className="text-white/40 text-xs font-thin">Managing patient & staff records legally in the LIMS ecosystem.</p>
                </a>
            </div>

            {/* Footer */}
            <div className="mt-24 border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-white/30 text-xs font-mono">
                <div className="flex items-center gap-6 mb-4 md:mb-0">
                    <Link to="/support" className="hover:text-white transition-colors">SUPPORT</Link>
                    <Link to="/popia" className="hover:text-white transition-colors">POPIA PORTAL</Link>
                    <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/terms" className="hover:text-white transition-colors">TERMS</Link>
                    <Link to="/privacy" className="hover:text-white transition-colors">PRIVACY POLICY (ZA)</Link>
                    <span>BIONEX © 2026</span>
                </div>
            </div>
        </div>
    );
};

export default DocsSection;
