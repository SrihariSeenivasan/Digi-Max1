export default function AdminServices() {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-white">Services Management</h2>
                <button className="bg-neon-purple text-white px-4 py-2 rounded-lg font-medium hover:bg-neon-purple/80 transition-colors">
                    Add New Service
                </button>
            </div>
            <div className="bg-gray-900 border border-white/10 rounded-2xl p-8 text-center text-gray-400">
                Services list and editing interface will appear here.
            </div>
        </div>
    );
}
