"use client";

import React, { useEffect, useRef } from "react";

import "./cursor.css";

export default function CursorProvider({
  ...props
}: React.ComponentPropsWithRef<"div">) {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    document.addEventListener("mousemove", (e) => {
      if (cursor)
        cursor.setAttribute(
          "style",
          "top: " + e.pageY + "px; left: " + e.pageX + "px;",
        );
    });

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseover", () => {
        if (cursor) cursor.classList.add("hover-link");
      });
      el.addEventListener("mouseout", () => {
        if (cursor) cursor.classList.remove("hover-link");
      });
    });

    document
      .querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, span, input[type='text'], input[type='email'], input[type='password'], textarea",
      )
      .forEach((el) => {
        el.addEventListener("mouseover", () => {
          if (cursor) cursor.classList.add("hover-text");
        });
        el.addEventListener("mouseout", () => {
          if (cursor) cursor.classList.remove("hover-text");
        });
      });

    document.addEventListener("mousedown", () => {
      if (cursor) cursor.classList.add("mousedown");
      if (cursor) cursor.classList.add("playing");
      setTimeout(() => {
        if (cursor) cursor.classList.remove("playing");
      }, 400);
    });

    document.addEventListener("mouseup", () => {
      if (cursor) {
        if (cursor.classList.contains("playing")) {
          // wait until cursor is done playing animation
          setTimeout(() => {
            if (cursor) cursor.classList.remove("mousedown");
          }, 400);
          return;
        }
        cursor.classList.remove("mousedown");
      }
    });

    return () => {
      document.removeEventListener("mousemove", () => {});
      document.removeEventListener("mousedown", () => {});
    };
  }, []);

  return (
    <div {...props}>
      <div className="cursor transition" ref={cursorRef}>
        <div className="dot transition" />
      </div>
      {props.children}
    </div>
  );
}
