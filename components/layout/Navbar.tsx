"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sparkles, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", labelHi: "होम", href: "/" },
  { label: "Kundli", labelHi: "कुंडली", href: "/kundli" },
  { label: "Palm Scan", labelHi: "हस्त रेखा", href: "/palm-scan" },
  { label: "Astra AI", labelHi: "अस्त्र AI", href: "/ai-jyotishi" },
  { label: "Panchang", labelHi: "पंचांग", href: "/panchang" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lang, setLang] = useState<"en" | "hi">("en")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cosmic-black/80 backdrop-blur-glass border-b border-gold-antique/10 shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="section-padding mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold-antique to-gold-bright shadow-glow-gold group-hover:shadow-glow-soft transition-shadow duration-500">
            <Sparkles className="h-5 w-5 text-cosmic-black" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-semibold tracking-tight text-moon-white leading-none">
              AstraVeda
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-gold-antique/70 font-medium">
              3D
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-lavender/80 hover:text-gold-bright transition-colors duration-300 rounded-lg hover:bg-gold-antique/5"
            >
              {lang === "hi" && link.labelHi ? link.labelHi : link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-lavender/70 hover:text-gold-bright transition-colors rounded-lg hover:bg-gold-antique/5"
            aria-label="Toggle language"
          >
            <Languages className="h-4 w-4" />
            <span className="uppercase tracking-wider">{lang}</span>
          </button>
          <Button variant="cosmic" size="sm" asChild>
            <Link href="/onboarding">
              {lang === "hi" ? "शुरू करें" : "Get Started"}
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-lavender hover:text-gold-bright transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="section-padding pb-6 pt-2 space-y-1 bg-cosmic-black/95 backdrop-blur-glass border-b border-gold-antique/10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-lavender/80 hover:text-gold-bright hover:bg-gold-antique/5 rounded-lg transition-colors"
            >
              {lang === "hi" && link.labelHi ? link.labelHi : link.label}
            </Link>
          ))}
          <div className="pt-3 flex items-center gap-3 px-4">
            <button
              onClick={() => setLang(lang === "en" ? "hi" : "en")}
              className="flex items-center gap-1.5 text-xs font-medium text-lavender/70"
            >
              <Languages className="h-4 w-4" />
              <span className="uppercase">{lang}</span>
            </button>
            <Button variant="cosmic" size="sm" className="flex-1" asChild>
              <Link href="/onboarding" onClick={() => setMobileOpen(false)}>
                {lang === "hi" ? "शुरू करें" : "Get Started"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
