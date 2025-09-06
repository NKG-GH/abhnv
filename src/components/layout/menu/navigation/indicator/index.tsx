"use client";

export default function NavigationIndicator({
  navPos,
}: {
  navPos: { factor: number };
}) {
  return (
    <div
      style={{
        zIndex: 51,
        width: "96px",
        height: "2px",
        position: "absolute",
        bottom: -1.5,
        transition: "left 0.3s cubic-bezier(0.2, 0.9, 0.3, 1.2)",
        left: `${navPos.factor * 96 + 40}px`,
        background:
          "linear-gradient(90deg,rgba(0,0,0,0) 0%,rgba(255,166,46,0.75) 50%,rgba(0,0,0,0) 100%)",
      }}
    ></div>
  );
}
