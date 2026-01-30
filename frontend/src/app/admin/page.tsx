"use client";

import { motion } from "framer-motion";
import { Users, ShoppingBag, Activity, DollarSign } from "lucide-react";

const stats = [
    { name: 'Total Products', value: '12', icon: ShoppingBag, color: 'text-neon-cyan', bg: 'bg-neon-cyan/10' },
    { name: 'Total Services', value: '8', icon: Activity, color: 'text-neon-purple', bg: 'bg-neon-purple/10' },
    { name: 'Active Users', value: '2.4k', icon: Users, color: 'text-green-400', bg: 'bg-green-400/10' },
    { name: 'Revenue', value: '$45k', icon: DollarSign, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
]

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <motion.div
                        key={stat.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gray-900 border border-white/10 p-6 rounded-2xl"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-400 text-sm font-medium">{stat.name}</p>
                                <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
                            </div>
                            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 h-[400px]">
                    <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0">
                                <div className="w-2 h-2 rounded-full bg-neon-cyan" />
                                <p className="text-gray-400 text-sm">New product added to catalog</p>
                                <span className="ml-auto text-xs text-gray-600">2h ago</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 h-[400px]">
                    <h2 className="text-xl font-bold text-white mb-6">System Status</h2>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-400">Server Load</span>
                                <span className="text-neon-cyan">45%</span>
                            </div>
                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-neon-cyan w-[45%]" />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-400">Database Usage</span>
                                <span className="text-neon-purple">72%</span>
                            </div>
                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-neon-purple w-[72%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
