"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

type ProjectViewer3DProps = {
  color?: string;
  type?: "residential" | "commercial" | "religious" | "reform";
};

function ProjectModel({
  color = "#c9a962",
  type = "residential",
}: ProjectViewer3DProps) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });

  const height = type === "commercial" ? 2.2 : 1.4;
  const width = type === "commercial" ? 2.5 : 2;

  return (
    <group ref={ref}>
      <mesh position={[0, height / 2, 0]}>
        <boxGeometry args={[width, height, width * 0.75]} />
        <meshStandardMaterial
          color={color}
          metalness={0.3}
          roughness={0.4}
          wireframe
        />
      </mesh>
      {type === "religious" && (
        <mesh position={[0, height + 0.6, 0]}>
          <coneGeometry args={[0.5, 1, 4]} />
          <meshStandardMaterial color={color} wireframe />
        </mesh>
      )}
      <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial color="#1c2330" />
      </mesh>
    </group>
  );
}

export function ProjectViewer3D({
  color = "#c9a962",
  type = "residential",
  className,
}: ProjectViewer3DProps & { className?: string }) {
  return (
    <div className={className}>
      <Canvas dpr={[1, 1.5]}>
        <PerspectiveCamera makeDefault position={[3, 2, 4]} fov={40} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <ProjectModel color={color} type={type} />
        <OrbitControls
          enableZoom={true}
          minDistance={3}
          maxDistance={8}
          autoRotate
          autoRotateSpeed={1.5}
        />
      </Canvas>
    </div>
  );
}
