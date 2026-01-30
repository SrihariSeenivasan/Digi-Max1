import Link from "next/link";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";

// Service-specific FAQs
const serviceDetailFAQs: FAQItem[] = [
    {
        question: "How long does this service typically take?",
        answer: "The timeline varies based on project scope and complexity. Small projects typically take 1-2 weeks, while larger implementations can take 4-12 weeks. We provide a detailed project timeline during the initial consultation phase."
    },
    {
        question: "Do you provide a free consultation?",
        answer: "Yes! We offer complimentary initial consultations to understand your requirements and assess your facility. Our experts will discuss your goals and recommend the best approach. Detailed engineering studies may have a nominal fee."
    },
    {
        question: "What is included in the service package?",
        answer: "Our service package includes initial assessment, detailed planning, implementation, testing, commissioning, training, and documentation. We also provide post-implementation support and can offer ongoing maintenance contracts."
    },
    {
        question: "Can you work with our existing systems?",
        answer: "Absolutely! We specialize in integrating with existing infrastructure. Our team has experience working with various brands and legacy systems. We ensure seamless integration while minimizing disruption to your operations."
    },
    {
        question: "What kind of support do you provide after implementation?",
        answer: "We offer comprehensive post-implementation support including warranty coverage, technical assistance, training refreshers, and optional AMC contracts. Our support team is available 24/7 for critical issues and emergency breakdowns."
    }
];

export default async function ServiceDetailPage(props: { params: Promise<{ category: string; slug: string }> }) {
    const params = await props.params;
    return (
        <div className="min-h-screen bg-black text-white pt-32 px-6">
            <div className="container mx-auto">
                <div className="mb-4 flex items-center gap-2 text-sm text-gray-400 uppercase tracking-widest">
                    <Link href="/services" className="hover:text-neon-purple transition-colors cursor-pointer">
                        Services
                    </Link>
                    <span>/</span>
                    <Link href={`/services/${params.category}`} className="hover:text-neon-purple transition-colors cursor-pointer">
                        {params.category.replace(/-/g, " ")}
                    </Link>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold font-orbitron mb-8 capitalize text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
                    {params.slug.replace(/-/g, " ")}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Service Description</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            Our <span className="font-bold text-white uppercase">{params.slug.replace(/-/g, " ")}</span> service ensures that your systems run at peak efficiency.
                            We utilize the latest technology and industry best practices to deliver measurable results.
                        </p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="w-2 h-2 bg-neon-purple rounded-full" />
                                Custom tailored strategies
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="w-2 h-2 bg-neon-purple rounded-full" />
                                Expert implementation team
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <div className="w-2 h-2 bg-neon-purple rounded-full" />
                                24/7 Support & Monitoring
                            </li>
                        </ul>

                        <button className="px-8 py-4 bg-neon-purple text-white font-bold rounded-full hover:bg-white hover:text-black transition-colors">
                            Schedule Consultation
                        </button>
                    </div>

                    <div className="h-[400px] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
                        <span className="text-gray-500">Service Diagram / Image</span>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <FAQSection
                title="Service FAQs"
                subtitle="Common questions about this service"
                faqs={serviceDetailFAQs}
                accentColor="purple"
            />
        </div>
    );
}
