"use client";

import { motion } from "framer-motion";
import CountUp from "../ui/CountUp";

export default function About() {
    return (
        <section id="about" className="py-24 relative bg-deep-blue overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">
                        ABOUT <span className="text-neon-cyan">DIGI MAX</span>
                    </h2>
                    <div className="h-1 w-20 bg-neon-purple mb-8 rounded-full" />

                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        <span className="text-white font-semibold">Digi Max</span> is a premier distributor and system integrator for <span className="text-white font-semibold">Industrial Automation</span> and <span className="text-white font-semibold">Switchgear</span> products. With over two decades of experience, we specialize in delivering high-quality solutions for homes, buildings, data centers, and industries.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        We combine energy technologies, real-time automation, software, and services to help our clients manage their energy efficiently and safely. From PLCs and SCADA to Low Voltage distribution, we are your one-stop shop for all electrical and automation needs.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-neon-cyan/20 rounded-2xl transform rotate-3 blur-md" />
                    <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center p-6 border border-white/5 rounded-xl bg-white/5">
                                <h3 className="text-4xl font-bold text-white mb-2">
                                    <CountUp end={5} suffix="+" />
                                </h3>
                                <p className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</p>
                            </div>
                            <div className="text-center p-6 border border-white/5 rounded-xl bg-white/5">
                                <h3 className="text-4xl font-bold text-neon-cyan mb-2">
                                    <CountUp end={100} suffix="+" />
                                </h3>
                                <p className="text-gray-400 text-sm uppercase tracking-wider">Projects Done</p>
                            </div>
                            <div className="text-center p-6 border border-white/5 rounded-xl bg-white/5">
                                <h3 className="text-4xl font-bold text-neon-purple mb-2">24/7</h3>
                                <p className="text-gray-400 text-sm uppercase tracking-wider">Support</p>
                            </div>
                            <div className="text-center p-6 border border-white/5 rounded-xl bg-white/5">
                                <h3 className="text-4xl font-bold text-white mb-2">
                                    <CountUp end={100} suffix="%" />
                                </h3>
                                <p className="text-gray-400 text-sm uppercase tracking-wider">Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
