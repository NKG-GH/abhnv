import React from "react";
import clsx from "clsx";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export default function IconButton<
  T extends React.ElementType = "button" | "a",
>({
  as: Component = "button",
  className,
  iconProps,
  variant = "neutral",
  ...props
}: {
  as?: T;
  iconProps?: FontAwesomeIconProps;
  variant?: "primary" | "secondary" | "neutral";
} & React.ComponentPropsWithRef<T>) {
  return (
    <Component
      {...props}
      className={clsx(
        "transition",
        {
          "text-primary/75 hover:text-primary": variant === "primary",
          "text-secondary/75 hover:text-secondary": variant === "secondary",
          "text-neutral-200/75 hover:text-neutral-200": variant === "neutral",
        },
        className,
      )}
      style={{ ...props.style, cursor: "pointer" }}
    >
      {iconProps && <FontAwesomeIcon {...iconProps} />}
    </Component>
  );
}
