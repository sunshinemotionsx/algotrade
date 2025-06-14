"use client"

import { useEffect, useState } from "react"

interface EventCountdownProps {
  targetDate: number
}

export default function EventCountdown({ targetDate }: EventCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-md">
      <h3 className="text-sm font-medium text-gray-500 mb-3">Event starts in:</h3>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-2 border border-emerald-100">
          <div className="text-2xl font-bold text-gray-900">{timeLeft.days}</div>
          <div className="text-xs text-gray-500">Days</div>
        </div>
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-2 border border-emerald-100">
          <div className="text-2xl font-bold text-gray-900">{timeLeft.hours}</div>
          <div className="text-xs text-gray-500">Hours</div>
        </div>
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-2 border border-emerald-100">
          <div className="text-2xl font-bold text-gray-900">{timeLeft.minutes}</div>
          <div className="text-xs text-gray-500">Minutes</div>
        </div>
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-2 border border-emerald-100">
          <div className="text-2xl font-bold text-gray-900">{timeLeft.seconds}</div>
          <div className="text-xs text-gray-500">Seconds</div>
        </div>
      </div>
    </div>
  )
}
