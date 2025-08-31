import {
  PerspectiveCamera,
  type PerspectiveCameraProps,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { forwardRef, useEffect, useRef } from "react";
import { PerspectiveCamera as PType } from "three";

// type Props = {};

const PointerCamera = forwardRef<
  PType,
  {
    intensity?: number;
    cameraProps?: PerspectiveCameraProps;
  }
>(({ cameraProps = {}, intensity = 0.05 }, ref) => {
  const { viewport, size } = useThree();
  const cameraPointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      const normalizedX = e.clientX / size.width;
      const normalizedY = e.clientY / size.height;
      cameraPointer.current.x = normalizedX - 0.5;
      cameraPointer.current.y = normalizedY - 0.5;
    };
    window.addEventListener("pointermove", onPointerMove);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [viewport, size]);

  useFrame(({ camera, scene }) => {
    // use the pointer to move the camera whilst keeping it looking at the center
    camera.position.x +=
      (cameraPointer.current.x - camera.position.x) * intensity;
    camera.position.y +=
      (-cameraPointer.current.y - camera.position.y) * intensity;
    camera.lookAt(scene.position);
  });

  return (
    <PerspectiveCamera
      ref={ref}
      makeDefault={true}
      position={[0, 0, 5]}
      fov={60}
      far={20}
      near={0.001}
      {...cameraProps}
    />
  );
});

PointerCamera.displayName = "PointerCamera";

export default PointerCamera;
