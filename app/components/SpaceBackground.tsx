"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function StarField() {
  const mesh = useRef<THREE.Points>(null);
  const count = 6000;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();
    
    for (let i = 0; i < count; i++) {
      // Wide spread
      positions[i * 3] = (Math.random() - 0.5) * 100; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100; // z: depth
      
      // Delicious colors: mixture of white, cyan, purple, pink
      const r = Math.random();
      if (r > 0.8) color.set("#ff69b4"); // Hot pink
      else if (r > 0.6) color.set("#00ffff"); // Cyan
      else if (r > 0.4) color.set("#ffffff"); // White
      else if (r > 0.2) color.set("#9932cc"); // Dark Orchid
      else color.set("#4169e1"); // Royal Blue
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    
    // Zoom speed
    const speed = 25 * delta;
    
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      // Move star along Z axis towards camera
      let z = positions[i * 3 + 2];
      z += speed;
      
      const depthLimit = 50;
      const startDepth = -100;
      
      if (z > depthLimit) {
        z = startDepth; // Send back
        // Randomize x/y again to avoid "tunnel" pattern appearing too static
        positions[i * 3] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      }
      
      positions[i * 3 + 2] = z;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
    
    // Subtle rotation for extra "deliciousness"
    mesh.current.rotation.z += delta * 0.1;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        sizeAttenuation={true}
        depthWrite={false}
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function SpaceBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
         <fog attach="fog" args={['#000000', 5, 60]} /> 
        <StarField />
      </Canvas>
    </div>
  );
}
