/**
 * Pricing Section displaying subscription tiers.
 * 
 * Lessons & Explanations:
 * - **Grid Layout**: Uses `grid-cols-1 lg:grid-cols-3` to confidently stack cards on mobile while spreading them across three columns on desktop.
 * - **Z-Index Traps**: The "Core Research" highlight tier utilizes `transform scale-105 z-10` to physically lift the card above the others, supported by an intense `shadow-teal-500` glow to capture user attention.
 */
import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
    return (
        <div id="pricing" className="px-6 sm:px-12 lg:px-16 py-24 relative z-10 border-t border-white/5 bg-black/20">
            <div className="flex flex-col items-center mb-16 text-center feature-card visible">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-teal-300 text-xs font-mono tracking-widest uppercase mb-4">Deployment Options</span>
                <h2 className="text-4xl md:text-5xl text-white font-normal tracking-tight text-glow mb-6">Built for Academic & Enterprise Scale.</h2>

                {/* Toggle Mockup */}
                <div className="flex items-center gap-4 mt-4 bg-white/5 p-1 rounded-full border border-white/10">
                    <div className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-medium text-white shadow-sm cursor-pointer">Monthly</div>
                    <div className="px-4 py-1.5 text-xs font-medium text-white/40 cursor-pointer hover:text-white transition-colors">
                        Annually <span className="text-teal-400 ml-1">-15%</span>
                    </div>
                </div>
                <p className="mt-6 text-white/50 text-sm max-w-2xl font-thin">
                    ZAR pricing designed to fit into standard NRF grant budgets, discretionary faculty spend, or full institution OPEX procurement.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Tier 1: Starter Lab */}
                <div className="feature-card visible bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col relative group hover:border-white/20 transition-colors">
                    <div className="mb-6">
                        <div className="text-lg text-white font-normal mb-2">Starter Lab</div>
                        <div className="text-sm text-white/50 font-thin">For single PIs, start-ups, and small research groups.</div>
                    </div>
                    <div className="text-4xl text-white font-normal tracking-tight mb-8"><span className="text-2xl text-white/50 mr-1">R</span>1,499<span className="text-lg text-white/40 font-thin">/mo</span></div>

                    <div className="flex-grow space-y-4 mb-8">
                        <div className="flex items-start text-sm text-white/70 font-thin"><span className="check-icon"><Icon icon="solar:check-read-linear" /></span>Up to 5 User Seats (PI + Students)</div>
                        <div className="flex items-start text-sm text-white/70 font-thin"><span className="check-icon"><Icon icon="solar:check-read-linear" /></span>10,000 Inventory Items</div>
                        <div className="flex items-start text-sm text-white/70 font-thin"><span className="check-icon"><Icon icon="solar:check-read-linear" /></span>Basic Barcode & QR Generation</div>
                        <div className="flex items-start text-sm text-white/70 font-thin"><span className="check-icon"><Icon icon="solar:check-read-linear" /></span>Standard Email Support (48h SLA)</div>
                    </div>

                    <p className="text-xs text-white/40 mb-6 italic border-t border-white/10 pt-4 font-thin">Fits easily into standard departmental discretionary funds—minimal procurement friction.</p>

                    <Link to="/contact" className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-normal transition-colors text-center block">Contact Sales</Link>
                </div>

                {/* Tier 2: Core Research */}
                <div className="feature-card visible bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-teal-500/50 rounded-3xl p-8 flex flex-col relative shadow-[0_0_50px_-20px_rgba(20,184,166,0.3)] transform scale-105 z-10">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-500 text-[#020205] text-xs font-medium px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">Most Popular</div>
                    <div className="mb-6">
                        <div className="text-lg text-white font-normal mb-2">Core Research</div>
                        <div className="text-sm text-white/50 font-thin">For established clinical labs and large academic groups.</div>
                    </div>
                    <div className="text-4xl text-white font-normal tracking-tight mb-8"><span className="text-2xl text-white/50 mr-1">R</span>8,999<span className="text-lg text-white/40 font-thin">/mo</span></div>

                    <div className="flex-grow space-y-4 mb-8">
                        <div className="flex items-start text-sm text-white/90 font-thin"><span className="check-icon bg-teal-500/20 text-teal-300"><Icon icon="solar:check-read-linear" /></span>Up to 20 User Seats</div>
                        <div className="flex items-start text-sm text-white/90 font-thin"><span className="check-icon bg-teal-500/20 text-teal-300"><Icon icon="solar:check-read-linear" /></span>Unlimited Inventory & Storage</div>
                        <div className="flex items-start text-sm text-white/90 font-thin"><span className="check-icon bg-teal-500/20 text-teal-300"><Icon icon="solar:check-read-linear" /></span>POPIA & 21 CFR Part 11 Audit Trails</div>
                        <div className="flex items-start text-sm text-white/90 font-thin"><span className="check-icon bg-teal-500/20 text-teal-300"><Icon icon="solar:check-read-linear" /></span>Equipment Maintenance Scheduling</div>
                        <div className="flex items-start text-sm text-white/90 font-thin"><span className="check-icon bg-teal-500/20 text-teal-300"><Icon icon="solar:check-read-linear" /></span>Priority Support & API Access</div>
                    </div>

                    <p className="text-xs text-white/40 mb-6 italic border-t border-teal-500/20 pt-4 font-thin">Easily written into standard multi-year NRF/MRC grant proposals under "Software & Consumables."</p>

                    <Link to="/contact" className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-sm font-normal transition-colors shadow-lg shadow-teal-500/25 text-center block">Contact Sales</Link>
                </div>

                {/* Tier 3: Institution */}
                <div className="feature-card visible bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col relative group hover:border-white/20 transition-colors">
                    <div className="mb-6">
                        <div className="text-lg text-white font-normal mb-2">Institution</div>
                        <div className="text-sm text-white/50 font-thin">For department-wide or multi-campus deployments.</div>
                    </div>
                    <div className="text-4xl text-white font-normal tracking-tight mb-8"><span className="text-2xl text-white/50 mr-1">R</span>39,999<span className="text-lg text-white/40 font-thin">/mo</span></div>

                    <div className="flex-grow space-y-4 mb-8">
                        <div className="flex items-start text-sm text-white/70 font-thin"><span className="check-icon"><Icon icon="solar:check-read-linear" /></span>Unlimited Users & Labs</div>
                        <div className="flex items-start text-sm text-white/70 font-thin"><span className="check-icon"><Icon icon="solar:check-read-linear" /></span>Single Sign-On (Active Directory / SAML)</div>
                        <div className="flex items-start text-sm text-white/70 font-thin"><span className="check-icon"><Icon icon="solar:check-read-linear" /></span>Role-Based Access Control (RBAC)</div>
                        <div className="flex items-start text-sm text-white/70 font-thin"><span className="check-icon"><Icon icon="solar:check-read-linear" /></span>Private Cloud / On-Premise Options</div>
                        <div className="flex items-start text-sm text-white/70 font-thin"><span className="check-icon"><Icon icon="solar:check-read-linear" /></span>Dedicated Account Manager & Training</div>
                    </div>

                    <p className="text-xs text-white/40 mb-6 italic border-t border-white/10 pt-4 font-thin">Consolidate fragmented faculty budgets into a single, scalable IT contract with centralized governance.</p>

                    <Link to="/contact" className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-normal transition-colors text-center block">Contact Sales</Link>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
