"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Orbit, Hand, MessageCircle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Orbit,
    title: "Birth Blueprint",
    titleHi: "जन्म कुंडली",
    description:
      "Interactive D1, D9, and D10 charts with planetary positions, houses, dasha timeline, and AI-powered interpretation.",
    descriptionHi:
      "इंटरैक्टिव D1, D9 और D10 चार्ट जिसमें ग्रह स्थिति, भाव, दशा टाइमलाइन और AI-संचालित व्याख्या शामिल है।",
    cta: "Create My Kundli",
    ctaHi: "अपनी कुंडली बनाएं",
    href: "/onboarding",
    gradient: "from-gold-antique/10 via-transparent to-royal-violet/10",
    iconColor: "text-gold-bright",
  },
  {
    icon: Hand,
    title: "Palm Vision",
    titleHi: "हस्त रेखा",
    description:
      "AI-assisted palm reading with image upload, quality detection, line overlay, and traditional interpretation with safety disclaimers.",
    descriptionHi:
      "AI-सहायता प्राप्त हस्त रेखा जिसमें छवि अपलोड, गुणवत्ता जांच, रेखा ओवरले और सुरक्षा अस्वीकरण के साथ पारंपरिक व्याख्या शामिल है।",
    cta: "Scan My Palm",
    ctaHi: "हथेली स्कैन करें",
    href: "/palm-scan",
    gradient: "from-royal-violet/10 via-transparent to-gold-antique/10",
    iconColor: "text-lavender",
  },
  {
    icon: MessageCircle,
    title: "Astra AI",
    titleHi: "अस्त्र AI",
    description:
      "Chart-aware AI Jyotishi in Hindi and English. Voice input, follow-up memory, suggested questions, and PDF report export.",
    descriptionHi:
      "हिंदी और अंग्रेजी में चार्ट-जागरूक AI ज्योतिषी। वॉइस इनपुट, फॉलो-अप मेमोरी, सुझाव प्रश्न और PDF रिपोर्ट निर्यात।",
    cta: "Ask Astra AI",
    ctaHi: "अस्त्र AI से पूछें",
    href: "/ai-jyotishi",
    gradient: "from-gold-antique/10 via-transparent to-status-success/5",
    iconColor: "text-status-success",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function FeatureCards() {
  return (
    <section className="section-padding py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-gold mb-4 block">Core Capabilities</span>
          <h2 className="heading-section mb-4">Three Paths to Cosmic Insight</h2>
          <p className="body-large max-w-2xl mx-auto">
            Explore your destiny through birth chart analysis, palm energy reading, 
            or intelligent AI guidance — all in one immersive platform.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="glass-panel-hover h-full flex flex-col group relative overflow-hidden">
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />

                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cosmic-indigo/50 border border-gold-antique/10 group-hover:border-gold-antique/25 transition-colors">
                      <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="mt-2">{feature.description}</CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 mt-auto pt-0">
                  <Button variant="ghost" className="group/btn p-0 h-auto" asChild>
                    <Link href={feature.href} className="flex items-center gap-2 text-gold-bright hover:text-gold-antique">
                      {feature.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
