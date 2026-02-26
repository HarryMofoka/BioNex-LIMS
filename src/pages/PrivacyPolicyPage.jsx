import React from 'react';
import Header from '../components/layout/Header';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-[#020205] text-white selection:bg-teal-500/30 font-sans relative flex flex-col">
            <SEO title="Privacy Policy" description="BioNex LIMS Privacy Policy and data handling procedures for laboratories." />
            <Header />
            <div className="flex-grow p-6 sm:p-12 relative z-10 w-full max-w-4xl mx-auto pt-32 pb-24">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/10 blur-[100px] rounded-full point-events-none -z-10"></div>

                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-teal-300 text-xs font-mono tracking-widest uppercase mb-6 inline-block">Legal</span>
                <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-glow mb-12 text-white">Privacy Policy (ZA)</h1>

                <div className="prose prose-invert prose-teal max-w-none text-white/70 font-thin space-y-8">
                    <p className="text-lg">Last Updated: February 2026</p>

                    <section>
                        <h2 className="text-2xl text-white font-normal mb-4">1. Introduction</h2>
                        <p>BioNex LIMS ("we", "us", "our") is committed to protecting your personal data in accordance with the Protection of Personal Information Act (POPIA). This privacy policy explains how we collect, use, and protect your data.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-normal mb-4">2. Information We Collect</h2>
                        <p>We may collect the following personal information:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-2">
                            <li>Name and contact details</li>
                            <li>Institutional affiliation and role</li>
                            <li>System usage data and audit logs</li>
                            <li>Data entered into the LIMS platform as part of laboratory operations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-normal mb-4">3. Data Residency & Security</h2>
                        <p>All data processed by BioNex LIMS is hosted on secured ISO 27001 certified servers physically located within the borders of South Africa. We deploy encryption in transit (TLS 1.3) and at rest (AES-256) to ensure the integrity of your laboratory and personal data.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-normal mb-4">4. Your Rights under POPIA</h2>
                        <p>You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights to submit a Subject Access Request, please use our <Link to="/popia" className="text-teal-400 hover:text-white transition-colors">POPIA Portal</Link>.</p>
                    </section>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 text-white/40 text-sm font-mono text-center">
                    <Link to="/" className="hover:text-white transition-colors">← Back to Home</Link>
                </div>
            </div>

            <div className="border-t border-white/5 py-8 text-center text-white/30 text-xs font-mono">
                BIONEX © 2026
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
