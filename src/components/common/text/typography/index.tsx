import clsx from "clsx";
import React from "react";

const fontWeightMap: Record<string, number> = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

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
  const {
    as: Component = "h1",
    className,
    serif,
    weight,
    tracking,
    case: textCase,
    align: textAlign,
    ...rest
  } = props;

  return (
    <Component
      {...rest}
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
