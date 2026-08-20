"use client"

import React from "react"
import { motion } from "framer-motion"

const zodiacSymbols = [
  "♈", "♉", "♊", "♋", "♌", "♍",
  "♎", "♏", "♐", "♑", "♒", "♓",
]

const planetSymbols = [
  { symbol: "☉", name: "Sun", orbit: 60, speed: 20, size: 3 },
  { symbol: "☽", name: "Moon", orbit: 90, speed: 15, size: 2.5 },
  { symbol: "♂", name: "Mars", orbit: 120, speed: 25, size: 2.2 },
  { symbol: "☿", name: "Mercury", orbit: 150, speed: 12, size: 2 },
  { symbol: "♃", name: "Jupiter", orbit: 180, speed: 30, size: 3.5 },
  { symbol: "♀", name: "Venus", orbit: 210, speed: 18, size: 2.8 },
  { symbol: "♄", name: "Saturn", orbit: 240, speed: 35, size: 2.5 },
  { symbol: "☊", name: "Rahu", orbit: 270, speed: 28, size: 2 },
  { symbol: "☋", name: "Ketu", orbit: 300, speed: 28, size: 2 },
]

export default function ZodiacWheel() {
  return (
    <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-antique/5 via-transparent to-royal-violet/10 blur-3xl" />

      {/* Zodiac ring */}
      <motion.div
        className="absolute inset-4 sm:inset-6 md:inset-8 rounded-full border border-gold-antique/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        {zodiacSymbols.map((symbol, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180)
          const radius = 48 // percentage
          const x = 50 + radius * Math.cos(angle)
          const y = 50 + radius * Math.sin(angle)
          return (
            <span
              key={i}
              className="absolute text-gold-antique/40 text-sm sm:text-base md:text-lg font-serif"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {symbol}
            </span>
          )
        })}
      </motion.div>

      {/* Inner decorative ring */}
      <motion.div
        className="absolute inset-12 sm:inset-16 md:inset-20 rounded-full border border-gold-antique/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />

      {/* Nakshatra dots */}
      <div className="absolute inset-10 sm:inset-14 md:inset-18">
        {Array.from({ length: 27 }).map((_, i) => {
          const angle = (i * (360 / 27) - 90) * (Math.PI / 180)
          const radius = 46
          const x = 50 + radius * Math.cos(angle)
          const y = 50 + radius * Math.sin(angle)
          return (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-gold-bright/30"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          )
        })}
      </div>

      {/* Planetary orbits */}
      {planetSymbols.map((planet, i) => (
        <motion.div
          key={planet.name}
          className="absolute rounded-full border border-gold-antique/5"
          style={{
            inset: `${50 - (planet.orbit / 600) * 50}%`,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: planet.speed,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        >
          <span
            className="absolute text-gold-bright/60 font-serif"
            style={{
              fontSize: `${planet.size * 4 + 8}px`,
              left: "50%",
              top: "0%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {planet.symbol}
          </span>
        </motion.div>
      ))}

      {/* Central sun */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Sun glow layers */}
          <div className="absolute inset-0 rounded-full bg-gold-bright/20 blur-xl" />
          <div className="absolute inset-2 rounded-full bg-gold-antique/30 blur-lg" />
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gold-bright to-gold-antique shadow-glow-gold" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl md:text-4xl">☉</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
