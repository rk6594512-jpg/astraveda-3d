"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Shield, Eye, FileText, AlertTriangle, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/layout/Navbar"

export default function SettingsPage() {
  const [privacyExpanded, setPrivacyExpanded] = useState(false)

  return (
    <main className="min-h-screen pt-20 pb-12">
      <Navbar />
      <div className="section-padding max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <span className="label-gold mb-3 block">Settings</span>
          <h1 className="heading-section mb-3">Privacy & Security</h1>
        </motion.div>

        <div className="space-y-6">
          <Card className="glass-panel">
            <CardHeader className="pb-4">
              <CardTitle className="font-serif text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-gold-bright" />
                Data Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-cosmic-indigo/30">
                <Eye className="h-4 w-4 text-status-success shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-moon-white">Your birth data is encrypted</p>
                  <p className="text-xs text-lavender/50">AES-256 encryption at rest and in transit</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-cosmic-indigo/30">
                <CheckCircle2 className="h-4 w-4 text-status-success shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-moon-white">Palm images are auto-deleted</p>
                  <p className="text-xs text-lavender/50">Temporary images removed after analysis</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-cosmic-indigo/30">
                <FileText className="h-4 w-4 text-status-success shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-moon-white">No third-party data sharing</p>
                  <p className="text-xs text-lavender/50">Your data is never sold or shared</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader className="pb-4">
              <CardTitle className="font-serif text-lg">Legal Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Use", href: "/terms" },
                { label: "Astrology Disclaimer", href: "/disclaimer" },
              ].map((doc) => (
                <a
                  key={doc.href}
                  href={doc.href}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-cosmic-indigo/30 transition-colors"
                >
                  <span className="text-sm text-moon-white">{doc.label}</span>
                  <span className="text-xs text-lavender/40">View →</span>
                </a>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader className="pb-4">
              <CardTitle className="font-serif text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-status-warning" />
                Astrology Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-lavender/70 leading-relaxed">
                AstraVeda 3D provides traditional Vedic astrology and palmistry guidance for reflection and entertainment purposes. 
                AI responses are not guaranteed predictions. For medical, financial, or legal decisions, please consult qualified professionals. 
                Remedies are optional, not compulsory. The platform does not intentionally create fear or anxiety.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
