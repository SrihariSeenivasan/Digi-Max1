"use client";

import { motion } from "framer-motion";
import HeroImageShowcase from "@/components/ui/HeroImageShowcase";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-deep-blue selection:bg-neon-cyan selection:text-deep-blue">
            {/* 1. Dynamic Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Dark Base */}
                <div className="absolute inset-0 bg-deep-blue" />

                {/* Cyber Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]" />

                {/* Glowing Orbs */}
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-neon-purple/10 blur-[150px] animate-pulse" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-neon-cyan/5 blur-[150px] animate-pulse delay-1000" />

                {/* Tech Lines */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent opacity-50" />
                    <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent opacity-50" />
                </div>
            </div>

            <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20">
                {/* Left Column: Text Content (Span 7) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-7 flex flex-col space-y-10 text-center lg:text-left"
                >
                    {/* Badge */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="px-5 py-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 backdrop-blur-md flex items-center gap-3 shadow-[0_0_15px_rgba(0,243,255,0.1)]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
                            </span>
                            <span className="text-neon-cyan text-xs font-bold tracking-[0.2em] uppercase">
                                Intelligent Automation
                            </span>
                        </div>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight font-orbitron">
                        POWERING <br />
                        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple filter drop-shadow-[0_0_10px_rgba(189,0,255,0.3)]">
                            TOMORROW
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-neon-cyan/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mx-auto lg:mx-0 font-light border-l-2 border-neon-cyan/20 pl-6">
                        Unlock the potential of Industry 4.0 with DigiMax. We engineer
                        <span className="text-white font-medium"> precision switchgear</span> and
                        <span className="text-white font-medium"> intelligent automation systems </span>
                        for a sustainable, efficient future.
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        {[
                            { icon: Zap, text: "Smart Energy", color: "text-yellow-400" },
                            { icon: Shield, text: "Cyber Secure", color: "text-green-400" },
                            { icon: Globe, text: "Global Scale", color: "text-blue-400" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/5 hover:border-neon-cyan/30 hover:bg-white/10 transition-all cursor-default backdrop-blur-sm"
                            >
                                <item.icon size={16} className={item.color} />
                                <span className="text-gray-200 text-sm font-medium">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5 pt-2 justify-center lg:justify-start">
                        <button className="group relative px-8 py-4 bg-neon-cyan text-deep-blue font-bold text-lg rounded-xl overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] hover:translate-y-[-2px]">
                            <span className="relative z-10 flex items-center gap-2">
                                Discover Solutions
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>

                        <button className="relative px-8 py-4 bg-transparent border border-white/10 hover:border-neon-purple text-white font-bold text-lg rounded-xl overflow-hidden transition-all group hover:shadow-[0_0_20px_rgba(189,0,255,0.2)]">
                            <span className="relative z-10 group-hover:text-neon-purple transition-colors">Request a Demo</span>
                            <div className="absolute inset-0 bg-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </div>
                </motion.div>

                {/* Right Column: Interactive Visuals (Span 5) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:block lg:col-span-5 relative h-[600px] w-full flex items-center justify-center transform perspective-2000"
                >
                    <HeroImageShowcase />

                    {/* Decorative Elements around visual */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neon-purple/10 rounded-full blur-3xl" />
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    );
}
