"use client";

import { useMemo, useRef, ComponentPropsWithRef } from "react";
import { Vector3 } from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { COSINE_GRADIENTS } from "@thi.ng/color";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import fragmentShader from "@lib/threejs/shaders/frag/wavePlane.frag";
import vertexShader from "@lib/threejs/shaders/vert/wavePlane.vert";

type Uniforms = {
  uTime: number;
  uScrollProgress: number;
  uColourPalette: Vector3[];
  uShowGrid: boolean;
  uGridSize: number;
};

const DEFAULT_GRID_SIZE = 4;

const DEFAULT_COLOUR_PALETTE: Vector3[] = COSINE_GRADIENTS[
  "purple-orange-cyan"
].map((color) => new Vector3(...color));

const INITIAL_UNIFORMS: Uniforms = {
  uTime: 0,
  uScrollProgress: 0,
  uColourPalette: DEFAULT_COLOUR_PALETTE,
  uShowGrid: false,
  uGridSize: DEFAULT_GRID_SIZE,
};

const WavePlaneShaderMaterial = shaderMaterial(
  INITIAL_UNIFORMS,
  vertexShader,
  fragmentShader,
);

extend({ WavePlaneShaderMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    wavePlaneShaderMaterial: ComponentPropsWithRef<"shaderMaterial"> & Uniforms;
  }
}

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function WavePlane() {
  const viewport = useThree((s) => s.viewport);
  const planeWidth = useMemo(
    () => Math.round(viewport.width + 2),
    [viewport.width],
  );
  const planeHeight = useMemo(
    () => Math.round(viewport.height * 2),
    [viewport.height],
  );
  const planeSize = useMemo(
    () => Math.max(planeWidth, planeHeight),
    [planeWidth, planeHeight],
  );
  const planeSegments = useMemo(() => planeSize * 8, [planeSize]);

  const shaderMaterial = useRef<
    ComponentPropsWithRef<"shaderMaterial"> & Uniforms
  >(null);

  const scrollProgress = useRef(0); // value between 0 and 1 representing the window scroll progress
  const scrollLoop = useRef(0); // number of times the scroll has looped - used to ensure a smooth transition from bottom to top

  useGSAP(() => {
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: ({ progress }) => {
        // Loop the scroll!
        if (progress === 1) {
          scrollLoop.current++;
          scrollProgress.current = 0;
          window.scrollTo(0, 0);
          return;
        }
        scrollProgress.current = progress;
      },
    });
  }, []);

  useFrame(({ clock }) => {
    if (!shaderMaterial.current) return;
    shaderMaterial.current.uTime = clock.elapsedTime;
    shaderMaterial.current.uScrollProgress =
      scrollProgress.current + scrollLoop.current;
  });

  return (
    <mesh
      position={[0, -viewport.height / 2.5, -1]}
      rotation={[-0.65 * Math.PI, 0, 0]}
    >
      <planeGeometry
        args={[planeSize, planeSize, planeSegments, planeSegments]}
      />
      <wavePlaneShaderMaterial
        ref={shaderMaterial}
        key={WavePlaneShaderMaterial.key}
        // Uniforms
        uTime={0}
        uScrollProgress={0}
        uColourPalette={DEFAULT_COLOUR_PALETTE}
        uShowGrid={true}
        uGridSize={DEFAULT_GRID_SIZE}
      />
    </mesh>
  );
}
