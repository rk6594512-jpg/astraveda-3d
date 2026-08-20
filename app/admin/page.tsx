"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Users, MessageSquare, Orbit, Hand, TrendingUp, DollarSign, Activity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/layout/Navbar"

const stats = [
  { label: "Total Users", value: "1,234", change: "+12%", icon: Users, color: "text-gold-bright" },
  { label: "Charts Generated", value: "3,456", change: "+28%", icon: Orbit, color: "text-status-success" },
  { label: "Palm Scans", value: "892", change: "+15%", icon: Hand, color: "text-lavender" },
  { label: "AI Chats", value: "5,678", change: "+45%", icon: MessageSquare, color: "text-status-warning" },
]

const revenue = [
  { label: "Free Users", value: 800, color: "bg-lavender/30" },
  { label: "Premium", value: 350, color: "bg-gold-antique/60" },
  { label: "Pro", value: 84, color: "bg-status-success/60" },
]

export default function AdminPage() {
  const [timeRange, setTimeRange] = useState("7d")

  return (
    <main className="min-h-screen pt-20 pb-12">
      <Navbar />
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="heading-section mb-2">Admin Dashboard</h1>
          <p className="text-sm text-lavender/60">Platform analytics and management</p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="glass-panel">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-10 w-10 rounded-lg bg-cosmic-indigo/50 flex items-center justify-center">
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <span className="text-xs font-medium text-status-success">{stat.change}</span>
                  </div>
                  <p className="text-2xl font-serif font-medium text-moon-white">{stat.value}</p>
                  <p className="text-xs text-lavender/50 mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Revenue breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass-panel p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="font-serif text-lg">Subscription Distribution</CardTitle>
            </CardHeader>
            <div className="space-y-4">
              {revenue.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-lavender/70">{item.label}</span>
                    <span className="text-sm font-medium text-moon-white">{item.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-cosmic-indigo/50 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${item.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.value / 1234) * 100}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass-panel p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="font-serif text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <div className="space-y-3">
              {[
                { action: "New user registered", time: "2 min ago", icon: Users },
                { action: "Kundli generated", time: "5 min ago", icon: Orbit },
                { action: "Premium subscription", time: "12 min ago", icon: DollarSign },
                { action: "Palm scan completed", time: "18 min ago", icon: Hand },
                { action: "AI chat session", time: "25 min ago", icon: MessageSquare },
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-3 py-2 border-b border-gold-antique/5 last:border-0">
                  <div className="h-8 w-8 rounded-lg bg-cosmic-indigo/30 flex items-center justify-center">
                    <activity.icon className="h-4 w-4 text-gold-bright/60" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-moon-white">{activity.action}</p>
                    <p className="text-xs text-lavender/40">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
