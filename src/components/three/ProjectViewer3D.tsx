"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Image, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function RenderPanel({ url }: { url: string }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.35) * 0.06;
    }
  });

  return (
    <group ref={ref}>
      <mesh position={[0, -0.05, -0.02]}>
        <boxGeometry args={[3.6, 2.05, 0.08]} />
        <meshStandardMaterial color="#0a0c0f" metalness={0.4} roughness={0.6} />
      </mesh>
      <Image
        url={url}
        scale={[3.4, 1.92]}
        position={[0, 0, 0.02]}
        transparent
      />
    </group>
  );
}

type ProjectViewer3DProps = {
  image: string;
  className?: string;
};

export function ProjectViewer3D({ image, className }: ProjectViewer3DProps) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <Canvas dpr={[1, 1.5]} gl={{ antialias: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 3.2]} fov={45} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 3, 4]} intensity={0.6} />
        <RenderPanel url={image} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
      <p className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-[10px] uppercase tracking-wider text-zinc-400 backdrop-blur-sm">
        Render 3D · arraste para rotacionar
      </p>
    </div>
  );
}
