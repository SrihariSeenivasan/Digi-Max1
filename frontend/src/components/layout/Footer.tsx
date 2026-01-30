"use client";

import Link from "next/link";
import { Twitter, Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-6">
                            <span className="text-neon-cyan">DIGI</span>
                            <span className="text-white">MAX</span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Empowering the future with cutting-edge sustainable technology and innovative digital solutions.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-400 hover:text-neon-cyan transition-colors">
                                <Phone size={16} />
                                <span className="text-sm">+91 98765 43210</span>
                            </a>
                            <a href="mailto:info@digimax.com" className="flex items-center gap-3 text-gray-400 hover:text-neon-cyan transition-colors">
                                <Mail size={16} />
                                <span className="text-sm">info@digimax.com</span>
                            </a>
                            <div className="flex items-start gap-3 text-gray-400">
                                <MapPin size={16} className="mt-1 flex-shrink-0" />
                                <span className="text-sm">
                                    1st floor, 6, Perumal Malai Rd<br />
                                    Narasothipatti, Salem<br />
                                    Tamil Nadu 636004
                                </span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan transition-all duration-300">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan transition-all duration-300">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan transition-all duration-300">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Products Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Products</h4>
                        <ul className="space-y-4">
                            <li><Link href="/products" className="text-gray-400 hover:text-neon-cyan transition-colors">Low Voltage Products</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-neon-cyan transition-colors">Industrial Automation</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-neon-cyan transition-colors">Power Monitoring</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-neon-cyan transition-colors">Energy Meters</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-neon-cyan transition-colors">Control Panels</Link></li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="/services" className="text-gray-400 hover:text-neon-cyan transition-colors">System Integration</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-neon-cyan transition-colors">Automation Solutions</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-neon-cyan transition-colors">Energy Audits</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-neon-cyan transition-colors">Power Quality Analysis</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-neon-cyan transition-colors">Panel Design</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-neon-cyan transition-colors">Maintenance & Support</Link></li>
                        </ul>
                    </div>

                    {/* Location Map Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Our Location</h4>
                        <div className="relative w-full h-64 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d688162.531239005!2d77.98947861786807!3d11.261992176860698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1004eee2217%3A0x42508f4feafc18de!2sDigi%20max%20sustainable%20services!5e0!3m2!1sen!2sin!4v1769695814425!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} Digi Max Sustainable Services. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                            <Link href="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
                            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
