import React from 'react';
import Header from '../components/layout/Header';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const TermsPage = () => {
    return (
        <div className="min-h-screen bg-[#020205] text-white selection:bg-teal-500/30 font-sans relative flex flex-col">
            <SEO title="Terms of Service" description="Terms of Service and Subscription Agreement for BioNex LIMS." />
            <Header />
            <div className="flex-grow p-6 sm:p-12 relative z-10 w-full max-w-4xl mx-auto pt-32 pb-24">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full point-events-none -z-10"></div>

                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-mono tracking-widest uppercase mb-6 inline-block">Legal</span>
                <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-glow mb-12 text-white">Terms of Service</h1>

                <div className="prose prose-invert prose-indigo max-w-none text-white/70 font-thin space-y-8">
                    <p className="text-lg">Last Updated: February 2026</p>

                    <section>
                        <h2 className="text-2xl text-white font-normal mb-4">1. Acceptance of Terms</h2>
                        <p>By accessing or using the BioNex LIMS cloud platform ("Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use the Service.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-normal mb-4">2. Target Audience</h2>
                        <p>Our service is designed for use by academic research groups, university departments, clinical laboratories, and biotechnology startups operating primarily within the Republic of South Africa.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-normal mb-4">3. Account Responsibilities</h2>
                        <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-normal mb-4">4. Acceptable Use</h2>
                        <p>You agree not to misuse the BioNex LIMS services or help anyone else to do so. You must comply with all applicable local and international laws when using the Service, including those relating to the processing of biological, chemical, or patient data.</p>
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

export default TermsPage;
