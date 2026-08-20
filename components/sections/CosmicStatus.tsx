"use client"

import React from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Star, Clock, Calendar, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const cosmicData = [
  {
    icon: Calendar,
    label: "Today",
    value: "20 August 2026",
    sublabel: "Friday, Bhadrapada",
    color: "text-gold-bright",
  },
  {
    icon: Moon,
    label: "Moon Sign",
    value: "Taurus",
    sublabel: "Rohini Nakshatra",
    color: "text-lavender",
  },
  {
    icon: Star,
    label: "Nakshatra",
    value: "Rohini",
    sublabel: "Pada 2",
    color: "text-gold-antique",
  },
  {
    icon: Clock,
    label: "Rahu Kaal",
    value: "3:30 PM — 5:00 PM",
    sublabel: "Avoid new beginnings",
    color: "text-status-warning",
  },
  {
    icon: Sun,
    label: "Current Transit",
    value: "Sun in Leo",
    sublabel: "Favorable for leadership",
    color: "text-status-success",
  },
  {
    icon: Sparkles,
    label: "Active Mahadasha",
    value: "Jupiter",
    sublabel: "Until 2032",
    color: "text-gold-bright",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function CosmicStatus() {
  return (
    <section className="section-padding py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-gold-antique/30 to-transparent" />
          <span className="label-gold whitespace-nowrap">Live Cosmic Status</span>
          <div className="h-px flex-1 bg-gradient-to-l from-gold-antique/30 to-transparent" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cosmicData.map((item) => (
            <motion.div key={item.label} variants={itemVariants}>
              <Card className="glass-panel-hover group cursor-default">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cosmic-indigo/60 border border-gold-antique/10 group-hover:border-gold-antique/25 transition-colors">
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-lavender/50 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-moon-white truncate">
                      {item.value}
                    </p>
                    <p className="text-xs text-lavender/60 mt-0.5">
                      {item.sublabel}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-xs text-lavender/40 mt-4">
          * Using mock data for demonstration. Real calculations will be integrated in Phase 2.
        </p>
      </div>
    </section>
  )
}
