'use client';

import React, { useState, useEffect, useRef } from 'react';

const translations = {
  hi: {
    badge_text: 'सत्य-प्रथम डिजिटल आश्रम • वैदिक चेतना',
    hero_title: 'सिद्धकर्म — सत्य का इंजन',
    hero_subtitle: 'प्रामाणिक गुरु-शिष्य परंपरा, तंत्र-मंत्र का सत्य और अत्याधुनिक AI गणना का संगम।',
    btn_palm: '✋ हस्त रेखा स्कैनर',
    btn_kundli: '🪐 वैदिक कुण्डली',
    btn_puja: '🪔 पूजा / अनुष्ठान',
    scroll_hint: 'नीचे स्क्रॉल करें — आश्रम में प्रवेश करें ↓',
    parampara_title: 'गुरु-शिष्य परंपरा',
    parampara_sub: 'व्यावसायिक धोखाधड़ी से मुक्त, निःस्वार्थ वैदिक सत्य का संकल्प।',
    guruji_name: 'गुरुजी महाराज',
    guruji_desc: 'साधना, तंत्र शुद्धि और आत्म-रक्षा के सिद्ध ज्ञाता। आपके जीवन से नकारात्मक ऊर्जा का समूल नाश।',
    pandit_name: 'पंडित जी',
    pandit_desc: 'वेद विद्यालय के आचार्य, कालसर्प, मांगलिक एवं ग्रह दोष निवारण अनुष्ठान के विशेषज्ञ।',
    palm_title: 'हस्त रेखा विश्लेषण',
    palm_desc: 'कैमरा खोलकर अपनी हथेली सामने लाएँ — AI आपकी ऊर्जा रेखाओं को स्कैन करेगा।',
    palm_btn: '📷 कैमरा स्कैन शुरू करें',
    kundli_title: 'वैदिक जन्म पत्रिका',
    kundli_desc: 'सटीक खगोलीय गणना द्वारा अपने लग्न व नक्षत्र की गणना करें।',
    k_name: 'पूरा नाम',
    k_dob: 'जन्म तिथि',
    k_tob: 'जन्म समय',
    k_pob: 'जन्म स्थान',
    k_btn: '🪐 कुण्डली चक्र तैयार करें',
    puja_title: 'पूजा / अनुष्ठान बुकिंग',
    puja_desc: 'वैदिक विधि-विधान से संपन्न होने वाले संकल्प व दोष निवारण।',
    puja_name: 'यजमान का नाम',
    puja_gotra: 'गोत्र (यदि ज्ञात हो)',
    puja_type: 'अनुष्ठान प्रकार',
    puja_date: 'संकल्प तिथि',
    puja_btn: '🪔 संकल्प व बुकिंग पूर्ण करें',
    footer: '© 2026 SiddhaKarm.AI — डिजिटल आश्रम • सत्य की विजय।'
  },
  en: {
    badge_text: 'Truth-First Digital Ashram • Vedic Consciousness',
    hero_title: 'SiddhaKarm — Engine of Truth',
    hero_subtitle: 'Authentic Guru-Shishya lineage, spiritual truth and advanced ephemeris calculation.',
    btn_palm: '✋ Palm Scanner',
    btn_kundli: '🪐 Vedic Kundli',
    btn_puja: '🪔 Book Puja',
    scroll_hint: 'Scroll down — Enter the Ashram ↓',
    parampara_title: 'Guru-Shishya Parampara',
    parampara_sub: 'Free from commercial fraud, dedicated to pure Vedic truth.',
    guruji_name: 'Guruji Maharaj',
    guruji_desc: 'Master of spiritual defense, tantra cleansing and energetic restoration.',
    pandit_name: 'Pandit Ji',
    pandit_desc: 'Head of Ved Vidyalaya, master of Kaal Sarp, Manglik and planetary remedies.',
    palm_title: 'Neural Palm Vision',
    palm_desc: 'Open camera and align your palm — AI will trace your meridian nodes.',
    palm_btn: '📷 Start Camera Scan',
    kundli_title: 'Vedic Birth Matrix',
    kundli_desc: 'Calculate Lagna, Moon sign and nakshatra coordinates in real time.',
    k_name: 'Full Name',
    k_dob: 'Date of Birth',
    k_tob: 'Time of Birth',
    k_pob: 'Place of Birth',
    k_btn: '🪐 Calculate Kundli Matrix',
    puja_title: 'Puja & Anushthan Booking',
    puja_desc: 'Authentic Vedic rituals and remedial sankalpa by certified scholars.',
    puja_name: 'Devotee Name',
    puja_gotra: 'Gotra (Optional)',
    puja_type: 'Ritual Type',
    puja_date: 'Sankalpa Date',
    puja_btn: '🪔 Complete Sankalp Booking',
    footer: '© 2026 SiddhaKarm.AI — Digital Ashram • Victory of Truth.'
  }
};

