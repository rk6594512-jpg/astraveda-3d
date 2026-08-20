'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

// Safe dynamic imports (handles both default and named exports)
const Starfield = dynamic(
  () => import('@/components/hero/Starfield').then((mod) => (mod as any).default || (mod as any).Starfield || (() => null)),
  { ssr: false }
);

const ZodiacWheel3D = dynamic(
  () => import('@/components/hero/ZodiacWheel3D').then((mod) => (mod as any).default || (mod as any).ZodiacWheel3D || (() => null)),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-48 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full border-2 border-[#C89B3C]/30 border-t-[#F1CE73] animate-spin" />
      </div>
    ),
  }
);

const Navbar = dynamic(
  () => import('@/components/layout/Navbar').then((mod) => (mod as any).default || (mod as any).Navbar || (() => null)),
  { ssr: false }
);

const Footer = dynamic(
  () => import('@/components/layout/Footer').then((mod) => (mod as any).default || (mod as any).Footer || (() => null)),
  { ssr: false }
);

const CosmicStatus = dynamic(
  () => import('@/components/sections/CosmicStatus').then((mod) => (mod as any).default || (mod as any).CosmicStatus || (() => null)),
  { ssr: false }
);

const FeatureCards = dynamic(
  () => import('@/components/sections/FeatureCards').then((mod) => (mod as any).default || (mod as any).FeatureCards || (() => null)),
  { ssr: false }
);

const HowItWorks = dynamic(
  () => import('@/components/sections/HowItWorks').then((mod) => (mod as any).default || (mod as any).HowItWorks || (() => null)),
  { ssr: false }
);

const TrustSafety = dynamic(
  () => import('@/components/sections/TrustSafety').then((mod) => (mod as any).default || (mod as any).TrustSafety || (() => null)),
  { ssr: false }
);

const FAQ = dynamic(
  () => import('@/components/sections/FAQ').then((mod) => (mod as any).default || (mod as any).FAQ || (() => null)),
  { ssr: false }
);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#06070C] text-[#F6F0E2] relative overflow-hidden selection:bg-[#C89B3C]/30">
      <div className="fixed inset-0 pointer-events-none z-0">
        <Starfield />
      </div>

      <Navbar />

      <section className="relative z-10 min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16 text-center max-w-7xl mx-auto">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#38245E]/40 rounded-full blur-[100px] pointer-events-none" />

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white mb-6 max-w-4xl leading-tight">
          Your Birth Holds a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F1CE73] via-[#C89B3C] to-[#F1CE73]">Pattern</span>.
        </h1>

        <p className="text-base sm:text-xl text-[#AAA6BE] max-w-2xl mb-10 font-sans leading-relaxed">
          Explore your kundli, palm energy, and cosmic guidance through an intelligent 3D experience.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center mb-10">
          <Link
            href="/kundli"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#06070C] font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            Create My Cosmic Blueprint
          </Link>
          <Link
            href="/palm-scan"
            className="px-8 py-3.5 rounded-full bg-[#17183B]/80 hover:bg-[#17183B] text-white border border-[#C89B3C]/30 backdrop-blur-md hover:scale-105 transition-all duration-300"
          >
            Scan My Palm
          </Link>
          <Link
            href="/ai-jyotishi"
            className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-md transition-all duration-300"
          >
            Ask Astra AI
          </Link>
        </div>

        <div className="w-full max-w-lg aspect-square relative my-4">
          <ZodiacWheel3D />
        </div>
      </section>

      <div className="relative z-10 space-y-20 pb-20">
        <CosmicStatus />
        <FeatureCards />
        <HowItWorks />
        <TrustSafety />
        <FAQ />
      </div>

      <Footer />
    </main>
  );
}
