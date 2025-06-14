"use client"

import { useState } from "react"
import { Book, BookOpen, Code, Download, FileText, Filter, Play, Search, Video, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AIAssistant from "@/components/ai-assistant"

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")

  const resources = [
    {
      id: 1,
      title: "Getting Started with Algorithmic Trading",
      description: "A comprehensive guide to setting up your first trading algorithm.",
      type: "ebook",
      category: "beginner",
      image: "/placeholder.svg?height=400&width=600",
      duration: "45 min read",
      date: "May 15, 2023",
    },
    {
      id: 2,
      title: "Advanced Backtesting Techniques",
      description: "Learn how to properly backtest your strategies to avoid overfitting and survivorship bias.",
      type: "tutorial",
      category: "advanced",
      image: "/placeholder.svg?height=400&width=600",
      duration: "60 min read",
      date: "June 22, 2023",
    },
    {
      id: 3,
      title: "Mean Reversion Strategy Development",
      description: "Step-by-step guide to building a profitable mean reversion trading strategy.",
      type: "video",
      category: "intermediate",
      image: "/placeholder.svg?height=400&width=600",
      duration: "32 min video",
      date: "July 10, 2023",
    },
    {
      id: 4,
      title: "Risk Management for Algorithmic Traders",
      description: "Essential risk management techniques to protect your capital.",
      type: "webinar",
      category: "intermediate",
      image: "/placeholder.svg?height=400&width=600",
      duration: "75 min webinar",
      date: "August 5, 2023",
    },
    {
      id: 5,
      title: "API Documentation",
      description: "Complete reference for our trading API endpoints and parameters.",
      type: "docs",
      category: "advanced",
      image: "/placeholder.svg?height=400&width=600",
      duration: "Reference",
      date: "Updated weekly",
    },
    {
      id: 6,
      title: "Momentum Trading Strategies",
      description: "Discover how to identify and capitalize on market momentum.",
      type: "video",
      category: "intermediate",
      image: "/placeholder.svg?height=400&width=600",
      duration: "28 min video",
      date: "September 12, 2023",
    },
    {
      id: 7,
      title: "Machine Learning for Trading",
      description: "Introduction to applying machine learning algorithms to financial markets.",
      type: "ebook",
      category: "advanced",
      image: "/placeholder.svg?height=400&width=600",
      duration: "120 min read",
      date: "October 3, 2023",
    },
    {
      id: 8,
      title: "Broker Integration Guide",
      description: "Step-by-step instructions for connecting to supported brokers.",
      type: "docs",
      category: "beginner",
      image: "/placeholder.svg?height=400&width=600",
      duration: "Guide",
      date: "Updated monthly",
    },
    {
      id: 9,
      title: "Volatility Trading Strategies",
      description: "Learn how to profit from market volatility using options and derivatives.",
      type: "webinar",
      category: "advanced",
      image: "/placeholder.svg?height=400&width=600",
      duration: "90 min webinar",
      date: "November 15, 2023",
    },
    {
      id: 10,
      title: "Algorithmic Trading for Beginners",
      description: "A beginner-friendly introduction to the world of algorithmic trading.",
      type: "video",
      category: "beginner",
      image: "/placeholder.svg?height=400&width=600",
      duration: "45 min video",
      date: "December 1, 2023",
    },
    {
      id: 11,
      title: "Python for Trading",
      description: "Essential Python skills for developing trading algorithms.",
      type: "tutorial",
      category: "intermediate",
      image: "/placeholder.svg?height=400&width=600",
      duration: "5-part series",
      date: "January 20, 2024",
    },
    {
      id: 12,
      title: "Market Microstructure",
      description: "Deep dive into market microstructure and its impact on algorithmic trading.",
      type: "ebook",
      category: "advanced",
      image: "/placeholder.svg?height=400&width=600",
      duration: "150 min read",
      date: "February 8, 2024",
    },
  ]

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilter = activeFilter === "all" || resource.type === activeFilter

    return matchesSearch && matchesFilter
  })

  const getResourceIcon = (type) => {
    switch (type) {
      case "ebook":
        return <Book className="h-5 w-5" />
      case "tutorial":
        return <FileText className="h-5 w-5" />
      case "video":
        return <Video className="h-5 w-5" />
      case "webinar":
        return <Play className="h-5 w-5" />
      case "docs":
        return <Code className="h-5 w-5" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case "beginner":
        return "bg-emerald-100 text-emerald-700 border-emerald-200"
      case "intermediate":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "advanced":
        return "bg-purple-100 text-purple-700 border-purple-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-50"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
              <BookOpen className="h-4 w-4 text-emerald-600 mr-2" />
              <span className="text-emerald-700 text-sm font-medium">Learning Resources</span>
            </div>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl mb-6">
              <span className="text-gray-900">Trading</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Resources
              </span>{" "}
              <span className="text-gray-900">& Learning</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Explore our library of tutorials, documentation, videos, and ebooks to master algorithmic trading.
            </p>

            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search resources..."
                className="bg-white border-gray-300 pl-10 h-12 rounded-full shadow-md focus-visible:ring-emerald-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveFilter}>
              <TabsList className="bg-gray-100 h-auto p-1 w-full md:w-auto grid grid-cols-3 md:flex rounded-full">
                <TabsTrigger
                  value="all"
                  className="px-4 py-2 rounded-full data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="video"
                  className="px-4 py-2 rounded-full data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm"
                >
                  Videos
                </TabsTrigger>
                <TabsTrigger
                  value="ebook"
                  className="px-4 py-2 rounded-full data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm"
                >
                  Ebooks
                </TabsTrigger>
                <TabsTrigger
                  value="tutorial"
                  className="px-4 py-2 rounded-full data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm"
                >
                  Tutorials
                </TabsTrigger>
                <TabsTrigger
                  value="webinar"
                  className="px-4 py-2 rounded-full data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm"
                >
                  Webinars
                </TabsTrigger>
                <TabsTrigger
                  value="docs"
                  className="px-4 py-2 rounded-full data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm"
                >
                  Docs
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-500">Filter by:</span>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full"
              >
                Latest
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full"
              >
                Popular
              </Button>
            </div>
          </div>

          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredResources.map((resource) => (
                <Card
                  key={resource.id}
                  className="bg-white border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative aspect-video">
                    <img
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className={`${getCategoryColor(resource.category)} border`}>
                        {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                      </Badge>
                    </div>
                    {resource.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Play className="h-6 w-6 text-emerald-600 ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                        <div className="text-emerald-600">{getResourceIcon(resource.type)}</div>
                      </div>
                      <span className="text-xs text-gray-500 capitalize">{resource.type}</span>
                    </div>
                    <CardTitle className="text-lg text-gray-900">{resource.title}</CardTitle>
                    <CardDescription className="text-gray-600">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2 pt-0">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{resource.duration}</span>
                      <span>{resource.date}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto pt-4">
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                      {resource.type === "ebook" || resource.type === "docs" ? (
                        <>
                          <Download className="mr-2 h-4 w-4" /> Download
                        </>
                      ) : resource.type === "video" || resource.type === "webinar" ? (
                        <>
                          <Play className="mr-2 h-4 w-4" /> Watch Now
                        </>
                      ) : (
                        <>
                          <BookOpen className="mr-2 h-4 w-4" /> Read Now
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-200">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
                onClick={() => {
                  setSearchQuery("")
                  setActiveFilter("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
            >
              Load More Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-700 text-sm font-medium">Featured Content</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Learning Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular and comprehensive resources to help you master algorithmic trading.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="relative aspect-video">
                <img
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Masterclass"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center transition-transform hover:scale-110">
                    <Play className="h-8 w-8 text-emerald-600 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="bg-emerald-100 text-emerald-700 border border-emerald-200 mb-2">
                    Featured Masterclass
                  </Badge>
                  <h3 className="text-2xl font-bold text-white mb-2">Algorithmic Trading Masterclass</h3>
                  <p className="text-gray-200">
                    A comprehensive 5-hour course covering all aspects of algorithmic trading.
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-emerald-600" />
                    <span className="text-sm text-gray-600">5-hour video course</span>
                  </div>
                  <Badge variant="outline" className="border-emerald-500 text-emerald-600">
                    Premium
                  </Badge>
                </div>
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                  Watch Masterclass
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Book className="h-5 w-5 text-emerald-600" />
                    <span className="text-xs text-gray-500">Ebook Series</span>
                  </div>
                  <CardTitle className="text-gray-900">The Complete Guide to Algorithmic Trading</CardTitle>
                  <CardDescription className="text-gray-600">
                    A three-part ebook series covering strategy development, backtesting, and deployment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>3-part series</span>
                    <span>Updated April 2024</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                    <Download className="mr-2 h-4 w-4" /> Download Series
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="h-5 w-5 text-emerald-600" />
                    <span className="text-xs text-gray-500">Code Repository</span>
                  </div>
                  <CardTitle className="text-gray-900">Strategy Template Library</CardTitle>
                  <CardDescription className="text-gray-600">
                    Ready-to-use strategy templates for various market conditions and trading styles.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>25+ templates</span>
                    <span>Updated weekly</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                    <Download className="mr-2 h-4 w-4" /> Access Templates
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
              <Sparkles className="h-4 w-4 text-emerald-600 mr-2" />
              <span className="text-emerald-700 text-sm font-medium">Stay Updated</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest resources, market insights, and trading strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Your email address"
                className="bg-white border-gray-300 focus-visible:ring-emerald-500"
              />
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AIAssistant />
    </div>
  )
}
