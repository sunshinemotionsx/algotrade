"use client"

import { useEffect, useRef } from "react"

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 0.8
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create floating elements
    const elements: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      type: string
    }[] = []

    const createElements = () => {
      const elementCount = Math.floor(canvas.width / 30)

      for (let i = 0; i < elementCount; i++) {
        elements.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          type: Math.random() > 0.5 ? "circle" : "square",
        })
      }
    }

    createElements()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw subtle grid
      ctx.strokeStyle = "rgba(16, 185, 129, 0.05)"
      ctx.lineWidth = 1

      const gridSize = 50
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw and update elements
      elements.forEach((element) => {
        // Update position
        element.x += element.speedX
        element.y += element.speedY

        // Wrap around edges
        if (element.x < 0) element.x = canvas.width
        if (element.x > canvas.width) element.x = 0
        if (element.y < 0) element.y = canvas.height
        if (element.y > canvas.height) element.y = 0

        // Draw element
        ctx.fillStyle = `rgba(16, 185, 129, ${element.opacity})`

        if (element.type === "circle") {
          ctx.beginPath()
          ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2)
          ctx.fill()
        } else {
          ctx.fillRect(element.x - element.size / 2, element.y - element.size / 2, element.size, element.size)
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-30" style={{ zIndex: 0 }} />
}
