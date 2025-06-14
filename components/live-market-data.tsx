"use client"

import { useEffect, useState } from "react"
import { TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function LiveMarketData() {
  const [marketData, setMarketData] = useState([
    { symbol: "NIFTY 50", price: 21847.9, change: 2.34, changePercent: 0.11 },
    { symbol: "SENSEX", price: 72240.26, change: -45.72, changePercent: -0.06 },
    { symbol: "BANKNIFTY", price: 46789.35, change: 156.8, changePercent: 0.34 },
    { symbol: "RELIANCE", price: 2456.75, change: 12.45, changePercent: 0.51 },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData((prev) =>
        prev.map((item) => ({
          ...item,
          price: item.price + (Math.random() - 0.5) * 10,
          change: (Math.random() - 0.5) * 20,
          changePercent: (Math.random() - 0.5) * 2,
        })),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-2xl">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">Live Market Data</h3>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm text-gray-500">Live</span>
          </div>
        </div>

        <div className="space-y-4">
          {marketData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            >
              <div>
                <div className="font-semibold text-gray-900">{item.symbol}</div>
                <div className="text-lg font-bold text-gray-900">₹{item.price.toFixed(2)}</div>
              </div>
              <div className="text-right">
                <div className={`flex items-center ${item.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {item.change >= 0 ? (
                    <TrendingUp className="h-4 w-4 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 mr-1" />
                  )}
                  <span className="font-semibold">
                    {item.change >= 0 ? "+" : ""}
                    {item.change.toFixed(2)}
                  </span>
                </div>
                <div className={`text-sm ${item.changePercent >= 0 ? "text-green-600" : "text-red-600"}`}>
                  ({item.changePercent >= 0 ? "+" : ""}
                  {item.changePercent.toFixed(2)}%)
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
          <div className="text-sm text-emerald-700 font-medium mb-1">AI Recommendation</div>
          <div className="text-xs text-emerald-600">
            Strong BUY signal detected for BANKNIFTY based on momentum indicators
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
