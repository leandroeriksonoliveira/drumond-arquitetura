"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function WireframeBuilding() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }
  });

  const floors = 5;
  const width = 2.4;
  const depth = 1.8;
  const floorHeight = 0.55;

  return (
    <group ref={groupRef} position={[0, -1.2, 0]}>
      {Array.from({ length: floors }).map((_, i) => (
        <mesh key={i} position={[0, i * floorHeight, 0]}>
          <boxGeometry args={[width, floorHeight * 0.85, depth]} />
          <meshBasicMaterial
            color="#c9a962"
            wireframe
            transparent
            opacity={0.35 + i * 0.08}
          />
        </mesh>
      ))}
      {/* Base platform */}
      <mesh position={[0, -0.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4, 3.5]} />
        <meshBasicMaterial color="#c9a962" wireframe transparent opacity={0.2} />
      </mesh>
      {/* Accent columns */}
      {[
        [-width / 2, 0, -depth / 2],
        [width / 2, 0, -depth / 2],
        [-width / 2, 0, depth / 2],
        [width / 2, 0, depth / 2],
      ].map((pos, i) => (
        <mesh key={`col-${i}`} position={pos as [number, number, number]}>
          <cylinderGeometry args={[0.04, 0.04, floors * floorHeight, 8]} />
          <meshBasicMaterial color="#6b9bd1" wireframe transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[4, 2.5, 5]} fov={45} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={0.8} color="#c9a962" />
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
        <WireframeBuilding />
      </Float>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
        maxPolarAngle={Math.PI / 2.1}
        minPolarAngle={Math.PI / 4}
      />
    </>
  );
}

export function ArchitectureScene({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
