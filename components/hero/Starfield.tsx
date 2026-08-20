"use client"

import React, { useRef, useEffect } from "react"

interface Star {
  x: number
  y: number
  z: number
  size: number
  opacity: number
  speed: number
  twinkle: number
  twinkleSpeed: number
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      const starCount = Math.min(400, Math.floor((canvas.width * canvas.height) / 4000))
      starsRef.current = Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 2 + 0.5,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.02 + 0.005,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
      }))
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      }
    }

    const draw = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      starsRef.current.forEach((star) => {
        // Parallax movement
        const parallaxX = mouseRef.current.x * star.z * 15
        const parallaxY = mouseRef.current.y * star.z * 15

        // Twinkle
        star.twinkle += star.twinkleSpeed
        const twinkleFactor = 0.7 + 0.3 * Math.sin(star.twinkle)
        const currentOpacity = star.opacity * twinkleFactor

        // Draw star
        ctx.beginPath()
        ctx.arc(
          star.x + parallaxX,
          star.y + parallaxY,
          star.size * star.z,
          0,
          Math.PI * 2
        )
        ctx.fillStyle = `rgba(246, 240, 226, ${currentOpacity})`
        ctx.fill()

        // Occasional glow for brighter stars
        if (star.size > 1.2 && currentOpacity > 0.5) {
          ctx.beginPath()
          ctx.arc(
            star.x + parallaxX,
            star.y + parallaxY,
            star.size * star.z * 3,
            0,
            Math.PI * 2
          )
          ctx.fillStyle = `rgba(200, 155, 60, ${currentOpacity * 0.08})`
          ctx.fill()
        }
      })

      frameRef.current = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.8 }}
    />
  )
}
