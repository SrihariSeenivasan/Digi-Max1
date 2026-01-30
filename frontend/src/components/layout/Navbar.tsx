"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Configuration Data ---
const productCategories = [
    {
        name: "Low Voltage Products",
        href: "/products/low-voltage",
        items: [
            { name: "MCBs & RCCBs", href: "/products/low-voltage/mcb" },
            { name: "Distribution Boards", href: "/products/low-voltage/db" },
            { name: "Contactors", href: "/products/low-voltage/contactors" },
        ]
    },
    {
        name: "Industrial Automation",
        href: "/products/automation",
        items: [
            { name: "PLCs", href: "/products/automation/plc" },
            { name: "HMI / SCADA", href: "/products/automation/hmi" },
            { name: "VFDs & Soft Starters", href: "/products/automation/vfd" },
        ]
    },
    {
        name: "Power Monitoring",
        href: "/products/power-monitoring",
        items: [
            { name: "Energy Meters", href: "/products/power-monitoring/meters" },
            { name: "Power Quality Analyzers", href: "/products/power-monitoring/analyzers" },
        ]
    },
];

const serviceCategories = [
    {
        name: "System Integration",
        href: "/services/integration",
        items: [
            { name: "Hardware Integration", href: "/services/integration/hw" },
            { name: "Software Integration", href: "/services/integration/sw" },
        ]
    },
    {
        name: "Automation Solutions",
        href: "/services/automation",
        items: [
            { name: "Robotic Automation", href: "/services/automation/robotics" },
            { name: "Factory Automation", href: "/services/automation/factory" },
        ]
    },
    {
        name: "Energy Management",
        href: "/services/energy",
        items: [
            { name: "Energy Audits", href: "/services/energy/audits" },
            { name: "Power Quality Analysis", href: "/services/energy/quality" },
        ]
    },
];

