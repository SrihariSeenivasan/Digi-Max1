"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CategoryCarousel, { CarouselItem } from "@/components/ui/CategoryCarousel";

// All products from all categories
const allProducts: CarouselItem[] = [
    // Low Voltage Products
    {
        id: "mcb-1",
        title: "Miniature Circuit Breakers (MCBs)",
        description: "High-performance MCBs for residential and commercial applications with superior breaking capacity.",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
        href: "/products/low-voltage/mcb",
    },
    {
        id: "rccb-1",
        title: "Residual Current Circuit Breakers",
        description: "Advanced RCCBs providing protection against earth leakage and electric shock.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
        href: "/products/low-voltage/rccb",
    },
    {
        id: "db-1",
        title: "Distribution Boards",
        description: "Modular distribution boards designed for efficient power management and safety.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
        href: "/products/low-voltage/db",
    },
    {
        id: "contactor-1",
        title: "Contactors & Relays",
        description: "Industrial-grade contactors for motor control and switching applications.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
        href: "/products/low-voltage/contactors",
    },
    // Industrial Automation
    {
        id: "plc-1",
        title: "Programmable Logic Controllers",
        description: "Advanced PLCs for industrial automation with high-speed processing and reliability.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        href: "/products/automation/plc",
    },
    {
        id: "hmi-1",
        title: "HMI & SCADA Systems",
        description: "Intuitive human-machine interfaces for real-time monitoring and control.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
        href: "/products/automation/hmi",
    },
    {
        id: "vfd-1",
        title: "Variable Frequency Drives",
        description: "Energy-efficient VFDs for precise motor speed control and power savings.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
        href: "/products/automation/vfd",
    },
    {
        id: "sensor-1",
        title: "Industrial Sensors",
        description: "High-precision sensors for temperature, pressure, and proximity detection.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
        href: "/products/automation/sensors",
    },
    // Power Monitoring
    {
        id: "meter-1",
        title: "Energy Meters",
        description: "Accurate energy metering devices for consumption tracking and billing.",
        image: "https://images.unsplash.com/photo-1555664424-778a69032054?auto=format&fit=crop&q=80&w=800",
        href: "/products/power-monitoring/meters",
    },
    {
        id: "analyzer-1",
        title: "Power Quality Analyzers",
        description: "Advanced analyzers for monitoring voltage, current, and power factor.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
        href: "/products/power-monitoring/analyzers",
    },
    {
        id: "logger-1",
        title: "Data Loggers",
        description: "Intelligent data logging systems for comprehensive power analysis.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
        href: "/products/power-monitoring/loggers",
    },
];

export default function Products() {
    return (
        <section id="products" className="py-24 bg-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-cyan/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-neon-purple/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-neon-cyan uppercase tracking-widest text-sm font-medium mb-4 block">
                            Our Innovation
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Cutting-Edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Products</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            Discover our range of sustainable technology solutions designed to empower your business for a greener future.
                        </p>
                    </motion.div>
                </div>

                {/* Products Carousel */}
                <CategoryCarousel
                    categoryName="Featured Products"
                    items={allProducts}
                    accentColor="cyan"
                />

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link href="/products">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold rounded-full hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300"
                        >
                            View All Products
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
