import React from "react";
import clsx from "clsx";

import { fontWeightMap } from "@src/utils";

export default function Typography<
  H extends React.ElementType =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span",
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
  return (
    <Component
      {...props}
      className={clsx(className, serif ? "font-serif" : "font-sans")}
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
      }}
    />
  );
}
