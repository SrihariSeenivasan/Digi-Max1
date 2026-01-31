"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroImageShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
            title: "Smart Factories",
            subtitle: "Industry 4.0 Ready",
            badge: "AI Powered",
            color: "neon-purple"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
            title: "Advanced Circuitry",
            subtitle: "Next-Gen Technology",
            badge: "IoT Enabled",
            color: "neon-cyan"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
            title: "Precision Engineering",
            subtitle: "Automated Excellence",
            badge: "24/7 Active",
            color: "neon-green"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
            title: "Global Network",
            subtitle: "Connected Worldwide",
            badge: "Real-time",
            color: "neon-purple"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % cards.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [cards.length]);

    const getCardPosition = (index: number) => {
        const diff = (index - currentIndex + cards.length) % cards.length;
        return diff;
    };

    return (
        <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden pointer-events-none select-none">
            {/* Animated Background Gradients */}
            <motion.div
                className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[150px]"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-[150px]"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, -50, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Decorative Grid - Removed to match Hero section's global grid */}
            {/* <div className="absolute inset-0 ..." /> */}

            <div className="relative w-full max-w-6xl h-full flex items-center justify-center px-4">

                {/* Rotating Ring Background */}
                <motion.div
                    className="absolute w-[600px] h-[600px] border border-black/5 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-neon-cyan rounded-full -translate-x-1/2" />
                    <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-neon-purple rounded-full -translate-x-1/2" />
                </motion.div>

                {/* Carousel Cards Stack */}
                <div className="relative w-full max-w-[900px] h-[450px]">
                    <AnimatePresence mode="popLayout">
                        {cards.map((card, index) => {
                            const position = getCardPosition(index);
                            const isActive = position === 0;
                            const isNext = position === 1;
                            const isPrev = position === cards.length - 1;

                            if (position > 2 && position < cards.length - 1) return null;

                            return (
                                <motion.div
                                    key={card.id}
                                    className="absolute top-1/2 left-1/2 w-[400px] h-[450px]"
                                    initial={false}
                                    animate={{
                                        x: position === 0 ? "-50%" : position === 1 ? "20%" : "-120%",
                                        y: "-50%",
                                        scale: position === 0 ? 1 : 0.85,
                                        opacity: position === 0 ? 1 : position === 1 ? 0.6 : 0.3,
                                        rotateY: position === 0 ? 0 : position === 1 ? -15 : 15,
                                        zIndex: position === 0 ? 30 : position === 1 ? 20 : 10,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        ease: [0.34, 1.56, 0.64, 1]
                                    }}
                                    style={{
                                        transformStyle: "preserve-3d",
                                        perspective: "1000px"
                                    }}
                                >
                                    <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white border border-black/10 shadow-2xl group">
                                        {/* Image with Parallax Effect */}
                                        <motion.div
                                            className="absolute inset-0"
                                            animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                                            transition={{ duration: 0.7 }}
                                        >
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                className="w-full h-full object-cover opacity-80"
                                            />
                                        </motion.div>

                                        {/* Gradient Overlay - Solid Deep Blue at bottom */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />

                                        {/* Removed Colored Pulse Overlay to match background */}

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                                            {/* Badge */}
                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                                transition={{ delay: 0.2 }}
                                                className="inline-flex items-center gap-2 bg-black/5 backdrop-blur-md border border-black/10 rounded-full px-4 py-1.5 mb-4"
                                            >
                                                <span className={`h-2 w-2 rounded-full bg-${card.color} animate-pulse`} />
                                                <span className="text-xs text-gray-700 uppercase tracking-wider font-semibold">
                                                    {card.badge}
                                                </span>
                                            </motion.div>

                                            {/* Title */}
                                            <motion.h3
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                                transition={{ delay: 0.3 }}
                                                className="text-3xl font-bold text-gray-900 mb-2 font-orbitron"
                                            >
                                                {card.title}
                                            </motion.h3>

                                            {/* Subtitle */}
                                            <motion.p
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                                transition={{ delay: 0.4 }}
                                                className={`text-gray-500 text-sm tracking-wide`}
                                            >
                                                {card.subtitle}
                                            </motion.p>

                                            {/* Progress Bar */}
                                            <motion.div
                                                className="mt-6 h-1 bg-black/10 rounded-full overflow-hidden"
                                                initial={{ opacity: 0 }}
                                                animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                                            >
                                                <motion.div
                                                    className={`h-full bg-gradient-to-r from-${card.color} to-transparent`}
                                                    initial={{ width: "0%" }}
                                                    animate={isActive ? { width: "100%" } : { width: "0%" }}
                                                    transition={{ duration: 3.5, ease: "linear" }}
                                                />
                                            </motion.div>
                                        </div>

                                        {/* Corner Accents */}
                                        <motion.div
                                            className="absolute top-4 right-4 w-12 h-12"
                                            animate={isActive ? { rotate: 360 } : {}}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        >
                                            <div className={`absolute inset-0 border-t-2 border-r-2 border-${card.color} rounded-tr-2xl opacity-50`} />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Navigation Dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-40">
                    {cards.map((_, index) => (
                        <motion.button
                            key={index}
                            className="pointer-events-auto relative"
                            onClick={() => setCurrentIndex(index)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-black w-8' : 'bg-black/20'
                                }`} />
                        </motion.button>
                    ))}
                </div>

                {/* Floating Stats Cards */}
                <motion.div
                    className="absolute top-12 left-8 bg-white/80 backdrop-blur-xl border border-black/10 rounded-2xl p-4 z-40 w-32"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                >
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse" />
                        <span className="text-[10px] text-gray-500 uppercase">Status</span>
                    </div>
                    <p className="text-xl font-bold text-gray-900">99.9%</p>
                    <p className="text-xs text-neon-green">Uptime</p>
                </motion.div>

                <motion.div
                    className="absolute top-12 right-8 bg-white/80 backdrop-blur-xl border border-black/10 rounded-2xl p-4 z-40 w-32"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7, type: "spring" }}
                >
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-neon-cyan animate-pulse" />
                        <span className="text-[10px] text-gray-500 uppercase">Devices</span>
                    </div>
                    <p className="text-xl font-bold text-gray-900">2.4K</p>
                    <p className="text-xs text-neon-cyan">Connected</p>
                </motion.div>
            </div>
        </div>
    );
}