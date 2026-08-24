'use client';

import React, { useState } from 'react';

export default function TarunSpatialEngine() {
  const [activeTab, setActiveTab] = useState<'cosmos' | 'kundli' | 'palm' | 'oracle' | 'panchang'>('cosmos');
  
  // Kundli State
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [tob, setTob] = useState('');
  const [pob, setPob] = useState('');
  const [calculated, setCalculated] = useState(false);

  // Palm Scanner State
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);

  // AI Oracle State
  const [chatLog, setChatLog] = useState([
    { role: 'ai', text: '✦ Tarun 2030 Neural Core active. Ask regarding planetary transits, career leverage windows, or karmic nodes.' }
  ]);
  const [inputVal, setInputVal] = useState('');

  const runPalmScan = () => {
    setScanning(true);
    setScanned(false);
    setTimeout(() => {
      setScanning(false);
      setScanned(true);
    }, 2200);
  };

  const sendOracleMsg = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const msg = inputVal;
    setChatLog((prev) => [...prev, { role: 'user', text: msg }]);
    setInputVal('');

    setTimeout(() => {
      setChatLog((prev) => [
        ...prev,
        {
          role: 'ai',
          text: `✦ Strategic Synthesis for "${msg}":\nPlanetary ephemeris highlights strong 10th-house activation. Aligning core focus with Jupiter transit will compound leverage.`
        }
      ]);
    }, 600);
  };

  return (
    <div className="min-h-screen w-full bg-[#030408] text-[#F4EFE6] selection:bg-[#F1CE73]/30 overflow-x-hidden pb-16">
      
      {/* Dynamic Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-gradient-to-b from-[#4A1E8A]/30 via-[#C89B3C]/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* Top Navbar */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
        <div onClick={() => setActiveTab('cosmos')} className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#C89B3C] via-[#F1CE73] to-white flex items-center justify-center text-[#030408] font-bold text-lg shadow-[0_0_20px_rgba(241,206,115,0.4)]">
            ✦
          </div>
          <div>
            <div className="text-xl font-bold tracking-wider text-white">
              TARUN <span className="text-[9px] tracking-widest px-2 py-0.5 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C]/40 text-[#F1CE73] uppercase">2030 Core</span>
            </div>
            <p className="text-[10px] tracking-widest uppercase text-[#8E8A9F]">Spatial Vedic Intelligence</p>
          </div>
        </div>

        {/* Tab Controls */}
        <nav className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10 overflow-x-auto">
          {(['cosmos', 'kundli', 'palm', 'oracle', 'panchang'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs capitalize transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#030408] font-bold shadow-md'
                  : 'text-[#8E8A9F] hover:text-white'
              }`}
            >
              {tab === 'cosmos' ? '3D Cosmos' : tab === 'palm' ? 'Palm Vision' : tab === 'oracle' ? 'AI Oracle' : tab}
            </button>
          ))}
        </nav>
      </header>

      {/* Viewport Content */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8">
        
        {/* TAB 1: 3D COSMOS HERO */}
        {activeTab === 'cosmos' && (
          <div className="flex flex-col items-center text-center pt-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#C89B3C]/30 text-xs text-[#F1CE73]">
              <span className="w-2 h-2 rounded-full bg-[#F1CE73] animate-ping" />
              <span>Next-Gen Ephemeris • 2030 Spatial Architecture</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-tight max-w-4xl">
              Destiny Computed in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F1CE73] to-[#C89B3C]">
                Multidimensional Space
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#8E8A9F] max-w-2xl leading-relaxed">
              Vedic calculation matrix, neural biometric palm line tracing, and real-time Jyotishi reasoning engineered for leverage.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              <button
                onClick={() => setActiveTab('kundli')}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#030408] font-bold shadow-[0_0_20px_rgba(241,206,115,0.3)] hover:scale-105 transition-all"
              >
                Synthesize Kundli
              </button>
              <button
                onClick={() => setActiveTab('palm')}
                className="px-8 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white border border-[#C89B3C]/40 hover:scale-105 transition-all"
              >
                Launch Palm Vision
              </button>
              <button
                onClick={() => setActiveTab('oracle')}
                className="px-8 py-3.5 rounded-full bg-white/[0.03] text-[#F1CE73] border border-white/10 hover:scale-105 transition-all"
              >
                Consult AI Oracle
              </button>
            </div>

            {/* Spatial Orbit Core */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center my-6">
              <div className="absolute inset-0 rounded-full border border-[#C89B3C]/30 animate-[spin_50s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-[#F1CE73]/30 border-dashed animate-[spin_30s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-full border border-white/10 shadow-[0_0_30px_rgba(200,155,60,0.15)]" />
              <div className="w-20 h-20 rounded-2xl bg-[#121324] border border-[#C89B3C]/50 flex items-center justify-center shadow-xl">
                <span className="text-3xl text-[#F1CE73]">ॐ</span>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-8 text-left">
              <div onClick={() => setActiveTab('kundli')} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C89B3C]/50 transition-all cursor-pointer">
                <div className="text-3xl mb-3">🪐</div>
                <h3 className="text-lg text-[#F1CE73] mb-1 font-semibold">Quantum D1 & D9 Engine</h3>
                <p className="text-xs text-[#8E8A9F] leading-relaxed">Precision planetary ephemeris calculating lagna degrees and dashas.</p>
              </div>
              <div onClick={() => setActiveTab('palm')} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C89B3C]/50 transition-all cursor-pointer">
                <div className="text-3xl mb-3">✋</div>
                <h3 className="text-lg text-[#F1CE73] mb-1 font-semibold">Neural Palm Scanning</h3>
                <p className="text-xs text-[#8E8A9F] leading-relaxed">Vision-assisted line tracing of Life and Mount energy nodes.</p>
              </div>
              <div onClick={() => setActiveTab('oracle')} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#C89B3C]/50 transition-all cursor-pointer">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg text-[#F1CE73] mb-1 font-semibold">Tarun AI Oracle HUD</h3>
                <p className="text-xs text-[#8E8A9F] leading-relaxed">Vedic conversational intelligence for timing windows and remedies.</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: KUNDLI CALCULATOR */}
        {activeTab === 'kundli' && (
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-3xl font-light text-white mb-1">Vedic Astral Matrix</h2>
              <p className="text-xs text-[#8E8A9F]">Compute high-precision astrological coordinates.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <form onSubmit={(e) => { e.preventDefault(); if(name) setCalculated(true); }} className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
                <h3 className="text-xs font-semibold text-[#F1CE73] tracking-widest uppercase">Enter Astro Telemetry</h3>
                <div>
                  <label className="text-xs text-[#8E8A9F] block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tarun Chaudhary"
                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#C89B3C]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-[#8E8A9F] block mb-1">Date of Birth</label>
                    <input
                      type="date"
                      required
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#C89B3C]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#8E8A9F] block mb-1">Time of Birth</label>
                    <input
                      type="time"
                      value={tob}
                      onChange={(e) => setTob(e.target.value)}
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#C89B3C]"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-[#8E8A9F] block mb-1">Place of Birth</label>
                  <input
                    type="text"
                    value={pob}
                    onChange={(e) => setPob(e.target.value)}
                    placeholder="e.g. New Delhi, India"
                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#C89B3C]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#030408] font-bold shadow-md hover:opacity-95 transition-all mt-2"
                >
                  Synthesize Birth Matrix
                </button>
              </form>

              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 min-h-[350px] flex flex-col justify-center items-center">
                {calculated ? (
                  <div className="w-full space-y-4 text-center">
                    <h4 className="text-xl text-[#F1CE73]">{name}&apos;s Lagna Matrix</h4>
                    <p className="text-xs text-[#8E8A9F]">Lagna: Mesha (Aries) • Moon: Rohini Nakshatra</p>
                    <div className="aspect-square max-w-[260px] mx-auto border-2 border-[#C89B3C]/60 rounded-xl grid grid-cols-3 grid-rows-3 text-xs p-2 gap-1 bg-[#090A15]">
                      <div className="border border-white/10 rounded p-1 flex items-center justify-center">Sun (12)</div>
                      <div className="border border-[#C89B3C]/50 bg-[#C89B3C]/10 rounded p-1 flex items-center justify-center text-[#F1CE73] font-bold">Lagna (1)</div>
                      <div className="border border-white/10 rounded p-1 flex items-center justify-center">Jup (2)</div>
                      <div className="border border-white/10 rounded p-1 flex items-center justify-center">Sat (11)</div>
                      <div className="border border-white/10 rounded p-1 flex items-center justify-center text-[#F1CE73] font-bold">D1</div>
                      <div className="border border-white/10 rounded p-1 flex items-center justify-center">Mars (3)</div>
                      <div className="border border-white/10 rounded p-1 flex items-center justify-center">Ven (10)</div>
                      <div className="border border-white/10 rounded p-1 flex items-center justify-center">Mer (9)</div>
                      <div className="border border-white/10 rounded p-1 flex items-center justify-center">Rahu (4)</div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-[#8E8A9F] space-y-2">
                    <div className="text-4xl animate-pulse">✧</div>
                    <p className="text-xs">Fill details to compute your real-time Vedic horoscope.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: NEURAL PALM SCANNER */}
        {activeTab === 'palm' && (
          <div className="max-w-md mx-auto text-center space-y-6">
            <h2 className="text-3xl font-light text-white">Neural Palm Vision</h2>
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
              <div className="relative w-48 h-60 mx-auto border border-[#C89B3C]/40 rounded-2xl flex items-center justify-center mb-6 bg-[#090A15] overflow-hidden">
                <span className="text-6xl select-none">✋</span>
                {scanning && (
                  <div className="absolute inset-x-0 h-1 bg-[#F1CE73] shadow-[0_0_20px_#F1CE73] animate-[bounce_1.5s_infinite] top-0" />
                )}
              </div>
              <button
                onClick={runPalmScan}
                disabled={scanning}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#030408] font-bold shadow-md hover:opacity-95 transition-all"
              >
                {scanning ? 'Analyzing Meridian Nodes...' : 'Initiate Biometric Scan'}
              </button>
              {scanned && (
                <div className="text-left bg-white/[0.05] p-4 rounded-xl border border-[#C89B3C]/30 text-xs space-y-2 mt-6">
                  <div className="text-[#F1CE73] font-bold text-sm">✨ Biometric Summary:</div>
                  <p className="text-[#8E8A9F]"><strong className="text-white">Life Meridian:</strong> Deep continuous curve — high vitality.</p>
                  <p className="text-[#8E8A9F]"><strong className="text-white">Jupiter Mount:</strong> Strong node — strategic leadership.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 4: TARUN AI ORACLE */}
        {activeTab === 'oracle' && (
          <div className="max-w-2xl mx-auto flex flex-col h-[70vh]">
            <h2 className="text-3xl font-light text-white text-center mb-4">Tarun AI Oracle</h2>
            <div className="flex-1 overflow-y-auto space-y-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-4">
              {chatLog.map((m, idx) => (
                <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                    m.role === 'user' ? 'bg-[#C89B3C] text-[#030408] font-semibold' : 'bg-white/[0.06] text-white border border-white/10'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={sendOracleMsg} className="flex gap-2">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about your astrological trajectory..."
                className="flex-1 bg-white/[0.05] border border-white/10 rounded-full px-5 py-3 text-white text-xs focus:outline-none focus:border-[#C89B3C]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#030408] font-bold text-xs"
              >
                Send
              </button>
            </form>
          </div>
        )}

        {/* TAB 5: PANCHANG */}
        {activeTab === 'panchang' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-light text-white text-center">Daily Vedic Panchang</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 text-xs">
                <h3 className="text-base text-[#F1CE73] font-semibold">Planetary Telemetry</h3>
                <p className="flex justify-between border-b border-white/5 py-1"><span className="text-[#8E8A9F]">Nakshatra</span><span className="text-white">Rohini</span></p>
                <p className="flex justify-between border-b border-white/5 py-1"><span className="text-[#8E8A9F]">Tithi</span><span className="text-white">Shukla Dashami</span></p>
                <p className="flex justify-between border-b border-white/5 py-1"><span className="text-[#8E8A9F]">Yoga</span><span className="text-white">Brahma</span></p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 text-xs">
                <h3 className="text-base text-[#F1CE73] font-semibold">Muhurta Windows</h3>
                <div className="p-2.5 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                  <span className="text-emerald-400 font-bold block">Abhijit Muhurta</span>
                  <span className="text-white">11:45 AM – 12:35 PM</span>
                </div>
                <div className="p-2.5 bg-rose-500/10 rounded-xl border border-rose-500/20">
                  <span className="text-rose-400 font-bold block">Rahu Kalam</span>
                  <span className="text-white">04:30 PM – 06:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
