import React, { useState } from 'react';
import Header from '../components/layout/Header';
import SEO from '../components/SEO';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="min-h-screen bg-[#020205] text-white selection:bg-teal-500/30 font-sans relative flex flex-col">
            <SEO title="Contact Sales" description="Get in touch with BioNex LIMS or schedule a live demo of the platform." />
            <Header />
            <div className="flex-grow flex flex-col items-center justify-center p-6 sm:p-12 relative z-10 w-full max-w-5xl mx-auto pt-32 pb-24">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 blur-[100px] rounded-full point-events-none -z-10"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full point-events-none -z-10"></div>

                <div className="text-center mb-16">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-teal-300 text-xs font-mono tracking-widest uppercase mb-6 inline-block">Get in Touch</span>
                    <h1 className="text-4xl md:text-6xl font-normal tracking-tight text-glow mb-6 text-white">Let's talk about your lab.</h1>
                    <p className="text-white/50 text-base max-w-2xl mx-auto font-thin">
                        Whether you are looking to deploy BioNex enterprise-wide or just have a few questions about our POPIA compliance, our team is ready to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 w-full">

                    {/* Contact Info Side */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl">
                            <h3 className="text-xl text-white font-normal mb-8">Direct Lines</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shrink-0">
                                        <Icon icon="solar:letter-linear" className="text-teal-400 text-xl" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-white/50 font-mono mb-1">SALES & PARTNERSHIPS</div>
                                        <a href="mailto:nexlinksolutionsza@gmail.com" className="text-white hover:text-teal-400 transition-colors">nexlinksolutionsza@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shrink-0">
                                        <Icon icon="solar:phone-calling-linear" className="text-teal-400 text-xl" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-white/50 font-mono mb-1">GENERAL ENQUIRIES</div>
                                        <a href="tel:+27685642464" className="text-white hover:text-teal-400 transition-colors">+27 68 564 2464</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shrink-0">
                                        <Icon icon="solar:map-point-linear" className="text-teal-400 text-xl" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-white/50 font-mono mb-1">HEADQUARTERS (SOUTH AFRICA)</div>
                                        <span className="text-white">16 Beefwood Street, S.E 3<br /> Vanderbijylpark</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Side */}
                    <div className="lg:col-span-3">
                        <div className="bg-white/[0.02] border border-white/10 p-8 md:p-10 rounded-3xl">
                            {submitted ? (
                                <div className="text-center py-12">
                                    <Icon icon="solar:check-circle-bold-duotone" className="text-teal-400 text-6xl mx-auto mb-6" />
                                    <h3 className="text-2xl text-white font-normal mb-2">Message Sent</h3>
                                    <p className="text-white/50 text-base font-thin mb-8">Thanks for reaching out! One of our laboratory implementation specialists will be in touch shortly.</p>
                                    <button onClick={() => setSubmitted(false)} className="px-6 py-3 rounded-xl bg-teal-500/10 text-teal-300 hover:bg-teal-500/20 transition-colors border border-teal-500/20">Send another message</button>
                                </div>
                            ) : (
                                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-mono text-white/50 mb-2 uppercase">Your Name</label>
                                            <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-teal-500/50 outline-none transition-colors" placeholder="Pieter van der Merwe" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-mono text-white/50 mb-2 uppercase">Work Email</label>
                                            <input required type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-teal-500/50 outline-none transition-colors" placeholder="pieter@vandermerwelabs.co.za" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-white/50 mb-2 uppercase">Organization / University</label>
                                        <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-teal-500/50 outline-none transition-colors" placeholder="e.g. Van der Merwe Clinical Diagnostics" />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-white/50 mb-2 uppercase">Inquiry Topic</label>
                                        <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white/80 text-sm focus:border-teal-500/50 outline-none transition-colors appearance-none cursor-pointer">
                                            <option>Sales & Enterprise Pricing</option>
                                            <option>Schedule a Live Demo</option>
                                            <option>Partnership Inquiry</option>
                                            <option>General Support</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-white/50 mb-2 uppercase">How can we help?</label>
                                        <textarea required rows="4" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-teal-500/50 outline-none transition-colors resize-none" placeholder="Tell us a bit about your lab setup..."></textarea>
                                    </div>

                                    <button type="submit" className="w-full py-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-normal transition-colors shadow-lg shadow-teal-500/20 text-lg">Send Message</button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <div className="px-6 md:px-0 mt-24 border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center text-white/30 text-xs font-mono w-full max-w-5xl mx-auto">
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-4 md:mb-0">
                    <Link to="/support" className="hover:text-white transition-colors">SUPPORT</Link>
                    <Link to="/popia" className="hover:text-white transition-colors">POPIA PORTAL</Link>
                    <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <Link to="/terms" className="hover:text-white transition-colors">TERMS</Link>
                    <Link to="/privacy" className="hover:text-white transition-colors">PRIVACY POLICY (ZA)</Link>
                    <span>BIONEX © 2026</span>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
