import CategoryCarousel, { CarouselItem } from "@/components/ui/CategoryCarousel";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";

// Mock data - replace with actual data from your database/API
const serviceCategories = [
    {
        name: "System Integration",
        items: [
            {
                id: "hw-integration",
                title: "Hardware Integration",
                description: "Seamless integration of industrial hardware components for optimal performance and reliability.",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
                href: "/services/integration/hw",
            },
            {
                id: "sw-integration",
                title: "Software Integration",
                description: "Custom software solutions that connect your systems and streamline operations.",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
                href: "/services/integration/sw",
            },
            {
                id: "network-integration",
                title: "Network Integration",
                description: "Industrial networking solutions for secure and efficient data communication.",
                image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
                href: "/services/integration/network",
            },
        ],
    },
    {
        name: "Automation Solutions",
        items: [
            {
                id: "robotic-automation",
                title: "Robotic Automation",
                description: "Advanced robotic systems for manufacturing, assembly, and material handling.",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
                href: "/services/automation/robotics",
            },
            {
                id: "factory-automation",
                title: "Factory Automation",
                description: "Complete factory automation solutions to maximize productivity and reduce costs.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
                href: "/services/automation/factory",
            },
            {
                id: "process-automation",
                title: "Process Automation",
                description: "Intelligent process control systems for chemical, food, and pharmaceutical industries.",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
                href: "/services/automation/process",
            },
        ],
    },
    {
        name: "Energy Management",
        items: [
            {
                id: "energy-audits",
                title: "Energy Audits",
                description: "Comprehensive energy audits to identify savings opportunities and improve efficiency.",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
                href: "/services/energy/audits",
            },
            {
                id: "power-quality",
                title: "Power Quality Analysis",
                description: "Advanced power quality monitoring and correction to protect your equipment.",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
                href: "/services/energy/quality",
            },
            {
                id: "energy-optimization",
                title: "Energy Optimization",
                description: "Strategic energy management solutions to reduce consumption and costs.",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
                href: "/services/energy/optimization",
            },
        ],
    },
    {
        name: "Maintenance & Support",
        items: [
            {
                id: "preventive-maintenance",
                title: "Preventive Maintenance",
                description: "Scheduled maintenance programs to prevent downtime and extend equipment life.",
                image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
                href: "/services/maintenance/preventive",
            },
            {
                id: "technical-support",
                title: "24/7 Technical Support",
                description: "Round-the-clock technical assistance for all your automation and electrical needs.",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
                href: "/services/maintenance/support",
            },
            {
                id: "amc-contracts",
                title: "AMC Contracts",
                description: "Annual maintenance contracts for comprehensive coverage and peace of mind.",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
                href: "/services/maintenance/amc",
            },
        ],
    },
];

// Service FAQs
const serviceFAQs: FAQItem[] = [
    {
        question: "How long does a typical automation project take?",
        answer: "Project timelines vary based on scope and complexity. Small automation projects typically take 2-4 weeks, while complete factory automation can take 3-6 months. We provide detailed project timelines during the initial consultation, including design, procurement, installation, and commissioning phases."
    },
    {
        question: "Do you offer free consultation and site surveys?",
        answer: "Yes! We provide complimentary initial consultations and site surveys to understand your requirements. Our engineers will assess your facility, discuss your goals, and recommend the best solutions. Detailed engineering studies for complex projects may have a nominal fee, which is adjusted against the project cost."
    },
    {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including manufacturing, pharmaceuticals, food & beverage, textiles, automotive, chemical processing, and commercial buildings. Our team has extensive experience across various sectors and can adapt our solutions to meet industry-specific requirements and regulations."
    },
    {
        question: "Are your engineers certified and experienced?",
        answer: "Absolutely. Our team consists of certified engineers with expertise in PLC programming, SCADA systems, electrical design, and industrial automation. We hold certifications from major automation brands and regularly undergo training to stay updated with the latest technologies and industry standards."
    },
    {
        question: "Do you provide emergency breakdown support?",
        answer: "Yes, we offer 24/7 emergency support for critical breakdowns. Our rapid response team can be on-site within hours for customers with AMC contracts. We also provide remote diagnostics and troubleshooting to minimize downtime. Emergency support is available on a call-out basis for non-AMC customers."
    },
    {
        question: "What does an AMC contract include?",
        answer: "Our Annual Maintenance Contracts include scheduled preventive maintenance visits, priority emergency support, spare parts at discounted rates, system health reports, software updates, and operator training refreshers. We offer different AMC tiers to match your specific needs and budget."
    }
];

export default async function ServicesPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-16 px-6">
            <div className="container mx-auto">
                {/* Page Header */}
                <div className="mb-16 text-center">
                    <span className="text-neon-purple text-sm uppercase tracking-widest">What We Offer</span>
                    <h1 className="text-5xl md:text-6xl font-bold font-orbitron mt-2 mb-6 text-white">
                        All <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">Services</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Comprehensive industrial automation and electrical services tailored to your needs.
                        From system integration to ongoing support, we're your trusted partner.
                    </p>
                </div>

                {/* Category Carousels */}
                {serviceCategories.map((category) => (
                    <CategoryCarousel
                        key={category.name}
                        categoryName={category.name}
                        items={category.items}
                        accentColor="purple"
                    />
                ))}
            </div>

            {/* FAQ Section */}
            <FAQSection
                title="Service Questions"
                subtitle="Common questions about our services, timelines, and support options"
                faqs={serviceFAQs}
                accentColor="purple"
            />
        </div>
    );
}
