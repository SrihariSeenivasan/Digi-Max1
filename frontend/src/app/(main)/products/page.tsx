import CategoryCarousel, { CarouselItem } from "@/components/ui/CategoryCarousel";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";

// Mock data - replace with actual data from your database/API
const productCategories = [
    {
        name: "Low Voltage Products",
        items: [
            {
                id: "mcb-1",
                title: "Miniature Circuit Breakers (MCBs)",
                description: "High-performance MCBs for residential and commercial applications with superior breaking capacity.",
                image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
                href: "/products/low-voltage/mcb",
            },
            {
                id: "rccb-1",
                title: "Residual Current Circuit Breakers",
                description: "Advanced RCCBs providing protection against earth leakage and electric shock.",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
                href: "/products/low-voltage/rccb",
            },
            {
                id: "db-1",
                title: "Distribution Boards",
                description: "Modular distribution boards designed for efficient power management and safety.",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
                href: "/products/low-voltage/db",
            },
            {
                id: "contactor-1",
                title: "Contactors & Relays",
                description: "Industrial-grade contactors for motor control and switching applications.",
                image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
                href: "/products/low-voltage/contactors",
            },
        ],
    },
    {
        name: "Industrial Automation",
        items: [
            {
                id: "plc-1",
                title: "Programmable Logic Controllers",
                description: "Advanced PLCs for industrial automation with high-speed processing and reliability.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
                href: "/products/automation/plc",
            },
            {
                id: "hmi-1",
                title: "HMI & SCADA Systems",
                description: "Intuitive human-machine interfaces for real-time monitoring and control.",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
                href: "/products/automation/hmi",
            },
            {
                id: "vfd-1",
                title: "Variable Frequency Drives",
                description: "Energy-efficient VFDs for precise motor speed control and power savings.",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
                href: "/products/automation/vfd",
            },
            {
                id: "sensor-1",
                title: "Industrial Sensors",
                description: "High-precision sensors for temperature, pressure, and proximity detection.",
                image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
                href: "/products/automation/sensors",
            },
        ],
    },
    {
        name: "Power Monitoring",
        items: [
            {
                id: "meter-1",
                title: "Energy Meters",
                description: "Accurate energy metering devices for consumption tracking and billing.",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
                href: "/products/power-monitoring/meters",
            },
            {
                id: "analyzer-1",
                title: "Power Quality Analyzers",
                description: "Advanced analyzers for monitoring voltage, current, and power factor.",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
                href: "/products/power-monitoring/analyzers",
            },
            {
                id: "logger-1",
                title: "Data Loggers",
                description: "Intelligent data logging systems for comprehensive power analysis.",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
                href: "/products/power-monitoring/loggers",
            },
        ],
    },
];

// Product FAQs
const productFAQs: FAQItem[] = [
    {
        question: "What warranty do you provide on your products?",
        answer: "All our products come with manufacturer warranties ranging from 1 to 5 years depending on the product category. Low voltage products typically have a 2-year warranty, while industrial automation equipment comes with extended warranties. We also offer annual maintenance contracts for comprehensive coverage."
    },
    {
        question: "Can I customize products to meet specific requirements?",
        answer: "Yes! We specialize in customized solutions. Our engineering team can modify products or design custom control panels, distribution boards, and automation systems to meet your exact specifications. Contact us with your requirements for a detailed consultation."
    },
    {
        question: "What is the typical delivery time for products?",
        answer: "Standard products are usually available for immediate delivery or within 3-5 business days. Custom-built solutions like control panels and automation systems typically take 2-4 weeks depending on complexity. We'll provide accurate timelines during the quotation process."
    },
    {
        question: "Are your products certified and compliant with standards?",
        answer: "Absolutely. All our products meet international standards including IEC, IS, CE, and UL certifications where applicable. Our industrial automation products comply with industry-specific standards, and we provide all necessary documentation and certificates with each delivery."
    },
    {
        question: "Do you provide technical support and training?",
        answer: "Yes, we offer comprehensive technical support including installation guidance, commissioning assistance, and operator training. Our support team is available 24/7 for critical issues, and we provide detailed documentation and training materials with all automation systems."
    },
    {
        question: "What payment terms do you offer?",
        answer: "We offer flexible payment terms based on order value and customer relationship. Standard terms are 30% advance, 40% on delivery, and 30% on commissioning. For bulk orders and long-term contracts, we can discuss customized payment schedules."
    }
];

export default async function ProductsPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 pt-32 pb-16 px-6">
            <div className="container mx-auto">
                {/* Page Header */}
                <div className="mb-16 text-center">
                    <span className="text-neon-cyan text-sm uppercase tracking-widest">Our Catalog</span>
                    <h1 className="text-5xl md:text-6xl font-bold font-orbitron mt-2 mb-6 text-gray-900">
                        All <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Products</span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Explore our comprehensive range of industrial automation and electrical products.
                        From low voltage distribution to advanced monitoring systems, we have everything you need.
                    </p>
                </div>

                {/* Category Carousels */}
                {productCategories.map((category, idx) => (
                    <CategoryCarousel
                        key={category.name}
                        categoryName={category.name}
                        items={category.items}
                        accentColor="cyan"
                    />
                ))}
            </div>

            {/* FAQ Section */}
            <FAQSection
                title="Product Questions"
                subtitle="Everything you need to know about our products, warranties, and support"
                faqs={productFAQs}
                accentColor="cyan"
            />
        </div>
    );
}
