"use client";

import React from "react";
import Link, { type LinkProps } from "next/link";
import clsx from "clsx";

export default function AnchorLink({
  ...props
}: React.ComponentPropsWithRef<"a"> & LinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        "flex flex-col items-center font-light tracking-wider transition",
        props.className,
      )}
    >
      <p>{props.children}</p>
    </Link>
  );
}
