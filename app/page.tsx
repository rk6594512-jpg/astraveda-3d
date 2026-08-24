'use client';

import React, { useState, useEffect } from 'react';

export default function TarunSpatialApp() {
  const [activeTab, setActiveTab] = useState<'hero' | 'kundli' | 'palm' | 'oracle'>('hero');
  
  // Kundli Form State
  const [kundliData, setKundliData] = useState({ name: '', dob: '', tob: '', pob: '' });
  const [chartCalculated, setChartCalculated] = useState(false);

  // Palm Scanner State
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState(false);

  // Oracle AI State
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Namaste. I am Tarun AI Oracle — your 2030 Vedic Intelligence Core. Ask about your astrological windows, life trajectory, or karmic energy patterns.' }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  const handleKundliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (kundliData.name) setChartCalculated(true);
  };

  const handlePalmScan = () => {
    setScanning(true);
    setScanResult(false);
    setTimeout(() => {
      setScanning(false);
      setScanResult(true);
    }, 2800);
  };

  const handleOracleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    const query = inputMsg;
    setMessages((prev) => [...prev, { role: 'user', text: query }]);
    setInputMsg('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: `✦ Alignment Analysis for: "${query}"\nCosmic coordinates indicate strong harmonic activation in your 10th house of asymmetric execution. Aligning your current focus with Mars-Jupiter transit will accelerate multi-fold leverage.`
        }
      ]);
    }, 900);
  };

  return (
    <main className="min-h-screen bg-[#030307] text-[#F6F0E2] selection:bg-[#C89B3C]/30 relative overflow-hidden font-sans">
      
      {/* 3D Cinematic Spatial Video Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 scale-105 filter brightness-110 contrast-125"
          src="https://assets.mixkit.co/videos/preview/mixkit-flying-through-a-star-field-in-outer-space-26750-large.mp4"
        />
        {/* Spatial Mesh Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030307]/70 via-transparent to-[#030307] mix-blend-multiply" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#3B1F6E]/25 blur-[160px] pointer-events-none" />
      </div>

      {/* Futuristic Floating Glass Header */}
      <header className="relative z-30 max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div 
          onClick={() => setActiveTab('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#F1CE73] via-[#C89B3C] to-[#8C6517] flex items-center justify-center text-[#030307] font-bold text-lg shadow-[0_0_30px_rgba(200,155,60,0.5)] group-hover:scale-105 transition-transform">
            ✦
          </div>
          <div>
            <div className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white flex items-center gap-2">
              TARUN <span className="text-[10px] tracking-widest px-2 py-0.5 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C]/40 text-[#F1CE73] uppercase">2030 Spatial</span>
            </div>
            <p className="text-[10px] tracking-widest uppercase text-[#AAA6BE]">Neural Vedic Intelligence</p>
          </div>
        </div>

        {/* HUD Navigation Pills */}
        <nav className="flex items-center gap-2 sm:gap-3 p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-2xl">
          <button
            onClick={() => setActiveTab('hero')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              activeTab === 'hero' ? 'bg-[#C89B3C] text-[#030307] shadow-[0_0_15px_rgba(200,155,60,0.4)]' : 'text-[#AAA6BE] hover:text-white'
            }`}
          >
            Cosmos
          </button>
          <button
            onClick={() => setActiveTab('kundli')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              activeTab === 'kundli' ? 'bg-[#C89B3C] text-[#030307] shadow-[0_0_15px_rgba(200,155,60,0.4)]' : 'text-[#AAA6BE] hover:text-white'
            }`}
          >
            Kundli 3D
          </button>
          <button
            onClick={() => setActiveTab('palm')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              activeTab === 'palm' ? 'bg-[#C89B3C] text-[#030307] shadow-[0_0_15px_rgba(200,155,60,0.4)]' : 'text-[#AAA6BE] hover:text-white'
            }`}
          >
            Neural Palm
          </button>
          <button
            onClick={() => setActiveTab('oracle')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              activeTab === 'oracle' ? 'bg-gradient-to-r from-[#F1CE73] to-[#C89B3C] text-[#030307] font-semibold shadow-[0_0_20px_rgba(241,206,115,0.4)]' : 'text-[#F1CE73] hover:text-white'
            }`}
          >
            AI Oracle
          </button>
        </nav>
      </header>

      {/* Dynamic Viewport Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-20">
        
        {/* 1. HERO VIEW */}
        {activeTab === 'hero' && (
          <section className="flex flex-col items-center text-center pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-[#C89B3C]/30 text-xs text-[#F1CE73] mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(200,155,60,0.15)] animate-pulse">
              <span className="w-2 h-2 rounded-full bg-[#F1CE73] shadow-[0_0_10px_#F1CE73]" />
              <span>Next-Gen Spatial Vedic Ecosystem</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-7xl font-light tracking-tight text-white mb-6 leading-tight max-w-4xl">
              Your Destiny Rendered in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF] via-[#F1CE73] to-[#C89B3C] font-normal drop-shadow-[0_0_40px_rgba(241,206,115,0.35)]">
                Multidimensional Space
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-[#AAA6BE] max-w-2xl mb-12 font-light leading-relaxed">
              Step beyond flat charts. Experience neural biometric palmistry, real-time astral orbit calculations, and autonomous Vedic AI synthesis.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center mb-16">
              <button
                onClick={() => setActiveTab('kundli')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C89B3C] via-[#F1CE73] to-[#C89B3C] text-[#030307] font-semibold shadow-[0_0_30px_rgba(200,155,60,0.4)] hover:scale-105 transition-all duration-300"
              >
                Synthesize Kundli Matrix
              </button>
              <button
                onClick={() => setActiveTab('palm')}
                className="px-8 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white border border-[#C89B3C]/40 backdrop-blur-2xl hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Launch Palm Vision
              </button>
              <button
                onClick={() => setActiveTab('oracle')}
                className="px-8 py-4 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-[#F1CE73] border border-white/10 backdrop-blur-2xl hover:scale-105 transition-all duration-300"
              >
                Consult Tarun AI
              </button>
            </div>

            {/* Spatial Hologram Portal Visual */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center my-6">
              <div className="absolute inset-0 rounded-full border border-[#C89B3C]/30 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-[#F1CE73]/30 border-dashed animate-[spin_35s_linear_infinite_reverse]" />
              <div className="absolute inset-14 rounded-full border-2 border-white/10 backdrop-blur-3xl shadow-[0_0_40px_rgba(200,155,60,0.2)]" />
              
              <div className="absolute top-2 w-4 h-4 rounded-full bg-[#F1CE73] shadow-[0_0_20px_#F1CE73]" />
              <div className="absolute bottom-6 left-8 w-3 h-3 rounded-full bg-[#C89B3C] shadow-[0_0_15px_#C89B3C]" />
              
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-[#C89B3C]/50 backdrop-blur-2xl flex items-center justify-center shadow-[0_0_30px_rgba(200,155,60,0.3)]">
                <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#F1CE73] to-white font-serif">
                  ॐ
                </span>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-16 text-left">
              <div 
                onClick={() => setActiveTab('kundli')}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#C89B3C]/50 backdrop-blur-2xl transition-all cursor-pointer group shadow-2xl"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🪐</div>
                <h3 className="font-serif text-xl text-[#F1CE73] mb-2 font-medium">Quantum D1/D9 Engine</h3>
                <p className="text-xs text-[#AAA6BE] leading-relaxed">Precision planetary ephemeris calculating lagna coordinates and cosmic transits in real-time.</p>
              </div>

              <div 
                onClick={() => setActiveTab('palm')}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#C89B3C]/50 backdrop-blur-2xl transition-all cursor-pointer group shadow-2xl"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">✋</div>
                <h3 className="font-serif text-xl text-[#F1CE73] mb-2 font-medium">Neural Subsurface Palmistry</h3>
                <p className="text-xs text-[#AAA6BE] leading-relaxed">Vision-assisted micro-line tracing of Life, Heart, and Head meridian nodes with instant readout.</p>
              </div>

              <div 
                onClick={() => setActiveTab('oracle')}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#C89B3C]/50 backdrop-blur-2xl transition-all cursor-pointer group shadow-2xl"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
                <h3 className="font-serif text-xl text-[#F1CE73] mb-2 font-medium">Tarun AI Oracle HUD</h3>
                <p className="text-xs text-[#AAA6BE] leading-relaxed">Chart-aware spiritual intelligence offering high-leverage strategic guidance and remedial timing.</p>
              </div>
            </div>
          </section>
        )}

        {/* 2. KUNDLI MATRIX VIEW */}
        {activeTab === 'kundli' && (
          <section className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h2 className="font-serif text-3xl font-light text-white mb-2">Vedic Astral Matrix</h2>
              <p className="text-xs text-[#AAA6BE]">Calculate high-precision astrological coordinates across all 12 houses.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <form onSubmit={handleKundliSubmit} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl space-y-4 shadow-2xl">
                <h3 className="text-sm font-semibold text-[#F1CE73] tracking-wide uppercase">Enter Astro Telemetry</h3>
                <div>
                  <label className="text-xs text-[#AAA6BE] block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={kundliData.name}
                    onChange={(e) => setKundliData({ ...kundliData, name: e.target.value })}
                    placeholder="e.g. Tarun Chaudhary"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#C89B3C] text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-[#AAA6BE] block mb-1">Date of Birth</label>
                    <input
                      type="date"
                      required
                      value={kundliData.dob}
                      onChange={(e) => setKundliData({ ...kundliData, dob: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-3 py-3 text-white focus:outline-none focus:border-[#C89B3C] text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#AAA6BE] block mb-1">Time of Birth</label>
                    <input
                      type="time"
                      value={kundliData.tob}
                      onChange={(e) => setKundliData({ ...kundliData, tob: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-3 py-3 text-white focus:outline-none focus:border-[#C89B3C] text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-[#AAA6BE] block mb-1">Place of Birth (Coordinates / City)</label>
                  <input
                    type="text"
                    value={kundliData.pob}
                    onChange={(e) => setKundliData({ ...kundliData, pob: e.target.value })}
                    placeholder="e.g. New Delhi, India"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#C89B3C] text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#030307] font-semibold hover:opacity-95 transition-all shadow-[0_0_25px_rgba(200,155,60,0.3)] mt-2"
                >
                  Synthesize Birth Matrix
                </button>
              </form>

              {/* 3D Holographic Chart Render */}
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl min-h-[420px] flex flex-col justify-center items-center shadow-2xl">
                {chartCalculated ? (
                  <div className="w-full space-y-6 animate-fadeIn">
                    <div className="text-center pb-3 border-b border-white/10">
                      <h4 className="font-serif text-2xl text-[#F1CE73] font-light">{kundliData.name || 'User'}&apos;s Cosmic Matrix</h4>
                      <p className="text-xs text-[#AAA6BE]">Lagna: Mesha (Aries) • Moon: Rohini • Dasha: Jupiter-Sun</p>
                    </div>

                    <div className="aspect-square max-w-[300px] mx-auto border-2 border-[#C89B3C]/60 rounded-2xl relative grid grid-cols-3 grid-rows-3 text-center text-xs p-2 bg-[#030307]/60 backdrop-blur-md shadow-[0_0_30px_rgba(200,155,60,0.2)]">
                      <div className="border border-white/10 rounded-lg p-1.5 flex flex-col justify-center"><span className="text-[10px] text-[#AAA6BE]">12th</span>Sun</div>
                      <div className="border border-[#C89B3C]/50 bg-[#C89B3C]/10 rounded-lg p-1.5 flex flex-col justify-center font-bold text-[#F1CE73]"><span className="text-[10px]">1st</span>Lagna</div>
                      <div className="border border-white/10 rounded-lg p-1.5 flex flex-col justify-center"><span className="text-[10px] text-[#AAA6BE]">2nd</span>Jup</div>
                      <div className="border border-white/10 rounded-lg p-1.5 flex flex-col justify-center"><span className="text-[10px] text-[#AAA6BE]">11th</span>Sat</div>
                      <div className="border border-white/10 rounded-lg p-1.5 flex flex-col justify-center font-serif text-[#F1CE73] text-sm">D1</div>
                      <div className="border border-white/10 rounded-lg p-1.5 flex flex-col justify-center"><span className="text-[10px] text-[#AAA6BE]">3rd</span>Mars</div>
                      <div className="border border-white/10 rounded-lg p-1.5 flex flex-col justify-center"><span className="text-[10px] text-[#AAA6BE]">10th</span>Ven</div>
                      <div className="border border-white/10 rounded-lg p-1.5 flex flex-col justify-center"><span className="text-[10px] text-[#AAA6BE]">9th</span>Mer</div>
                      <div className="border border-white/10 rounded-lg p-1.5 flex flex-col justify-center"><span className="text-[10px] text-[#AAA6BE]">4th</span>Rahu</div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-[#AAA6BE] space-y-3">
                    <div className="text-5xl animate-bounce">✧</div>
                    <p className="text-sm">Submit your birth telemetry to generate the 3D Vedic blueprint.</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* 3. NEURAL PALM VISION VIEW */}
        {activeTab === 'palm' && (
          <section className="max-w-xl mx-auto text-center space-y-8 animate-fadeIn">
            <div>
              <h2 className="font-serif text-3xl font-light text-white mb-2">Neural Palm Vision HUD</h2>
              <p className="text-xs text-[#AAA6BE]">Real-time biometric optical scanning of major meridian mounts.</p>
            </div>

            <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              
              {/* Palm HUD Viewport */}
              <div className="relative w-56 h-72 mx-auto border border-[#C89B3C]/40 rounded-3xl flex items-center justify-center mb-8 bg-[#030307]/50 backdrop-blur-md overflow-hidden">
                <span className="text-7xl select-none filter drop-shadow-[0_0_20px_rgba(200,155,60,0.3)]">✋</span>
                
                {/* Laser Scanning Beam */}
                {scanning && (
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#F1CE73] to-transparent shadow-[0_0_25px_#F1CE73] animate-[bounce_1.5s_infinite] top-0" />
                )}

                {/* Cyber Reticle Markers */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#F1CE73]" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#F1CE73]" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#F1CE73]" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#F1CE73]" />
              </div>

              <button
                onClick={handlePalmScan}
                disabled={scanning}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#030307] font-semibold hover:opacity-95 transition-all shadow-[0_0_25px_rgba(200,155,60,0.35)]"
              >
                {scanning ? 'Executing Optical Telemetry...' : 'Initiate Biometric Scan'}
              </button>

              {scanResult && (
                <div className="text-left bg-white/[0.04] p-5 rounded-2xl border border-[#C89B3C]/30 text-xs space-y-2 mt-6 animate-fadeIn">
                  <div className="text-[#F1CE73] font-bold text-sm mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Biometric Readout Validated
                  </div>
                  <p className="text-[#AAA6BE]"><strong className="text-white">Life Meridian:</strong> Deep continuous curve — high vitality and structural resilience.</p>
                  <p className="text-[#AAA6BE]"><strong className="text-white">Jupiter Mount:</strong> Prominent elevation — indicates natural leadership and asymmetric leverage.</p>
                  <p className="text-[#AAA6BE]"><strong className="text-white">Sun Line:</strong> Direct alignment with intellectual execution.</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 4. TARUN AI ORACLE VIEW */}
        {activeTab === 'oracle' && (
          <section className="max-w-3xl mx-auto flex flex-col h-[75vh] animate-fadeIn">
            <div className="text-center mb-6">
              <h2 className="font-serif text-3xl font-light text-white mb-1">Tarun AI Oracle HUD</h2>
              <p className="text-xs text-[#AAA6BE]">Spiritual intelligence reasoning core powered by Vedic ephemeris logic.</p>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl mb-4">
              {messages.map((m, idx) => (
                <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-3xl px-5 py-4 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#030307] font-medium shadow-lg'
                        : 'bg-white/[0.05] text-white border border-white/10 backdrop-blur-md whitespace-pre-line'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleOracleSend} className="flex gap-3">
              <input
                type="text"
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                placeholder="Ask Tarun AI (e.g. Best window to execute a major leap?)..."
                className="flex-1 bg-white/[0.04] border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-[#C89B3C] text-sm backdrop-blur-md"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#030307] font-semibold hover:opacity-95 shadow-[0_0_20px_rgba(200,155,60,0.3)] transition-all"
              >
                Transmit
              </button>
            </form>
          </section>
        )}

      </div>
    </main>
  );
}
