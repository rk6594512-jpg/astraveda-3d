"use client"

import React from "react"
import { motion } from "framer-motion"
import { Shield, Lock, Eye, Heart, AlertCircle, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const trustPillars = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "We never claim exact death dates, guaranteed accidents, or certain marriage dates. All interpretations use uncertainty-aware language.",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description:
      "Your birth details and palm images are encrypted. We ask explicit consent before storing any personal data. Delete anytime.",
  },
  {
    icon: Eye,
    title: "Transparent AI",
    description:
      "Our AI interprets calculated chart data — it never invents planetary positions. Every claim is traceable to astrological calculations.",
  },
  {
    icon: Heart,
    title: "No Fear Tactics",
    description:
      "We do not use fear-based messaging or force remedy purchases. Guidance is reflective and optional, never compulsory.",
  },
]

const commitments = [
  "Astrology is traditional guidance, not guaranteed prediction",
  "Health questions require qualified medical professionals",
  "Financial decisions require qualified financial advisors",
  "Remedies are optional, not compulsory",
  "We do not intentionally create fear or anxiety",
  "All palm readings include entertainment disclaimers",
]

export default function TrustSafety() {
  return (
    <section className="section-padding py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-gold mb-4 block">Trust & Safety</span>
          <h2 className="heading-section mb-4">Built on Integrity</h2>
          <p className="body-large max-w-2xl mx-auto">
            AstraVeda 3D is designed to be a trustworthy, safe, and transparent 
            cosmic guidance platform — not a source of fear or false promises.
          </p>
        </motion.div>

        {/* Trust pillars grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {trustPillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass-panel-hover h-full">
                <CardContent className="p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cosmic-indigo/50 border border-gold-antique/10 mb-4">
                    <pillar.icon className="h-5 w-5 text-gold-bright" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-moon-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-lavender/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Commitments list */}
        <motion.div
          className="glass-panel rounded-xl p-6 md:p-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="h-5 w-5 text-status-warning" />
            <h3 className="font-serif text-lg font-medium text-moon-white">
              Our Commitments to You
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {commitments.map((commitment) => (
              <div key={commitment} className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-status-success shrink-0 mt-0.5" />
                <p className="text-sm text-lavender/80 leading-relaxed">{commitment}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
