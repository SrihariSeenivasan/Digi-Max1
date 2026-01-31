"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    title?: string;
    subtitle?: string;
    faqs: FAQItem[];
    accentColor?: "cyan" | "purple";
}

export default function FAQSection({
    title = "Frequently Asked Questions",
    subtitle = "Find answers to common questions about our products and services",
    faqs,
    accentColor = "cyan"
}: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const colorClasses = {
        cyan: {
            text: "text-neon-cyan",
            border: "border-neon-cyan",
            bg: "bg-neon-cyan",
            gradient: "from-neon-cyan to-blue-400",
        },
        purple: {
            text: "text-neon-purple",
            border: "border-neon-purple",
            bg: "bg-neon-purple",
            gradient: "from-neon-purple to-pink-400",
        },
    };

    const colors = colorClasses[accentColor];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Effects */}
            <div className={`absolute top-0 left-0 w-96 h-96 bg-${accentColor === "cyan" ? "neon-cyan" : "neon-purple"}/5 rounded-full blur-[120px]`} />
            <div className={`absolute bottom-0 right-0 w-96 h-96 bg-${accentColor === "cyan" ? "neon-purple" : "neon-cyan"}/5 rounded-full blur-[120px]`} />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <HelpCircle className={`w-6 h-6 ${colors.text}`} />
                        <span className={`${colors.text} uppercase tracking-widest text-xs font-medium`}>
                            FAQ
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {title.split(" ").slice(0, -1).join(" ")}{" "}
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>
                            {title.split(" ").slice(-1)}
                        </span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
                        {subtitle}
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto space-y-3">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div
                                className={`bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? `border-${accentColor === "cyan" ? "neon-cyan" : "neon-purple"}/50 shadow-lg shadow-${accentColor === "cyan" ? "neon-cyan" : "neon-purple"}/10` : "hover:border-gray-300"
                                    }`}
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4 flex-1">
                                        <div className={`flex-shrink-0 w-7 h-7 rounded-full border-2 ${openIndex === index ? colors.border : "border-gray-200"} flex items-center justify-center transition-all duration-300`}>
                                            <span className={`text-xs font-bold ${openIndex === index ? colors.text : "text-gray-400"}`}>
                                                {index + 1}
                                            </span>
                                        </div>
                                        <h3 className={`text-base md:text-lg font-bold transition-colors duration-300 ${openIndex === index ? colors.text : "text-gray-900 group-hover:text-gray-700"
                                            }`}>
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0 ml-4"
                                    >
                                        <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${openIndex === index ? colors.text : "text-gray-400"
                                            }`} />
                                    </motion.div>
                                </button>

                                {/* Answer */}
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-4 pl-16">
                                                <div className={`border-l-2 ${colors.border} pl-4 py-1`}>
                                                    <p className="text-gray-600 leading-relaxed text-sm">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="inline-block bg-white border border-gray-200 rounded-2xl px-8 py-6 shadow-md">
                        <p className="text-gray-900 mb-4">
                            Still have questions? We're here to help!
                        </p>
                        <a
                            href="/contact"
                            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${colors.gradient} text-black font-bold rounded-full hover:shadow-lg hover:shadow-${accentColor === "cyan" ? "neon-cyan" : "neon-purple"}/50 transition-all duration-300`}
                        >
                            Contact Support
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
