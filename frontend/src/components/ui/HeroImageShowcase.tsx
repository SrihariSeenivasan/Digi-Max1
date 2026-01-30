"use client";

import { motion } from "framer-motion";

export default function HeroImageShowcase() {
    return (
        <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center pointer-events-none select-none perspective-1000">
            {/* Ambient Back Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-cyan/20 rounded-full blur-[120px] animate-pulse" />

            <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center">

                {/* 1. Background Decor: Rotating Rings */}
                <motion.div
                    className="absolute inset-0 border border-white/5 rounded-full z-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-[10%] border border-white/5 rounded-full z-0 border-dashed"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />

                {/* 2. Main Image: Central Industrial Automation (Reliable URL) */}
                <motion.div
                    className="absolute top-0 right-4 w-[65%] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-neon-purple/20 z-10 bg-gray-900"
                    initial={{ opacity: 0, y: 50, rotate: 6 }}
                    animate={{ opacity: 1, y: 0, rotate: 6 }}
                    whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                        alt="Industrial Engineer"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                        <p className="text-white font-bold text-lg font-orbitron">Smart Factories</p>
                        <p className="text-neon-cyan text-xs">Industry 4.0 Ready</p>
                    </div>
                </motion.div>

                {/* 3. Secondary Image: Detailed Tech (Floating Left) */}
                <motion.div
                    className="absolute bottom-10 left-0 w-[55%] aspect-square rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-neon-cyan/20 z-20 bg-gray-900"
                    initial={{ opacity: 0, x: -50, rotate: -3 }}
                    animate={{ opacity: 1, x: 0, rotate: -3 }}
                    whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full h-full relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
                            alt="Advanced Circuitry"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-neon-cyan/10 mix-blend-overlay" />
                    </motion.div>
                </motion.div>

                {/* 4. Small Accent: Floating Card (Top Left) */}
                <motion.div
                    className="absolute top-12 left-8 w-32 h-32 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl z-30 flex flex-col items-center justify-center p-4 shadow-lg overflow-hidden"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                >
                    <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center mb-2">
                        <div className="w-3 h-3 bg-neon-purple rounded-full animate-ping" />
                    </div>
                    <span className="text-white text-xs font-bold">System Status</span>
                    <span className="text-neon-green text-[10px] uppercase mt-1">Operational</span>

                    {/* Decorative bg line */}
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan w-full" />
                </motion.div>

                {/* 5. Small Accent: Glass Badge (Bottom Right) */}
                <motion.div
                    className="absolute bottom-20 -right-4 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-lg z-30"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-neon-cyan" />
                        <span className="text-xs text-white uppercase tracking-wider">IoT Enabled</span>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
