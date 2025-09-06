import type { Metadata } from "next";
import { Mona_Sans, Bellefair } from "next/font/google";

import "./globals.css";

import Navigation from "@src/components/layout/menu/navigation";
import WavePlaneCanvas from "@lib/threejs/components/wave-plane/canvas";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
});

const bellefair = Bellefair({
  weight: "400",
  variable: "--font-bellefair",
});

export const metadata: Metadata = {
  title: "ABHNV",
  description: "From wireframe to “whoa” | Abhinav's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monaSans.variable} ${bellefair.variable} h-[1000vh] w-full antialiased`}
      >
        <Navigation />
        {children}
        <WavePlaneCanvas />
      </body>
    </html>
  );
}
