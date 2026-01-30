"use client";

import { motion } from "framer-motion";
import HeroImageShowcase from "@/components/ui/HeroImageShowcase";
import RobotScene from "@/components/canvas/RobotScene";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
            {/* 3D Background - Positioned absolutely behind content */}
            <div className="absolute inset-0 z-0">
                <RobotScene />
            </div>

            {/* Background Gradient Overlay to ensure text readability */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-900/50 via-black/80 to-black opacity-80 pointer-events-none" />
            <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

            {/* Overlay Content */}
            <div className="container mx-auto px-6 z-10 relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full pt-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-left"
                >
                    <div className="inline-block px-3 py-1 mb-4 border border-neon-cyan/50 rounded-full bg-black/30 backdrop-blur-sm">
                        <span className="text-neon-cyan text-sm tracking-wider uppercase">Your Trusted Partner in Energy Management</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 leading-tight text-white shadow-black drop-shadow-lg">
                        INDUSTRIAL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple text-glow">
                            AUTOMATION
                        </span>
                        <br /> & SWITCHGEAR
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg leading-relaxed mix-blend-difference">
                        We deliver high-quality Industrial Automation, Low Voltage Products, and Energy Management solutions for homes, industries, and infrastructure.
                    </p>

                    <div className="flex gap-4">
                        <button className="px-8 py-4 bg-neon-cyan text-black font-bold text-lg rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(0,243,255,0.6)] transition-all duration-300 flex items-center gap-2">
                            View Products <ArrowRight size={20} />
                        </button>
                        <button className="px-8 py-4 border border-white/20 hover:border-neon-purple text-white font-bold text-lg rounded-full bg-black/40 backdrop-blur-md hover:bg-neon-purple/20 transition-all duration-300">
                            Contact Sales
                        </button>
                    </div>
                </motion.div>

                {/* Right side: Image Showcase */}
                <div className="hidden md:block relative z-20">
                    <HeroImageShowcase />
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-neon-cyan rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
