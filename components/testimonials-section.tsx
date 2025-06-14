import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Professional Trader",
      company: "Mumbai",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "AlgoTradeAI has completely transformed my trading. The AI signals are incredibly accurate, and I've seen a 40% improvement in my returns since switching to their platform.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Hedge Fund Manager",
      company: "Bangalore",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The backtesting capabilities are phenomenal. We can test strategies against 20 years of data with realistic slippage modeling. It's like having a quant team in your pocket.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      role: "Retail Trader",
      company: "Delhi",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "As a beginner, I was intimidated by algorithmic trading. AlgoTradeAI made it accessible with their intuitive interface and excellent educational resources. Highly recommended!",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
            <Quote className="h-4 w-4 text-emerald-600 mr-2" />
            <span className="text-emerald-700 text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Traders Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful traders who have transformed their trading with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
