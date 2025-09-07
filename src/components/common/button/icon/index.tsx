import React from "react";
import clsx from "clsx";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export default function IconButton<
  T extends React.ElementType = "button" | "a",
>({
  ...props
}: {
  as?: T;
  iconProps?: FontAwesomeIconProps;
  variant?: "primary" | "secondary" | "neutral";
} & React.ComponentPropsWithRef<T>) {
  const {
    as: Component = "button",
    className,
    iconProps,
    variant = "neutral",
    ...rest
  } = props;
  return (
    <Component
      {...rest}
      className={clsx(
        "transition",
        {
          "text-primary/75 hover:text-primary": variant === "primary",
          "text-secondary/75 hover:text-secondary": variant === "secondary",
          "text-neutral-200/75 hover:text-neutral-200": variant === "neutral",
        },
        className,
      )}
    >
      {iconProps && <FontAwesomeIcon {...iconProps} />}
    </Component>
  );
}
