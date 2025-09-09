import type { Metadata } from "next";
import { Mona_Sans, Bellefair } from "next/font/google";

import "react-tooltip/dist/react-tooltip.css";
import "./globals.css";

import Navigation from "@src/components/layout/menu/navigation";
import WavePlaneCanvas from "@lib/threejs/components/wave-plane/canvas";
import CursorProvider from "@src/features/cursor";

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
        className={`${monaSans.variable} ${bellefair.variable} hide-scrollbar min-h-screen w-screen overflow-x-hidden antialiased`}
      >
        <CursorProvider>
          <Navigation />
          {children}
          <WavePlaneCanvas />
        </CursorProvider>
      </body>
    </html>
  );
}
