/**
 * Features Section rendering the core capabilities of the LIMS platform.
 * 
 * Lessons & Explanations:
 * - **Data-Driven Rendering**: Instead of hard-coding 6 separate div blocks, we store the content in a JavaScript array (`features`) and map over it. This adheres to the DRY (Don't Repeat Yourself) principle and makes content updates trivial.
 * - **Dynamic Tailwind Classes**: By injecting the `feature.color` via template literals (`bg-${feature.color}-500/10`), we rapidly theme individual cards without writing custom CSS classes for each flavor.
 */
import React from 'react';
import { Icon } from '@iconify/react';

const FeaturesSection = () => {
    const features = [
        {
            title: 'Barcode Scanning',
            desc: 'Generate and print 2D barcodes. Scan items instantly using our mobile app or standard scanners.',
            icon: 'solar:barcode-linear',
            color: 'blue'
        },
        {
            title: 'Workflow Automation',
            desc: 'Automate reordering processes and trigger notifications based on custom stock thresholds.',
            icon: 'solar:routing-linear',
            color: 'purple'
        },
        {
            title: 'Protocol Management',
            desc: 'Link reagents directly to experimental protocols. Calculate exact material costs per experiment.',
            icon: 'solar:file-check-linear',
            color: 'amber'
        },
        {
            title: 'GLP Compliance',
            desc: 'Granular role-based access control, strict audit trails, and automatic data backups to comply with GLP/GMP.',
            icon: 'solar:shield-check-linear',
            color: 'teal'
        },
        {
            title: 'Hazmat & Safety',
            desc: 'Store SDS sheets natively. Track hazardous material quantities to ensure adherence to fire code limits.',
            icon: 'solar:danger-circle-linear',
            color: 'rose'
        },
        {
            title: 'Advanced Analytics',
            desc: 'Visualize spending trends, identify supply bottlenecks, and optimize purchasing with predictive analytics.',
            icon: 'solar:chart-square-linear',
            color: 'indigo'
        }
    ];

    return (
        <div id="features" className="px-6 sm:px-12 lg:px-16 pt-32 pb-24 relative z-10 border-t border-white/5">
            <div className="flex flex-col items-center mb-16 text-center feature-card visible">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-teal-300 text-xs font-mono tracking-widest uppercase mb-4">Platform Modules</span>
                <h2 className="text-4xl md:text-5xl text-white font-normal tracking-tight text-glow mb-6">
                    Everything you need<br />to run a modern lab.
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 
                  Map over the features array to dynamically construct cards.
                  The `key={idx}` prop is required by React to track list items efficiently during DOM diffing.
                */}
                {features.map((feature, idx) => (
                    <div key={idx} className="feature-card visible bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.05] transition-all duration-300 group">
                        <div className={`w-12 h-12 bg-${feature.color}-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <Icon icon={feature.icon} className={`text-${feature.color}-400 text-2xl`} />
                        </div>
                        <h3 className="text-white text-lg font-normal mb-3">{feature.title}</h3>
                        <p className="text-white/40 text-sm font-thin leading-relaxed">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesSection;
