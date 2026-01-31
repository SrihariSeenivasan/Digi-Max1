import Link from "next/link";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";
import ProductGallery from "@/components/ui/ProductGallery";
import { Check, ArrowRight, ShieldCheck, Truck, Cog } from "lucide-react";

// Product-specific FAQs
const productDetailFAQs: FAQItem[] = [
    {
        question: "What warranty is included with this product?",
        answer: "This product comes with a comprehensive manufacturer warranty. The warranty period varies by product type - typically 2 years for low voltage products and up to 5 years for industrial automation equipment. Extended warranty options are also available."
    },
    {
        question: "Is installation and commissioning included?",
        answer: "Installation and commissioning services are available as optional add-ons. Our certified technicians can handle complete installation, testing, and commissioning to ensure optimal performance. We also provide detailed installation manuals for self-installation."
    },
    {
        question: "Can this product be customized?",
        answer: "Yes, we offer customization options to meet your specific requirements. Our engineering team can modify specifications, add features, or integrate the product with your existing systems. Contact us to discuss your customization needs."
    },
    {
        question: "What certifications does this product have?",
        answer: "All our products meet international standards and hold relevant certifications including IEC, IS, CE, and UL where applicable. We provide complete certification documentation with each product delivery."
    },
    {
        question: "How do I get technical support for this product?",
        answer: "We offer comprehensive technical support including phone support, email assistance, and on-site service. Our support team is available 24/7 for critical issues. Detailed user manuals, installation guides, and troubleshooting resources are also provided."
    }
];

// Mock images for demonstration
const mockProductImages = [
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"
];

export default async function ProductDetailPage(props: { params: Promise<{ category: string; slug: string }> }) {
    const params = await props.params;
    const productName = params.slug.replace(/-/g, " ");
    const categoryName = params.category.replace(/-/g, " ");

    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-neon-cyan selection:text-black">
            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
                {/* Breadcrumbs & Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 font-medium">
                        <Link href="/products" className="hover:text-neon-cyan transition-colors">Products</Link>
                        <span className="text-gray-700">/</span>
                        <Link href={`/products/${params.category}`} className="hover:text-neon-cyan transition-colors capitalize text-gray-600">{categoryName}</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-400 capitalize">{productName}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
                    {/* Left Column: Gallery (Sticky) */}
                    <div className="lg:col-span-5 h-fit lg:sticky lg:top-32">
                        <ProductGallery images={mockProductImages} />

                        {/* Quick Trust Signals */}
                        <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
                            <div className="text-center">
                                <div className="w-10 h-10 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-2 text-neon-cyan border border-gray-100">
                                    <ShieldCheck size={20} />
                                </div>
                                <span className="text-xs text-gray-500 block">2-Year Warranty</span>
                            </div>
                            <div className="text-center">
                                <div className="w-10 h-10 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-2 text-neon-purple border border-gray-100">
                                    <Truck size={20} />
                                </div>
                                <span className="text-xs text-gray-500 block">Fast Delivery</span>
                            </div>
                            <div className="text-center">
                                <div className="w-10 h-10 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-2 text-blue-500 border border-gray-100">
                                    <Cog size={20} />
                                </div>
                                <span className="text-xs text-gray-500 block">Customizable</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="lg:col-span-7 space-y-8">
                        <div>
                            <div className="inline-block px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-bold tracking-wider mb-4">
                                INDUSTRIAL GRADE
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron capitalize leading-tight mb-6 text-gray-900">
                                {productName}
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Engineered for high-performance industrial environments. The {productName} delivers exceptional reliability, advanced control capabilities, and seamless integration with existing automation infrastructure.
                            </p>
                        </div>

                        {/* Feature Highlights */}
                        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 font-orbitron">Key Specifications</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                {[
                                    "High efficiency power management",
                                    "Industrial IoT connectivity ready",
                                    "Overload & short-circuit protection",
                                    "Compact modular design",
                                    "Wide operating temperature range",
                                    "Remote monitoring capabilities"
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-neon-cyan/10 text-neon-cyan flex items-center justify-center flex-shrink-0">
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-600 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Call To Action Area */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="flex-1 px-8 py-4 bg-gradient-to-r from-neon-cyan to-blue-500 text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group">
                                Request Quote
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="flex-1 px-8 py-4 bg-white border border-gray-200 text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-sm">
                                Download Datasheet
                            </button>
                        </div>

                        {/* Description Tabs Section */}
                        <div className="pt-12 border-t border-gray-100">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900 font-orbitron">Technical Description</h3>
                                <div className="prose prose-invert prose-cyan max-w-none text-gray-600">
                                    <p>
                                        The <span className="text-gray-900 font-medium capitalize">{productName}</span> sets a new standard for industrial reliability. Designed by expert engineers and manufactured using premium-grade materials, it withstands harsh operating conditions while maintaining peak performance.
                                    </p>
                                    <p>
                                        Whether used in manufacturing plants, power distribution centers, or automated assembly lines, this product ensures operational continuity. Its advanced safety features protect both personnel and downstream equipment from electrical faults.
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 mt-4">
                                        <li>Certified for Zone 2 hazardous areas</li>
                                        <li>Integrated Modbus TCP/IP communication</li>
                                        <li>Rated for 100,000+ operational cycles</li>
                                        <li>Tool-free mounting and wiring</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="border-t border-gray-100 bg-gray-50">
                <FAQSection
                    title="Product Questions"
                    subtitle="Common questions about this product series"
                    faqs={productDetailFAQs}
                    accentColor="cyan"
                />
            </div>
        </div>
    );
}
