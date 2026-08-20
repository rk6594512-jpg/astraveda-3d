"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Sun, Moon, Star, Clock, Calendar, Sunrise, Sunset, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/layout/Navbar"

const panchangData = {
  date: "20 August 2026",
  tithi: "Shukla Ashtami",
  nakshatra: "Rohini",
  yoga: "Vriddhi",
  karana: "Bava",
  sunrise: "06:12 AM",
  sunset: "06:58 PM",
  rahuKaal: { start: "3:30 PM", end: "5:00 PM" },
  abhijit: { start: "12:00 PM", end: "12:45 PM" },
  amrit: { start: "10:30 AM", end: "12:00 PM" },
  varjyam: { start: "2:15 PM", end: "3:45 PM" },
}

export default function PanchangPage() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <main className="min-h-screen pt-20 pb-12">
      <Navbar />
      <div className="section-padding max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <span className="label-gold mb-3 block">Daily Panchang</span>
          <h1 className="heading-section mb-3">Today&apos;s Cosmic Calendar</h1>
        </motion.div>

        {/* Date selector */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button className="p-2 rounded-lg hover:bg-gold-antique/10 transition-colors">
            <ChevronLeft className="h-5 w-5 text-lavender" />
          </button>
          <div className="glass-panel px-6 py-3 rounded-xl">
            <span className="text-sm font-medium text-moon-white">{panchangData.date}</span>
          </div>
          <button className="p-2 rounded-lg hover:bg-gold-antique/10 transition-colors">
            <ChevronRight className="h-5 w-5 text-lavender" />
          </button>
        </div>

        {/* Main panchang grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <Card className="glass-panel">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-gold-antique/10 flex items-center justify-center">
                <Moon className="h-5 w-5 text-gold-bright" />
              </div>
              <div>
                <p className="text-xs text-lavender/50 uppercase tracking-wider">Tithi</p>
                <p className="text-sm font-medium text-moon-white">{panchangData.tithi}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-gold-antique/10 flex items-center justify-center">
                <Star className="h-5 w-5 text-gold-bright" />
              </div>
              <div>
                <p className="text-xs text-lavender/50 uppercase tracking-wider">Nakshatra</p>
                <p className="text-sm font-medium text-moon-white">{panchangData.nakshatra}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-gold-antique/10 flex items-center justify-center">
                <Sun className="h-5 w-5 text-gold-bright" />
              </div>
              <div>
                <p className="text-xs text-lavender/50 uppercase tracking-wider">Yoga</p>
                <p className="text-sm font-medium text-moon-white">{panchangData.yoga}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-gold-antique/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-gold-bright" />
              </div>
              <div>
                <p className="text-xs text-lavender/50 uppercase tracking-wider">Karana</p>
                <p className="text-sm font-medium text-moon-white">{panchangData.karana}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timings */}
        <Card className="glass-panel mb-6">
          <CardContent className="p-6">
            <h3 className="font-serif text-lg text-moon-white mb-4">Important Timings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-gold-antique/5">
                <div className="flex items-center gap-3">
                  <Sunrise className="h-4 w-4 text-status-success" />
                  <span className="text-sm text-lavender/70">Sunrise</span>
                </div>
                <span className="text-sm font-medium text-moon-white">{panchangData.sunrise}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gold-antique/5">
                <div className="flex items-center gap-3">
                  <Sunset className="h-4 w-4 text-status-warning" />
                  <span className="text-sm text-lavender/70">Sunset</span>
                </div>
                <span className="text-sm font-medium text-moon-white">{panchangData.sunset}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gold-antique/5">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-status-error" />
                  <span className="text-sm text-lavender/70">Rahu Kaal</span>
                </div>
                <span className="text-sm font-medium text-status-error">{panchangData.rahuKaal.start} - {panchangData.rahuKaal.end}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gold-antique/5">
                <div className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-gold-bright" />
                  <span className="text-sm text-lavender/70">Abhijit Muhurat</span>
                </div>
                <span className="text-sm font-medium text-status-success">{panchangData.abhijit.start} - {panchangData.abhijit.end}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-status-success" />
                  <span className="text-sm text-lavender/70">Amrit Kaal</span>
                </div>
                <span className="text-sm font-medium text-status-success">{panchangData.amrit.start} - {panchangData.amrit.end}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-lavender/40">
          * Using mock panchang data. Real calculations will be integrated in Phase 5.
        </p>
      </div>
    </main>
  )
}
