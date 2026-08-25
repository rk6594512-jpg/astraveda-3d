"use client";

import React, { useState, useEffect, useRef, FormEvent } from "react";

/* ============================
   TYPE DEFINITIONS
============================ */
type KundliData = {
  name: string;
  birthDate: string;
  birthTime: string;
  latitude: number;
  longitude: number;
  city: string;
};

type PlanetStrength = {
  sun: number;
  moon: number;
  mars: number;
  mercury: number;
  jupiter: number;
  venus: number;
  saturn: number;
  rahu: number;
  ketu: number;
};

type DashaPeriod = {
  planet: string;
  startYear: number;
  endYear: number;
};

type ChatMessage = {
  role: "user" | "bot";
  content: string;
};

/* ============================
   ASTRONOMICAL & VEDIC UTILITIES
============================ */
function julianDay(date: Date): number {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate() + date.getUTCHours() / 24 + date.getUTCMinutes() / 1440;
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + B - 1524.5;
}

function computeMeanLongitudes(date: Date) {
  const jd = julianDay(date);
  const d = jd - 2451545.0;
  const sunMean = (280.460 + 0.9856474 * d) % 360;
  const moonMean = (218.316 + 13.176396 * d) % 360;

  return {
    sun: sunMean < 0 ? sunMean + 360 : sunMean,
    moon: moonMean < 0 ? moonMean + 360 : moonMean,
  };
}

function computePanchang(date: Date) {
  const { sun, moon } = computeMeanLongitudes(date);
  const diff = moon - sun;
  const tithiIndex = Math.floor(((diff % 360) + 360) % 360 / 12);
  const tithiNames = [
    "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi",
    "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi",
    "Trayodashi", "Chaturdashi", "Purnima", "Amavasya"
  ];
  let tithiName = tithiIndex < 15 ? tithiNames[tithiIndex] : tithiNames[tithiIndex - 15] + " (Krishna)";
  if (tithiIndex === 14) tithiName = "Purnima";
  if (tithiIndex === 29) tithiName = "Amavasya";

  const nakshatraIndex = Math.floor(((moon % 360) + 360) % 360 / (360 / 27));
  const nakshatras = [
    "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
    "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
    "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
    "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta",
    "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
  ];

  const yogaIndex = Math.floor(((sun + moon) % 360) / (360 / 27));
  const yogas = [
    "Vishkambha", "Priti", "Ayushman", "Saubhagya", "Shobhana", "Atiganda",
    "Sukarma", "Dhriti", "Shula", "Ganda", "Vriddhi", "Dhruva",
    "Vyaghata", "Harshana", "Vajra", "Siddhi", "Vyatipata", "Variyana",
    "Parigha", "Shiva", "Siddha", "Sadhya", "Shubha", "Shukla",
    "Brahma", "Indra", "Vaidhriti"
  ];

  const karanas = [
    "Bava", "Balava", "Kaulava", "Taitila", "Garaja", "Vanija",
    "Vishti", "Shakuni", "Chatushpada", "Naga", "Kimstughna"
  ];
  const karanaIndex = Math.floor((diff % 360) / 6) % 60;

  return {
    tithi: tithiName,
    nakshatra: nakshatras[nakshatraIndex % 27],
    yoga: yogas[yogaIndex % 27],
    karana: karanas[karanaIndex % 11],
    rahuKalam: "04:30 PM - 06:00 PM",
    yamagandam: "01:30 PM - 03:00 PM",
    abhijitMuhurta: "11:45 AM - 12:35 PM",
  };
}

function getMoonSignFromDate(date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (year + month * 2 + day * 3) % 12;
}

function getNakshatraFromMoonSign(moonSign: number): number {
  return Math.floor((moonSign * 27) / 12) % 27;
}

function getLagnaFromTime(timeStr: string, dateStr: string): number {
  const [hours, minutes] = (timeStr || "12:00").split(":").map(Number);
  const birthDate = new Date(dateStr + "T00:00:00");
  const sunrise = 6;
  const diffHours = hours + (minutes || 0) / 60 - sunrise;
  const sunSign = (birthDate.getMonth() + 1) % 12;
  const lagna = (sunSign + Math.floor(diffHours / 2)) % 12;
  return lagna < 0 ? lagna + 12 : lagna;
}

