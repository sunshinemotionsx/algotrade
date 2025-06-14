import { TrendingUp, Users, Globe, Shield } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: "50,000+",
      label: "Active Traders",
      description: "Trust our platform daily",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "₹500Cr+",
      label: "Assets Managed",
      description: "Through our algorithms",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      value: "25+",
      label: "Countries",
      description: "Worldwide presence",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      value: "99.9%",
      label: "Uptime",
      description: "Guaranteed reliability",
    },
  ]

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">{stat.icon}</div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
