"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, Search, Star, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/layout/Navbar"

const purposes = [
  "Marriage", "Business Start", "House Warming", "Travel",
  "Education Start", "Property Purchase", "Vehicle Purchase", "Investment"
]

const mockResults = [
  { date: "21 Aug 2026", time: "10:30 AM - 12:00 PM", rating: "excellent", reason: "Amrit Kaal + favorable nakshatra" },
  { date: "23 Aug 2026", time: "06:15 AM - 07:45 AM", rating: "good", reason: "Brahma Muhurat" },
  { date: "25 Aug 2026", time: "11:00 AM - 12:30 PM", rating: "good", reason: "Abhijit Muhurat" },
  { date: "27 Aug 2026", time: "09:00 AM - 10:30 AM", rating: "moderate", reason: "Mixed influences" },
]

export default function MuhuratPage() {
  const [purpose, setPurpose] = useState("")
  const [showResults, setShowResults] = useState(false)

  return (
    <main className="min-h-screen pt-20 pb-12">
      <Navbar />
      <div className="section-padding max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <span className="label-gold mb-3 block">Muhurat Finder</span>
          <h1 className="heading-section mb-3">Find Auspicious Timing</h1>
          <p className="body-large">Discover the best dates and times for your important activities.</p>
        </motion.div>

        {!showResults ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Card className="glass-panel p-6">
              <h3 className="font-serif text-lg text-moon-white mb-4">What are you planning?</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {purposes.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPurpose(p)}
                    className={`
                      p-3 rounded-xl border text-xs font-medium text-center transition-all
                      ${purpose === p
                        ? "border-gold-antique/40 bg-gold-antique/10 text-gold-bright"
                        : "border-gold-antique/10 bg-cosmic-indigo/30 text-lavender hover:border-gold-antique/20"
                      }
                    `}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs text-lavender/70 mb-1.5 block">Or type your purpose</label>
                  <Input
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    placeholder="e.g. Starting a new business venture..."
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-lavender/70 mb-1.5 block">Preferred Date Range</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="text-xs text-lavender/70 mb-1.5 block">To</label>
                    <Input type="date" />
                  </div>
                </div>
              </div>
            </Card>

            <Button className="w-full" size="lg" onClick={() => setShowResults(true)} disabled={!purpose}>
              <Search className="h-4 w-4 mr-2" />
              Find Muhurat
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg text-moon-white">Results for: {purpose}</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowResults(false)}>
                New Search
              </Button>
            </div>

            {mockResults.map((result, i) => (
              <Card key={i} className="glass-panel">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`
                        h-10 w-10 rounded-lg flex items-center justify-center
                        ${result.rating === 'excellent' ? 'bg-status-success/20' : result.rating === 'good' ? 'bg-gold-antique/20' : 'bg-status-warning/20'}
                      `}>
                        <Star className={`h-5 w-5 ${
                          result.rating === 'excellent' ? 'text-status-success' : result.rating === 'good' ? 'text-gold-bright' : 'text-status-warning'
                        }`} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-moon-white">{result.date}</p>
                        <p className="text-xs text-gold-bright mt-0.5">{result.time}</p>
                        <p className="text-xs text-lavender/50 mt-1">{result.reason}</p>
                      </div>
                    </div>
                    <span className={`
                      px-2.5 py-1 rounded-full text-xs font-medium capitalize
                      ${result.rating === 'excellent' ? 'bg-status-success/20 text-status-success' : result.rating === 'good' ? 'bg-gold-antique/20 text-gold-bright' : 'bg-status-warning/20 text-status-warning'}
                    `}>
                      {result.rating}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="p-4 rounded-lg bg-status-success/5 border border-status-success/20">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-status-success shrink-0 mt-0.5" />
                <p className="text-sm text-lavender/70">
                  These timings are calculated based on traditional panchang principles. Always consult a qualified astrologer for major life decisions.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  )
}
