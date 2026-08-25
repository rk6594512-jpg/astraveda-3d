import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TARUN | Cosmic 3D Intelligence 2030",
  description:
    "Luxury Spatial Computing Vedic Platform – Quantum Kundli, Neural Palmistry, AI Oracle, Live Panchang & Gemstone Lab.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-[#030408] text-white min-h-screen selection:bg-[#C89B3C]/30 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
