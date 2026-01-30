"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
        alert("Thank you for contacting us! We'll get back to you soon.");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-16 px-6">
            <div className="container mx-auto">
                {/* Page Header */}
                <div className="mb-16 text-center">
                    <span className="text-neon-cyan text-sm uppercase tracking-widest">Get In Touch</span>
                    <h1 className="text-5xl md:text-6xl font-bold font-orbitron mt-2 mb-6">
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Us</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a question or need assistance? We're here to help. Reach out to us and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-neon-cyan/50 transition-all">
                            <div className="w-12 h-12 bg-neon-cyan/10 rounded-full flex items-center justify-center mb-4">
                                <Phone className="text-neon-cyan" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                            <p className="text-gray-400">+91 1234567890</p>
                            <p className="text-gray-400">+91 0987654321</p>
                        </div>

                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-neon-cyan/50 transition-all">
                            <div className="w-12 h-12 bg-neon-cyan/10 rounded-full flex items-center justify-center mb-4">
                                <Mail className="text-neon-cyan" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                            <p className="text-gray-400">info@digimax.com</p>
                            <p className="text-gray-400">support@digimax.com</p>
                        </div>

                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-neon-cyan/50 transition-all">
                            <div className="w-12 h-12 bg-neon-cyan/10 rounded-full flex items-center justify-center mb-4">
                                <MapPin className="text-neon-cyan" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Office</h3>
                            <p className="text-gray-400">
                                123 Industrial Avenue,<br />
                                Tech Park, Bangalore,<br />
                                Karnataka - 560001
                            </p>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 border border-neon-cyan/30 rounded-2xl backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
                            <div className="space-y-2 text-gray-300">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 9:00 AM - 2:00 PM</p>
                                <p>Sunday: Closed</p>
                                <p className="text-neon-cyan font-semibold mt-4">24/7 Emergency Support Available</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                                            placeholder="+91 1234567890"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                                            placeholder="How can we help?"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us about your project or inquiry..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-8 py-4 bg-neon-cyan text-black font-bold rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(0,243,255,0.6)] transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    Send Message <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
