'use client';

import dynamic from 'next/dynamic';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CosmicStatus } from '@/components/sections/CosmicStatus';
import { FeatureCards } from '@/components/sections/FeatureCards';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { TrustSafety } from '@/components/sections/TrustSafety';
import { FAQ } from '@/components/sections/FAQ';
import Link from 'next/link';

// 3D Canvas ko bina SSR ke dynamically load karein taaki crash na ho
const Starfield = dynamic(
  () => import('@/components/hero/Starfield').then((mod) => mod.Starfield),
  { ssr: false }
);

const ZodiacWheel3D = dynamic(
  () => import('@/components/hero/ZodiacWheel3D').then((mod) => mod.ZodiacWheel3D),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-32 h-32 rounded-full border-2 border-[#C89B3C]/30 border-t-[#F1CE73] animate-spin" />
      </div>
    ),
  }
);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#06070C] text-[#F6F0E2] relative overflow-hidden selection:bg-[#C89B3C]/30">
      {/* 3D Starfield Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Starfield />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20 pb-16 text-center max-w-7xl mx-auto">
        {/* Glow Accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#38245E]/40 rounded-full blur-[100px] pointer-events-none" />

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white mb-6 max-w-4xl leading-tight">
          Your Birth Holds a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F1CE73] via-[#C89B3C] to-[#F1CE73]">Pattern</span>.
        </h1>

        <p className="text-base sm:text-xl text-[#AAA6BE] max-w-2xl mb-10 font-sans leading-relaxed">
          Explore your kundli, palm energy, and cosmic guidance through an intelligent 3D experience.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
          <Link
            href="/kundli"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#06070C] font-medium shadow-lg hover:shadow-[#C89B3C]/20 hover:scale-105 transition-all duration-300"
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

        {/* 3D Zodiac Wheel Hero Canvas */}
        <div className="w-full max-w-lg aspect-square relative my-6">
          <ZodiacWheel3D />
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative z-10 space-y-24 pb-20">
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
