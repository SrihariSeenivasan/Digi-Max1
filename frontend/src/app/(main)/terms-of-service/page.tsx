import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Digi Max Sustainable Services",
    description: "Terms of Service for Digi Max Sustainable Services - Read our terms and conditions for using our services.",
};

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-16 px-6">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="mb-12 text-center">
                    <span className="text-neon-cyan text-sm uppercase tracking-widest">Legal</span>
                    <h1 className="text-5xl md:text-6xl font-bold font-orbitron mt-2 mb-6">
                        Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Service</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Last Updated: January 29, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-cyan max-w-none">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            By accessing or using the services provided by Digi Max Sustainable Services ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our services.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            These Terms apply to all visitors, users, and others who access or use our services, including our website, products, and professional services.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Digi Max Sustainable Services provides:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Industrial automation solutions and system integration</li>
                            <li>Low voltage electrical products and distribution systems</li>
                            <li>Power monitoring and energy management systems</li>
                            <li>Control panel design and fabrication</li>
                            <li>Energy audits and power quality analysis</li>
                            <li>Technical support and maintenance services</li>
                        </ul>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            When using our services, you agree to:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Provide accurate, current, and complete information</li>
                            <li>Maintain the security of your account credentials</li>
                            <li>Notify us immediately of any unauthorized access</li>
                            <li>Use our services only for lawful purposes</li>
                            <li>Not interfere with or disrupt our services or servers</li>
                            <li>Not attempt to gain unauthorized access to any systems</li>
                            <li>Comply with all applicable local, state, and federal laws</li>
                        </ul>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property Rights</h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            All content, features, and functionality on our website and in our services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of Digi Max Sustainable Services or its licensors.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our materials without prior written consent.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Service Agreements and Quotations</h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            All quotations provided are valid for 30 days from the date of issue unless otherwise specified. Final pricing may vary based on:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                            <li>Changes in project scope or specifications</li>
                            <li>Site conditions and accessibility</li>
                            <li>Material availability and market prices</li>
                            <li>Regulatory or compliance requirements</li>
                        </ul>
                        <p className="text-gray-400 leading-relaxed">
                            Formal service agreements will be executed for all projects, detailing scope, timeline, deliverables, and payment terms.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Payment Terms</h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Unless otherwise agreed in writing:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Payment terms are typically 30% advance, 40% on delivery, and 30% on commissioning</li>
                            <li>Invoices are due within 30 days of the invoice date</li>
                            <li>Late payments may incur interest charges at 1.5% per month</li>
                            <li>We reserve the right to suspend services for non-payment</li>
                            <li>All prices are exclusive of applicable taxes unless stated otherwise</li>
                        </ul>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Warranties and Guarantees</h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            We warrant that:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                            <li>Our services will be performed with reasonable skill and care</li>
                            <li>Products supplied will be free from defects in materials and workmanship</li>
                            <li>All work will comply with applicable industry standards and regulations</li>
                        </ul>
                        <p className="text-gray-400 leading-relaxed">
                            Warranty periods vary by product and service. Specific warranty terms will be provided in individual service agreements or product documentation.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            To the maximum extent permitted by law, Digi Max Sustainable Services shall not be liable for:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                            <li>Indirect, incidental, special, consequential, or punitive damages</li>
                            <li>Loss of profits, revenue, data, or use</li>
                            <li>Damages arising from third-party products or services</li>
                            <li>Damages exceeding the amount paid for the specific service or product</li>
                        </ul>
                        <p className="text-gray-400 leading-relaxed">
                            This limitation applies regardless of the legal theory on which the claim is based.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
                        <p className="text-gray-400 leading-relaxed">
                            You agree to indemnify, defend, and hold harmless Digi Max Sustainable Services, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            We may terminate or suspend access to our services immediately, without prior notice or liability, for any reason, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Breach of these Terms</li>
                            <li>Non-payment of fees</li>
                            <li>Fraudulent or illegal activity</li>
                            <li>At our sole discretion</li>
                        </ul>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
                        <p className="text-gray-400 leading-relaxed">
                            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Salem, Tamil Nadu, India.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
                        <p className="text-gray-400 leading-relaxed">
                            We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the new Terms.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            If you have any questions about these Terms of Service, please contact us:
                        </p>
                        <div className="text-gray-400 space-y-2">
                            <p><strong className="text-white">Email:</strong> legal@digimax.com</p>
                            <p><strong className="text-white">Phone:</strong> +91 98765 43210</p>
                            <p><strong className="text-white">Address:</strong> 1st floor, 6, Perumal Malai Rd, Narasothipatti, Salem, Tamil Nadu 636004</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
