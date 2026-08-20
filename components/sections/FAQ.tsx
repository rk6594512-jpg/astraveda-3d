"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Is AstraVeda 3D free to use?",
    answer:
      "Yes — basic kundli generation and chart viewing are free. Premium features like detailed PDF reports, advanced palm analysis, voice consultations, and saved readings require a subscription.",
  },
  {
    question: "How accurate are the birth chart calculations?",
    answer:
      "We use established Vedic astrology calculation algorithms for planetary positions, house cusps, dashas, and transits. However, astrology is a traditional guidance system — not a guaranteed science. Interpretations reflect possibilities, not certainties.",
  },
  {
    question: "Can I use AstraVeda 3D in Hindi?",
    answer:
      "Absolutely. The entire platform supports both Hindi and English. You can switch languages anytime from the navbar or during onboarding. The AI Jyotishi also responds in your chosen language.",
  },
  {
    question: "Is my birth data and palm image safe?",
    answer:
      "Yes. We encrypt all personal data, use signed URLs for images, and ask for explicit consent before storing anything. You can delete your account, birth profiles, or palm images at any time from Settings.",
  },
  {
    question: "Does the palm scan predict my future?",
    answer:
      "No. Palm scan interpretations are based on traditional palmistry beliefs and are intended for reflection and entertainment only. We never claim exact predictions, death dates, or guaranteed outcomes from palm features.",
  },
  {
    question: "What is the multi-agent AI system?",
    answer:
      "Astra AI uses specialized agents — Kundli Agent, Dasha Agent, Transit Agent, Palm Vision Agent, and a Safety Agent — orchestrated together. Each agent handles one domain, and a Safety Agent ensures no harmful or deterministic claims are made.",
  },
  {
    question: "Can I get a PDF report of my reading?",
    answer:
      "Yes. Premium subscribers can export personalized PDF reports combining kundli analysis, palm insights, and AI conversation summaries. This feature will be available in Phase 4.",
  },
]

export default function FAQ() {
  return (
    <section className="section-padding py-16 md:py-24 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-gold mb-4 block">FAQ</span>
          <h2 className="heading-section mb-4">Common Questions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-panel rounded-lg px-5 py-1 data-[state=open]:border-gold-antique/20 transition-colors"
              >
                <AccordionTrigger className="flex items-center justify-between w-full py-4 text-left text-sm md:text-base font-medium text-moon-white hover:text-gold-bright transition-colors group">
                  <span>{faq.question}</span>
                  <ChevronDown className="h-4 w-4 text-lavender/50 shrink-0 ml-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm text-lavender/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
