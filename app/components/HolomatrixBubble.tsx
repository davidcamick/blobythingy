"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Environment } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      // Gentle rotation
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <group>
      {/* Outer Holographic Wireframe Shell */}
      <Sphere ref={sphereRef} args={[1, 128, 128]} scale={3.15}>
        <MeshDistortMaterial
          color="#4aaaff"
          emissive="#0000ff" 
          emissiveIntensity={0.2}
          transparent
          opacity={0.9}
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          reflectivity={1}
        />
      </Sphere>
    </group>
  );

}

function CustomControls() {
  const { gl } = useThree();
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    const canvas = gl.domElement;
    const handleWheel = (e: WheelEvent) => {
      // Prevent default scrolling/zooming behavior
      e.preventDefault();
      
      if (controlsRef.current) {
        // Map scroll to rotation
        // Adjust speed as needed
        const speed = 0.005;
        
        // HoCustomControls
        controlsRef.current.rotateLeft(e.deltaX * speed);
        
        // Vertical scroll -> Pitch (rotateUp)
        controlsRef.current.rotateUp(e.deltaY * speed);
        
        controlsRef.current.update();
      }
    };

    // passive: false is required to use preventDefault
    canvas.addEventListener("wheel", handleWheel, { passive: false });
    return () => canvas.removeEventListener("wheel", handleWheel);
  }, [gl]);

  return (
    <OrbitControls 
      ref={controlsRef} 
      enablePan={true} 
      enableZoom={false} 
      enableRotate={true} 
      enableDamping={true} 
    />
  );
}

export default function HolomatrixBubble() {
  return (
    <div className="absolute inset-0 w-full h-full">
        <Canvas camera={{ position: [0, 0, 7] }} className="absolute inset-0">
            {/* 
              To use your own Environment image:
              1. Place your .jpg (equirectangular) in the 'public' folder
              2. Rename it to 'custom.jpg'
            */}
            <Environment files="/custom.jpg" blur={1} />
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={4} color="#ff00ff" />
            <pointLight position={[10, 10, 10]} intensity={4} color="#00ffff" />
            <AnimatedSphere />
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} enableDamping={true} />
        </Canvas>
    </div>
  );
}
