import React from 'react';
import Header from '../components/layout/Header';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const SupportPage = () => {
    return (
        <div className="min-h-screen bg-[#020205] text-white selection:bg-teal-500/30 font-sans relative flex flex-col">
            <Header />
            <div className="flex-grow flex flex-col items-center justify-center p-6 sm:p-12 relative z-10 w-full max-w-4xl mx-auto pt-32 pb-24 text-center">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full point-events-none -z-10"></div>

                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-mono tracking-widest uppercase mb-6 inline-block">Support Center</span>
                <h1 className="text-4xl md:text-6xl font-normal tracking-tight text-glow mb-6 text-white">How can we help?</h1>
                <p className="text-white/50 text-base max-w-2xl font-thin mb-12">
                    Our technical team is ready to assist with deployment, instrument integration, and general LIMS troubleshooting.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
                    <div className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl hover:border-indigo-500/30 transition-colors">
                        <Icon icon="solar:letter-linear" className="text-indigo-400 text-3xl mb-4" />
                        <h3 className="text-xl text-white font-normal mb-2">Technical Support</h3>
                        <p className="text-white/50 text-sm font-thin mb-6">Create a support ticket for technical issues or bug reports.</p>
                        <button className="px-5 py-2 rounded-xl bg-indigo-500/10 text-indigo-300 text-sm hover:bg-indigo-500/20 transition-colors border border-indigo-500/20">Open Ticket</button>
                    </div>

                    <div className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl hover:border-teal-500/30 transition-colors">
                        <Icon icon="solar:book-linear" className="text-teal-400 text-3xl mb-4" />
                        <h3 className="text-xl text-white font-normal mb-2">Documentation</h3>
                        <p className="text-white/50 text-sm font-thin mb-6">Browse our API references, guides, and SDK documentation.</p>
                        <button className="px-5 py-2 rounded-xl bg-teal-500/10 text-teal-300 text-sm hover:bg-teal-500/20 transition-colors border border-teal-500/20">View Docs</button>
                    </div>
                </div>

                <div className="mt-16 text-white/40 text-sm font-mono">
                    <Link to="/" className="hover:text-white transition-colors">← Back to Home</Link>
                </div>
            </div>

            {/* Minimal Footer */}
            <div className="border-t border-white/5 py-8 text-center text-white/30 text-xs font-mono">
                BIONEX © 2026
            </div>
        </div>
    );
};

export default SupportPage;
