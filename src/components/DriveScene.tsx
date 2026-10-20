"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type DriveSceneProps = {
  variant?: "hero" | "banner";
};

function Wheel({ position, index, reducedMotion }: {
  position: [number, number, number];
  index: number;
  reducedMotion: boolean;
}) {
  const wheelRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!reducedMotion && wheelRef.current) {
      wheelRef.current.rotation.z = state.clock.elapsedTime * 1.25;
    }
  });

  return (
    <group ref={wheelRef} position={position}>
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.39, 0.39, 0.24, 32]} />
        <meshStandardMaterial color="#25282c" roughness={0.82} />
      </mesh>
      <mesh position={[0, 0, index % 2 === 0 ? 0.13 : -0.13]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.025, 24]} />
        <meshStandardMaterial color="#c8cdd0" metalness={0.72} roughness={0.28} />
      </mesh>
      <mesh position={[0, 0, index % 2 === 0 ? 0.15 : -0.15]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.065, 0.065, 0.035, 16]} />
        <meshStandardMaterial color="#52575c" metalness={0.35} roughness={0.45} />
      </mesh>
    </group>
  );
}

function RentalCar({ reducedMotion }: { reducedMotion: boolean }) {
  const carRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!reducedMotion && carRef.current) {
      const time = state.clock.elapsedTime;
      carRef.current.position.y = 0.03 + Math.sin(time * 1.4) * 0.018;
      carRef.current.rotation.y = -0.13 + Math.sin(time * 0.28) * 0.025;
    }
  });

  return (
    <group ref={carRef} position={[1.15, 0, 0]}>
      <mesh position={[0, 0.72, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.8, 0.52, 1.7]} />
        <meshStandardMaterial color="#c90016" metalness={0.48} roughness={0.27} />
      </mesh>
      <mesh position={[1.16, 1.02, 0]} castShadow>
        <boxGeometry args={[1.2, 0.18, 1.65]} />
        <meshStandardMaterial color="#e5162a" metalness={0.38} roughness={0.3} />
      </mesh>
      <mesh position={[-1.38, 0.98, 0]} castShadow>
        <boxGeometry args={[0.85, 0.18, 1.62]} />
        <meshStandardMaterial color="#b80015" metalness={0.34} roughness={0.32} />
      </mesh>
      <mesh position={[-0.13, 1.3, 0]} castShadow>
        <boxGeometry args={[1.84, 0.62, 1.36]} />
        <meshStandardMaterial color="#9baab0" metalness={0.22} roughness={0.22} />
      </mesh>
      <mesh position={[-0.13, 1.66, 0]} castShadow>
        <boxGeometry args={[1.2, 0.12, 1.4]} />
        <meshStandardMaterial color="#d81529" metalness={0.4} roughness={0.28} />
      </mesh>
      <mesh position={[0.61, 1.34, 0]} rotation={[0, 0, -0.13]}>
        <boxGeometry args={[0.045, 0.42, 1.27]} />
        <meshStandardMaterial color="#263942" metalness={0.35} roughness={0.16} />
      </mesh>
      {[-0.38, 0.38].map((side) => (
        <mesh key={side} position={[-0.14, 1.34, side]}>
          <boxGeometry args={[1.14, 0.38, 0.025]} />
          <meshStandardMaterial color="#31434a" metalness={0.3} roughness={0.2} />
        </mesh>
      ))}
      {[-0.57, 0.57].map((side) => (
        <mesh key={side} position={[1.87, 0.85, side]} castShadow>
          <boxGeometry args={[0.08, 0.13, 0.32]} />
          <meshStandardMaterial color="#f5ead1" emissive="#ffdf9b" emissiveIntensity={0.55} roughness={0.18} />
        </mesh>
      ))}
      {[-0.58, 0.58].map((side) => (
        <mesh key={side} position={[-1.94, 0.86, side]}>
          <boxGeometry args={[0.07, 0.12, 0.28]} />
          <meshStandardMaterial color="#fa3040" emissive="#a9091a" emissiveIntensity={0.3} />
        </mesh>
      ))}
      {[
        [-1.2, 0.42, -0.84],
        [1.2, 0.42, -0.84],
        [-1.2, 0.42, 0.84],
        [1.2, 0.42, 0.84],
      ].map((position, index) => (
        <Wheel key={index} position={position as [number, number, number]} index={index} reducedMotion={reducedMotion} />
      ))}
    </group>
  );
}

