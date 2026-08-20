"use client"

import React from "react"
import { motion } from "framer-motion"
import { User, Calendar, Orbit, MessageSquare, FileText } from "lucide-react"

const steps = [
  {
    icon: User,
    step: "01",
    title: "Create Your Profile",
    titleHi: "प्रोफाइल बनाएं",
    description:
      "Choose your language and goal. Enter your name, birth date, time, and place with our progressive onboarding flow.",
    descriptionHi:
      "अपनी भाषा और लक्ष्य चुनें। हमारे प्रोग्रेसिव ऑनबोर्डिंग फ्लो के साथ अपना नाम, जन्म तिथि, समय और स्थान दर्ज करें।",
  },
  {
    icon: Calendar,
    step: "02",
    title: "Generate Birth Chart",
    titleHi: "जन्म कुंडली बनाएं",
    description:
      "Our calculation engine computes your D1, D9, and D10 charts with precise planetary positions, houses, and dasha periods.",
    descriptionHi:
      "हमारी कैलकुलेशन इंजन सटीक ग्रह स्थिति, भाव और दशा अवधियों के साथ आपकी D1, D9 और D10 कुंडली की गणना करता है।",
  },
  {
    icon: Orbit,
    step: "03",
    title: "Explore the Dashboard",
    titleHi: "डैशबोर्ड देखें",
    description:
      "Navigate through interactive charts, transit analysis, yoga identification, and dosha reports with zoom and pan support.",
    descriptionHi:
      "इंटरैक्टिव चार्ट, ट्रांजिट विश्लेषण, योग पहचान और दोष रिपोर्ट के साथ ज़ूम और पैन सपोर्ट के माध्यम से नेविगेट करें।",
  },
  {
    icon: MessageSquare,
    step: "04",
    title: "Ask Astra AI",
    titleHi: "अस्त्र AI से पूछें",
    description:
      "Chat with your chart-aware AI Jyotishi. Get personalized insights, practical suggestions, and reflective guidance in Hindi or English.",
    descriptionHi:
      "अपने चार्ट-जागरूक AI ज्योतिषी से चैट करें। हिंदी या अंग्रेजी में व्यक्तिगत अंतर्दृष्टि, व्यावहारिक सुझाव और चिंतन मार्गदर्शन प्राप्त करें।",
  },
  {
    icon: FileText,
    step: "05",
    title: "Save & Share Reports",
    titleHi: "रिपोर्ट सहेजें और साझा करें",
    description:
      "Export personalized PDF reports, save readings to your profile, and share insights with family or astrologers.",
    descriptionHi:
      "व्यक्तिगत PDF रिपोर्ट निर्यात करें, अपनी प्रोफाइल में रीडिंग सहेजें और अंतर्दृष्टि को परिवार या ज्योतिषियों के साथ साझा करें।",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export default function HowItWorks() {
  return (
    <section className="section-padding py-16 md:py-24 relative aurora-bg">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-gold mb-4 block">How It Works</span>
          <h2 className="heading-section mb-4">Your Cosmic Journey</h2>
          <p className="body-large max-w-2xl mx-auto">
            From birth details to personalized insights in five simple steps.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
              className="relative flex gap-6 md:gap-8 pb-10 last:pb-0"
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-5 md:left-6 top-14 bottom-0 w-px bg-gradient-to-b from-gold-antique/30 to-transparent" />
              )}

              {/* Step number / icon */}
              <div className="relative shrink-0">
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-cosmic-indigo border border-gold-antique/20 shadow-glow-gold">
                  <step.icon className="h-5 w-5 text-gold-bright" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-1">
                <span className="text-xs font-mono text-gold-antique/50 tracking-wider">
                  STEP {step.step}
                </span>
                <h3 className="text-lg md:text-xl font-serif font-medium text-moon-white mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-lavender/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
