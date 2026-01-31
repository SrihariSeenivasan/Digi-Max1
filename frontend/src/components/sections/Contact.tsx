"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Glow */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-8">
                        GET IN <span className="text-neon-cyan">TOUCH</span>
                    </h2>

                    <p className="text-gray-600 mb-12 text-lg">
                        Ready to transform your business with sustainable tech? Reach out to us today.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-gray-100 rounded-full text-neon-purple">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h4>
                                <p className="text-gray-500">
                                    1st floor, 6, Perumal Malai Rd,<br />
                                    Narasothipatti, Salem,<br />
                                    Tamil Nadu 636004
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-gray-100 rounded-full text-neon-cyan">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Email Us</h4>
                                <p className="text-gray-500">info@digimax.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-gray-100 rounded-full text-pink-500">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Call Us</h4>
                                <p className="text-gray-500">+91 98765 43210</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 p-8 rounded-3xl shadow-xl"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-500 uppercase tracking-wider">Name</label>
                                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-900 focus:border-neon-cyan focus:outline-none transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-500 uppercase tracking-wider">Email</label>
                                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-900 focus:border-neon-cyan focus:outline-none transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-500 uppercase tracking-wider">Subject</label>
                            <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-900 focus:border-neon-cyan focus:outline-none transition-colors" placeholder="Project Inquiry" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-500 uppercase tracking-wider">Message</label>
                            <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-900 focus:border-neon-cyan focus:outline-none transition-colors" placeholder="Tell us about your project..." />
                        </div>

                        <button type="submit" className="w-full py-4 bg-neon-purple text-white font-bold rounded-lg hover:bg-neon-purple/80 transition-all duration-300 flex justify-center items-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}
