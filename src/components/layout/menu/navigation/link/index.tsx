"use client";

import React from "react";
import clsx from "clsx";

import AnchorLink from "@src/components/common/anchor-link";

export default function NavigationLink({
  path,
  highlighted,
  ...props
}: {
  path?: string;
  highlighted?: boolean;
} & React.ComponentPropsWithRef<"a">) {
  //   const [highlighted, setHighlighted] = useState(false);

  //   useEffect(() => {
  //     const currSection = window.location.hash.replace("#", "");
  //     if (path === currSection) setHighlighted(true);
  //     else setHighlighted(false);
  //   }, [path]);

  return (
    <AnchorLink
      {...props}
      type="button"
      href={path ? `#${path}` : "#"}
      className={clsx(
        "flex w-24 items-center justify-center text-sm hover:text-white",
        highlighted ? "text-white/75" : "text-white/50",
        props.className,
      )}
    >
      {props.children}
    </AnchorLink>
  );
}
