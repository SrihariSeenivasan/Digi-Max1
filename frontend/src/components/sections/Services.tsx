"use client";

import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import { Laptop, Rocket, Globe, ShieldCheck, Cpu, BarChart } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const services = [
    {
        icon: <Cpu size={40} />,
        title: "System Integration",
        desc: "Seamless integration of hardware, software, and networking for optimal industrial performance.",
        color: "group-hover:text-neon-cyan"
    },
    {
        icon: <Rocket size={40} />,
        title: "Automation Solutions",
        desc: "Customized robotic and PLC-based automation strategies to combat inefficiency.",
        color: "group-hover:text-neon-purple"
    },
    {
        icon: <BarChart size={40} />,
        title: "Energy Audits",
        desc: "Comprehensive analysis of power usage to identify savings and improve sustainability.",
        color: "group-hover:text-green-400"
    },
    {
        icon: <ShieldCheck size={40} />,
        title: "Power Quality Analysis",
        desc: "Ensuring stable voltage and efficient power factor for your critical equipment.",
        color: "group-hover:text-yellow-400"
    },
    {
        icon: <Laptop size={40} />,
        title: "Panel Design",
        desc: "Expert design and fabrication of control panels, MCCs, and PCCs.",
        color: "group-hover:text-blue-400"
    },
    {
        icon: <Globe size={40} />,
        title: "Maintenance & Support",
        desc: "24/7 technical support and annual maintenance contracts for peace of mind.",
        color: "group-hover:text-pink-400"
    }
];

export default function Services() {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const useX = useMotionValue(0); // Renamed to avoid conflict if any, though x is fine
    const isDragging = useRef(false);

    useEffect(() => {
        const calculateWidth = () => {
            if (carouselRef.current) {
                // Calculate based on the parent container's total scrollable width vs visible width
                // This matches the working logic in CategoryCarousel
                const scrollWidth = carouselRef.current.scrollWidth;
                const offsetWidth = carouselRef.current.offsetWidth;
                setWidth(scrollWidth - offsetWidth);
            }
        };

        // Initial calc
        calculateWidth();

        // Add minimal delay for safety - multiple checks help with hydration
        const timer1 = setTimeout(calculateWidth, 100);
        const timer2 = setTimeout(calculateWidth, 500);

        // Update on resize
        window.addEventListener("resize", calculateWidth);

        return () => {
            window.removeEventListener("resize", calculateWidth);
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    const handleLinkClick = (e: React.MouseEvent) => {
        if (isDragging.current) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    return (
        <section id="services" className="py-24 bg-white relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
                        OUR <span className="text-neon-purple">SERVICES</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive digital solutions designed to propel your business into the future.
                    </p>
                </div>

                {/* DESKTOP VIEW: GRID */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link href="/services" key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-neon-cyan/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
                            >
                                <div className={`text-gray-500 mb-6 ${service.color} transition-colors duration-300`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-neon-cyan transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* MOBILE VIEW: DRAGGABLE CAROUSEL */}
                <div className="md:hidden overflow-hidden" ref={carouselRef}>
                    <motion.div
                        className="flex gap-4 cursor-grab active:cursor-grabbing w-fit"
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        whileTap={{ cursor: "grabbing" }}
                        onDragStart={() => isDragging.current = true}
                        onDragEnd={() => setTimeout(() => isDragging.current = false, 100)}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 w-[85vw]"
                            >
                                <Link
                                    href="/services"
                                    className="block h-full"
                                    draggable={false}
                                    onClick={handleLinkClick}
                                >
                                    <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-lg transition-all duration-300 h-full">
                                        <div className={`text-gray-500 mb-6 ${service.color} transition-colors duration-300`}>
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-neon-cyan transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {service.desc}
                                        </p>
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Mobile Drag Indicator */}
                <div className="md:hidden flex justify-center mt-8 gap-2">
                    <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-neon-purple"
                            style={{
                                width: "30%",
                                x: useX
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
