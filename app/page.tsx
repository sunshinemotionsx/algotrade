"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  Clock,
  Database,
  LineChart,
  Play,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AIAssistant from "@/components/ai-assistant"
import HeroBackground from "@/components/hero-background"
import VideoPreview from "@/components/video-preview"
import FeatureCard from "@/components/feature-card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import LiveMarketData from "@/components/live-market-data"
import PricingModal from "@/components/pricing-modal"
import DemoRequestModal from "@/components/demo-request-modal"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  const router = useRouter()

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹3,399",
      highlight: false,
      description: "Perfect for beginners",
      features: [
        "5 Concurrent Strategies",
        "Standard Backtesting (5 years data)",
        "1 Broker Integration",
        "Basic Technical Indicators",
        "Email Support",
        "Daily Market Insights",
        "Mobile App Access",
        "Community Forum Access",
      ],
    },
    {
      name: "Smart",
      price: "₹6,999",
      highlight: true,
      description: "Most popular choice",
      features: [
        "15 Concurrent Strategies",
        "Advanced Backtesting (10 years data)",
        "3 Broker Integrations",
        "All Technical Indicators",
        "Priority Email Support",
        "AI Strategy Suggestions",
        "Advanced Risk Management",
        "Strategy Performance Analytics",
        "Real-time Alerts",
        "Trading Journal",
      ],
    },
    {
      name: "Advanced",
      price: "₹14,999",
      highlight: false,
      description: "For serious traders",
      features: [
        "Unlimited Strategies",
        "Premium Backtesting (Full history)",
        "All Broker Integrations",
        "Custom Indicators",
        "24/7 Email & Chat Support",
        "AI Strategy Suggestions",
        "Advanced Risk Management",
        "API Access",
        "Multi-user Access (5 users)",
        "Priority Support",
        "Strategy Optimization Engine",
        "Custom Reporting",
      ],
    },
    {
      name: "Enterprise",
      price: "₹34,999",
      highlight: false,
      description: "Institutional grade",
      features: [
        "Unlimited Strategies",
        "Enterprise Backtesting",
        "Custom Broker Integrations",
        "Custom Indicators & Algorithms",
        "24/7 Dedicated Support",
        "Advanced AI Strategy Builder",
        "Enterprise Risk Management",
        "Full API Access",
        "Unlimited Users",
        "Dedicated Account Manager",
        "Custom Development",
        "On-premise Deployment Option",
        "SLA Guarantees",
      ],
    },
  ]

  const handleStartFreeTrial = () => {
    router.push("/login?tab=guest")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <ScrollToTop />
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-4 py-24 sm:py-32 md:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
                <Sparkles className="h-4 w-4 text-emerald-600 mr-2" />
                <span className="text-emerald-700 text-sm font-medium">AI-Powered Trading Revolution</span>
              </div>
              <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
                  Next-Gen
                </span>{" "}
                <span className="text-gray-900">Algorithmic Trading Platform</span>
              </h1>
              <p className="mb-8 text-xl text-gray-600 leading-relaxed">
                Harness the power of advanced AI algorithms, real-time market analysis, and institutional-grade tools to
                transform your trading performance and achieve consistent profitability.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleStartFreeTrial}
                >
                  Start Trading Smarter <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                  onClick={() => document.getElementById("video-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Watch Live Demo <Play className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-emerald-600" />
                  <span>Bank-Grade Security</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-emerald-600" />
                  <span>50K+ Active Traders</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <LiveMarketData />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Video Preview Section */}
      <section id="video-section" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <Play className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-700 text-sm font-medium">Platform Demo</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">See Our AI in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how our sophisticated AI algorithms analyze market patterns, identify profitable opportunities, and
              execute trades with precision timing.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <VideoPreview />
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Market Analysis</h3>
                  <p className="text-gray-600">
                    Our AI processes millions of data points every second to identify market trends and trading
                    opportunities.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning-Fast Execution</h3>
                  <p className="text-gray-600">
                    Execute trades in microseconds with our low-latency infrastructure and direct market access.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Risk Management</h3>
                  <p className="text-gray-600">
                    Protect your capital with intelligent risk controls and automated position sizing algorithms.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/features"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  Explore All Features <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
              <Sparkles className="h-4 w-4 text-emerald-600 mr-2" />
              <span className="text-emerald-700 text-sm font-medium">Platform Features</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Institutional-Grade Trading Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access the same advanced tools used by hedge funds and institutional traders, now available for individual
              traders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock />}
              title="99.9% Uptime Guarantee"
              description="Our enterprise infrastructure ensures your strategies run 24/7 with maximum reliability and minimal downtime."
              gradient="from-emerald-500 to-teal-500"
            />
            <FeatureCard
              icon={<Sparkles />}
              title="AI Signal Precision"
              description="Advanced machine learning models trained on decades of market data deliver high-accuracy trading signals."
              gradient="from-blue-500 to-purple-500"
            />
            <FeatureCard
              icon={<LineChart />}
              title="Real-Time Analytics"
              description="Get instant market insights with our proprietary analytics engine processing millions of data points."
              gradient="from-purple-500 to-pink-500"
            />
            <FeatureCard
              icon={<Shield />}
              title="Military-Grade Security"
              description="Your data and strategies are protected with bank-level encryption and multi-factor authentication."
              gradient="from-orange-500 to-red-500"
            />
            <FeatureCard
              icon={<Database />}
              title="Advanced Backtesting"
              description="Test strategies against 20+ years of high-quality market data with realistic slippage modeling."
              gradient="from-teal-500 to-cyan-500"
            />
            <FeatureCard
              icon={<BarChart3 />}
              title="Multi-User Collaboration"
              description="Share strategies and collaborate with your team using our advanced role-based access system."
              gradient="from-indigo-500 to-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Preview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <BarChart3 className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-700 text-sm font-medium">Flexible Pricing</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Plans That Scale With Your Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your trading needs. Upgrade anytime as your portfolio grows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingModal key={index} plan={plan}>
                <Card
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer ${
                    plan.highlight
                      ? "border-2 border-emerald-500 shadow-xl scale-105"
                      : "border border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-500">/month</span>
                      </div>
                      <Button
                        className={`w-full ${
                          plan.highlight
                            ? "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                        } transition-all duration-300`}
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </PricingModal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/pricing"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold text-lg"
            >
              View Detailed Pricing <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Trading Journey?</h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Join thousands of successful traders who have already revolutionized their trading with our AI-powered
              platform. Start your free trial today and experience the future of algorithmic trading.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleStartFreeTrial}
              >
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <DemoRequestModal>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 transition-all duration-300"
                >
                  Schedule Personal Demo
                </Button>
              </DemoRequestModal>
            </div>
            <div className="mt-8 flex justify-center items-center space-x-8 text-emerald-100">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>14-Day Free Trial</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AIAssistant />
    </div>
  )
}
