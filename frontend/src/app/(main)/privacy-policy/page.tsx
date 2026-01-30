import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Digi Max Sustainable Services",
    description: "Privacy Policy for Digi Max Sustainable Services - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-16 px-6">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="mb-12 text-center">
                    <span className="text-neon-cyan text-sm uppercase tracking-widest">Legal</span>
                    <h1 className="text-5xl md:text-6xl font-bold font-orbitron mt-2 mb-6">
                        Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Policy</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Last Updated: January 29, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-cyan max-w-none">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Welcome to Digi Max Sustainable Services ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            We collect information that you provide directly to us, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
                            <li>Name and contact information (email address, phone number, mailing address)</li>
                            <li>Company name and business information</li>
                            <li>Project requirements and technical specifications</li>
                            <li>Payment and billing information</li>
                            <li>Communication preferences</li>
                        </ul>
                        <p className="text-gray-400 leading-relaxed">
                            We also automatically collect certain information when you visit our website, including IP address, browser type, operating system, and usage data through cookies and similar technologies.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Provide, maintain, and improve our services</li>
                            <li>Process your transactions and send related information</li>
                            <li>Send you technical notices, updates, and support messages</li>
                            <li>Respond to your comments, questions, and customer service requests</li>
                            <li>Communicate with you about products, services, and events</li>
                            <li>Monitor and analyze trends, usage, and activities</li>
                            <li>Detect, prevent, and address technical issues and security threats</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            We may share your information in the following circumstances:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li><strong className="text-white">Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                            <li><strong className="text-white">Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
                            <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights</li>
                            <li><strong className="text-white">With Your Consent:</strong> When you have given us explicit permission</li>
                        </ul>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                        <p className="text-gray-400 leading-relaxed">
                            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            You have the right to:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Access and receive a copy of your personal information</li>
                            <li>Correct inaccurate or incomplete information</li>
                            <li>Request deletion of your personal information</li>
                            <li>Object to or restrict processing of your information</li>
                            <li>Withdraw consent at any time</li>
                            <li>Data portability</li>
                        </ul>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking Technologies</h2>
                        <p className="text-gray-400 leading-relaxed">
                            We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Privacy Policy</h2>
                        <p className="text-gray-400 leading-relaxed">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
                        <div className="text-gray-400 space-y-2">
                            <p><strong className="text-white">Email:</strong> privacy@digimax.com</p>
                            <p><strong className="text-white">Phone:</strong> +91 98765 43210</p>
                            <p><strong className="text-white">Address:</strong> 1st floor, 6, Perumal Malai Rd, Narasothipatti, Salem, Tamil Nadu 636004</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
