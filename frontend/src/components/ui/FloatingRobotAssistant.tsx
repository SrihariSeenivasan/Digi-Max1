"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { usePathname } from "next/navigation";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sphere, Cylinder } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import * as THREE from "three";

// Cute Robot from Hero Section with different poses
function CuteRobot({ pose }: { pose: string }) {
    const groupRef = useRef<THREE.Group>(null);
    const headRef = useRef<THREE.Group>(null);
    const armLeftRef = useRef<THREE.Group>(null);
    const armRightRef = useRef<THREE.Group>(null);
    const propRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (!groupRef.current || !headRef.current) return;

        const time = state.clock.elapsedTime;

        // Gentle bobbing
        groupRef.current.position.y = Math.sin(time * 2) * 0.05;

        // Different animations based on pose
        switch (pose) {
            case "box": // Products - holding a box, showing it off
                groupRef.current.rotation.y = Math.sin(time * 0.8) * 0.4;
                headRef.current.rotation.y = Math.sin(time * 1.2) * 0.2;
                if (propRef.current) {
                    propRef.current.position.y = -0.8 + Math.sin(time * 2) * 0.1;
                }
                break;

            case "wrench": // Services - tossing wrench dramatically
                if (armRightRef.current) {
                    armRightRef.current.rotation.z = Math.sin(time * 3) * 0.5 - 0.2;
                }
                if (propRef.current) {
                    propRef.current.position.y = 0.2 + Math.abs(Math.sin(time * 3)) * 0.4;
                    propRef.current.rotation.z = time * 5;
                }
                groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
                headRef.current.rotation.y = Math.sin(time * 1.5) * 0.3;
                break;

            case "phone": // Contact - holding phone to ear, talking
                if (armRightRef.current) {
                    armRightRef.current.rotation.z = -0.5;
                }
                groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.15;
                headRef.current.rotation.x = Math.sin(time * 2) * 0.05; // Nodding
                headRef.current.rotation.y = 0.3; // Tilted to phone
                break;

            case "crossed": // About - confident stance
                if (armLeftRef.current) armLeftRef.current.rotation.z = 0.4;
                if (armRightRef.current) armRightRef.current.rotation.z = -0.4;
                groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.15;
                headRef.current.rotation.y = Math.sin(time * 0.5) * 0.1;
                break;

            default: // Default - friendly
                groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.3;
                headRef.current.rotation.y = Math.sin(time * 0.8) * 0.2;
                headRef.current.rotation.x = Math.sin(time * 1.2) * 0.1;
        }

        // Hover effect
        if (hovered) {
            groupRef.current.scale.lerp(new THREE.Vector3(1.1, 1.1, 1.1), 0.1);
        } else {
            groupRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
        }
    });

    return (
        <group ref={groupRef} scale={1.8} position={[0, -0.5, 0]}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
                <group
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                >
                    {/* HEAD */}
                    <group ref={headRef} position={[0, 0.8, 0]}>
                        {/* Main Head Shape - Rounded and Wide */}
                        <RoundedBox args={[1.4, 0.9, 0.9]} radius={0.3} smoothness={4}>
                            <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
                        </RoundedBox>

                        {/* Face Screen (Black Glass) */}
                        <RoundedBox position={[0, 0, 0.46]} args={[1.1, 0.65, 0.05]} radius={0.15} smoothness={4}>
                            <meshStandardMaterial color="#050505" roughness={0.1} metalness={0.8} />
                        </RoundedBox>

                        {/* Happy Eyes - Left */}
                        <group position={[0.25, 0.05, 0.49]}>
                            <Sphere args={[0.08, 32, 32]} scale={[1, 0.6, 0.2]}>
                                <meshStandardMaterial
                                    color="#00f3ff"
                                    emissive="#00f3ff"
                                    emissiveIntensity={4}
                                    toneMapped={false}
                                />
                            </Sphere>
                        </group>

                        {/* Happy Eyes - Right */}
                        <group position={[-0.25, 0.05, 0.49]}>
                            <Sphere args={[0.08, 32, 32]} scale={[1, 0.6, 0.2]}>
                                <meshStandardMaterial
                                    color="#00f3ff"
                                    emissive="#00f3ff"
                                    emissiveIntensity={4}
                                    toneMapped={false}
                                />
                            </Sphere>
                        </group>

                        {/* Cute Small Mouth */}
                        <group position={[0, -0.15, 0.49]}>
                            <Sphere args={[0.04, 32, 32]} scale={[1, 0.5, 0.2]}>
                                <meshStandardMaterial
                                    color="#00f3ff"
                                    emissive="#00f3ff"
                                    emissiveIntensity={3}
                                    toneMapped={false}
                                />
                            </Sphere>
                        </group>

                        {/* Ear Knobs */}
                        <Cylinder rotation={[0, 0, 1.57]} position={[0.75, 0, 0]} args={[0.2, 0.2, 0.15, 32]}>
                            <meshStandardMaterial color="#e0e0e0" />
                        </Cylinder>
                        <Cylinder rotation={[0, 0, 1.57]} position={[-0.75, 0, 0]} args={[0.2, 0.2, 0.15, 32]}>
                            <meshStandardMaterial color="#e0e0e0" />
                        </Cylinder>
                    </group>

                    {/* BODY */}
                    <group position={[0, -0.6, 0]}>
                        {/* Main Body - Egg Shape */}
                        <Sphere args={[0.65, 32, 32]} position={[0, 0.2, 0]}>
                            <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
                        </Sphere>

                        {/* Chest Detail - Shiny Patch */}
                        <Sphere position={[0, 0.3, 0.55]} args={[0.25]} scale={[1, 0.8, 0.2]}>
                            <meshStandardMaterial
                                color="#ffffff"
                                roughness={0}
                                metalness={0.5}
                                opacity={0.5}
                                transparent
                            />
                        </Sphere>

                        {/* Neck Ring */}
                        <Cylinder position={[0, 0.85, 0]} args={[0.25, 0.25, 0.15, 32]}>
                            <meshStandardMaterial color="#ddd" />
                        </Cylinder>
                    </group>

                    {/* ARMS */}
                    {/* Left Arm - Oval/Paddle shape */}
                    <group ref={armLeftRef} position={[0.75, -0.4, 0]} rotation={[0, 0, -0.2]}>
                        <Sphere args={[0.22, 32, 32]} scale={[1, 2.5, 1]} position={[0, 0, 0]}>
                            <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
                        </Sphere>
                    </group>

                    {/* Right Arm - Oval/Paddle shape */}
                    <group ref={armRightRef} position={[-0.75, -0.4, 0]} rotation={[0, 0, 0.2]}>
                        <Sphere args={[0.22, 32, 32]} scale={[1, 2.5, 1]} position={[0, 0, 0]}>
                            <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
                        </Sphere>
                    </group>

                    {/* Props based on pose */}
                    {pose === "box" && (
                        <mesh ref={propRef} position={[0, -0.8, 0.7]} castShadow>
                            <boxGeometry args={[0.5, 0.5, 0.5]} />
                            <meshStandardMaterial
                                color="#ff6b35"
                                metalness={0.3}
                                roughness={0.7}
                            />
                        </mesh>
                    )}

                    {pose === "wrench" && (
                        <mesh ref={propRef} position={[-0.9, 0.2, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
                            <boxGeometry args={[0.15, 0.6, 0.08]} />
                            <meshStandardMaterial
                                color="#c0c0c0"
                                metalness={1}
                                roughness={0.05}
                            />
                        </mesh>
                    )}

                    {pose === "phone" && (
                        <mesh ref={propRef} position={[-0.85, 0.3, 0.2]} rotation={[0, 0.3, 0]} castShadow>
                            <boxGeometry args={[0.25, 0.4, 0.06]} />
                            <meshStandardMaterial
                                color="#1a1a1a"
                                metalness={0.8}
                                roughness={0.2}
                            />
                            {/* Phone screen */}
                            <mesh position={[0, 0, 0.031]}>
                                <boxGeometry args={[0.22, 0.35, 0.01]} />
                                <meshStandardMaterial
                                    color="#00f3ff"
                                    emissive="#00f3ff"
                                    emissiveIntensity={2}
                                />
                            </mesh>
                        </mesh>
                    )}
                </group>
            </Float>
        </group>
    );
}

export default function FloatingRobotAssistant() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);

    // Detect scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Determine robot pose based on current page
    const getRobotPose = () => {
        if (pathname?.includes("/products")) {
            return "box";
        } else if (pathname?.includes("/services")) {
            return "wrench";
        } else if (pathname?.includes("/contact")) {
            return "phone";
        } else if (pathname?.includes("/about")) {
            return "crossed";
        }
        return "default";
    };

    const handleSendMessage = () => {
        if (!message.trim()) return;

        setMessages([...messages, { text: message, sender: "user" }]);

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { text: "Thank you for your message! Our team will get back to you soon.", sender: "bot" },
            ]);
        }, 1000);

        setMessage("");
    };

    // Don't show on home page until scrolled, always show on other pages
    const shouldShow = pathname !== "/" || isScrolled;

    if (!shouldShow) {
        return null;
    }

    return (
        <>
            {/* Floating 3D Robot */}
            <motion.div
                initial={{ scale: 0, x: 100, y: -100 }}
                animate={{
                    scale: isChatOpen ? 0 : 1,
                    x: isChatOpen ? 50 : 0,
                    y: isChatOpen ? 50 : 0,
                    opacity: isChatOpen ? 0 : 1
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    duration: 0.8
                }}
                className={`fixed bottom-6 right-6 z-40 cursor-pointer ${isChatOpen ? 'pointer-events-none' : ''}`}
                onClick={() => setIsChatOpen(true)}
            >
                {/* 3D Robot Canvas - No Frame */}
                <div className="w-40 h-40">
                    <Canvas
                        camera={{ position: [0, 0, 5], fov: 50 }}
                        gl={{
                            antialias: true,
                            alpha: true,
                            powerPreference: "high-performance"
                        }}
                    >
                        <Suspense fallback={null}>
                            <ambientLight intensity={1.5} />
                            <pointLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
                            <pointLight position={[-5, -5, -5]} intensity={1} color="#a855f7" />
                            <pointLight position={[5, 0, 0]} intensity={0.8} color="#00f3ff" />
                            <CuteRobot pose={getRobotPose()} />
                        </Suspense>
                    </Canvas>
                </div>

                {/* Tooltip */}
                <div className="absolute -bottom-14 right-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-white text-gray-900 text-xs px-3 py-2 rounded-lg whitespace-nowrap border border-gray-200 shadow-lg">
                        Click me for help! 🤖
                    </div>
                </div>
            </motion.div>

            {/* Chatbot Popup */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed bottom-6 right-6 z-50 flex flex-col"
                    >
                        {/* Mini 3D Robot Above Chat */}
                        <div className="self-end mb-2 mr-4 relative">
                            <div className="w-28 h-28">
                                <Canvas
                                    camera={{ position: [0, 0, 5], fov: 50 }}
                                    gl={{
                                        antialias: true,
                                        alpha: true,
                                        powerPreference: "high-performance"
                                    }}
                                >
                                    <Suspense fallback={null}>
                                        <ambientLight intensity={1.5} />
                                        <pointLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
                                        <pointLight position={[-5, -5, -5]} intensity={1} color="#a855f7" />
                                        <pointLight position={[5, 0, 0]} intensity={0.8} color="#00f3ff" />
                                        <CuteRobot pose={getRobotPose()} />
                                    </Suspense>
                                </Canvas>
                            </div>

                            {/* Speech Bubble */}
                            <div className="absolute -left-48 top-4 bg-white text-gray-900 text-sm px-4 py-2 rounded-lg border border-gray-200 whitespace-nowrap shadow-lg">
                                Type your query! 💬
                            </div>
                        </div>

                        {/* Chat Window */}
                        <div className="w-96 h-[500px] bg-white stroke-gray-200 border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
                            {/* Header */}
                            <div className="bg-gray-50 p-4 border-b border-gray-200 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full flex items-center justify-center text-xl">
                                        🤖
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-bold">DIGI MAX Assistant</h3>
                                        <p className="text-xs text-gray-500">Online • Ready to help</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsChatOpen(false)}
                                    className="text-gray-500 hover:text-gray-900 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                {/* Welcome Message */}
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full flex items-center justify-center text-sm flex-shrink-0">
                                        🤖
                                    </div>
                                    <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
                                        <p className="text-gray-800 text-sm">
                                            Hi! I'm your DIGI MAX assistant. How can I help you today?
                                        </p>
                                    </div>
                                </div>

                                {/* Chat Messages */}
                                {messages.map((msg, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex gap-2 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                                    >
                                        {msg.sender === "bot" && (
                                            <div className="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full flex items-center justify-center text-sm flex-shrink-0">
                                                🤖
                                            </div>
                                        )}
                                        <div
                                            className={`rounded-2xl px-4 py-2 max-w-[80%] ${msg.sender === "user"
                                                ? "bg-neon-cyan text-black rounded-tr-none"
                                                : "bg-gray-100 text-gray-800 rounded-tl-none"
                                                }`}
                                        >
                                            <p className="text-sm">{msg.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Input */}
                            <div className="p-4 border-t border-gray-200">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                                        placeholder="Type your message..."
                                        className="flex-1 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-colors"
                                    />
                                    <button
                                        onClick={handleSendMessage}
                                        className="w-10 h-10 bg-neon-cyan text-black rounded-full flex items-center justify-center hover:bg-white transition-colors"
                                    >
                                        <Send size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
