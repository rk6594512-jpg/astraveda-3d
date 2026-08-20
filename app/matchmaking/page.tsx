"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Heart, Star, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/layout/Navbar"

const compatibilityFactors = [
  { name: "Varna", score: 1, max: 1, desc: "Spiritual compatibility" },
  { name: "Vashya", score: 2, max: 2, desc: "Mutual attraction" },
  { name: "Tara", score: 3, max: 3, desc: "Destiny alignment" },
  { name: "Yoni", score: 2, max: 4, desc: "Physical compatibility" },
  { name: "Graha Maitri", score: 5, max: 5, desc: "Mental compatibility" },
  { name: "Gana", score: 4, max: 6, desc: "Temperament match" },
  { name: "Bhakoot", score: 6, max: 7, desc: "Emotional harmony" },
  { name: "Nadi", score: 8, max: 8, desc: "Health compatibility" },
]

export default function MatchmakingPage() {
  const [showResult, setShowResult] = useState(false)

  const totalScore = compatibilityFactors.reduce((sum, f) => sum + f.score, 0)
  const maxScore = compatibilityFactors.reduce((sum, f) => sum + f.max, 0)
  const percentage = Math.round((totalScore / maxScore) * 100)

  return (
    <main className="min-h-screen pt-20 pb-12">
      <Navbar />
      <div className="section-padding max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <span className="label-gold mb-3 block">Kundli Matching</span>
          <h1 className="heading-section mb-3">Find Your Cosmic Match</h1>
          <p className="body-large">Compare birth charts for compatibility analysis using Ashtakoot system.</p>
        </motion.div>

        {!showResult ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Card className="glass-panel p-6">
              <h3 className="font-serif text-lg text-moon-white mb-4">Person 1 (You)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Name" />
                <Input type="date" placeholder="Birth Date" />
                <Input type="time" placeholder="Birth Time" />
                <Input placeholder="Birth Place" />
              </div>
            </Card>

            <Card className="glass-panel p-6">
              <h3 className="font-serif text-lg text-moon-white mb-4">Person 2 (Partner)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Name" />
                <Input type="date" placeholder="Birth Date" />
                <Input type="time" placeholder="Birth Time" />
                <Input placeholder="Birth Place" />
              </div>
            </Card>

            <Button className="w-full" size="lg" onClick={() => setShowResult(true)}>
              <Heart className="h-4 w-4 mr-2" />
              Calculate Compatibility
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <Card className="glass-panel p-8 text-center">
              <div className="relative inline-flex items-center justify-center mb-4">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle cx="64" cy="64" r="56" stroke="#17183B" strokeWidth="8" fill="none" />
                  <circle
                    cx="64" cy="64" r="56"
                    stroke="#C89B3C"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(percentage / 100) * 351.86} 351.86`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-serif font-medium text-gold-bright">{totalScore}/{maxScore}</span>
                </div>
              </div>
              <h3 className="font-serif text-xl text-moon-white mb-2">
                {percentage >= 70 ? "Excellent Match" : percentage >= 50 ? "Good Match" : "Challenging Match"}
              </h3>
              <p className="text-sm text-lavender/60">Ashtakoot compatibility score</p>
            </Card>

            <div className="space-y-3">
              {compatibilityFactors.map((factor) => (
                <Card key={factor.name} className="glass-panel">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-sm font-medium text-moon-white">{factor.name}</p>
                        <p className="text-xs text-lavender/50">{factor.desc}</p>
                      </div>
                      <span className="text-sm font-medium text-gold-bright">{factor.score}/{factor.max}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-cosmic-indigo/50 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gold-antique"
                        style={{ width: `${(factor.score / factor.max) * 100}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-status-success/5 border border-status-success/20">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-status-success shrink-0 mt-0.5" />
                <p className="text-sm text-lavender/70">
                  This analysis is based on traditional Ashtakoot matching. For deeper insights, consult a qualified astrologer.
                </p>
              </div>
            </div>

            <Button variant="secondary" className="w-full" onClick={() => setShowResult(false)}>
              Compare Another Pair
            </Button>
          </motion.div>
        )}
      </div>
    </main>
  )
}
