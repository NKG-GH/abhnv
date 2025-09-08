import React from "react";
import clsx from "clsx";

export default function PillButton<
  T extends React.ElementType = "button" | "a",
>({
  as: Component = "button",
  className,
  variant = "neutral",
  ...props
}: {
  as?: T;
  variant?: "primary" | "secondary" | "neutral";
} & React.ComponentPropsWithRef<T>) {
  return (
    <Component
      {...props}
      className={clsx(
        "flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors",
        {
          "bg-primary text-primary-foreground hover:bg-primary/80":
            variant === "primary",
          "bg-secondary text-secondary-foreground hover:bg-secondary/80":
            variant === "secondary",
          "bg-neutral text-neutral-foreground hover:bg-neutral/80":
            variant === "neutral",
        },
        className,
      )}
      style={{ ...props.style, cursor: "pointer" }}
    >
      {props.children}
    </Component>
  );
}
