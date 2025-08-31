"use client";

import { Canvas } from "@react-three/fiber";

import WavePlane from "..";
import PointerCamera from "@lib/threejs/components/pointer-camera";

export default function WavePlaneCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60, far: 20, near: 0.001 }}
      gl={{ alpha: false, antialias: true }}
      style={{ width: "100%", height: "100vh", position: "fixed", top: 0 }}
    >
      <color attach="background" args={["#000000"]} />
      <WavePlane />
      <PointerCamera intensity={0.025} />
    </Canvas>
  );
}
