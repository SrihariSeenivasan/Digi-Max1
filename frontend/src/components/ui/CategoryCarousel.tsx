"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useMotionValue, animate } from "framer-motion";
import Link from "next/link";

export interface CarouselItem {
    id: string;
    title: string;
    description: string;
    image?: string;
    href: string;
}

interface CategoryCarouselProps {
    categoryName: string;
    items: CarouselItem[];
    accentColor?: "cyan" | "purple";
}

export default function CategoryCarousel({ categoryName, items, accentColor = "cyan" }: CategoryCarouselProps) {
    const [width, setWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    // Track dragging state to prevent accidental clicks
    // using ref for synchronous access in event handlers
    const isDragging = useRef(false);

    // Looping Logic:
    const itemsLength = items.length;

    useEffect(() => {
        if (carouselRef.current) {
            // Updated calculation to effectively constrain the drag
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, [items]);

    const scrollToItem = (index: number) => {
        if (!carouselRef.current) return;

        // Calculate width: get width of first child + gap
        const container = carouselRef.current;
        const firstChild = container.querySelector('[data-carousel-item]') as HTMLElement;
        const widthWithGap = (firstChild?.offsetWidth || 300) + 24; // 24 is gap-6

        const newX = -(index * widthWithGap);

        animate(x, newX, {
            type: "spring",
            stiffness: 300,
            damping: 30
        });
        setCurrentIndex(index);
    };

    const next = () => {
        if (currentIndex >= itemsLength - 1) {
            scrollToItem(0);
        } else {
            scrollToItem(currentIndex + 1);
        }
    };

    const prev = () => {
        if (currentIndex <= 0) {
            scrollToItem(itemsLength - 1);
        } else {
            scrollToItem(currentIndex - 1);
        }
    };

    // Intercept link clicks if we are dragging
    const handleLinkClick = (e: React.MouseEvent) => {
        if (isDragging.current) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    const colorClasses = {
        cyan: {
            text: "text-neon-cyan",
            border: "border-neon-cyan",
            bg: "bg-neon-cyan",
            hover: "hover:text-neon-cyan hover:border-neon-cyan",
        },
        purple: {
            text: "text-neon-purple",
            border: "border-neon-purple",
            bg: "bg-neon-purple",
            hover: "hover:text-neon-purple hover:border-neon-purple",
        },
    };

    const colors = colorClasses[accentColor];

    return (
        <div className="mb-16 group">
            {/* Category Header */}
            <div className="flex items-center justify-between mb-8 px-1">
                <div>
                    <h2 className={`text-2xl md:text-4xl font-bold font-orbitron ${colors.text}`}>
                        {categoryName}
                    </h2>
                    <div className={`h-1 w-20 ${colors.bg} mt-2 rounded-full`} />
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={prev}
                        className={`p-3 rounded-full border ${colors.border} ${colors.text} hover:bg-gray-100 transition-all duration-300`}
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={next}
                        className={`p-3 rounded-full border ${colors.border} ${colors.text} hover:bg-gray-100 transition-all duration-300`}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Draggable Carousel Container */}
            <div className="overflow-hidden" ref={carouselRef}>
                <motion.div
                    className="flex gap-6 cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    style={{ x }}
                    whileTap={{ cursor: "grabbing" }}
                    onDragStart={() => {
                        isDragging.current = true;
                    }}
                    onDragEnd={(e, { offset }) => {
                        // Small timeout to allow the click event to fire and be intercepted
                        setTimeout(() => {
                            isDragging.current = false;
                        }, 100);

                        const swipe = offset.x; // width of swipe

                        if (swipe < -50) {
                            next();
                        } else if (swipe > 50) {
                            prev();
                        }
                    }}
                >
                    {items.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            data-carousel-item
                            className="flex-shrink-0 w-[85vw] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
                        >
                            <Link
                                href={item.href}
                                className="block h-full"
                                draggable={false}
                                onClick={handleLinkClick}
                            >
                                <div className={`group/card relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-${accentColor === "cyan" ? "neon-cyan" : "neon-purple"}/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col`}>
                                    {/* Image */}
                                    <div className="h-48 md:h-60 overflow-hidden relative bg-gray-100 flex-shrink-0">
                                        {item.image ? (
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-500 pointer-events-none" // prevent img drag
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-600">
                                                <span className="text-sm">No Image</span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-grow flex flex-col justify-between">
                                        <div>
                                            <h3 className={`text-xl font-bold text-gray-900 mb-2 group-hover/card:${colors.text} transition-colors line-clamp-1`}>
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className={`mt-4 inline-flex items-center gap-2 text-sm ${colors.text} font-medium`}>
                                            Learn More
                                            <ChevronRight size={16} className="transform group-hover/card:translate-x-1 transition-transform" />
                                        </div>
                                    </div>

                                    {/* Hover Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-${accentColor === "cyan" ? "neon-cyan" : "neon-purple"}/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center gap-2 mt-6">
                {items.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollToItem(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? `${colors.bg} w-8` : "bg-gray-200 w-2 hover:bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
