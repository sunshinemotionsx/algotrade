import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  gradient: string
}

export default function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  return (
    <Card className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 group">
      <CardContent className="p-8">
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <div className="text-white">{icon}</div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
