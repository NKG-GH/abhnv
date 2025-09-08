"use client";

import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { gsap } from "gsap";

import { fontWeightMap } from "@lib/utils";

export default function PerspectiveText<
  H extends React.ElementType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
>({
  as: Component = "h1",
  className,
  serif,
  weight,
  tracking,
  case: textCase,
  align: textAlign,
  ...props
}: {
  as?: H;
  serif?: boolean;
  weight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  tracking?: string | number;
  case?: "upper" | "lower" | "capitalize";
  align?: "left" | "center" | "right";
} & React.ComponentPropsWithRef<H>) {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure window is available

    const textElement: HTMLHeadingElement | null = textRef.current;

    // Moves toward mouse position as mouse moves over the text
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(textElement, {
        duration: 0.5,
        rotationY: (e.clientX / window.innerWidth) * 20 - 10, // Rotate based on mouse X position
        rotationX: -((e.clientY / window.innerHeight) * 20 - 10), // Rotate based on mouse Y position
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(textElement, {
        duration: 0.5,
        rotationY: 0,
        rotationX: 0,
        ease: "power2.out",
      });
    };

    textElement?.addEventListener("mousemove", handleMouseMove);
    textElement?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      textElement?.removeEventListener("mousemove", handleMouseMove);
      textElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div style={{ perspective: "800px" }}>
      {" "}
      {/* Parent with perspective */}
      <Component
        {...props}
        ref={textRef}
        className={clsx(
          "no-select cursor-default text-white",
          serif ? "font-serif" : "font-sans",
          className,
        )}
        style={{
          letterSpacing:
            typeof tracking === "number" ? `${tracking}px` : undefined,
          textTransform:
            textCase === "upper"
              ? "uppercase"
              : textCase === "lower"
                ? "lowercase"
                : "capitalize",
          textAlign: textAlign,
          fontWeight: weight ? fontWeightMap[weight] : undefined,
          transformStyle: "preserve-3d",
        }}
      >
        {props.children}
      </Component>
    </div>
  );
}
