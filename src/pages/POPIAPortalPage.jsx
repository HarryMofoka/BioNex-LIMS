import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const POPIAPortalPage = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="min-h-screen bg-[#020205] text-white selection:bg-teal-500/30 font-sans relative flex flex-col">
            <Header />
            <div className="flex-grow flex flex-col items-center justify-center p-6 sm:p-12 relative z-10 w-full max-w-3xl mx-auto pt-32 pb-24 text-center">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/10 blur-[100px] rounded-full point-events-none -z-10"></div>

                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-teal-300 text-xs font-mono tracking-widest uppercase mb-6 inline-block">Data Privacy</span>
                <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-glow mb-6 text-white">POPIA Request Portal</h1>
                <p className="text-white/50 text-base font-thin mb-12">
                    Submit a formal request regarding your personal data in accordance with the South African Protection of Personal Information Act.
                </p>

                <div className="w-full bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-3xl text-left">
                    {submitted ? (
                        <div className="text-center py-8">
                            <Icon icon="solar:check-circle-linear" className="text-teal-400 text-6xl mx-auto mb-4" />
                            <h3 className="text-xl text-white font-normal mb-2">Request Received</h3>
                            <p className="text-white/50 text-sm font-thin mb-6">Our Information Officer will contact you within 48 hours to process your request securely.</p>
                            <button onClick={() => setSubmitted(false)} className="text-teal-400 hover:text-white transition-colors text-sm font-mono border-b border-teal-500/30 pb-1 hover:border-white">Submit another request</button>
                        </div>
                    ) : (
                        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-mono text-white/50 mb-2 uppercase">Full Name</label>
                                    <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-teal-500/50 outline-none transition-colors" placeholder="Jane Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-white/50 mb-2 uppercase">Email Address</label>
                                    <input required type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-teal-500/50 outline-none transition-colors" placeholder="jane@laboratory.co.za" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-white/50 mb-2 uppercase">Request Type</label>
                                <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white/80 text-sm focus:border-teal-500/50 outline-none transition-colors appearance-none">
                                    <option>Access to Personal Information</option>
                                    <option>Correction of Information</option>
                                    <option>Deletion of Information (Right to be Forgotten)</option>
                                    <option>Objection to Processing</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-white/50 mb-2 uppercase">Details</label>
                                <textarea required rows="4" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-teal-500/50 outline-none transition-colors resize-none" placeholder="Provide any details to help us identify your records..."></textarea>
                            </div>

                            <button type="submit" className="w-full py-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-normal transition-colors shadow-lg shadow-teal-500/20">Submit Formal Request</button>
                        </form>
                    )}
                </div>

                <div className="mt-16 text-white/40 text-sm font-mono">
                    <Link to="/" className="hover:text-white transition-colors">← Back to Home</Link>
                </div>
            </div>

            <div className="border-t border-white/5 py-8 text-center text-white/30 text-xs font-mono">
                BIONEX © 2026
            </div>
        </div>
    );
};

export default POPIAPortalPage;
