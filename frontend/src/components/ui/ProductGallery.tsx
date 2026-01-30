"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";

interface ProductGalleryProps {
    images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex flex-col gap-4 max-w-xl mx-auto">
            {/* Main Image Container - Compact 4:3 Aspect Ratio */}
            <div
                className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <AnimatePresence mode="wait">
                    <motion.img
                        key={selectedImage}
                        src={images[selectedImage]}
                        alt="Product View"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                {/* Zoom Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                    className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 text-white"
                >
                    <Maximize2 size={16} />
                </motion.div>

                {/* Subtle border Glow on hover */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/0 group-hover:ring-neon-cyan/30 transition-all duration-500" />
            </div>

            {/* Thumbnails - Horizontal Scrollable Strip */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none snap-x">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`relative flex-shrink-0 w-20 aspect-square rounded-lg overflow-hidden border transition-all duration-300 snap-start ${selectedImage === idx
                                ? "border-neon-cyan ring-1 ring-neon-cyan/20 opacity-100"
                                : "border-white/10 hover:border-white/30 opacity-60 hover:opacity-100"
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                        />
                        {/* Active Indicator */}
                        {selectedImage === idx && (
                            <motion.div
                                layoutId="active-thumb"
                                className="absolute inset-0 bg-neon-cyan/10"
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