function RoadMarkings({ reducedMotion }: { reducedMotion: boolean }) {
  const markingsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!reducedMotion && markingsRef.current) {
      markingsRef.current.position.x = (state.clock.elapsedTime * 2.6) % 3;
    }
  });

  return (
    <group ref={markingsRef}>
      {Array.from({ length: 13 }, (_, index) => (
        <mesh key={index} position={[(index - 6) * 3, 0.015, 0]}>
          <boxGeometry args={[1.4, 0.02, 0.12]} />
          <meshStandardMaterial color="#e4e1d5" roughness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function CityBackdrop() {
  const buildings = [
    [-8, 1.1, -8, 1.2, 2.2, 1.3], [-5.7, 1.8, -8.2, 1.3, 3.6, 1.5],
    [-3.3, 1.05, -8.5, 1.5, 2.1, 1.4], [0, 1.55, -9, 1.3, 3.1, 1.2],
    [2.5, 1.0, -8.4, 1.5, 2, 1.5], [5.2, 1.75, -8.7, 1.4, 3.5, 1.4],
    [8, 1.2, -8, 1.5, 2.4, 1.5], [-7, 1.2, 8, 1.4, 2.4, 1.4],
    [-4.2, 1.7, 8.2, 1.4, 3.4, 1.3], [-1.4, 1.15, 8.4, 1.5, 2.3, 1.5],
    [1.8, 1.3, 8.2, 1.4, 2.6, 1.5], [4.8, 1.8, 8.5, 1.5, 3.6, 1.4],
    [7.5, 1.05, 8.3, 1.5, 2.1, 1.5],
  ];

  return (
    <group>
      {buildings.map(([x, y, z, width, height, depth], index) => (
        <mesh key={index} position={[x, y, z]} castShadow receiveShadow>
          <boxGeometry args={[width, height, depth]} />
          <meshStandardMaterial color={index % 3 === 0 ? "#b7c4c4" : "#c4ceca"} roughness={0.92} />
        </mesh>
      ))}
      <mesh position={[0, -0.09, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[120, 120]} />
        <meshStandardMaterial color="#8b9a8f" roughness={1} />
      </mesh>
    </group>
  );
}

function SceneContent({ variant, reducedMotion }: { variant: "hero" | "banner"; reducedMotion: boolean }) {
  const { camera, size } = useThree();

  useEffect(() => {
    const narrow = size.width / size.height < 1.15;
    camera.position.set(narrow ? 4.5 : 4.7, narrow ? 3.25 : 3.35, narrow ? 10.5 : 9.7);
    camera.lookAt(0.45, 0.7, 0);
    camera.updateProjectionMatrix();
  }, [camera, size.height, size.width]);

  return (
    <>
      <color attach="background" args={[variant === "hero" ? "#d7e1e2" : "#eef1ef"]} />
      <fog attach="fog" args={[variant === "hero" ? "#d7e1e2" : "#eef1ef", 16, 34]} />
      <ambientLight intensity={1.15} />
      <hemisphereLight args={["#f5f6f0", "#6d7777", 1.15]} />
      <directionalLight position={[-4, 9, 6]} intensity={3.1} castShadow shadow-mapSize={[1024, 1024]} />
      <directionalLight position={[5, 4, -5]} intensity={1.6} color="#ffe3ce" />
      <CityBackdrop />
      <mesh position={[0, -0.015, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[70, 7.2]} />
        <meshStandardMaterial color="#545d60" roughness={0.94} />
      </mesh>
      <RoadMarkings reducedMotion={reducedMotion} />
      <RentalCar reducedMotion={reducedMotion} />
    </>
  );
}

export default function DriveScene({ variant = "hero" }: DriveSceneProps) {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  return (
    <div className={`drive-scene drive-scene-${variant}`} role="img" aria-label="Animated 3D red rental car driving through an Indian city">
      <Canvas
        aria-hidden="true"
        dpr={[1, 1.5]}
        camera={{ position: [4.7, 3.35, 9.7], fov: 38, near: 0.1, far: 100 }}
        gl={{ antialias: true, powerPreference: "low-power" }}
        shadows
      >
        <SceneContent variant={variant} reducedMotion={reducedMotion} />
      </Canvas>
      {variant === "hero" ? <div className="scene-horizon" aria-hidden="true" /> : null}
    </div>
  );
}