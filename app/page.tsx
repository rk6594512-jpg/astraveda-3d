'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#06070C] text-[#F6F0E2] selection:bg-[#C89B3C]/30 relative overflow-hidden font-sans">
      {/* Background Cosmic Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#38245E]/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#17183B]/40 blur-[100px] pointer-events-none" />

      {/* Top Navigation */}
      <header className="relative z-20 max-w-7xl mx-auto px-6 py-5 flex items-center justify-between border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C89B3C] to-[#F1CE73] flex items-center justify-center text-[#06070C] font-bold text-sm">
            ✦
          </div>
          <span className="font-serif text-xl tracking-wider font-semibold text-white">AstraVeda 3D</span>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/kundli" className="text-sm text-[#AAA6BE] hover:text-[#F1CE73] transition-colors">Kundli</Link>
          <Link href="/palm-scan" className="text-sm text-[#AAA6BE] hover:text-[#F1CE73] transition-colors">Palm Scan</Link>
          <Link href="/ai-jyotishi" className="text-sm px-4 py-2 rounded-full bg-[#17183B] border border-[#C89B3C]/40 text-[#F1CE73] hover:bg-[#C89B3C]/10 transition-colors">
            Ask AI
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-16 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#17183B]/80 border border-[#C89B3C]/30 text-xs text-[#F1CE73] mb-8">
          <span>✧ Next-Gen Vedic Cosmic Intelligence</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white mb-6 leading-tight">
          Your Birth Holds a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F1CE73] via-[#C89B3C] to-[#F1CE73]">Pattern</span>.
        </h1>

        <p className="text-base sm:text-xl text-[#AAA6BE] max-w-2xl mb-10 font-normal leading-relaxed">
          Explore your kundli, palm energy, and cosmic guidance through an intelligent 3D experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center mb-16">
          <Link
            href="/kundli"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#06070C] font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            Create My Cosmic Blueprint
          </Link>
          <Link
            href="/palm-scan"
            className="px-8 py-3.5 rounded-full bg-[#17183B] hover:bg-[#17183B]/80 text-white border border-[#C89B3C]/30 backdrop-blur-md hover:scale-105 transition-all duration-300"
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

        {/* Zodiac Orbit Graphic */}
        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-[#C89B3C]/20 relative flex items-center justify-center animate-[spin_60s_linear_infinite]">
          <div className="w-48 h-48 rounded-full border border-[#C89B3C]/40 border-dashed" />
          <div className="w-32 h-32 rounded-full border border-[#F1CE73]/30" />
          <div className="absolute w-5 h-5 rounded-full bg-[#F1CE73] shadow-[0_0_20px_#F1CE73]" />
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#0D1024]/80 border border-[#C89B3C]/20 backdrop-blur-md">
          <h3 className="font-serif text-xl text-[#F1CE73] mb-2">Birth Blueprint</h3>
          <p className="text-sm text-[#AAA6BE] leading-relaxed">Interactive D1, D9 Navamsa, and D10 charts with planetary calculation and AI analysis.</p>
        </div>
        <div className="p-6 rounded-2xl bg-[#0D1024]/80 border border-[#C89B3C]/20 backdrop-blur-md">
          <h3 className="font-serif text-xl text-[#F1CE73] mb-2">Palm Vision</h3>
          <p className="text-sm text-[#AAA6BE] leading-relaxed">Vision-assisted palmistry detection for major mount and lifeline pattern interpretations.</p>
        </div>
        <div className="p-6 rounded-2xl bg-[#0D1024]/80 border border-[#C89B3C]/20 backdrop-blur-md">
          <h3 className="font-serif text-xl text-[#F1CE73] mb-2">Astra AI Jyotishi</h3>
          <p className="text-sm text-[#AAA6BE] leading-relaxed">Chart-aware spiritual intelligence supporting Hindi & English queries in real-time.</p>
        </div>
      </section>
    </main>
  );
}
