"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Box, Cylinder, Sphere, Float, Stars, Sparkles, Torus, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function MechaRobot() {
    const groupRef = useRef<THREE.Group>(null!);
    const headRef = useRef<THREE.Group>(null!);
    const [hovered, setHover] = useState(false);

    // Mouse ref for tracking
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (groupRef.current && headRef.current) {
            // Bobbing animation
            groupRef.current.position.y = Math.sin(t * 2) * 0.1;

            const targetX = mouseRef.current.x;
            const targetY = mouseRef.current.y;

            // Body leans slightly
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX * 0.2, 0.1);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY * 0.1, 0.1);

            // Head looks at cursor
            headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetX * 0.5, 0.1);
            headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -targetY * 0.3, 0.1);
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <group
                ref={groupRef}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                scale={hovered ? 1.05 : 1}
            >
                {/* --- CUTE HEAD --- */}
                <group ref={headRef} position={[0, 0.8, 0]}>
                    {/* Main Head Shape - Rounded and Wide */}
                    <RoundedBox args={[1.4, 0.9, 0.9]} radius={0.3} smoothness={4}>
                        {/* Using a high roughness white material for a soft plastic look */}
                        <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
                    </RoundedBox>

                    {/* Face Screen (Black Glass) */}
                    <RoundedBox position={[0, 0, 0.46]} args={[1.1, 0.65, 0.05]} radius={0.15} smoothness={4}>
                        <meshStandardMaterial color="#050505" roughness={0.1} metalness={0.8} />
                    </RoundedBox>

                    {/* Happy Eyes - Left */}
                    <group position={[0.25, 0.05, 0.49]}>
                        <Sphere args={[0.08, 32, 32]} scale={[1, 0.6, 0.2]}>
                            <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={3} toneMapped={false} />
                        </Sphere>
                    </group>
                    {/* Happy Eyes - Right */}
                    <group position={[-0.25, 0.05, 0.49]}>
                        <Sphere args={[0.08, 32, 32]} scale={[1, 0.6, 0.2]}>
                            <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={3} toneMapped={false} />
                        </Sphere>
                    </group>

                    {/* Cute Small Mouth */}
                    <group position={[0, -0.15, 0.49]}>
                        <Sphere args={[0.04, 32, 32]} scale={[1, 0.5, 0.2]}>
                            <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={2} toneMapped={false} />
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

                {/* --- CUTE BODY --- */}
                <group position={[0, -0.6, 0]}>
                    {/* Main Body - Egg Shape */}
                    <Sphere args={[0.65, 32, 32]} position={[0, 0.2, 0]}>
                        <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
                    </Sphere>

                    {/* Chest Detail - Shiny Patch */}
                    <Sphere position={[0, 0.3, 0.55]} args={[0.25]} scale={[1, 0.8, 0.2]}>
                        <meshStandardMaterial color="#ffffff" roughness={0} metalness={0.5} opacity={0.5} transparent />
                    </Sphere>

                    {/* Neck Ring - Smaller */}
                    <Cylinder position={[0, 0.85, 0]} args={[0.25, 0.25, 0.15, 32]}>
                        <meshStandardMaterial color="#ddd" />
                    </Cylinder>
                </group>

                {/* --- ARMS --- */}
                {/* Left Arm - Oval/Paddle shape */}
                <group position={[0.75, -0.4, 0]} rotation={[0, 0, -0.2]}>
                    <Sphere args={[0.22, 32, 32]} scale={[1, 2.5, 1]} position={[0, 0, 0]}>
                        <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
                    </Sphere>
                </group>

                {/* Right Arm - Oval/Paddle shape */}
                <group position={[-0.75, -0.4, 0]} rotation={[0, 0, 0.2]}>
                    <Sphere args={[0.22, 32, 32]} scale={[1, 2.5, 1]} position={[0, 0, 0]}>
                        <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
                    </Sphere>
                </group>

                {/* --- NO LEGS (Floating Design) --- */}
            </group>
        </Float>
    );
}

export default function RobotScene() {
    return (
        <div className="w-full h-full absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }} gl={{ powerPreference: "high-performance" }}>
                {/* Stronger Ambient Light for base visibility */}
                <ambientLight intensity={2.0} />

                {/* Main Key Light */}
                <pointLight position={[5, 5, 5]} intensity={2.5} color="#ffffff" />

                {/* Rim Lights for Neon Effects */}
                <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} color="#00f3ff" />
                <pointLight position={[-10, 0, -5]} intensity={2} color="#bd00ff" />

                {/* Lower Fill Light for Legs */}
                <pointLight position={[0, -5, 5]} intensity={1.5} color="#00f3ff" />

                <MechaRobot />

                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                <Sparkles count={150} scale={8} size={2} speed={0.4} opacity={0.5} color="#00f3ff" />

                {/* Disable orbit controls so mouse movement dominates, or keep it passive */}
                <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            </Canvas>
        </div>
    );
}