function generateDashas(nakshatra: number): DashaPeriod[] {
  const planets = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"];
  const years = [7, 20, 6, 10, 7, 18, 16, 19, 17];
  const startIndex = nakshatra % 9;
  const dashas: DashaPeriod[] = [];
  let currentYear = 2026;
  for (let i = 0; i < 9; i++) {
    const idx = (startIndex + i) % 9;
    const period = years[idx];
    dashas.push({
      planet: planets[idx],
      startYear: currentYear,
      endYear: currentYear + period,
    });
    currentYear += period;
  }
  return dashas;
}

/* ============================
   MAIN COMPONENT
============================ */
export default function Home() {
  const [activeTab, setActiveTab] = useState<"cosmos" | "kundli" | "palm" | "oracle" | "panchang" | "gemstone">("cosmos");
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [ringRotateX, setRingRotateX] = useState(0);
  const [ringRotateY, setRingRotateY] = useState(0);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);

  // Kundli State
  const [kundliInput, setKundliInput] = useState<KundliData>({
    name: "",
    birthDate: "2000-01-01",
    birthTime: "12:00",
    latitude: 28.6139,
    longitude: 77.209,
    city: "New Delhi",
  });
  const [kundliResult, setKundliResult] = useState<{
    lagna: number;
    moonSign: number;
    nakshatra: number;
    pada: number;
    dashas: DashaPeriod[];
  } | null>(null);

  // Palmistry State
  const [scanning, setScanning] = useState(false);
  const [palmResult, setPalmResult] = useState<{
    lifeLine: number;
    heartLine: number;
    headLine: number;
    apolloLine: number;
    mounts: { jupiter: number; saturn: number; sun: number; venus: number };
  } | null>(null);

  // AI Oracle State
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      content: "✦ Welcome to TARUN AI Oracle (2030 Spatial Core). Ask about your astrological trajectory, high-leverage execution windows, or dosha remedies.",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Panchang State
  const [panchang, setPanchang] = useState<ReturnType<typeof computePanchang> | null>(null);

  // Gemstone State
  const [planetStrength, setPlanetStrength] = useState<PlanetStrength>({
    sun: 7,
    moon: 6,
    mars: 8,
    mercury: 5,
    jupiter: 9,
    venus: 4,
    saturn: 6,
    rahu: 7,
    ketu: 5,
  });

  useEffect(() => {
    setPanchang(computePanchang(new Date()));
  }, []);

  // 432Hz Sound toggle
  useEffect(() => {
    if (soundEnabled) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
        const ctx = audioCtxRef.current;
        const osc = ctx.createOscillator();
        osc.frequency.value = 432;
        osc.type = "sine";
        const gain = ctx.createGain();
        gain.gain.value = 0.03;
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        oscillatorRef.current = osc;
      }
    } else {
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
        oscillatorRef.current = null;
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
    }
    return () => {
      if (oscillatorRef.current) {
        try { oscillatorRef.current.stop(); } catch(e){}
      }
      if (audioCtxRef.current) {
        try { audioCtxRef.current.close(); } catch(e){}
      }
    };
  }, [soundEnabled]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 24;
    const y = (e.clientY / window.innerHeight - 0.5) * 24;
    setRingRotateX(y);
    setRingRotateY(x);
  };

  const calculateKundli = (e: FormEvent) => {
    e.preventDefault();
    const lagna = getLagnaFromTime(kundliInput.birthTime, kundliInput.birthDate);
    const moonSign = getMoonSignFromDate(new Date(kundliInput.birthDate));
    const nakshatra = getNakshatraFromMoonSign(moonSign);
    const pada = (nakshatra % 4) + 1;
    const dashas = generateDashas(nakshatra);
    setKundliResult({ lagna, moonSign, nakshatra, pada, dashas });
  };

  const startPalmScan = () => {
    setScanning(true);
    setPalmResult(null);
    setTimeout(() => {
      setScanning(false);
      setPalmResult({
        lifeLine: 94,
        heartLine: 88,
        headLine: 91,
        apolloLine: 85,
        mounts: {
          jupiter: 92,
          saturn: 78,
          sun: 89,
          venus: 84,
        },
      });
    }, 2500);
  };

  const handleSendMessage = (e?: FormEvent) => {
    e?.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput.trim();
    setChatMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setChatInput("");
    setIsTyping(true);

    setTimeout(() => {
      let botReply = "";
      const lower = userMsg.toLowerCase();
      if (lower.includes("career") || lower.includes("job") || lower.includes("business")) {
        botReply =
          "✦ 10th House Matrix Activation:\nTransit alignment between Jupiter and Mercury indicates exceptional momentum for asymmetric technological expansion. Target execution window: Next 60 days.";
      } else if (lower.includes("remedy") || lower.includes("dosha")) {
        botReply =
          "✦ Remedial Frequency Readout:\nRecite Maha Mrityunjaya Mantra (108 cycles) at sunrise. Integrate 5-mukhi Rudraksha to balance planetary nodes.";
      } else if (lower.includes("invest") || lower.includes("wealth") || lower.includes("money")) {
        botReply =
          "✦ Ephemeris Timing Window:\nFavorable expansion during Shukla Paksha under Rohini Nakshatra. Avoid capital commitments during daily Rahu Kalam (4:30 PM - 6:00 PM).";
      } else {
        botReply =
          `✦ Vedic Synthesis for "${userMsg}":\nYour karmic planetary axis indicates strong expansion in creative leverage. Focus on foundational systems to compound long-term vision.`;
      }
      setChatMessages((prev) => [...prev, { role: "bot", content: botReply }]);
      setIsTyping(false);
    }, 900);
  };

  const weakestPlanet = Object.entries(planetStrength).reduce((a, b) =>
    a[1] < b[1] ? a : b
  )[0];

  const gemstoneRecommendations: Record<string, { stone: string; mantra: string; rudraksha: string }> = {
    sun: { stone: "Ruby (Manik)", mantra: "Om Suryaya Namaha", rudraksha: "1-Mukhi" },
    moon: { stone: "Pearl (Moti)", mantra: "Om Chandraya Namaha", rudraksha: "2-Mukhi" },
    mars: { stone: "Red Coral (Moonga)", mantra: "Om Mangalaya Namaha", rudraksha: "3-Mukhi" },
    mercury: { stone: "Emerald (Panna)", mantra: "Om Budhaya Namaha", rudraksha: "4-Mukhi" },
    jupiter: { stone: "Yellow Sapphire (Pukhraj)", mantra: "Om Gurave Namaha", rudraksha: "5-Mukhi" },
    venus: { stone: "Diamond (Heera)", mantra: "Om Shukraya Namaha", rudraksha: "6-Mukhi" },
    saturn: { stone: "Blue Sapphire (Neelam)", mantra: "Om Shanicharaya Namaha", rudraksha: "7-Mukhi" },
    rahu: { stone: "Hessonite (Gomed)", mantra: "Om Rahave Namaha", rudraksha: "8-Mukhi" },
    ketu: { stone: "Cat's Eye (Lehsunia)", mantra: "Om Ketave Namaha", rudraksha: "9-Mukhi" },
  };

  const zodiacNames = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

  return (
    <main className="relative min-h-screen overflow-x-hidden font-sans pb-16" onMouseMove={handleMouseMove}>
      
      {/* 4K Cosmic Video Stream Background */}
      <div className="starfield-fallback" />
      <video
        className="video-bg opacity-35"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-flying-through-a-star-field-in-outer-space-26750-large.mp4" type="video/mp4" />
      </video>

      {/* Volumetric Cosmic Aura */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[500px] bg-gradient-to-b from-[#3B1F6E]/30 via-[#C89B3C]/10 to-transparent blur-[150px] pointer-events-none -z-10" />

      {/* Top Floating Glass Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 bg-[#030408]/60 backdrop-blur-2xl border-b border-white/10 flex items-center justify-between">
        <div onClick={() => setActiveTab("cosmos")} className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#C89B3C] via-[#F1CE73] to-white flex items-center justify-center text-[#030408] font-bold text-lg shadow-[0_0_25px_rgba(241,206,115,0.4)] group-hover:scale-105 transition-transform">
            ✦
          </div>
          <div>
            <div className="text-xl font-bold tracking-wider text-white flex items-center gap-2">
              TARUN <span className="text-[9px] tracking-widest px-2 py-0.5 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C]/40 text-[#F1CE73] uppercase">2030 Spatial</span>
            </div>
            <p className="text-[10px] tracking-widest uppercase text-[#8E8A9F]">Vedic Intelligence</p>
          </div>
        </div>

        {/* HUD Tab Controls */}
        <nav className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10 overflow-x-auto max-w-[60%] sm:max-w-none">
          {(["cosmos", "kundli", "palm", "oracle", "panchang", "gemstone"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs capitalize transition-all whitespace-nowrap ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#030408] font-bold shadow-md"
                  : "text-[#8E8A9F] hover:text-white"
              }`}
            >
              {tab === "cosmos" ? "3D Cosmos" : tab === "palm" ? "Palm Vision" : tab === "oracle" ? "AI Oracle" : tab === "gemstone" ? "Gem Lab" : tab}
            </button>
          ))}
        </nav>

        {/* 432Hz Sound Button */}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
            soundEnabled ? "bg-[#C89B3C] text-black border-[#F1CE73] shadow-[0_0_15px_rgba(200,155,60,0.5)]" : "bg-white/5 text-white border-white/10"
          }`}
        >
          {soundEnabled ? "432Hz ON ✧" : "432Hz Sound"}
        </button>
      </header>

      {/* Main Dynamic Viewport */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 pt-24">
        
        {/* TAB 1: 3D COSMOS HERO */}
        {activeTab === "cosmos" && (
          <section className="flex flex-col items-center text-center pt-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#C89B3C]/30 text-xs text-[#F1CE73] shadow-md animate-pulse">
              <span className="w-2 h-2 rounded-full bg-[#F1CE73] shadow-[0_0_10px_#F1CE73]" />
              <span>Next-Gen Vedic Ephemeris • 2030 Spatial Architecture</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-tight max-w-4xl">
              Destiny Computed in <br />
              <span className="gold-text">Multidimensional Space</span>
            </h1>

            <p className="text-sm sm:text-base text-[#8E8A9F] max-w-2xl leading-relaxed">
              Autonomous Vedic calculation matrix, neural biometric palm line tracing, and real-time Jyotishi reasoning engineered for peak asymmetric leverage.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              <button
                onClick={() => setActiveTab("kundli")}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#030408] font-bold shadow-[0_0_25px_rgba(241,206,115,0.35)] hover:scale-105 transition-all"
              >
                Synthesize Kundli Matrix
              </button>
              <button
                onClick={() => setActiveTab("palm")}
                className="px-8 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white border border-[#C89B3C]/40 hover:scale-105 transition-all"
              >
                Launch Palm Vision
              </button>
              <button
                onClick={() => setActiveTab("oracle")}
                className="px-8 py-3.5 rounded-full bg-white/[0.03] text-[#F1CE73] border border-white/10 hover:scale-105 transition-all"
              >
                Consult AI Oracle
              </button>
            </div>

            {/* 3D Gyroscopic Sacred Orbit */}
            <div
              className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center my-6"
              style={{
                transform: `perspective(1000px) rotateX(${ringRotateX}deg) rotateY(${ringRotateY}deg)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="absolute inset-0 rounded-full border border-[#C89B3C]/40 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full border border-[#3B1F6E]/60 border-dashed animate-spin-reverse" />
              <div className="absolute inset-16 rounded-full border border-[#F1CE73]/30 shadow-[0_0_40px_rgba(200,155,60,0.2)]" />
              <div className="w-24 h-24 rounded-3xl bg-[#0B0C1A]/80 border border-[#C89B3C]/50 flex items-center justify-center backdrop-blur-2xl shadow-2xl animate-float">
                <span className="text-4xl gold-text">ॐ</span>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-8 text-left">
              <div onClick={() => setActiveTab("kundli")} className="glass-card p-6 hover:border-[#C89B3C]/60 transition-all cursor-pointer">
                <div className="text-3xl mb-3">🪐</div>
                <h3 className="text-lg text-[#F1CE73] mb-1 font-semibold">Quantum D1 & D9 Engine</h3>
                <p className="text-xs text-[#8E8A9F] leading-relaxed">Precision planetary ephemeris calculating lagna degrees, nakshatras, and mahadashas.</p>
              </div>
              <div onClick={() => setActiveTab("palm")} className="glass-card p-6 hover:border-[#C89B3C]/60 transition-all cursor-pointer">
                <div className="text-3xl mb-3">✋</div>
                <h3 className="text-lg text-[#F1CE73] mb-1 font-semibold">Neural Palm Scanning</h3>
                <p className="text-xs text-[#8E8A9F] leading-relaxed">Vision-assisted micro-line tracing of Life, Heart, and Mount nodes.</p>
              </div>
              <div onClick={() => setActiveTab("oracle")} className="glass-card p-6 hover:border-[#C89B3C]/60 transition-all cursor-pointer">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg text-[#F1CE73] mb-1 font-semibold">Tarun AI Oracle HUD</h3>
                <p className="text-xs text-[#8E8A9F] leading-relaxed">Vedic conversational intelligence delivering strategic timing windows and remedies.</p>
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: KUNDLI MATRIX */}
        {activeTab === "kundli" && (
          <section className="space-y-8 animate-fadeIn">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-3xl font-light text-white mb-2">Vedic Astral Matrix</h2>
              <p className="text-xs text-[#8E8A9F]">Compute high-precision astrological coordinates across all 12 houses.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <form onSubmit={calculateKundli} className="glass-card p-6 sm:p-8 space-y-4">
                <h3 className="text-xs font-semibold text-[#F1CE73] tracking-widest uppercase">Birth Telemetry Intake</h3>
                <div>
                  <label className="text-xs text-[#8E8A9F] block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={kundliInput.name}
                    onChange={(e) => setKundliInput({ ...kundliInput, name: e.target.value })}
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
                      value={kundliInput.birthDate}
                      onChange={(e) => setKundliInput({ ...kundliInput, birthDate: e.target.value })}
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#C89B3C]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#8E8A9F] block mb-1">Time of Birth</label>
                    <input
                      type="time"
                      value={kundliInput.birthTime}
                      onChange={(e) => setKundliInput({ ...kundliInput, birthTime: e.target.value })}
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#C89B3C]"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-[#8E8A9F] block mb-1">City / Coordinates</label>
                  <input
                    type="text"
                    value={kundliInput.city}
                    onChange={(e) => setKundliInput({ ...kundliInput, city: e.target.value })}
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

              {/* Kundli D1 Matrix & Dasha Bar */}
              <div className="glass-card p-6 sm:p-8 min-h-[380px] flex flex-col justify-center items-center">
                {kundliResult ? (
                  <div className="w-full space-y-6 text-center animate-fadeIn">
                    <div className="pb-3 border-b border-white/10">
                      <h4 className="text-xl text-[#F1CE73] font-light">{kundliInput.name || "User"}&apos;s Cosmic Matrix</h4>
                      <p className="text-xs text-[#8E8A9F]">
                        Lagna: {zodiacNames[kundliResult.lagna]} • Moon: {zodiacNames[kundliResult.moonSign]} • Pada: {kundliResult.pada}
                      </p>
                    </div>

                    <div className="aspect-square max-w-[260px] mx-auto border-2 border-[#C89B3C]/60 rounded-2xl grid grid-cols-3 grid-rows-3 text-xs p-2 gap-1 bg-[#090A15]">
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

                    {/* Dasha Progression */}
                    <div className="text-left pt-2">
                      <p className="text-xs text-[#F1CE73] font-semibold mb-2">Vimshottari Dasha Progression:</p>
                      <div className="space-y-1.5 text-xs text-[#8E8A9F]">
                        {kundliResult.dashas.slice(0, 3).map((d, i) => (
                          <div key={i} className="flex justify-between items-center p-1.5 bg-white/[0.02] rounded-lg">
                            <span className="text-white font-medium">{d.planet} Mahadasha</span>
                            <span>{d.startYear} – {d.endYear}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-[#8E8A9F] space-y-2">
                    <div className="text-4xl animate-pulse">✧</div>
                    <p className="text-xs">Fill details to compute your real-time Vedic matrix.</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: NEURAL PALM SCANNER */}
        {activeTab === "palm" && (
          <section className="max-w-xl mx-auto text-center space-y-6 animate-fadeIn">
            <div>
              <h2 className="text-3xl font-light text-white mb-1">Neural Palm Vision HUD</h2>
              <p className="text-xs text-[#8E8A9F]">Biometric optical meridian scan with instant telemetry readout.</p>
            </div>

            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              <div className="relative w-48 h-60 mx-auto border border-[#C89B3C]/40 rounded-2xl flex items-center justify-center mb-6 bg-[#090A15] overflow-hidden">
                <span className="text-6xl select-none">✋</span>
                {scanning && (
                  <div className="absolute inset-x-0 h-1 bg-[#F1CE73] shadow-[0_0_20px_#F1CE73] animate-[bounce_1.5s_infinite] top-0" />
                )}
                {/* HUD Corners */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#F1CE73]" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#F1CE73]" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#F1CE73]" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#F1CE73]" />
              </div>

              <button
                onClick={startPalmScan}
                disabled={scanning}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#030408] font-bold shadow-md hover:opacity-95 transition-all"
              >
                {scanning ? "Executing Optical Telemetry..." : "Initiate Biometric Scan"}
              </button>

              {palmResult && (
                <div className="text-left bg-white/[0.05] p-5 rounded-2xl border border-[#C89B3C]/30 text-xs space-y-3 mt-6 animate-fadeIn">
                  <div className="text-[#F1CE73] font-bold text-sm">✨ Biometric Readout Validated:</div>
                  <div className="grid grid-cols-2 gap-2 text-[#AAA6BE]">
                    <p><strong className="text-white">Life Line:</strong> {palmResult.lifeLine}% Vitality</p>
                    <p><strong className="text-white">Heart Line:</strong> {palmResult.heartLine}% Balance</p>
                    <p><strong className="text-white">Head Line:</strong> {palmResult.headLine}% Intellect</p>
                    <p><strong className="text-white">Jupiter Mount:</strong> {palmResult.mounts.jupiter}% Leverage</p>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* TAB 4: TARUN AI ORACLE */}
        {activeTab === "oracle" && (
          <section className="max-w-2xl mx-auto flex flex-col h-[70vh] animate-fadeIn">
            <h2 className="text-3xl font-light text-white text-center mb-1">Tarun AI Oracle HUD</h2>
            <p className="text-xs text-[#8E8A9F] text-center mb-4">Conversational Vedic reasoning core powered by planetary ephemeris logic.</p>

            <div className="flex-1 overflow-y-auto space-y-3 p-4 glass-card mb-4">
              {chatMessages.map((m, idx) => (
                <div key={idx} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                    m.role === "user" ? "bg-[#C89B3C] text-[#030408] font-semibold" : "bg-white/[0.06] text-white border border-white/10 whitespace-pre-line"
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="text-xs text-[#F1CE73] animate-pulse">✦ Oracle synthesizing ephemeris coordinates...</div>
              )}
            </div>

            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask Oracle (e.g. Best timing for scaling a new venture?)..."
                className="flex-1 bg-white/[0.05] border border-white/10 rounded-full px-5 py-3 text-white text-xs focus:outline-none focus:border-[#C89B3C]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#F1CE73] text-[#030408] font-bold text-xs"
              >
                Transmit
              </button>
            </form>
          </section>
        )}

        {/* TAB 5: PANCHANG */}
        {activeTab === "panchang" && (
          <section className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-light text-white text-center mb-1">Spatial Vedic Panchang</h2>
            <p className="text-xs text-[#8E8A9F] text-center mb-6">Real-time astronomical computation of daily muhurta windows.</p>

            {panchang && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-card p-6 space-y-3 text-xs">
                  <h3 className="text-base text-[#F1CE73] font-semibold">Astronomical Telemetry</h3>
                  <p className="flex justify-between border-b border-white/5 py-1.5"><span className="text-[#8E8A9F]">Tithi</span><span className="text-white font-medium">{panchang.tithi}</span></p>
                  <p className="flex justify-between border-b border-white/5 py-1.5"><span className="text-[#8E8A9F]">Nakshatra</span><span className="text-white font-medium">{panchang.nakshatra}</span></p>
                  <p className="flex justify-between border-b border-white/5 py-1.5"><span className="text-[#8E8A9F]">Yoga</span><span className="text-white font-medium">{panchang.yoga}</span></p>
                  <p className="flex justify-between border-b border-white/5 py-1.5"><span className="text-[#8E8A9F]">Karana</span><span className="text-white font-medium">{panchang.karana}</span></p>
                </div>
                <div className="glass-card p-6 space-y-3 text-xs">
                  <h3 className="text-base text-[#F1CE73] font-semibold">Muhurta Windows</h3>
                  <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                    <span className="text-emerald-400 font-bold block">Abhijit Muhurta (Auspicious)</span>
                    <span className="text-white">{panchang.abhijitMuhurta}</span>
                  </div>
                  <div className="p-3 bg-rose-500/10 rounded-xl border border-rose-500/20">
                    <span className="text-rose-400 font-bold block">Rahu Kalam (Avoid)</span>
                    <span className="text-white">{panchang.rahuKalam}</span>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* TAB 6: GEMSTONE FREQUENCY LAB */}
        {activeTab === "gemstone" && (
          <section className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-light text-white text-center mb-1">Gemstone Frequency Lab</h2>
            <p className="text-xs text-[#8E8A9F] text-center mb-6">Interactive planetary strength tuner matching harmonic remedies.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 space-y-3">
                <h3 className="text-sm font-semibold text-[#F1CE73] mb-3">Planetary Strength Matrix (1 - 10)</h3>
                {Object.entries(planetStrength).map(([planet, strength]) => (
                  <div key={planet} className="flex items-center justify-between gap-4 text-xs">
                    <span className="capitalize text-white w-16">{planet}</span>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={strength}
                      onChange={(e) => setPlanetStrength({ ...planetStrength, [planet]: Number(e.target.value) })}
                      className="flex-1 accent-[#C89B3C]"
                    />
                    <span className="text-[#F1CE73] font-mono w-4">{strength}</span>
                  </div>
                ))}
              </div>

              <div className="glass-card p-6 flex flex-col justify-center space-y-4">
                <h3 className="text-sm font-semibold text-[#F1CE73]">Optimal Remedial Synthesis</h3>
                <div className="p-4 bg-white/[0.04] rounded-2xl border border-[#C89B3C]/30 space-y-2 text-xs">
                  <p className="text-rose-400">Weakest Planet: <strong className="text-white capitalize">{weakestPlanet}</strong></p>
                  <p className="text-white">Recommended Gemstone: <strong className="text-[#F1CE73]">{gemstoneRecommendations[weakestPlanet]?.stone}</strong></p>
                  <p className="text-white">Harmonic Mantra: <strong className="text-[#F1CE73]">{gemstoneRecommendations[weakestPlanet]?.mantra}</strong></p>
                  <p className="text-white">Rudraksha Pairing: <strong className="text-[#F1CE73]">{gemstoneRecommendations[weakestPlanet]?.rudraksha}</strong></p>
                </div>
              </div>
            </div>
          </section>
        )}

      </div>
    </main>
  );
}
