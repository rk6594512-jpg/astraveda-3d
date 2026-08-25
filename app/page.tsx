'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function SiddhaKarmSpatialOS() {
  const [activeTab, setActiveTab] = useState<'matrix' | 'biometric' | 'oracle' | 'muhurta' | 'sankalp'>('matrix');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // --- 1. Biometric Scanner State ---
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);

  // --- 2. Chart Telemetry State ---
  const [birthData, setBirthData] = useState({ name: 'Rahul Sharma', dob: '1998-08-15', tob: '06:30', city: 'Varanasi, IN' });
  const [chartCalculated, setChartCalculated] = useState(true);

  // --- 3. AI Oracle State ---
  const [chatLog, setChatLog] = useState([
    { role: 'ai', text: 'SiddhaKarm Neural Core v3.4 online. Ephemeris synced. Awaiting astrological or karmic query.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // --- 4. Live Clock for Muhurta ---
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // ==========================================
  // WebGL / Canvas Space Vortex Engine
  // ==========================================
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 90 }, () => ({
      x: (Math.random() - 0.5) * w * 2,
      y: (Math.random() - 0.5) * h * 2,
      z: Math.random() * 800 + 100,
      size: Math.random() * 1.5 + 0.5,
      color: Math.random() > 0.4 ? '#D4AF37' : '#94A3B8'
    }));

    const render = () => {
      ctx.fillStyle = '#05070B';
      ctx.fillRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.z -= 1.6;
        if (p.z <= 0) {
          p.z = 800;
          p.x = (Math.random() - 0.5) * w * 2;
          p.y = (Math.random() - 0.5) * h * 2;
        }
        const k = 220 / p.z;
        const px = p.x * k + cx;
        const py = p.y * k + cy;

        if (px >= 0 && px < w && py >= 0 && py < h) {
          ctx.fillStyle = p.color;
          ctx.globalAlpha = 1 - p.z / 800;
          ctx.beginPath();
          ctx.arc(px, py, p.size * k, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1.0;
      animId = requestAnimationFrame(render);
    };
    render();

    const handleResize = () => {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // ==========================================
  // Camera Biometrics
  // ==========================================
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setCameraActive(true);
      }
    } catch {
      setCameraActive(false);
    }
  };

  const runBiometricScan = () => {
    setScanning(true);
    setScanResult(null);
    if (!cameraActive) startCamera();

    setTimeout(() => {
      setScanning(false);
      setScanResult({
        vitalityIndex: '96.4%',
        jupiterMount: '+2.8σ (High Authority)',
        saturnVector: 'Harmonic Stability',
        meridianFlow: 'Ascending / Unbroken'
      });
    }, 2600);
  };

  const handleSendOracle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || isProcessing) return;
    const q = inputVal;
    setChatLog((prev) => [...prev, { role: 'user', text: q }]);
    setInputVal('');
    setIsProcessing(true);

    setTimeout(() => {
      setChatLog((prev) => [
        ...prev,
        {
          role: 'ai',
          text: `✦ Synthesis for "${q}":\nTransit ephemeris indicates active 10th-house acceleration under Jupiter's aspect. Execute capital and structural decisions within the waxing lunar window for optimal leverage.`
        }
      ]);
      setIsProcessing(false);
    }, 750);
  };

  return (
    <div className="relative min-h-screen bg-[#05070B] text-[#ECEFF1] font-sans selection:bg-[#D4AF37]/30 overflow-x-hidden">
      
      {/* Dynamic Background Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#1E293B]/40 via-[#D4AF37]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* Top Navbar */}
      <header className="relative z-30 max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-white/[0.08] backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#8C6D1F] flex items-center justify-center text-[#05070B] font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold tracking-wider text-sm text-white flex items-center gap-2">
              SIDDHAKARM <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] font-mono">v2030.4</span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono tracking-tight">Computational Vedic Ephemeris</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>IST: {time.toLocaleTimeString()}</span>
          </div>
          <div className="text-slate-300">Lat: 25.3176° N • Varanasi</div>
        </div>
      </header>

      {/* Floating Spatial Dock Navigation */}
      <div className="sticky top-4 z-40 max-w-fit mx-auto my-4 px-2 py-1.5 rounded-full bg-[#0F172A]/75 backdrop-blur-2xl border border-white/10 shadow-2xl flex items-center gap-1">
        {[
          { id: 'matrix', label: 'Vedic Matrix', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
          { id: 'biometric', label: 'Biometric HUD', icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4' },
          { id: 'oracle', label: 'AI Oracle Core', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
          { id: 'muhurta', label: 'Muhurta Radar', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
          { id: 'sankalp', label: 'Sankalp Protocol', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3D079] text-[#05070B] font-semibold shadow-[0_0_15px_rgba(212,175,55,0.35)]'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tab.icon} />
            </svg>
            <span className="hidden md:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Main SaaS Viewport Container */}
      <main className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 py-6">
        
        {/* =========================================================
            MODULE 1: VEDIC MATRIX (Precision D1/D9 Geometric Core)
        ========================================================= */}
        {activeTab === 'matrix' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Input Panel */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-[#0B101B]/80 border border-white/[0.08] backdrop-blur-2xl space-y-4">
              <div className="border-b border-white/[0.08] pb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold tracking-wider text-[#D4AF37] font-mono uppercase">Astrological Telemetry</h2>
                <span className="text-[10px] text-slate-500 font-mono">D1/D9 Ephemeris</span>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Seeker Identity</label>
                  <input
                    type="text"
                    value={birthData.name}
                    onChange={(e) => setBirthData({ ...birthData, name: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Birth Date</label>
                    <input
                      type="date"
                      value={birthData.dob}
                      onChange={(e) => setBirthData({ ...birthData, dob: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Time (24h)</label>
                    <input
                      type="time"
                      value={birthData.tob}
                      onChange={(e) => setBirthData({ ...birthData, tob: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Coordinates / City</label>
                  <input
                    type="text"
                    value={birthData.city}
                    onChange={(e) => setBirthData({ ...birthData, city: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono space-y-1.5 text-slate-400">
                  <div className="flex justify-between"><span className="text-slate-500">Lagna:</span><span className="text-white">Simha (Leo 14°22&apos;)</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Nakshatra:</span><span className="text-[#D4AF37]">Rohini (Pada 2)</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Current Dasha:</span><span className="text-emerald-400">Jupiter / Sun</span></div>
                </div>
              </div>
            </div>

            {/* Sacred Geometry SVG Chart Display */}
            <div className="lg:col-span-7 p-6 rounded-3xl bg-[#0B101B]/80 border border-white/[0.08] backdrop-blur-2xl flex flex-col justify-between">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <span className="text-xs font-mono text-slate-400">Vedic D1 Kundli Matrix</span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 font-mono">Real-time Computed</span>
              </div>

              <div className="my-4 aspect-square max-w-[340px] mx-auto w-full bg-[#05070B] rounded-2xl border border-[#D4AF37]/40 p-2 relative shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                <svg viewBox="0 0 300 300" className="w-full h-full stroke-[#D4AF37] stroke-[1.2] fill-none">
                  <rect x="10" y="10" width="280" height="280" />
                  <line x1="10" y1="10" x2="290" y2="290" />
                  <line x1="290" y1="10" x2="10" y2="290" />
                  <polygon points="150,10 290,150 150,290 10,150" />

                  {/* House Text Overlays */}
                  <text x="150" y="75" textAnchor="middle" className="fill-[#F3D079] text-[11px] font-bold">1st Lagna</text>
                  <text x="80" y="45" textAnchor="middle" className="fill-slate-400 text-[9px]">12th Sun</text>
                  <text x="220" y="45" textAnchor="middle" className="fill-slate-400 text-[9px]">2nd Jup</text>
                  <text x="50" y="110" textAnchor="middle" className="fill-slate-400 text-[9px]">11th Sat</text>
                  <text x="250" y="110" textAnchor="middle" className="fill-slate-400 text-[9px]">3rd Mars</text>
                  <text x="150" y="150" textAnchor="middle" className="fill-[#D4AF37] text-[13px] font-mono font-bold tracking-widest">D1</text>
                  <text x="50" y="190" textAnchor="middle" className="fill-slate-400 text-[9px]">10th Ven</text>
                  <text x="250" y="190" textAnchor="middle" className="fill-slate-400 text-[9px]">4th Rahu</text>
                  <text x="80" y="255" textAnchor="middle" className="fill-slate-400 text-[9px]">9th Mer</text>
                  <text x="220" y="255" textAnchor="middle" className="fill-slate-400 text-[9px]">5th Ketu</text>
                  <text x="150" y="225" textAnchor="middle" className="fill-slate-400 text-[10px]">7th Moon</text>
                </svg>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono text-slate-400 pt-2 border-t border-white/[0.06]">
                <div>Surya: <span className="text-white">Leo 28°</span></div>
                <div>Chandra: <span className="text-white">Tau 12°</span></div>
                <div>Guru: <span className="text-white">Pis 04°</span></div>
              </div>
            </div>

          </div>
        )}

        {/* =========================================================
            MODULE 2: BIOMETRIC PALM HUD (WebRTC + LiDAR Grid)
        ========================================================= */}
        {activeTab === 'biometric' && (
          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-[#0B101B]/80 border border-white/[0.08] backdrop-blur-2xl text-center space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-white tracking-wide">Optical Palmistry Telemetry</h2>
              <p className="text-xs text-slate-400 mt-1">Live camera alignment for sub-surface meridian node scanning</p>
            </div>

            <div className="relative w-72 h-80 mx-auto rounded-3xl bg-[#05070B] border border-[#D4AF37]/40 overflow-hidden flex items-center justify-center shadow-2xl">
              <video ref={videoRef} playsInline muted autoPlay className={`w-full h-full object-cover ${cameraActive ? 'block' : 'hidden'}`} />
              
              {!cameraActive && (
                <div className="text-center p-4">
                  <div className="w-16 h-16 rounded-full border border-dashed border-[#D4AF37]/40 mx-auto mb-3 flex items-center justify-center text-[#D4AF37]">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">Sensor on Standby</span>
                </div>
              )}

              {scanning && (
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_20px_#D4AF37] animate-[bounce_1.5s_infinite] top-0 z-10" />
              )}

              {/* Reticle HUD Corners */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]" />
            </div>

            <button
              onClick={runBiometricScan}
              disabled={scanning}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F3D079] to-[#D4AF37] text-[#05070B] font-bold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-105 transition-all"
            >
              {scanning ? 'Computing Energy Nodes...' : 'Initiate Optical Biometrics'}
            </button>

            {scanResult && (
              <div className="text-left p-5 rounded-2xl bg-white/[0.02] border border-[#D4AF37]/30 text-xs font-mono grid grid-cols-2 gap-3 text-slate-300">
                <div><span className="text-slate-500 block">Life Meridian:</span> <span className="text-white font-semibold">{scanResult.vitalityIndex}</span></div>
                <div><span className="text-slate-500 block">Jupiter Mount:</span> <span className="text-[#D4AF37] font-semibold">{scanResult.jupiterMount}</span></div>
                <div><span className="text-slate-500 block">Saturn Vector:</span> <span className="text-white font-semibold">{scanResult.saturnVector}</span></div>
                <div><span className="text-slate-500 block">Meridian Arc:</span> <span className="text-emerald-400 font-semibold">{scanResult.meridianFlow}</span></div>
              </div>
            )}
          </div>
        )}

        {/* =========================================================
            MODULE 3: AI ORACLE TERMINAL
        ========================================================= */}
        {activeTab === 'oracle' && (
          <div className="max-w-3xl mx-auto flex flex-col h-[70vh] p-6 rounded-3xl bg-[#0B101B]/80 border border-white/[0.08] backdrop-blur-2xl">
            <div className="pb-3 border-b border-white/[0.08] flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#D4AF37]">Vedic Intelligence Neural Feed</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">Active</span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 pr-2 mb-4 font-mono text-xs">
              {chatLog.map((m, idx) => (
                <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-4 leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#F3D079] text-[#05070B] font-semibold'
                      : 'bg-white/[0.03] text-slate-200 border border-white/10 whitespace-pre-line'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isProcessing && <div className="text-xs text-[#D4AF37] animate-pulse">✦ Ephemeris synthesizing response...</div>}
            </div>

            <form onSubmit={handleSendOracle} className="flex gap-2">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Query astrological transits or timing..."
                className="flex-1 bg-white/[0.03] border border-white/10 rounded-full px-5 py-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              />
              <button type="submit" className="px-6 py-3 rounded-full bg-[#D4AF37] text-[#05070B] font-bold text-xs">
                Transmit
              </button>
            </form>
          </div>
        )}

        {/* =========================================================
            MODULE 4: MUHURTA RADAR (Live Ephemeris Windows)
        ========================================================= */}
        {activeTab === 'muhurta' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-[#0B101B]/80 border border-white/[0.08] space-y-4">
                <h3 className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">Auspicious Transit Windows</h3>
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono space-y-1">
                  <div className="text-emerald-400 font-semibold">Abhijit Muhurta (Peak Execution)</div>
                  <div className="text-slate-300">11:48 AM – 12:38 PM</div>
                  <div className="text-[10px] text-slate-400 pt-1">Ideal for strategic agreements, contracts & investments.</div>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono space-y-1">
                  <div className="text-emerald-400 font-semibold">Amrit Kaal</div>
                  <div className="text-slate-300">08:15 AM – 09:45 AM</div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#0B101B]/80 border border-white/[0.08] space-y-4">
                <h3 className="text-xs font-mono text-rose-400 uppercase tracking-wider">Inauspicious Vectors (Avoid)</h3>
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-xs font-mono space-y-1">
                  <div className="text-rose-400 font-semibold">Rahu Kalam</div>
                  <div className="text-slate-300">04:30 PM – 06:00 PM</div>
                  <div className="text-[10px] text-slate-400 pt-1">Avoid launching high-stakes capital ventures.</div>
                </div>
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-xs font-mono space-y-1">
                  <div className="text-rose-400 font-semibold">Yamagandam</div>
                  <div className="text-slate-300">01:30 PM – 03:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================
            MODULE 5: SANKALP PROTOCOL (Authentic Booking)
        ========================================================= */}
        {activeTab === 'sankalp' && (
          <div className="max-w-xl mx-auto p-8 rounded-3xl bg-[#0B101B]/80 border border-white/[0.08] backdrop-blur-2xl space-y-4">
            <div className="text-center pb-4 border-b border-white/[0.08]">
              <h2 className="text-lg font-semibold text-white">Vedic Sankalp Protocol</h2>
              <p className="text-xs text-slate-400 mt-1">Direct ritual registry with Ashram scholars</p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Sankalp registered. Ashram scholars will coordinate ritual timing.'); }} className="space-y-4">
              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">Yajamana Full Name</label>
                <input type="text" required placeholder="Full Name" className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]" />
              </div>
              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">Ritual Category</label>
                <select className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]">
                  <option>Maha Mrityunjaya Vitality Anushthan</option>
                  <option>Manglik / Planetary Alignment Shanti</option>
                  <option>Sri Suktam Lakshmi Wealth Vector</option>
                  <option>Kaal Sarp Yoga Rectification</option>
                </select>
              </div>
              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">Preferred Sankalp Date</label>
                <input type="date" required className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]" />
              </div>
              <button type="submit" className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3D079] text-[#05070B] font-bold text-xs uppercase tracking-wider shadow-lg">
                Register Ritual Protocol
              </button>
            </form>
          </div>
        )}

      </main>
    </div>
  );
}
