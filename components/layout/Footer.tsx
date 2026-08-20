"use client"

import React from "react"
import Link from "next/link"
import { Sparkles, Mail, Shield, FileText, AlertTriangle } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Kundli", href: "/kundli" },
    { label: "Palm Scan", href: "/palm-scan" },
    { label: "Astra AI", href: "/ai-jyotishi" },
    { label: "Matchmaking", href: "/matchmaking" },
    { label: "Panchang", href: "/panchang" },
    { label: "Muhurat", href: "/muhurat" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Astrology Disclaimer", href: "/disclaimer" },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-gold-antique/10 bg-cosmic-black/60 backdrop-blur-sm">
      {/* Top disclaimer banner */}
      <div className="section-padding py-4 border-b border-gold-antique/5 bg-cosmic-navy/30">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <AlertTriangle className="h-4 w-4 text-status-warning shrink-0 mt-0.5" />
          <p className="text-xs text-lavender/60 leading-relaxed">
            AstraVeda 3D provides traditional Vedic astrology and palmistry guidance for reflection and entertainment. 
            AI responses are not guaranteed predictions. For medical, financial, or legal decisions, please consult qualified professionals. 
            Remedies are optional, not compulsory.
          </p>
        </div>
      </div>

      <div className="section-padding py-12 md:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gold-antique to-gold-bright shadow-glow-gold">
                <Sparkles className="h-4 w-4 text-cosmic-black" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold text-moon-white leading-none">
                  AstraVeda
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold-antique/70">
                  3D
                </span>
              </div>
            </Link>
            <p className="text-sm text-lavender/60 leading-relaxed max-w-sm mb-6">
              A premium AI-powered Vedic astrology and cosmic guidance platform. 
              Explore your birth chart, palm energy, and personalized insights through an immersive 3D experience.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@astraveda3d.com"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-lavender/60 hover:text-gold-bright hover:bg-gold-antique/5 transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                hello@astraveda3d.com
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-antique/80 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-lavender/60 hover:text-gold-bright transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-antique/80 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-lavender/60 hover:text-gold-bright transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-antique/80 mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-lavender/60 hover:text-gold-bright transition-colors duration-300 flex items-center gap-2"
                  >
                    {link.label.includes("Privacy") && <Shield className="h-3 w-3" />}
                    {link.label.includes("Terms") && <FileText className="h-3 w-3" />}
                    {link.label.includes("Disclaimer") && <AlertTriangle className="h-3 w-3" />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold-antique/5">
        <div className="section-padding py-5 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-lavender/40">
            &copy; {new Date().getFullYear()} AstraVeda 3D. All rights reserved.
          </p>
          <p className="text-xs text-lavender/40 flex items-center gap-1.5">
            <Shield className="h-3 w-3" />
            Your data is encrypted and never sold.
          </p>
        </div>
      </div>
    </footer>
  )
}
