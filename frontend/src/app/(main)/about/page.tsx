import CountUp from "@/components/ui/CountUp";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-16 px-6">
            <div className="container mx-auto">
                {/* Page Header */}
                <div className="mb-16 text-center">
                    <span className="text-neon-cyan text-sm uppercase tracking-widest">Who We Are</span>
                    <h1 className="text-5xl md:text-6xl font-bold font-orbitron mt-2 mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">DIGI MAX</span>
                    </h1>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            <span className="text-white font-semibold">Digi Max</span> is a premier distributor and system integrator for <span className="text-white font-semibold">Industrial Automation</span> and <span className="text-white font-semibold">Switchgear</span> products. With over two decades of experience, we specialize in delivering high-quality solutions for homes, buildings, data centers, and industries.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            We combine energy technologies, real-time automation, software, and services to help our clients manage their energy efficiently and safely. From PLCs and SCADA to Low Voltage distribution, we are your one-stop shop for all electrical and automation needs.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-neon-cyan/20 rounded-2xl transform rotate-3 blur-md" />
                        <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-6 border border-white/5 rounded-xl bg-white/5">
                                    <h3 className="text-4xl font-bold text-white mb-2">
                                        <CountUp end={20} suffix="+" />
                                    </h3>
                                    <p className="text-gray-400 text-sm uppercase tracking-wider">Years Experience</p>
                                </div>
                                <div className="text-center p-6 border border-white/5 rounded-xl bg-white/5">
                                    <h3 className="text-4xl font-bold text-neon-cyan mb-2">
                                        <CountUp end={500} suffix="+" />
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
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-neon-cyan mb-4">Our Mission</h3>
                        <p className="text-gray-300 leading-relaxed">
                            To provide cutting-edge industrial automation and electrical solutions that empower businesses to operate efficiently, safely, and sustainably while maintaining the highest standards of quality and customer service.
                        </p>
                    </div>
                    <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                        <h3 className="text-2xl font-bold text-neon-purple mb-4">Our Vision</h3>
                        <p className="text-gray-300 leading-relaxed">
                            To be the leading provider of industrial automation solutions, recognized for innovation, reliability, and excellence in helping industries achieve their operational goals through advanced technology.
                        </p>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-12">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Expert Team", desc: "Certified professionals with decades of combined experience" },
                            { title: "Quality Products", desc: "Premium brands and rigorously tested components" },
                            { title: "Custom Solutions", desc: "Tailored systems designed for your specific needs" },
                            { title: "24/7 Support", desc: "Round-the-clock technical assistance and maintenance" },
                            { title: "Competitive Pricing", desc: "Best value without compromising on quality" },
                            { title: "Proven Track Record", desc: "500+ successful projects across industries" },
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 bg-black/40 border border-white/5 rounded-xl hover:border-neon-cyan/50 transition-all">
                                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
