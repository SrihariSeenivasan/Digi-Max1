"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, HeadphonesIcon, Briefcase, Menu, LogOut, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sidebarItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Products", href: "/admin/products", icon: Package },
    { name: "Services", href: "/admin/services", icon: Briefcase },
    { name: "Support", href: "/admin/support", icon: HeadphonesIcon },
];

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen bg-black text-white flex">
            {/* Sidebar */}
            <motion.aside
                initial={{ width: 280 }}
                animate={{ width: isSidebarOpen ? 280 : 80 }}
                className="fixed h-full z-20 bg-gray-900 border-r border-white/10 hidden md:flex flex-col"
            >
                <div className="h-20 flex items-center px-6 border-b border-white/10">
                    <Link href="/" className="font-bold tracking-tighter flex items-center gap-2 overflow-hidden">
                        <span className="text-neon-cyan text-xl">DIGI</span>
                        {isSidebarOpen && <span className="text-white text-xl">MAX ADMIN</span>}
                    </Link>
                </div>

                <nav className="flex-1 py-6 px-4 space-y-2">
                    {sidebarItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                        ? "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                <Icon size={20} className={isActive ? "text-neon-cyan" : "text-gray-400 group-hover:text-white"} />
                                {isSidebarOpen && <span className="font-medium whitespace-nowrap">{item.name}</span>}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button className="flex items-center gap-4 px-4 py-3 w-full rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all">
                        <LogOut size={20} />
                        {isSidebarOpen && <span className="font-medium">Logout</span>}
                    </button>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="mt-4 flex items-center justify-center w-full py-2 text-gray-500 hover:text-white"
                    >
                        {isSidebarOpen ? "Collapse" : "Expand"}
                    </button>
                </div>
            </motion.aside>

            {/* Mobile Sidebar Overlay */}


            {/* Main Content */}
            <main className={`flex-1 min-h-screen transition-all duration-300 ${isSidebarOpen ? "md:ml-[280px]" : "md:ml-[80px]"}`}>
                <header className="h-20 bg-black/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-10 px-8 flex items-center justify-between">
                    <h1 className="text-xl font-semibold capitalize text-gray-200">
                        {pathname.split("/").pop() || "Dashboard"}
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-neon-cyan/20 border border-neon-cyan/50 flex items-center justify-center text-neon-cyan font-bold">
                            A
                        </div>
                    </div>
                </header>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
