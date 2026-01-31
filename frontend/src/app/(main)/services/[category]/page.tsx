import Link from "next/link";
import { ArrowRight, Wrench, Clock, BadgeCheck, Users } from "lucide-react";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";

// Service Category FAQs
const serviceCategoryFAQs: FAQItem[] = [
    {
        question: "How do I schedule an initial assessment?",
        answer: "You can schedule an assessment by contacting our support team via phone or email, or by using the 'Schedule Consultation' button below. We typically respond within 24 hours to set up a site visit."
    },
    {
        question: "Is this service available for 24/7 operations?",
        answer: "Yes, we understand the critical nature of industrial operations. Our teams are available for round-the-clock deployments and emergency callbacks to minimize downtime."
    },
    {
        question: "Do you provide certified documentation?",
        answer: "All our services come with comprehensive reports and certified documentation compliant with local and international industrial standards (ISO, IEC, OSHA)."
    },
    {
        question: "Can these services be customized for small facilities?",
        answer: "Absolutely. We tailor our service packages to scale with your facility size, from small workshops to large-scale industrial complexes."
    },
    {
        question: "What is your typical response time for emergencies?",
        answer: "For contract customers, we guarantee a response time of under 4 hours. For non-contract emergency calls, we aim for same-day response depending on technician availability."
    }
];

export default async function ServiceCategoryPage(props: { params: Promise<{ category: string }> }) {
    const params = await props.params;
    const categoryName = params.category.replace(/-/g, " ");

    const serviceData = {
        title: categoryName,
        description: `Comprehensive ${categoryName} services tailored to optimize your industrial operations and maximize efficiency.`,
    };

    const services = [
        { id: "1", name: "System Audit & Analysis", desc: "Detailed evaluation of current infrastructure with actionable insights.", image: "https://images.unsplash.com/photo-1581092162384-8987d16550a2?auto=format&fit=crop&q=80&w=800" },
        { id: "2", name: "Implementation Strategy", desc: "Customized deployment plans ensuring minimal downtime.", image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800" },
        { id: "3", name: "Maintenance Contracts", desc: "Ongoing support and preventive maintenance packages.", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800" },
        { id: "4", name: "Team Training", desc: "Hands-on training sessions for your operational staff.", image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800" },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-neon-purple selection:text-white">
            {/* Ambient Background */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
                {/* Breadcrumbs */}
                <div className="mb-8 flex items-center gap-2 text-sm text-gray-500 font-medium">
                    <Link href="/services" className="hover:text-neon-purple transition-colors">Services</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-600 capitalize">{categoryName}</span>
                </div>

                {/* Hero Headers */}
                <div className="mb-16">
                    <div className="inline-block px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-bold tracking-wider mb-4">
                        SERVICE SUITE
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold font-orbitron capitalize mb-6 text-gray-900 leading-tight">
                        {serviceData.title}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl leading-relaxed border-l-2 border-neon-purple pl-6">
                        {serviceData.description}
                    </p>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-24">

                    {/* Sidebar: Service Stats/Trust */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md">
                            <div className="flex items-center gap-3 mb-4 text-neon-purple">
                                <Users size={24} />
                                <h3 className="font-bold text-gray-900">Expert Team</h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                Certified engineers with 10+ years of detailed field experience.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md">
                            <div className="flex items-center gap-3 mb-4 text-blue-500">
                                <Clock size={24} />
                                <h3 className="font-bold text-gray-900">24/7 Support</h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                Round-the-clock emergency assistance for critical systems.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md">
                            <div className="flex items-center gap-3 mb-4 text-green-500">
                                <BadgeCheck size={24} />
                                <h3 className="font-bold text-gray-900">Guaranteed</h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                Performance guarantees on all our integration projects.
                            </p>
                        </div>
                    </div>

                    {/* Main Grid: Services */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service, idx) => (
                            <Link
                                href={`/services/${params.category}/${service.name.toLowerCase().replace(/ /g, "-")}`}
                                key={idx}
                                className="group block"
                            >
                                <div className="h-full bg-white border border-gray-200 rounded-2xl p-1 overflow-hidden hover:border-neon-purple/50 hover:shadow-lg transition-all duration-300 flex flex-col">
                                    {/* Image Wrapper */}
                                    <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-gray-100">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                                        <img
                                            src={service.image}
                                            alt={service.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-md p-2 rounded-lg text-gray-900 group-hover:bg-neon-purple group-hover:text-white transition-colors">
                                            <Wrench size={16} />
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="px-4 pb-6 flex-grow flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-neon-purple transition-colors">
                                                {service.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                                {service.desc}
                                            </p>
                                        </div>
                                        <div className="flex items-center text-sm font-medium text-neon-purple group-hover:translate-x-2 transition-transform duration-300">
                                            View Details <ArrowRight size={16} className="ml-2" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Call to Action Banner */}
                <div className="mb-24 relative bg-gradient-to-br from-neon-purple/10 to-blue-500/10 border border-purple-100 rounded-2xl p-10 overflow-hidden text-center md:text-left">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/20 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-orbitron">Need a Custom Solution?</h2>
                            <p className="text-gray-600 max-w-xl">
                                Our engineering team specializes in solving unique challenges. Contact us for a free consultation and site audit.
                            </p>
                        </div>
                        <button className="whitespace-nowrap px-8 py-4 bg-neon-purple text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                            Schedule Consultation
                        </button>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="border-t border-gray-100 bg-gray-50">
                <FAQSection
                    title="Service FAQs"
                    subtitle={`Common questions about our ${categoryName} services`}
                    faqs={serviceCategoryFAQs}
                    accentColor="purple"
                />
            </div>
        </div>
    );
}
