'use client';

import React, { useState } from 'react';

export default function Tarun2030App() {
  const [activeTab, setActiveTab] = useState<'cosmos' | 'kundli' | 'palm' | 'oracle' | 'panchang'>('cosmos');
  
  // Kundli Engine State
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [tob, setTob] = useState('');
  const [pob, setPob] = useState('');
  const [calculated, setCalculated] = useState(false);

  // Palm Scanner State
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);

  // Oracle AI State
  const [chatLog, setChatLog] = useState([
    { role: 'ai', text: '✦ Tarun 2030 Neural Core initialized. Ask about your astrological trajectory, karmic inflection points, or planetary alignment.' }
  ]);
  const [inputVal, setInputVal] = useState('');

  const runPalmScan = () => {
    setScanning(true);
    setScanned(false);
    setTimeout(() => {
      setScanning(false);
      setScanned(true);
    }, 2400);
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
          text: `✦ Strategic Vedic Synthesis for: "${msg}"\nPlanetary ephemeris indicates a high-leverage activation cycle. Your Rahu-Jupiter transit empowers asymmetric scaling if executed within the next 48-day window.`
        }
      ]);
    }, 700);
  };

  return (
    <main className="min-h-screen bg-[#030408] text-[#F4EFE6] selection:bg-[#F1CE73]/30 relative overflow-x-hidden font-sans pb-20">
      
      {/* 2030 Spatial Ambient Lighting Aura */}
      <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#4A1E8A]/40 via-[#C89B3C]/15 to-transparent blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-[-10%] w-[500px] h-[500px] bg-[#17183B]/40 blur-[140px] pointer-events-none z-0" />

      {/* Top Floating Glass Navigation */}
      <header className="relative z-30 max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between">
        <div 
          onClick={() => setActiveTab('cosmos')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#C89B3C] via-[#F1CE73] to-[#FFF] flex items-center justify-center text-[#030408] font-bold text-lg shadow-[0_0_25px_rgba(241,206,115,0.45)] group-hover:scale-105 transition-transform">
            ✦
          </div>
          <div>
            <div className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white flex items-center gap-2">
              TARUN <span className="text-[9px] tracking-widest px-2 py-0.5 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C]/40 text-[#F1CE73] uppercase">2030 Core</span>
            </div>
            <p className="text-[10px] tracking-widest uppercase text-[#8E8A9F]">Spatial Vedic Intelligence</p>
          </div>
        </div>

        {/* HUD Navigation Pills */}
        <nav className="flex items-center gap-1.5 sm:gap-2 p-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-2xl overflow-x-auto max-w-full">
          {(['cosmos', 'kundli', 'palm', 'oracle', 'panchang'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs capitalize transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#030408] font-semibold shadow-[0_0_15px_rgba(241,206,115,0.35)]'
                  : 'text-[#8E8A9F] hover:text-white'
              }`}
            >
              {tab === 'cosmos' ? '3D Cosmos' : tab === 'palm' ? 'Palm Vision' : tab === 'oracle' ? 'AI Oracle' : tab}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Dynamic Viewport */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 pt-8">
        
        {/* TAB 1: 3D COSMOS HERO */}
        {activeTab === 'cosmos' && (
          <section className="flex flex-col items-center text-center pt-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-[#C89B3C]/30 text-xs text-[#F1CE73] mb-8 backdrop-blur-2xl shadow-[0_0_20px_rgba(200,155,60,0.2)] animate-pulse">
              <span className="w-2 h-2 rounded-full bg-[#F1CE73] shadow-[0_0_10px_#F1CE73]" />
              <span>Next-Gen Spatial Ephemeris • 2030 Architecture</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white mb-6 leading-tight max-w-4xl">
              Destiny Computed in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F1CE73] to-[#C89B3C] font-normal drop-shadow-[0_0_40px_rgba(241,206,115,0.35)]">
                Multidimensional Space
              </span>
            </h1>

            <p className="text-sm sm:text-lg text-[#8E8A9F] max-w-2xl mb-10 font-light leading-relaxed">
              Autonomous Vedic calculation matrix, neural biometric palm line tracing, and real-time Jyotishi reasoning engineered for peak human leverage.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center mb-16">
              <button
                onClick={() => setActiveTab('kundli')}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C89B3C] via-[#F1CE73] to-[#C89B3C] text-[#030408] font-bold shadow-[0_0_30px_rgba(241,206,115,0.4)] hover:scale-105 transition-all"
              >
                Synthesize Birth Kundli
              </button>
              <button
                onClick={() => setActiveTab('palm')}
                className="px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.09] text-white border border-[#C89B3C]/40 backdrop-blur-2xl hover:scale-105 transition-all shadow-xl"
              >
                Launch Palm Vision
              </button>
              <button
                onClick={() => setActiveTab('oracle')}
                className="px-8 py-4 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-[#F1CE73] border border-white/10 backdrop-blur-2xl hover:scale-105 transition-all"
              >
                Consult AI Oracle
              </button>
            </div>

            {/* 3D Gyroscopic Spatial Core Visual (Zero-Black-Box Pure CSS 3D) */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center my-6">
              <div className="absolute inset-0 rounded-full border border-[#C89B3C]/30 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-[#F1CE73]/40 border-dashed animate-[spin_25s_linear_infinite_reverse]" />
              <div className="absolute inset-16 rounded-full border border-white/15 backdrop-blur-3xl shadow-[0_0_50px_rgba(241,206,115,0.25)]" />
              
              <div className="absolute top-2 w-4 h-4 rounded-full bg-[#F1CE73] shadow-[0_0_25px_#F1CE73] animate-bounce" />
              <div className="absolute bottom-6 left-8 w-3 h-3 rounded-full bg-[#C89B3C] shadow-[0_0_15px_#C89B3C]" />
              
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-[#C89B3C]/60 backdrop-blur-2xl flex items-center justify-center shadow-[0_0_40px_rgba(200,155,60,0.35)]">
                <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#F1CE73] to-white font-serif">
                  ॐ
                </span>
              </div>
            </div>

            {/* Feature Hologram Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-16 text-left">
              <div 
                onClick={() => setActiveTab('kundli')}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#C89B3C]/50 backdrop-blur-2xl transition-all cursor-pointer group shadow-2xl"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🪐</div>
                <h3 className="font-serif text-xl text-[#F1CE73] mb-2 font-medium">Quantum D1 & D9 Engine</h3>
                <p className="text-xs text-[#8E8A9F] leading-relaxed">Precision planetary ephemeris calculating exact lagna degrees, nakshatras, and mahadashas.</p>
              </div>

              <div 
                onClick={() => setActiveTab('palm')}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#C89B3C]/50 backdrop-blur-2xl transition-all cursor-pointer group shadow-2xl"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">✋</div>
                <h3 className="font-serif text-xl text-[#F1CE73] mb-2 font-medium">Neural Palm Scanning</h3>
                <p className="text-xs text-[#8E8A9F] leading-relaxed">Vision-assisted micro-line tracing of Life, Heart, and Mount nodes with real-time biometric readout.</p>
              </div>

              <div 
                onClick={() => setActiveTab('oracle')}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#C89B3C]/50 backdrop-blur-2xl transition-all cursor-pointer group shadow-2xl"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
                <h3 className="font-serif text-xl text-[#F1CE73] mb-2 font-medium">Tarun AI Oracle HUD</h3>
                <p className="text-xs text-[#8E8A9F] leading-relaxed">Vedic conversational intelligence delivering strategic guidance, timing windows, and remedies.</p>
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: KUNDLI CALCULATOR */}
        {activeTab === 'kundli' && (
          <section className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-xl mx-auto mb-6">
              <h2 className="font-serif text-3xl font-light text-white mb-2">Vedic Astral Matrix</h2>
              <p className="text-xs text-[#8E8A9F]">Compute exact astrological coordinates and house divisions.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <form onSubmit={(e) => { e.preventDefault(); if(name) setCalculated(true); }} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl space-y-4 shadow-2xl">
                <h3 className="text-xs font-semibold text-[#F1CE73] tracking-widest uppercase">Enter Astro Telemetry</h3>
                <div>
                  <label className="text-xs text-[#8E8A9F] block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tarun Chaudhary"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#C89B3C] text-sm"
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
                      className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-3 py-3 text-white focus:outline-none focus:border-[#C89B3C] text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#8E8A9F] block mb-1">Time of Birth</label>
                    <input
                      type="time"
                      value={tob}
                      onChange={(e) => setTob(e.target.value)}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-3 py-3 text-white focus:outline-none focus:border-[#C89B3C] text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-[#8E8A9F] block mb-1">Place of Birth (City / Coordinates)</label>
                  <input
                    type="text"
                    value={pob}
                    onChange={(e) => setPob(e.target.value)}
                    placeholder="e.g. New Delhi, India"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#C89B3C] text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#030408] font-bold shadow-[0_0_25px_rgba(241,206,115,0.35)] hover:opacity-95 transition-all mt-2"
                >
                  Synthesize Birth Matrix
                </button>
              </form>

              {/* Holographic Kundli Box */}
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl min-h-[400px] flex flex-col justify-center items-center shadow-2xl">
                {calculated ? (
                  <div className="w-full space-y-6 animate-fadeIn">
                    <div className="text-center pb-3 border-b border-white/10">
                      <h4 className="font-serif text-2xl text-[#F1CE73] font-light">{name}&apos;s Cosmic Matrix</h4>
                      <p className="text-xs text-[#8E8A9F]">Lagna: Mesha (Aries) • Moon: Rohini • Mahadasha: Jupiter-Sun</p>
                    </div>

                    <div className="aspect-square max-w-[300px] mx-auto border-2 border-[#C89B3C]/60 rounded-2xl relative grid grid-cols-3 grid-rows-3 text-center text-xs p-2 bg-[#030408]/60 backdrop-blur-md shadow-[0_0_30px_rgba(200,155,60,0.2)]">
                      <div className="border border-white/10 rounded-lg p-1.5 flex flex-col justify-center"><span className="text-[10px] text-[#8E8A9F]">12th</span>Sun</div>
                      <div className="border border-[#C89B3C]/50 bg-[#C89B3C]/15 rounded-lg p-1.5 flex flex-col justify-center font-bold text-[#F1CE73]"><span className="text-[10px]">1st</span>Lagna</div>
                      <div className="border border-white/10 rounded-lg p-1.5 flex flex-col justify-center"><span className="text-[10px] text-[#8E8A9F]">2nd</span>Jup</div>
                      <div className="border border-white/10 rounded-lg p-1.5 flex flex-col justify-center"><span className="text-[10px] text-[#8E8A9F]">11th</span>Sat</div>
                      <div className="border border-white/10 rounded-lg p-1.5 flex flex-col justify-center font-serif text-[#F1CE73] text-sm">D1</div>
                      <div className="border border-white/10 rounded-lg p-1.5 flex flex-col justify-center"><span className="text-[10px] text-[#8E8A9F]">3rd</span>Mars</div>
                      <div className="border border-white/10 rounded-lg p-1.5 flex flex-col justify-center"><span className="text-[10px] text-[#8E8A9F]">10th</span>Ven</div>
                      <div className="border border-white/10 rounded-lg p-1.5 flex flex-col justify-center"><span className="text-[10px] text-[#8E8A9F]">9th</span>Mer</div>
                      <div className="border border-white/10 rounded-lg p-1.5 flex flex-col justify-center"><span className="text-[10px] text-[#8E8A9F]">4th</span>Rahu</div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-[#8E8A9F] space-y-3">
                    <div className="text-5xl animate-pulse">✧</div>
                    <p className="text-sm">Submit your birth telemetry to generate the 3D Vedic matrix.</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: NEURAL PALM SCANNER */}
        {activeTab === 'palm' && (
          <section className="max-w-xl mx-auto text-center space-y-6 animate-fadeIn">
            <div>
              <h2 className="font-serif text-3xl font-light text-white mb-1">Neural Palm Vision HUD</h2>
              <p className="text-xs text-[#8E8A9F]">Biometric optical meridian scan with instant telemetry readout.</p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              <div className="relative w-52 h-64 mx-auto border border-[#C89B3C]/40 rounded-3xl flex items-center justify-center mb-6 bg-[#030408]/60 backdrop-blur-md overflow-hidden">
                <span className="text-7xl select-none filter drop-shadow-[0_0_20px_rgba(200,155,60,0.3)]">✋</span>
                
                {scanning && (
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#F1CE73] to-transparent shadow-[0_0_25px_#F1CE73] animate-[bounce_1.5s_infinite] top-0" />
                )}

                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#F1CE73]" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#F1CE73]" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#F1CE73]" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#F1CE73]" />
              </div>

              <button
                onClick={runPalmScan}
                disabled={scanning}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#030408] font-bold shadow-[0_0_25px_rgba(241,206,115,0.35)] hover:opacity-95 transition-all"
              >
                {scanning ? 'Executing Optical Telemetry...' : 'Initiate Biometric Scan'}
              </button>

              {scanned && (
                <div className="text-left bg-white/[0.04] p-5 rounded-2xl border border-[#C89B3C]/30 text-xs space-y-2 mt-6 animate-fadeIn">
                  <div className="text-[#F1CE73] font-bold text-sm mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Biometric Readout Validated
                  </div>
                  <p className="text-[#8E8A9F]"><strong className="text-white">Life Meridian:</strong> Unbroken deep curve — denotes high resilience and endurance.</p>
                  <p className="text-[#8E8A9F]"><strong className="text-white">Jupiter Mount:</strong> Elevated energy node — indicates natural strategic leadership.</p>
                  <p className="text-[#8E8A9F]"><strong className="text-white">Sun Line:</strong> Prominent alignment with asymmetric financial execution.</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* TAB 4: TARUN AI ORACLE */}
        {activeTab === 'oracle' && (
          <section className="max-w-3xl mx-auto flex flex-col h-[70vh] animate-fadeIn">
            <div className="text-center mb-4">
              <h2 className="font-serif text-3xl font-light text-white mb-1">Tarun AI Oracle HUD</h2>
              <p className="text-xs text-[#8E8A9F]">Conversational Vedic reasoning core powered by real-time planetary logic.</p>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl mb-4">
              {chatLog.map((m, idx) => (
                <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-3xl px-5 py-4 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#030408] font-semibold shadow-lg'
                        : 'bg-white/[0.05] text-white border border-white/10 backdrop-blur-md whitespace-pre-line'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={sendOracleMsg} className="flex gap-3">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask Tarun AI (e.g. Best timing for expanding a new venture?)..."
                className="flex-1 bg-white/[0.04] border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-[#C89B3C] text-sm backdrop-blur-md"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#030408] font-bold shadow-[0_0_20px_rgba(241,206,115,0.35)] hover:opacity-95 transition-all"
              >
                Transmit
              </button>
            </form>
          </section>
        )}

        {/* TAB 5: DAILY PANCHANG */}
        {activeTab === 'panchang' && (
          <section className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
            <div className="text-center mb-6">
              <h2 className="font-serif text-3xl font-light text-white mb-1">Spatial Vedic Panchang</h2>
              <p className="text-xs text-[#8E8A9F]">Live astronomical ephemeris for auspicious and inauspicious muhurtas.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl space-y-4">
                <h3 className="font-serif text-lg text-[#F1CE73]">Tithi & Planetary Coordinates</h3>
                <div className="space-y-3 text-sm">
                  <p className="flex justify-between border-b border-white/5 py-1.5"><span className="text-[#8E8A9F]">Nakshatra</span><span className="text-white font-medium">Rohini</span></p>
                  <p className="flex justify-between border-b border-white/5 py-1.5"><span className="text-[#8E8A9F]">Tithi</span><span className="text-white font-medium">Shukla Dashami</span></p>
                  <p className="flex justify-between border-b border-white/5 py-1.5"><span className="text-[#8E8A9F]">Yoga</span><span className="text-white font-medium">Brahma Yoga</span></p>
                  <p className="flex justify-between border-b border-white/5 py-1.5"><span className="text-[#8E8A9F]">Karana</span><span className="text-white font-medium">Gara</span></p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl space-y-4">
                <h3 className="font-serif text-lg text-[#F1CE73]">Muhurta Windows</h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-white/[0.04] rounded-2xl border border-emerald-500/20">
                    <span className="text-xs text-emerald-400 font-semibold block">Abhijit Muhurta (Auspicious)</span>
                    <span className="text-white">11:45 AM – 12:35 PM</span>
                  </div>
                  <div className="p-3 bg-white/[0.04] rounded-2xl border border-rose-500/20">
                    <span className="text-xs text-rose-400 font-semibold block">Rahu Kalam (Avoid)</span>
                    <span className="text-white">04:30 PM – 06:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

      </div>
    </main>
  );
}
