import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import SEO from '../components/SEO';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import PricingSection from '../components/home/PricingSection';
import DocsSection from '../components/home/DocsSection';

const HomePage = () => {
    // Intersection Observer for scroll animations
    useEffect(() => {
        const scrollContainer = document.getElementById('main-scroll-container');
        if (!scrollContainer) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            root: scrollContainer,
            threshold: 0.1
        });

        const elements = document.querySelectorAll('.feature-card');
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);

    return (
        <div className="h-screen w-full flex items-center justify-center overflow-hidden relative selection:bg-teal-500/30 text-white font-light">
            {/* Background Blobs and Noise */}
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>

            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 pointer-events-none mix-blend-overlay"></div>
            <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

            {/* Main Card Container */}
            <div className="relative w-[96vw] max-w-[1700px] h-[94vh] transition-all duration-700">
                <div id="main-scroll-container" className="glass-panel w-full h-full rounded-[3rem] relative overflow-y-auto no-scrollbar scroll-smooth">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-0"></div>

                    <SEO />
                    <Header />

                    <HeroSection />

                    <FeaturesSection />

                    <PricingSection />

                    <DocsSection />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
