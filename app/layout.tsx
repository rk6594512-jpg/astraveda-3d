import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AstraVeda 3D — Read Your Cosmic Blueprint",
  description:
    "Explore your kundli, palm energy, and cosmic guidance through an intelligent 3D experience. Premium AI-powered Vedic astrology and spiritual guidance platform.",
  keywords: [
    "vedic astrology",
    "kundli",
    "birth chart",
    "palmistry",
    "AI jyotishi",
    "cosmic guidance",
    "navamsa",
    "dashas",
    "panchang",
  ],
  authors: [{ name: "AstraVeda" }],
  creator: "AstraVeda",
  metadataBase: new URL("https://astraveda3d.com"),
  openGraph: {
    title: "AstraVeda 3D — Read Your Cosmic Blueprint",
    description:
      "Explore your kundli, palm energy, and cosmic guidance through an intelligent 3D experience.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AstraVeda 3D",
    description: "Read Your Cosmic Blueprint",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#06070C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className="antialiased min-h-screen bg-cosmic-black text-moon-white overflow-x-hidden">
        {/* Fixed starfield background layer */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(56,36,94,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(200,155,60,0.04) 0%, transparent 50%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Content layer */}
        <div className="relative z-10">{children}</div>
        <SpeedInsights />

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('AstraVeda SW registered:', registration.scope);
                    },
                    function(err) {
                      console.log('AstraVeda SW registration failed:', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
