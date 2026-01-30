export default function AdminProducts() {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-white">Products Management</h2>
                <button className="bg-neon-cyan text-black px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors">
                    Add New Product
                </button>
            </div>
            <div className="bg-gray-900 border border-white/10 rounded-2xl p-8 text-center text-gray-400">
                Product management table will appear here.
            </div>
        </div>
    );
}
