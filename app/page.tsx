'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.7 + 0.3,
    }));

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.strokeStyle = `rgba(200, 155, 60, ${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.fillStyle = `rgba(241, 206, 115, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    const onResize = () => {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#05060A] text-[#F6F0E2] selection:bg-[#C89B3C]/30 relative overflow-hidden font-sans">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#49277A]/35 via-[#C89B3C]/10 to-transparent blur-[140px] pointer-events-none" />

      {/* Top Navbar */}
      <header className="relative z-20 max-w-7xl mx-auto px-6 py-5 flex items-center justify-between border-b border-white/10 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C89B3C] to-[#F1CE73] flex items-center justify-center text-[#06070C] font-bold text-lg shadow-[0_0_20px_rgba(200,155,60,0.4)]">
            ✦
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl tracking-wider font-semibold text-white block">Tarun</span>
            <span className="text-[10px] tracking-widest uppercase text-[#AAA6BE] block -mt-1">Cosmic 3D Intelligence</span>
          </div>
        </div>

        <nav className="flex items-center gap-3 sm:gap-6">
          <Link href="/kundli" className="text-xs sm:text-sm text-[#AAA6BE] hover:text-[#F1CE73] transition-colors">Kundli</Link>
          <Link href="/palm-scan" className="text-xs sm:text-sm text-[#AAA6BE] hover:text-[#F1CE73] transition-colors">Palm Scan</Link>
          <Link href="/ai-jyotishi" className="text-xs sm:text-sm px-4 py-2 rounded-full bg-[#151733] border border-[#C89B3C]/40 text-[#F1CE73] hover:bg-[#C89B3C]/20 transition-all shadow-md">
            Ask Tarun AI
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-20 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151733]/90 border border-[#C89B3C]/40 text-xs text-[#F1CE73] mb-8 shadow-[0_0_15px_rgba(200,155,60,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#F1CE73] animate-ping" />
          <span>Next-Gen Vedic AI Engine • By Tarun</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white mb-6 leading-tight">
          Your Destiny Encoded In <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F1CE73] via-[#FFE299] to-[#C89B3C] font-normal drop-shadow-[0_0_35px_rgba(241,206,115,0.3)]">
            Cosmic Geometry
          </span>
        </h1>

        <p className="text-sm sm:text-lg text-[#AAA6BE] max-w-2xl mb-12 font-normal leading-relaxed">
          Interactive birth charts, neural palmistry vision detection, and real-time spiritual intelligence.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center mb-16">
          <Link
            href="/kundli"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#06070C] font-semibold shadow-[0_0_25px_rgba(200,155,60,0.35)] hover:scale-105 transition-all duration-300"
          >
            Calculate Kundli
          </Link>
          <Link
            href="/palm-scan"
            className="px-8 py-4 rounded-full bg-[#151733] hover:bg-[#1C1F45] text-white border border-[#C89B3C]/40 backdrop-blur-md hover:scale-105 transition-all duration-300"
          >
            Scan Palmistry
          </Link>
          <Link
            href="/ai-jyotishi"
            className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 backdrop-blur-md hover:scale-105 transition-all duration-300"
          >
            Consult Tarun AI
          </Link>
        </div>

        {/* Live Cosmic 3D Orbit Animation */}
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center my-4">
          <div className="absolute inset-0 rounded-full border border-[#C89B3C]/30 animate-[spin_50s_linear_infinite]" />
          <div className="absolute inset-6 rounded-full border border-[#F1CE73]/40 border-dashed animate-[spin_30s_linear_infinite_reverse]" />
          <div className="absolute inset-14 rounded-full border-2 border-[#C89B3C]/20 shadow-[0_0_30px_rgba(200,155,60,0.2)]" />
          <div className="absolute top-0 w-5 h-5 rounded-full bg-gradient-to-tr from-[#F1CE73] to-[#FFF] shadow-[0_0_20px_#F1CE73] animate-bounce" />
          <div className="absolute bottom-6 left-6 w-3.5 h-3.5 rounded-full bg-[#C89B3C] shadow-[0_0_15px_#C89B3C]" />
          <div className="w-24 h-24 rounded-full bg-[#151733]/90 border border-[#C89B3C]/60 flex items-center justify-center backdrop-blur-md shadow-[0_0_35px_rgba(200,155,60,0.35)]">
            <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-[#F1CE73] to-[#FFFFFF] font-serif">
              ॐ
            </span>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-3xl bg-[#0C0E1F]/80 border border-[#C89B3C]/25 backdrop-blur-xl">
          <div className="text-4xl mb-4">🪐</div>
          <h3 className="font-serif text-xl text-[#F1CE73] mb-2 font-medium">Precision D1 & D9 Charts</h3>
          <p className="text-xs sm:text-sm text-[#AAA6BE] leading-relaxed">Astronomical calculations mapping ascendants, nakshatras, and mahadashas.</p>
        </div>
        <div className="p-8 rounded-3xl bg-[#0C0E1F]/80 border border-[#C89B3C]/25 backdrop-blur-xl">
          <div className="text-4xl mb-4">✋</div>
          <h3 className="font-serif text-xl text-[#F1CE73] mb-2 font-medium">Neural Palm Scanning</h3>
          <p className="text-xs sm:text-sm text-[#AAA6BE] leading-relaxed">Vision line tracing detecting major mounts and lifeline energy nodes.</p>
        </div>
        <div className="p-8 rounded-3xl bg-[#0C0E1F]/80 border border-[#C89B3C]/25 backdrop-blur-xl">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="font-serif text-xl text-[#F1CE73] mb-2 font-medium">Tarun AI Jyotishi</h3>
          <p className="text-xs sm:text-sm text-[#AAA6BE] leading-relaxed">Chart-aware spiritual intelligence and timing calculations.</p>
        </div>
      </section>
    </main>
  );
}
