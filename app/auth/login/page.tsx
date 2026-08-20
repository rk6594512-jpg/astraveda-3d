"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Mail, Lock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/layout/Navbar"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Mock login for now - will connect to Supabase in production
    setTimeout(() => {
      setLoading(false)
      router.push("/kundli")
    }, 1500)
  }

  return (
    <main className="min-h-screen pt-20 pb-12">
      <Navbar />
      <div className="section-padding max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="glass-panel">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto h-12 w-12 rounded-xl bg-gradient-to-br from-gold-antique to-gold-bright flex items-center justify-center mb-4 shadow-glow-gold">
                <Sparkles className="h-6 w-6 text-cosmic-black" />
              </div>
              <CardTitle className="font-serif text-2xl">Welcome Back</CardTitle>
              <p className="text-sm text-lavender/60 mt-1">Sign in to access your cosmic blueprint</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="text-xs text-lavender/70 mb-1.5 block">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-lavender/40" />
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-lavender/70 mb-1.5 block">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-lavender/40" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-lavender/40 hover:text-lavender"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-status-error/10 border border-status-error/20 text-sm text-status-error">
                    {error}
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Signing in..." : "Sign In"}
                </Button>

                <div className="text-center">
                  <Link href="/auth/reset-password" className="text-xs text-gold-bright hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <div className="pt-4 border-t border-gold-antique/10 text-center">
                  <p className="text-sm text-lavender/60">
                    Don&apos;t have an account?{" "}
                    <Link href="/auth/signup" className="text-gold-bright hover:underline font-medium">
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}
