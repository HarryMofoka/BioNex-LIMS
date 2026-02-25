import React from 'react';
import { Icon } from '@iconify/react';

const PricingSection = () => {
    return (
        <div id="pricing" className="px-6 sm:px-12 lg:px-16 py-24 relative z-10 border-t border-white/5 bg-black/20">
            <div className="flex flex-col items-center mb-16 text-center feature-card visible">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-teal-300 text-xs font-mono tracking-widest uppercase mb-4">Deployment Options</span>
                <h2 className="text-4xl md:text-5xl text-white font-normal tracking-tight text-glow mb-6">Scale with your research.</h2>

                {/* Toggle Mockup */}
                <div className="flex items-center gap-4 mt-4 bg-white/5 p-1 rounded-full border border-white/10">
                    <div className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-medium text-white shadow-sm cursor-pointer">Monthly</div>
                    <div className="px-4 py-1.5 text-xs font-medium text-white/40 cursor-pointer hover:text-white transition-colors">
                        Annually <span className="text-teal-400 ml-1">-15%</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Academic Tier */}
                <div className="feature-card visible bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col relative group hover:border-white/20 transition-colors">
                    <div className="mb-6">
                        <div className="text-lg text-white font-normal mb-2">Academic</div>
                        <div className="text-sm text-white/50 font-thin">For university labs and small teams.</div>
                    </div>
                    <div className="text-4xl text-white font-normal tracking-tight mb-8">$49<span className="text-lg text-white/40 font-thin">/mo</span></div>

                    <div className="flex-grow space-y-4 mb-8">
                        <div className="flex items-start text-sm text-white/70 font-thin"><span className="check-icon"><Icon icon="solar:check-read-linear" /></span>Up to 5,000 inventory items</div>
                        <div className="flex items-start text-sm text-white/70 font-thin"><span className="check-icon"><Icon icon="solar:check-read-linear" /></span>3 User seats</div>
                        <div className="flex items-start text-sm text-white/70 font-thin"><span className="check-icon"><Icon icon="solar:check-read-linear" /></span>Basic barcode generation</div>
                        <div className="flex items-start text-sm text-white/70 font-thin"><span className="check-icon"><Icon icon="solar:check-read-linear" /></span>Standard support</div>
                    </div>

                    <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-normal transition-colors">Start Free Trial</button>
                </div>

                {/* Clinical Tier */}
                <div className="feature-card visible bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-teal-500/50 rounded-3xl p-8 flex flex-col relative shadow-[0_0_50px_-20px_rgba(20,184,166,0.3)] transform scale-105 z-10">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-500 text-[#020205] text-xs font-medium px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">Industry Standard</div>
                    <div className="mb-6">
                        <div className="text-lg text-white font-normal mb-2">Clinical / Biotech</div>
                        <div className="text-sm text-white/50 font-thin">For growing commercial laboratories.</div>
                    </div>
                    <div className="text-4xl text-white font-normal tracking-tight mb-8">$299<span className="text-lg text-white/40 font-thin">/mo</span></div>

                    <div className="flex-grow space-y-4 mb-8">
                        <div className="flex items-start text-sm text-white/90 font-thin"><span className="check-icon bg-teal-500/20 text-teal-300"><Icon icon="solar:check-read-linear" /></span>Unlimited inventory items</div>
                        <div className="flex items-start text-sm text-white/90 font-thin"><span className="check-icon bg-teal-500/20 text-teal-300"><Icon icon="solar:check-read-linear" /></span>15 User seats</div>
                        <div className="flex items-start text-sm text-white/90 font-thin"><span className="check-icon bg-teal-500/20 text-teal-300"><Icon icon="solar:check-read-linear" /></span>Full API access & Integrations</div>
                        <div className="flex items-start text-sm text-white/90 font-thin"><span className="check-icon bg-teal-500/20 text-teal-300"><Icon icon="solar:check-read-linear" /></span>Electronic Signatures</div>
                        <div className="flex items-start text-sm text-white/90 font-thin"><span className="check-icon bg-teal-500/20 text-teal-300"><Icon icon="solar:check-read-linear" /></span>Priority support</div>
                    </div>

                    <button className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-sm font-normal transition-colors shadow-lg shadow-teal-500/25">Upgrade to Biotech</button>
                </div>

                {/* Enterprise Tier */}
                <div className="feature-card visible bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col relative group hover:border-white/20 transition-colors">
                    <div className="mb-6">
                        <div className="text-lg text-white font-normal mb-2">Enterprise</div>
                        <div className="text-sm text-white/50 font-thin">For multi-site organizations.</div>
                    </div>
                    <div className="text-4xl text-white font-normal tracking-tight mb-8">Custom</div>

                    <div className="flex-grow space-y-4 mb-8">
                        <div className="flex items-start text-sm text-white/70 font-thin"><span className="check-icon"><Icon icon="solar:check-read-linear" /></span>Multi-facility management</div>
                        <div className="flex items-start text-sm text-white/70 font-thin"><span className="check-icon"><Icon icon="solar:check-read-linear" /></span>Unlimited seats</div>
                        <div className="flex items-start text-sm text-white/70 font-thin"><span className="check-icon"><Icon icon="solar:check-read-linear" /></span>SSO (SAML / Active Directory)</div>
                        <div className="flex items-start text-sm text-white/70 font-thin"><span className="check-icon"><Icon icon="solar:check-read-linear" /></span>On-premise deployment option</div>
                        <div className="flex items-start text-sm text-white/70 font-thin"><span className="check-icon"><Icon icon="solar:check-read-linear" /></span>Dedicated success manager</div>
                    </div>

                    <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-normal transition-colors">Contact Sales</button>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
