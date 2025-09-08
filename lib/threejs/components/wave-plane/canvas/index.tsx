"use client";

import { type CameraProps, Canvas } from "@react-three/fiber";

import WavePlane from "..";
import PointerCamera from "@lib/threejs/components/pointer-camera";

type WavePlaneCanvasProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  cameraProps?: CameraProps;
};

export default function WavePlaneCanvas({
  children,
  style = {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  cameraProps = { position: [0, 0, 5], fov: 60, far: 20, near: 0.001 },
}: WavePlaneCanvasProps) {
  return (
    <Canvas
      camera={cameraProps}
      gl={{ alpha: false, antialias: true }}
      style={style}
    >
      <color attach="background" args={["#000000"]} />
      <WavePlane />
      <PointerCamera intensity={0.025} />
      {children}
    </Canvas>
  );
}
