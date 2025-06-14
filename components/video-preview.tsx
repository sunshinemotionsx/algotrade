"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export default function VideoPreview() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 aspect-video bg-gradient-to-br from-emerald-50 to-teal-50">
      {!isPlaying ? (
        <>
          <div
            className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center cursor-pointer group"
            onClick={handlePlay}
          >
            <div className="w-20 h-20 rounded-full bg-white shadow-2xl flex items-center justify-center transition-transform group-hover:scale-110">
              <Play className="h-10 w-10 text-emerald-600 ml-1" />
            </div>
          </div>
          <img
            src="/placeholder.svg?height=720&width=1280"
            alt="Trading platform preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2 animate-pulse"></div>
                <span className="text-white font-medium">Live Platform Demo</span>
              </div>
              <span className="text-white/80 text-sm">3:45 min</span>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-pulse mb-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 mx-auto flex items-center justify-center">
                <Play className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            <p className="text-gray-600 font-medium">Video would play here in a real implementation</p>
            <p className="text-gray-500 text-sm mt-2">Showcasing our AI-powered trading platform</p>
          </div>
        </div>
      )}

      {/* Trading interface overlay elements */}
      <div className="absolute top-4 left-4 right-4 flex justify-between pointer-events-none opacity-80">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm font-medium text-emerald-600 border border-emerald-200">
          BTCUSD: $64,235.78 +2.4%
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm font-medium text-red-600 border border-red-200">
          ETHUSD: $3,421.15 -0.8%
        </div>
      </div>
    </div>
  )
}
