"use client"

import { useState } from "react"
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  Code,
  Cpu,
  LineChart,
  Lock,
  PieChart,
  Play,
  Settings,
  Shield,
  Sliders,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function FeaturesPage() {
  const [activeFeature, setActiveFeature] = useState("ai-strategy-builder")

  const features = [
    {
      id: "ai-strategy-builder",
      title: "AI Strategy Builder",
      icon: <Cpu className="h-5 w-5" />,
      description: "Build sophisticated trading strategies with our AI-powered strategy builder.",
      content: {
        overview:
          "Our AI Strategy Builder allows you to create, test, and deploy trading strategies without writing a single line of code. Leverage machine learning algorithms to identify patterns and generate profitable trading signals.",
        keyPoints: [
          "Drag-and-drop strategy builder interface",
          "Pre-built strategy templates for different market conditions",
          "AI-powered strategy optimization",
          "Natural language processing for strategy creation",
          "Strategy performance analytics",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
    },
    {
      id: "backtesting-engine",
      title: "Backtesting Engine",
      icon: <BarChart3 className="h-5 w-5" />,
      description: "Test your strategies against historical data with our powerful backtesting engine.",
      content: {
        overview:
          "Our advanced backtesting engine allows you to test your trading strategies against decades of historical market data across multiple asset classes. Analyze performance metrics, optimize parameters, and identify potential risks before deploying your strategies in live markets.",
        keyPoints: [
          "High-performance backtesting with parallel processing",
          "Multi-timeframe analysis from tick data to daily bars",
          "Comprehensive performance metrics and risk analysis",
          "Monte Carlo simulations for strategy robustness testing",
          "Visual analytics with interactive charts",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
    },
    {
      id: "live-trading",
      title: "Live Trading",
      icon: <LineChart className="h-5 w-5" />,
      description: "Execute your strategies in real-time with our secure broker integrations.",
      content: {
        overview:
          "Deploy your strategies to live markets with our secure broker integrations. Connect to leading brokers like Angel One, Zerodha, and Fyers through our encrypted API connections. Monitor performance, manage risk, and adjust strategies in real-time.",
        keyPoints: [
          "Secure API connections to multiple brokers",
          "Real-time order execution and monitoring",
          "Automated trade execution based on strategy signals",
          "Multi-account trading with role-based access",
          "Detailed trade logs and audit trails",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
    },
    {
      id: "risk-management",
      title: "Risk Management",
      icon: <Shield className="h-5 w-5" />,
      description: "Protect your capital with our comprehensive risk management tools.",
      content: {
        overview:
          "Our risk management system helps you protect your capital with automated stop-loss and take-profit orders, position sizing algorithms, and risk exposure analytics. Set maximum drawdown limits, volatility-based position sizing, and portfolio-level risk controls.",
        keyPoints: [
          "Automated stop-loss and take-profit orders",
          "Position sizing algorithms based on volatility",
          "Maximum drawdown controls",
          "Portfolio-level risk exposure analytics",
          "Real-time risk alerts and notifications",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
    },
    {
      id: "paper-trading",
      title: "Paper Trading",
      icon: <PieChart className="h-5 w-5" />,
      description: "Practice with paper trading before risking real capital.",
      content: {
        overview:
          "Test your strategies in real market conditions without risking real capital. Our paper trading system simulates real market conditions, including slippage, latency, and partial fills, to give you an accurate representation of how your strategies would perform in live markets.",
        keyPoints: [
          "Realistic market simulation with slippage and latency",
          "Side-by-side comparison with live trading results",
          "Performance analytics and optimization suggestions",
          "Seamless transition from paper to live trading",
          "Unlimited paper trading accounts for testing",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
    },
    {
      id: "indicators",
      title: "Customizable Indicators",
      icon: <Sliders className="h-5 w-5" />,
      description: "Create and customize technical indicators for your trading strategies.",
      content: {
        overview:
          "Build custom technical indicators or use our library of over 100 pre-built indicators. Customize parameters, combine indicators, and create complex signal generation logic. Set up alerts and notifications based on indicator signals.",
        keyPoints: [
          "Library of 100+ technical indicators",
          "Custom indicator builder with Python and JavaScript support",
          "Multi-timeframe indicator analysis",
          "Indicator-based alerts and notifications",
          "Visual indicator overlay on charts",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
    },
    {
      id: "dashboard",
      title: "Multi-Strategy Dashboard",
      icon: <Settings className="h-5 w-5" />,
      description: "Monitor and manage multiple strategies from a single dashboard.",
      content: {
        overview:
          "Our multi-strategy dashboard allows you to monitor and manage all your trading strategies from a single interface. Track performance, adjust parameters, and allocate capital across strategies based on performance and market conditions.",
        keyPoints: [
          "Real-time performance monitoring across strategies",
          "Dynamic capital allocation between strategies",
          "Strategy correlation analysis",
          "Custom dashboard layouts and widgets",
          "Mobile-responsive design for on-the-go monitoring",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
    },
    {
      id: "security",
      title: "Enterprise Security",
      icon: <Lock className="h-5 w-5" />,
      description: "Protect your strategies and data with enterprise-grade security.",
      content: {
        overview:
          "Our platform is built with security at its core. We use military-grade encryption, two-factor authentication, and regular security audits to protect your strategies, data, and trading capital. We never store your broker credentials and use secure API tokens for all broker connections.",
        keyPoints: [
          "Military-grade encryption for all data",
          "Two-factor authentication for all accounts",
          "Regular third-party security audits",
          "Secure API token management",
          "Detailed access logs and audit trails",
        ],
        image: "/placeholder.svg?height=600&width=800",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-50"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
              <Sparkles className="h-4 w-4 text-emerald-600 mr-2" />
              <span className="text-emerald-700 text-sm font-medium">Platform Features</span>
            </div>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl mb-6">
              <span className="text-gray-900">Powerful Features for</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Algorithmic Trading
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our platform combines cutting-edge AI technology with robust trading tools to give you the edge in today's
              markets.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Feature Navigation */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Features</h2>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full border rounded-xl overflow-hidden shadow-sm"
                  defaultValue="ai-strategy-builder"
                >
                  {features.map((feature) => (
                    <AccordionItem
                      key={feature.id}
                      value={feature.id}
                      className="border-b border-gray-200 last:border-0"
                    >
                      <AccordionTrigger
                        className="hover:text-emerald-600 py-4 px-4 hover:bg-gray-50"
                        onClick={() => setActiveFeature(feature.id)}
                      >
                        <div className="flex items-center gap-3 text-left">
                          <div className="w-8 h-8 rounded-md bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                            <div className="text-white">{feature.icon}</div>
                          </div>
                          <span>{feature.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pl-11 pr-4 pb-4">
                        {feature.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Feature Content */}
            <div className="w-full lg:w-2/3">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`feature-content ${activeFeature === feature.id ? "block" : "hidden"}`}
                >
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-video">
                      <img
                        src={feature.content.image || "/placeholder.svg"}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h2 className="text-3xl font-bold text-white mb-2">{feature.title}</h2>
                        <p className="text-gray-200">{feature.description}</p>
                      </div>
                      <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center transition-transform hover:scale-110">
                        <Play className="h-8 w-8 text-emerald-600 ml-1" />
                      </button>
                    </div>
                    <div className="p-6">
                      <Tabs defaultValue="overview" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1">
                          <TabsTrigger
                            value="overview"
                            className="rounded-md data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm"
                          >
                            Overview
                          </TabsTrigger>
                          <TabsTrigger
                            value="features"
                            className="rounded-md data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm"
                          >
                            Key Features
                          </TabsTrigger>
                          <TabsTrigger
                            value="demo"
                            className="rounded-md data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm"
                          >
                            Live Demo
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent value="overview" className="mt-6">
                          <p className="text-gray-600 leading-relaxed">{feature.content.overview}</p>
                          <div className="mt-6 flex justify-center">
                            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                              Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </TabsContent>
                        <TabsContent value="features" className="mt-6">
                          <ul className="space-y-4">
                            {feature.content.keyPoints.map((point, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <ChevronDown className="h-4 w-4 text-emerald-600" />
                                </div>
                                <span className="text-gray-600">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </TabsContent>
                        <TabsContent value="demo" className="mt-6">
                          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8 text-center border border-emerald-100">
                            <Code className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Demo</h3>
                            <p className="text-gray-600 mb-6">
                              Experience this feature with our interactive demo. No signup required.
                            </p>
                            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                              Launch Interactive Demo
                            </Button>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience These Features?</h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Start your free trial today and discover how our platform can transform your trading.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
