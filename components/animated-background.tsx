"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Star properties
    const stars: { x: number; y: number; radius: number; color: string; velocity: number }[] = []
    const starCount = Math.floor(window.innerWidth / 10) // Responsive star count

    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        color: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`,
        velocity: Math.random() * 0.05,
      })
    }

    // Animation
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(20, 30, 48, 0.5)")
      gradient.addColorStop(1, "rgba(36, 59, 85, 0.5)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.fill()

        // Move stars
        star.y += star.velocity

        // Reset stars that go off screen
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      // Draw code-like elements
      drawCodeElements(ctx, canvas.width, canvas.height)

      animationFrameId = requestAnimationFrame(animate)
    }

    // Draw code-like elements
    const drawCodeElements = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      const codeLines = 15
      ctx.font = "10px monospace"
      ctx.fillStyle = "rgba(100, 255, 100, 0.1)"

      for (let i = 0; i < codeLines; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const text = generateRandomCode()
        ctx.fillText(text, x, y)
      }
    }

    // Generate random code-like text
    const generateRandomCode = () => {
      const codeSnippets = [
        "function() {",
        "const data = [];",
        "return result;",
        "if (condition) {",
        "} else {",
        "for (let i = 0;",
        "export default",
        "<div className=",
        "useState()",
        "useEffect(() => {",
      ]
      return codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 opacity-40 pointer-events-none js-only"
      aria-hidden="true"
    />
  )
}