// --- Components ---

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Desktop Dropdown States
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    // Mobile Dropdown States
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Helper to close everything on nav
    const closeAll = () => {
        setIsOpen(false);
        setActiveDropdown(null);
        setExpandedCategory(null);
    };

    // Smart navigation helper
    const getNavLink = (section: string) => {
        if (isHomePage) {
            return `#${section}`;
        }
        return section === "hero" ? "/" : `/${section}`;
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4 shadow-lg border-b border-white/10" : "bg-transparent py-6"
                }`}
            onMouseLeave={() => setActiveDropdown(null)}
        >
            <div className="container mx-auto px-6 flex justify-between items-center relative">
                <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2" onClick={closeAll}>
                    <span className="text-neon-cyan">DIGI</span>
                    <span className="text-white">MAX</span>
                </Link>

                {/* --- Desktop Menu --- */}
                <div className="hidden md:flex gap-8 items-center">
                    <Link href={getNavLink("hero")} className="nav-item">Home</Link>
                    <Link href={getNavLink("about")} className="nav-item">About</Link>

                    {/* PRODUCTS DROPDOWN */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown("products")}
                        onMouseLeave={() => setExpandedCategory(null)}
                    >
                        <Link href="/products" className="nav-item flex items-center gap-1" onClick={closeAll}>
                            Products <ChevronDown size={14} />
                        </Link>

                        <AnimatePresence>
                            {activeDropdown === "products" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-2 z-50"
                                >
                                    {productCategories.map((cat) => (
                                        <div key={cat.name} className="relative">
                                            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 transition-colors group/item">
                                                <Link href={cat.href} className="flex-1 text-sm text-gray-300 hover:text-white font-medium" onClick={closeAll}>
                                                    {cat.name}
                                                </Link>
                                                {/* Category Expander Icon */}
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setExpandedCategory(expandedCategory === cat.name ? null : cat.name);
                                                    }}
                                                    className="p-1 text-gray-400 hover:text-neon-cyan transition-colors"
                                                >
                                                    <ChevronRight size={14} className={`transform transition-transform ${expandedCategory === cat.name ? "rotate-90" : ""}`} />
                                                </button>
                                            </div>

                                            {/* Sub-items list */}
                                            <AnimatePresence>
                                                {expandedCategory === cat.name && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden bg-white/5 rounded-lg mb-2"
                                                    >
                                                        <div className="pl-4 pr-2 py-2 space-y-1">
                                                            {cat.items.map((item) => (
                                                                <Link
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className="block text-xs text-gray-400 hover:text-neon-cyan py-1"
                                                                    onClick={closeAll}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* SERVICES DROPDOWN */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown("services")}
                        onMouseLeave={() => setExpandedCategory(null)}
                    >
                        <Link href="/services" className="nav-item flex items-center gap-1" onClick={closeAll}>
                            Services <ChevronDown size={14} />
                        </Link>

                        <AnimatePresence>
                            {activeDropdown === "services" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-2 z-50"
                                >
                                    {serviceCategories.map((cat) => (
                                        <div key={cat.name} className="relative">
                                            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 transition-colors">
                                                <Link href={cat.href} className="flex-1 text-sm text-gray-300 hover:text-white font-medium" onClick={closeAll}>
                                                    {cat.name}
                                                </Link>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setExpandedCategory(expandedCategory === cat.name ? null : cat.name);
                                                    }}
                                                    className="p-1 text-gray-400 hover:text-neon-purple transition-colors"
                                                >
                                                    <ChevronRight size={14} className={`transform transition-transform ${expandedCategory === cat.name ? "rotate-90" : ""}`} />
                                                </button>
                                            </div>
                                            <AnimatePresence>
                                                {expandedCategory === cat.name && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden bg-white/5 rounded-lg mb-2"
                                                    >
                                                        <div className="pl-4 pr-2 py-2 space-y-1">
                                                            {cat.items.map((item) => (
                                                                <Link
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className="block text-xs text-gray-400 hover:text-neon-purple py-1"
                                                                    onClick={closeAll}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link
                        href={getNavLink("contact")}
                        className="px-6 py-2 border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        Get Started
                    </Link>
                </div>

                {/* --- Mobile Toggle --- */}
                <button
                    className="md:hidden text-white hover:text-neon-cyan transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* --- Mobile Menu --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            <Link href={getNavLink("hero")} className="mobile-nav-item" onClick={closeAll}>Home</Link>
                            <Link href={getNavLink("about")} className="mobile-nav-item" onClick={closeAll}>About</Link>

                            {/* Mobile Products */}
                            <div>
                                <button
                                    onClick={() => setMobileExpanded(mobileExpanded === "products" ? null : "products")}
                                    className="mobile-nav-item w-full flex justify-between items-center"
                                >
                                    Products <ChevronDown size={16} className={`transform ${mobileExpanded === "products" ? "rotate-180" : ""}`} />
                                </button>
                                <AnimatePresence>
                                    {mobileExpanded === "products" && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="ml-4 mt-2 space-y-2 overflow-hidden"
                                        >
                                            {productCategories.map((cat) => (
                                                <Link
                                                    key={cat.name}
                                                    href={cat.href}
                                                    className="block text-sm text-gray-400 hover:text-neon-cyan py-1"
                                                    onClick={closeAll}
                                                >
                                                    {cat.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Mobile Services */}
                            <div>
                                <button
                                    onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
                                    className="mobile-nav-item w-full flex justify-between items-center"
                                >
                                    Services <ChevronDown size={16} className={`transform ${mobileExpanded === "services" ? "rotate-180" : ""}`} />
                                </button>
                                <AnimatePresence>
                                    {mobileExpanded === "services" && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="ml-4 mt-2 space-y-2 overflow-hidden"
                                        >
                                            {serviceCategories.map((cat) => (
                                                <Link
                                                    key={cat.name}
                                                    href={cat.href}
                                                    className="block text-sm text-gray-400 hover:text-neon-purple py-1"
                                                    onClick={closeAll}
                                                >
                                                    {cat.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link
                                href={getNavLink("contact")}
                                className="px-6 py-3 border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 rounded-full transition-all text-center font-bold"
                                onClick={closeAll}
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                .nav-item {
                    @apply text-gray-300 hover:text-neon-cyan transition-colors text-sm uppercase tracking-widest font-medium cursor-pointer;
                }
                .mobile-nav-item {
                    @apply text-lg text-gray-200 hover:text-neon-cyan transition-colors font-medium;
                }
            `}</style>
        </nav>
    );
}
