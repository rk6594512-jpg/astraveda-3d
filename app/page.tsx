"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Orbit, Hand, MessageCircle, ArrowRight, Sparkles } from "lucide-react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Starfield from "@/components/hero/Starfield"
import ZodiacWheel from "@/components/hero/ZodiacWheel"
import CosmicStatus from "@/components/sections/CosmicStatus"
import FeatureCards from "@/components/sections/FeatureCards"
import HowItWorks from "@/components/sections/HowItWorks"
import TrustSafety from "@/components/sections/TrustSafety"
import FAQ from "@/components/sections/FAQ"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Starfield />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-radial from-royal-violet/20 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 section-padding w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-24 pb-16">
          <motion.div
            className="flex-1 max-w-xl text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel mb-6">
              <Sparkles className="h-3.5 w-3.5 text-gold-bright" />
              <span className="text-xs font-medium text-gold-bright/90 tracking-wide">
                AI-Powered Vedic Astrology
              </span>
            </div>

            <h1 className="heading-hero mb-6">Your Birth Holds a Pattern.</h1>
            <p className="body-large mb-8 max-w-md mx-auto lg:mx-0">
              Explore your kundli, palm energy, and cosmic guidance through an intelligent 3D experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/onboarding" className="flex items-center gap-2">
                  <Orbit className="h-4 w-4" />
                  Create My Cosmic Blueprint
                </Link>
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/palm-scan" className="flex items-center gap-2">
                  <Hand className="h-4 w-4" />
                  Scan My Palm
                </Link>
              </Button>
            </div>

            <div className="mt-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/ai-jyotishi" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Ask Astra AI
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <ZodiacWheel />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-lavender/40">Scroll to explore</span>
          <motion.div
            className="w-5 h-8 rounded-full border border-lavender/20 flex items-start justify-center p-1.5"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-1 h-2 rounded-full bg-gold-antique/40" />
          </motion.div>
        </motion.div>
      </section>

      <CosmicStatus />
      <FeatureCards />
      <HowItWorks />
      <TrustSafety />

      <section className="section-padding py-16 md:py-24 relative">
        <motion.div
          className="max-w-3xl mx-auto text-center glass-panel rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-section mb-4">Begin Your Cosmic Journey Today</h2>
          <p className="body-large mb-8 max-w-xl mx-auto">
            Your birth chart holds insights waiting to be discovered. Start with a free kundli and unlock deeper guidance as you explore.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
            <Button size="xl" asChild>
              <Link href="/onboarding">Create My Cosmic Blueprint</Link>
            </Button>
            <Button variant="secondary" size="xl" asChild>
              <Link href="/ai-jyotishi">Talk to Astra AI</Link>
            </Button>
          </div>
          <p className="text-xs text-lavender/40 mt-6">Free basic kundli. No credit card required.</p>
        </motion.div>
      </section>

      <FAQ />
      <Footer />
    </main>
  )
}
