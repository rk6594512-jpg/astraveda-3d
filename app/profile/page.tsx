"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { User, Mail, Globe, Bell, Shield, Moon, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/layout/Navbar"

export default function ProfilePage() {
  const [name, setName] = useState("Rahul Sharma")
  const [email, setEmail] = useState("rahul@example.com")
  const [lang, setLang] = useState("en")
  const [notifications, setNotifications] = useState(true)

  return (
    <main className="min-h-screen pt-20 pb-12">
      <Navbar />
      <div className="section-padding max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <span className="label-gold mb-3 block">Profile</span>
          <h1 className="heading-section mb-3">Your Account</h1>
        </motion.div>

        <div className="space-y-6">
          <Card className="glass-panel">
            <CardHeader className="pb-4">
              <CardTitle className="font-serif text-lg">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-xs text-lavender/70 mb-1.5 block">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-lavender/40" />
                  <Input value={name} onChange={(e) => setName(e.target.value)} className="pl-10" />
                </div>
              </div>
              <div>
                <label className="text-xs text-lavender/70 mb-1.5 block">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-lavender/40" />
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10" />
                </div>
              </div>
              <Button size="sm">Save Changes</Button>
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader className="pb-4">
              <CardTitle className="font-serif text-lg">Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-lavender/60" />
                  <span className="text-sm text-moon-white">Language</span>
                </div>
                <div className="flex gap-2">
                  {["en", "hi"].map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                        lang === l
                          ? "bg-gold-antique/20 text-gold-bright border border-gold-antique/30"
                          : "bg-cosmic-indigo/30 text-lavender/60 border border-transparent"
                      }`}
                    >
                      {l === "en" ? "English" : "हिंदी"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Bell className="h-4 w-4 text-lavender/60" />
                  <span className="text-sm text-moon-white">Notifications</span>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`w-11 h-6 rounded-full transition-colors relative ${
                    notifications ? "bg-gold-antique/40" : "bg-cosmic-indigo/50"
                  }`}
                >
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-moon-white transition-transform ${
                    notifications ? "left-6" : "left-1"
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Moon className="h-4 w-4 text-lavender/60" />
                  <span className="text-sm text-moon-white">Dark Mode</span>
                </div>
                <span className="text-xs text-lavender/40">Always on</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-panel border-status-error/20">
            <CardHeader className="pb-4">
              <CardTitle className="font-serif text-lg text-status-error">Danger Zone</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-moon-white">Delete Account</p>
                  <p className="text-xs text-lavender/50">Permanently remove all your data</p>
                </div>
                <Button variant="outline" size="sm" className="border-status-error/30 text-status-error hover:bg-status-error/10">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
