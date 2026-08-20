"use client"

import React from "react"
import { motion } from "framer-motion"
import { FileText, Download, Calendar, Orbit, Hand, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/layout/Navbar"

const reports = [
  { id: 1, title: "Birth Chart Analysis", type: "kundli", date: "20 Aug 2026", icon: Orbit },
  { id: 2, title: "Palm Reading Report", type: "palm", date: "18 Aug 2026", icon: Hand },
  { id: 3, title: "Career Guidance Session", type: "chat", date: "15 Aug 2026", icon: MessageCircle },
  { id: 4, title: "Complete Cosmic Blueprint", type: "combined", date: "10 Aug 2026", icon: FileText },
]

export default function ReportsPage() {
  return (
    <main className="min-h-screen pt-20 pb-12">
      <Navbar />
      <div className="section-padding max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <span className="label-gold mb-3 block">Saved Reports</span>
          <h1 className="heading-section mb-3">Your Cosmic Archive</h1>
          <p className="body-large">Access and download your personalized astrological reports.</p>
        </motion.div>

        <div className="space-y-4">
          {reports.map((report, i) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass-panel hover:border-gold-antique/20 transition-colors">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-cosmic-indigo/50 flex items-center justify-center shrink-0">
                    <report.icon className="h-6 w-6 text-gold-bright" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base text-moon-white truncate">{report.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-lavender/50 capitalize">{report.type}</span>
                      <span className="text-xs text-lavender/40 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {report.date}
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {reports.length === 0 && (
          <div className="text-center py-16">
            <FileText className="h-12 w-12 text-lavender/20 mx-auto mb-4" />
            <p className="text-lavender/50">No reports yet. Generate your first kundli to get started.</p>
          </div>
        )}
      </div>
    </main>
  )
}
