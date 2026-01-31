import Link from "next/link";
import { ArrowRight, Box, Zap, Activity, Info } from "lucide-react";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";

// Category-specific FAQs
const categoryFAQs: FAQItem[] = [
    {
        question: "Do you offer bulk pricing for this category?",
        answer: "Yes, we offer tiered volume discounts for bulk orders. Please contact our sales team with your estimated quantities for a custom quote."
    },
    {
        question: "Are these products compatible with legacy systems?",
        answer: "Most of our products in this category are designed with backward compatibility in mind. Check the individual product specifications or consult our engineering team for specific integration details."
    },
    {
        question: "Can I download a full catalog for this category?",
        answer: "Absolutely. You can download the complete category brochure and technical datasheets from our Resources section or request a physical copy via mail."
    },
    {
        question: "Do you provide customization for these products?",
        answer: "Yes, we offer customization services ranging from branding/labeling to hardware modifications to meet your specific application requirements."
    },
    {
        question: "What is the standard lead time for these items?",
        answer: "Standard in-stock items ship within 24-48 hours. For larger quantities or customized units, typical lead times range from 2-4 weeks depending on the specific model and production schedule."
    }
];

export default async function ProductCategoryPage(props: { params: Promise<{ category: string }> }) {
    const params = await props.params;
    const categoryName = params.category.replace(/-/g, " ");

    // Mock category data (in a real app, fetch based on params.category)
    const categoryData = {
        title: categoryName,
        description: `Explore our premium range of ${categoryName} solutions designed for industrial excellence and reliability.`,
        features: ["High Performance", "Industrial Grade", "Safety Certified"],
    };

    // Mock products list for this category
    const products = [
        { id: "1", name: "Industrial Series X1", desc: "High-performance industrial control unit", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" },
        { id: "2", name: "Pro Series Alpha", desc: "Advanced protection and monitoring device", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
        { id: "3", name: "Control Module 500", desc: "Next-gen intelligent automation module", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800" },
        { id: "4", name: "Power Grid Master", desc: "Seamless power distribution management", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800" },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-neon-cyan selection:text-black">
            {/* Ambient Background */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
                {/* Breadcrumbs */}
                <div className="mb-8 flex items-center gap-2 text-sm text-gray-500 font-medium">
                    <Link href="/products" className="hover:text-neon-cyan transition-colors">Products</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-600 capitalize">{categoryName}</span>
                </div>

                {/* Hero Headers */}
                <div className="mb-16">
                    <div className="inline-block px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-bold tracking-wider mb-4">
                        CATEGORY
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold font-orbitron capitalize mb-6 text-gray-900 leading-tight">
                        {categoryData.title}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl leading-relaxed border-l-2 border-neon-cyan pl-6">
                        {categoryData.description}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, idx) => (
                        <Link
                            href={`/products/${params.category}/${product.name.toLowerCase().replace(/ /g, "-")}`}
                            key={idx}
                            className="group block"
                        >
                            <div className="relative h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-neon-cyan/50 hover:shadow-lg transition-all duration-300">
                                {/* Image Area */}
                                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Overlay Icon */}
                                    <div className="absolute bottom-4 left-4 z-20 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/50 group-hover:bg-neon-cyan group-hover:text-black group-hover:border-neon-cyan transition-all duration-300">
                                        <ArrowRight size={18} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-neon-cyan transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                        {product.desc}
                                    </p>

                                    {/* Features Badges */}
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-gray-100 text-gray-500 border border-gray-200">
                                            IEC Certified
                                        </span>
                                        <span className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-gray-100 text-gray-500 border border-gray-200">
                                            Heavy Duty
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {/* Placeholder Card for "Layout Balance" or "Coming Soon" */}
                    <div className="bg-white border border-gray-200 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                        <Box size={40} className="text-gray-400 mb-4" />
                        <h3 className="text-lg font-bold text-gray-500 mb-2">More Coming Soon</h3>
                        <p className="text-sm text-gray-500">We are constantly adding new products to our catalog.</p>
                    </div>
                </div>

                {/* Info Section */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-neon-cyan/10 text-neon-cyan">
                            <Zap size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Energy Efficient</h4>
                            <p className="text-xs text-gray-600">Optimized for minimal power consumption without performance loss.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                            <Activity size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Real-time Monitoring</h4>
                            <p className="text-xs text-gray-600">Advanced telemetry allows for continuous system health checks.</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                            <Info size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Global Standards</h4>
                            <p className="text-xs text-gray-600">Compliant with international safety and quality protocols.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="border-t border-gray-100 bg-gray-50">
                <FAQSection
                    title="Category FAQs"
                    subtitle={`Common questions about our ${categoryName} solutions`}
                    faqs={categoryFAQs}
                    accentColor="cyan"
                />
            </div>
        </div>
    );
}