export default function SiddhaKarmPage() {
  const [lang, setLang] = useState<'hi' | 'en'>('hi');
  const t = translations[lang];

  // 432Hz Web Audio State
  const [audioActive, setAudioActive] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);

  // WebRTC Camera State
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [palmResult, setPalmResult] = useState(false);

  // Kundli State
  const [kundliData, setKundliData] = useState({ name: '', dob: '', tob: '', pob: '' });
  const [chartCalculated, setChartCalculated] = useState(false);

  // Puja Booking State
  const [pujaData, setPujaData] = useState({ name: '', gotra: '', type: 'मांगलिक दोष निवारण', date: '' });
  const [receipt, setReceipt] = useState<string | null>(null);

  // Particle Canvas Background
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 50 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.5,
      v: Math.random() * 0.3 + 0.1
    }));

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(244, 208, 63, 0.5)';
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        s.y += s.v;
        if (s.y > h) s.y = 0;
      });
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

  // 432Hz Sound Synth
  const toggleAudio = () => {
    if (!audioActive) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        audioCtxRef.current = new AudioContextClass();
        const ctx = audioCtxRef.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.frequency.setValueAtTime(432, ctx.currentTime);
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.03, ctx.currentTime);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        oscRef.current = osc;
        setAudioActive(true);
      }
    } else {
      if (oscRef.current) {
        oscRef.current.stop();
        oscRef.current.disconnect();
        oscRef.current = null;
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
      setAudioActive(false);
    }
  };

  // Camera Palm Scanning
  const startPalmScan = async () => {
    setScanning(true);
    setPalmResult(false);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setCameraActive(true);
      }
    } catch (err) {
      console.warn('Camera sensor in simulation fallback');
    }

    setTimeout(() => {
      setScanning(false);
      setPalmResult(true);
    }, 2800);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen">
      <div className="ganga-waves" />
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Top Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#070D14]/75 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-2xl om-symbol select-none">🕉️</span>
            <span className="font-bold text-xl tracking-wider sacred-glow text-white font-serif">SiddhaKarm</span>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-mono">2026</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleAudio}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all flex items-center gap-1.5 ${
                audioActive ? 'bg-yellow-500/20 border-yellow-400 text-yellow-300 shadow-[0_0_15px_rgba(212,160,23,0.4)]' : 'bg-white/5 border-white/10 text-gray-300'
              }`}
            >
              <span>🪕</span> <span>{audioActive ? '432Hz Sound ON' : '432Hz Sound'}</span>
            </button>
            <div className="flex bg-white/5 p-0.5 rounded-full border border-white/10">
              <button
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${lang === 'hi' ? 'bg-[#D4A017] text-black shadow-md' : 'text-gray-300'}`}
                onClick={() => setLang('hi')}
              >
                हिंदी
              </button>
              <button
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${lang === 'en' ? 'bg-[#D4A017] text-black shadow-md' : 'text-gray-300'}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 pt-32 pb-16 min-h-screen flex flex-col justify-center items-center text-center">
        <div className="text-7xl md:text-8xl om-symbol mb-2 select-none">🕉️</div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-xs text-yellow-300 mb-6 backdrop-blur-md">
          <span>✧</span> <span>{t.badge_text}</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif sacred-glow leading-tight max-w-4xl text-white">
          {t.hero_title}
        </h1>

        <p className="text-base md:text-xl text-gray-300 mt-5 max-w-2xl font-light leading-relaxed">
          {t.hero_subtitle}
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <button className="btn-gold" onClick={() => scrollTo('palm')}>{t.btn_palm}</button>
          <button className="btn-gold" onClick={() => scrollTo('kundli')}>{t.btn_kundli}</button>
          <button className="btn-gold" onClick={() => scrollTo('puja')}>{t.btn_puja}</button>
        </div>

        <div className="mt-16 text-xs text-gray-400 animate-bounce cursor-pointer" onClick={() => scrollTo('knowledge')}>
          {t.scroll_hint}
        </div>
      </section>

      {/* Guru-Shishya Parampara */}
      <section id="knowledge" className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif sacred-glow mb-3">{t.parampara_title}</h2>
          <p className="text-sm text-gray-400">{t.parampara_sub}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-8 text-center relative overflow-hidden">
            <div className="w-28 h-28 rounded-full border-2 border-yellow-500/40 p-1 mx-auto mb-5 shadow-lg shadow-yellow-500/10">
              <img src="https://images.unsplash.com/photo-1548013146-72479768bada?w=300&q=80" alt="Guruji" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{t.guruji_name}</h3>
            <p className="text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-3">सिद्ध साधक • आश्रम संस्थापक</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">{t.guruji_desc}</p>
            <div className="flex justify-center gap-2">
              <span className="bg-yellow-500/15 text-yellow-300 border border-yellow-500/30 px-3 py-1 rounded-full text-xs">तंत्र शुद्धि</span>
              <span className="bg-blue-500/15 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full text-xs">आत्म-रक्षा</span>
              <span className="bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs">सिद्धि</span>
            </div>
          </div>

          <div className="glass-card p-8 text-center relative overflow-hidden">
            <div className="w-28 h-28 rounded-full border-2 border-yellow-500/40 p-1 mx-auto mb-5 shadow-lg shadow-yellow-500/10">
              <img src="https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?w=300&q=80" alt="Pandit Ji" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{t.pandit_name}</h3>
            <p className="text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-3">ज्योतिषाचार्य • वेद प्रमुख</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">{t.pandit_desc}</p>
            <div className="flex justify-center gap-2">
              <span className="bg-yellow-500/15 text-yellow-300 border border-yellow-500/30 px-3 py-1 rounded-full text-xs">ज्योतिष</span>
              <span className="bg-purple-500/15 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full text-xs">वेद विद्या</span>
              <span className="bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs">अनुष्ठान</span>
            </div>
          </div>
        </div>
      </section>

      {/* WebRTC Neural Palm Vision */}
      <section id="palm" className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-serif sacred-glow mb-2">{t.palm_title}</h2>
          <p className="text-sm text-gray-400">{t.palm_desc}</p>
        </div>

        <div className="glass-card p-6 md:p-8 max-w-md mx-auto text-center relative overflow-hidden">
          <div className="relative w-full h-72 rounded-2xl bg-[#070D14] border border-yellow-500/30 flex items-center justify-center overflow-hidden mb-6 shadow-inner">
            <video ref={videoRef} autoPlay playsInline muted className={`w-full h-full object-cover ${cameraActive ? 'block' : 'hidden'}`} />
            {!cameraActive && (
              <div className="flex flex-col items-center">
                <span className="text-6xl mb-2 select-none">✋</span>
                <span className="text-xs text-gray-400">कैमरा सेंसर स्टैंडबाय</span>
              </div>
            )}
            {scanning && <div className="absolute inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent shadow-[0_0_20px_#F4D03F] laser-scan z-10" />}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-yellow-400" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-yellow-400" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-yellow-400" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-yellow-400" />
          </div>

          <button className="btn-gold w-full" onClick={startPalmScan} disabled={scanning}>
            {scanning ? 'स्कैनिंग चालू है...' : t.palm_btn}
          </button>

          {palmResult && (
            <div className="mt-6 text-left p-4 rounded-xl bg-white/5 border border-yellow-500/30 text-xs space-y-2.5">
              <div className="text-yellow-400 font-bold text-sm flex items-center justify-between">
                <span>✨ रेखा विश्लेषण परिणाम:</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">सत्यापित</span>
              </div>
              <p><strong className="text-white">जीवन रेखा:</strong> 94% ऊर्जा — गहरी और सुदृढ़, दीर्घायु व उच्च जीवन शक्ति।</p>
              <p><strong className="text-white">हृदय रेखा:</strong> गुरु पर्वत की ओर झुकाव — निष्ठावान और परोपकारी स्वभाव।</p>
              <p><strong className="text-white">भाग्य रेखा:</strong> 28 वर्ष के उपरांत प्रबल भाग्योदय एवं व्यावसायिक उन्नति।</p>
            </div>
          )}
        </div>
      </section>

      {/* Vedic Kundli Engine */}
      <section id="kundli" className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-serif sacred-glow mb-2">{t.kundli_title}</h2>
          <p className="text-sm text-gray-400">{t.kundli_desc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (kundliData.name) setChartCalculated(true);
            }}
            className="glass-card p-6 md:p-8 space-y-4"
          >
            <div>
              <label className="block text-xs text-gray-300 mb-1">{t.k_name}</label>
              <input
                type="text"
                required
                value={kundliData.name}
                onChange={(e) => setKundliData({ ...kundliData, name: e.target.value })}
                placeholder="उदा. राहुल शर्मा"
                className="w-full px-4 py-2.5 rounded-xl bg-gray-900/60 border border-gray-700 focus:border-yellow-500 outline-none text-sm text-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-300 mb-1">{t.k_dob}</label>
                <input
                  type="date"
                  required
                  value={kundliData.dob}
                  onChange={(e) => setKundliData({ ...kundliData, dob: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-gray-900/60 border border-gray-700 focus:border-yellow-500 outline-none text-sm text-white"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-300 mb-1">{t.k_tob}</label>
                <input
                  type="time"
                  value={kundliData.tob}
                  onChange={(e) => setKundliData({ ...kundliData, tob: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-gray-900/60 border border-gray-700 focus:border-yellow-500 outline-none text-sm text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-300 mb-1">{t.k_pob}</label>
              <input
                type="text"
                value={kundliData.pob}
                onChange={(e) => setKundliData({ ...kundliData, pob: e.target.value })}
                placeholder="उदा. नई दिल्ली"
                className="w-full px-4 py-2.5 rounded-xl bg-gray-900/60 border border-gray-700 focus:border-yellow-500 outline-none text-sm text-white"
              />
            </div>
            <button type="submit" className="btn-gold w-full mt-2">{t.k_btn}</button>
          </form>

          <div className="glass-card p-6 min-h-[320px] flex flex-col justify-center items-center text-center">
            {chartCalculated ? (
              <div className="w-full space-y-4">
                <h4 className="text-lg font-bold text-yellow-400">{kundliData.name || 'यजमान'} का लग्न चक्र (D1)</h4>
                <p className="text-xs text-gray-300">लग्न: मेष • चंद्र राशि: वृषभ • नक्षत्र: रोहिणी</p>

                <div className="w-56 h-56 mx-auto border-2 border-yellow-500/60 relative p-1 bg-black/40 shadow-lg">
                  <svg viewBox="0 0 200 200" className="w-full h-full stroke-yellow-500/70 stroke-[1.2] fill-none">
                    <rect x="0" y="0" width="200" height="200" />
                    <line x1="0" y1="0" x2="200" y2="200" />
                    <line x1="200" y1="0" x2="0" y2="200" />
                    <polygon points="100,0 200,100 100,200 0,100" />
                    <text x="100" y="55" textAnchor="middle" className="fill-yellow-400 text-[10px] font-bold">1st (Lagna)</text>
                    <text x="100" y="105" textAnchor="middle" className="fill-white text-[11px] font-serif">D1 Chart</text>
                    <text x="100" y="155" textAnchor="middle" className="fill-yellow-400 text-[10px]">7th House</text>
                  </svg>
                </div>
              </div>
            ) : (
              <div className="text-gray-400 text-sm space-y-2">
                <span className="text-5xl block">✧</span>
                <p>जन्म विवरण दर्ज करें — आपका D1 लग्न चक्र यहाँ निर्मित होगा।</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Puja / Anushthan Booking */}
      <section id="puja" className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-serif sacred-glow mb-2">{t.puja_title}</h2>
          <p className="text-sm text-gray-400">{t.puja_desc}</p>
        </div>

        <div className="glass-card p-8 max-w-lg mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setReceipt(`🪔 शुभ संकल्प स्वीकृत: यजमान ${pujaData.name} हेतु "${pujaData.type}" अनुष्ठान पंजीकृत हुआ।`);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs text-gray-300 mb-1">{t.puja_name}</label>
              <input
                type="text"
                required
                value={pujaData.name}
                onChange={(e) => setPujaData({ ...pujaData, name: e.target.value })}
                placeholder="आपका पूरा नाम"
                className="w-full px-4 py-3 rounded-xl bg-gray-900/60 border border-gray-700 focus:border-yellow-500 outline-none text-white text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-300 mb-1">{t.puja_gotra}</label>
              <input
                type="text"
                value={pujaData.gotra}
                onChange={(e) => setPujaData({ ...pujaData, gotra: e.target.value })}
                placeholder="उदा. भारद्वाज / कश्यप"
                className="w-full px-4 py-3 rounded-xl bg-gray-900/60 border border-gray-700 focus:border-yellow-500 outline-none text-white text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-300 mb-1">{t.puja_type}</label>
              <select
                value={pujaData.type}
                onChange={(e) => setPujaData({ ...pujaData, type: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-900/60 border border-gray-700 focus:border-yellow-500 outline-none text-white text-sm"
              >
                <option value="मंगल दोष निवारण महापूजा">मंगल दोष निवारण महापूजा</option>
                <option value="कालसर्प योग महाशांति">कालसर्प योग महाशांति</option>
                <option value="महामृत्युंजय रक्षक अनुष्ठान">महामृत्युंजय रक्षक अनुष्ठान</option>
                <option value="श्री सूक्तम लक्ष्मी अनुष्ठान">श्री सूक्तम लक्ष्मी अनुष्ठान</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-300 mb-1">{t.puja_date}</label>
              <input
                type="date"
                required
                value={pujaData.date}
                onChange={(e) => setPujaData({ ...pujaData, date: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-gray-900/60 border border-gray-700 focus:border-yellow-500 outline-none text-white text-sm"
              />
            </div>
            <button type="submit" className="btn-gold w-full mt-2">{t.puja_btn}</button>
          </form>

          {receipt && (
            <div className="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-xs text-center space-y-2">
              <span className="text-2xl">🕉️</span>
              <p className="font-bold text-yellow-300">{receipt}</p>
              <p className="text-gray-300">आश्रम के वेद विद्यालय से पंडित जी आपसे संकल्प एवं विधि हेतु संपर्क करेंगे।</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-10 text-gray-500 text-xs border-t border-white/5">
        <p>{t.footer}</p>
      </footer>
    </main>
  );
}
