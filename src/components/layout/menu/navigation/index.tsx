"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import LogoIcon from "@src/assets/icons/logo-icon.svg";
import NavigationLink from "./link";
import NavigationIndicator from "./indicator";
import Socials from "./socials";

const navMap = [
  { name: "INDEX", ref: "index", factor: 2.4 },
  { name: "SUMMARY", ref: "summary", factor: 0 },
  { name: "ABOUT", ref: "about", factor: 0.84 },
  { name: "WORKS", ref: "works", factor: 4 },
  { name: "BLOG", ref: "blog", factor: 4.84 },
];

export default function Navigation() {
  const [navPos, setNavPos] = useState(navMap[0]);

  useEffect(() => {
    if (window) {
      //   const currSection = searchParams.get("section") || "index";
      const currSection = window.location.hash.replace("#", "") || "index";
      const currNav = navMap.find((nav) => nav.ref === currSection);
      if (currNav) setNavPos(currNav);
      else setNavPos(navMap[0]);
    }
  }, [navPos]);

  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full flex-col items-center justify-center pt-16 pb-4">
      <div className="border-primary/10 bg-primary/20 relative grid grid-cols-3 items-center justify-center rounded-full border-b-2 px-8 shadow-md backdrop-blur-md">
        <div className="flex w-48 items-center justify-between px-3 py-4">
          <NavigationLink
            path="summary"
            highlighted={navPos.ref === "summary"}
            onClick={() => {
              window.location.hash = "#summary";
              setNavPos(navMap[1]);
            }}
          >
            SUMMARY
          </NavigationLink>
          <NavigationLink
            path="about"
            highlighted={navPos.ref === "about"}
            onClick={() => {
              window.location.hash = "#about";
              setNavPos(navMap[2]);
            }}
          >
            ABOUT
          </NavigationLink>
        </div>
        <div className="flex w-48 items-center justify-center px-3 py-4">
          <Link
            type="button"
            href="#"
            onClick={() => {
              window.location.hash = "#";
              setNavPos(navMap[0]);
            }}
          >
            <Image
              src={LogoIcon}
              alt="ABHNV Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </Link>
        </div>
        <div className="flex w-48 items-center justify-between px-3 py-4">
          <NavigationLink
            path="works"
            highlighted={navPos.ref === "works"}
            onClick={() => {
              window.location.hash = "#works";
              setNavPos(navMap[3]);
            }}
          >
            WORKS
          </NavigationLink>
          <NavigationLink
            path="blog"
            highlighted={navPos.ref === "blog"}
            href="#blog"
            onClick={() => {
              window.location.hash = "#blog";
              setNavPos(navMap[4]);
            }}
          >
            BLOG
          </NavigationLink>
        </div>
        <NavigationIndicator navPos={navPos} />
      </div>
      <div className="mt-4 flex w-full flex-row items-center justify-center">
        <Socials />
      </div>
    </nav>
  );
}
