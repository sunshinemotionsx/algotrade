"use client"

import { useState } from "react"
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Globe,
  MapPin,
  Plus,
  Users,
  Sparkles,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EventCountdown from "@/components/event-countdown"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function EventsPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [isWebinarModalOpen, setIsWebinarModalOpen] = useState(false)

  const nextMonth = () => {
    const next = new Date(currentMonth)
    next.setMonth(next.getMonth() + 1)
    setCurrentMonth(next)
  }

  const prevMonth = () => {
    const prev = new Date(currentMonth)
    prev.setMonth(prev.getMonth() - 1)
    setCurrentMonth(prev)
  }

  const upcomingEvents = [
    {
      id: 1,
      title: "Advanced Backtesting Workshop",
      description: "Learn advanced techniques for backtesting your trading strategies with statistical validation.",
      date: "June 15, 2024",
      time: "10:00 AM - 12:00 PM IST",
      type: "webinar",
      speaker: "Dr. Rajesh Kumar",
      speakerTitle: "Head of Quantitative Research",
      image: "/placeholder.svg?height=400&width=600",
      attendees: 156,
      countdown: new Date("2024-06-15T10:00:00+05:30").getTime(),
    },
    {
      id: 2,
      title: "AI in Trading: Opportunities and Challenges",
      description: "Explore how artificial intelligence is transforming the trading landscape and how to leverage it.",
      date: "June 22, 2024",
      time: "3:00 PM - 5:00 PM IST",
      type: "webinar",
      speaker: "Priya Sharma",
      speakerTitle: "AI Research Lead",
      image: "/placeholder.svg?height=400&width=600",
      attendees: 203,
      countdown: new Date("2024-06-22T15:00:00+05:30").getTime(),
    },
    {
      id: 3,
      title: "Algorithmic Trading Competition",
      description: "Compete with traders from around the world to develop the most profitable trading algorithm.",
      date: "July 10-12, 2024",
      time: "All day",
      type: "competition",
      location: "Virtual",
      image: "/placeholder.svg?height=400&width=600",
      attendees: 342,
      countdown: new Date("2024-07-10T00:00:00+05:30").getTime(),
    },
    {
      id: 4,
      title: "Risk Management Masterclass",
      description: "Essential risk management techniques to protect your capital in volatile markets.",
      date: "July 18, 2024",
      time: "11:00 AM - 1:00 PM IST",
      type: "webinar",
      speaker: "Vikram Mehta",
      speakerTitle: "Risk Management Specialist",
      image: "/placeholder.svg?height=400&width=600",
      attendees: 128,
      countdown: new Date("2024-07-18T11:00:00+05:30").getTime(),
    },
    {
      id: 5,
      title: "AlgoTrade Conference 2024",
      description: "Annual conference featuring industry experts, panel discussions, and networking opportunities.",
      date: "August 5-7, 2024",
      time: "9:00 AM - 6:00 PM IST",
      type: "conference",
      location: "Taj Hotel, Mumbai",
      image: "/placeholder.svg?height=400&width=600",
      attendees: 512,
      countdown: new Date("2024-08-05T09:00:00+05:30").getTime(),
    },
  ]

  const pastEvents = [
    {
      id: 101,
      title: "Introduction to Algorithmic Trading",
      description: "A beginner-friendly introduction to the world of algorithmic trading.",
      date: "May 20, 2024",
      type: "webinar",
      image: "/placeholder.svg?height=400&width=600",
      recording: true,
    },
    {
      id: 102,
      title: "Market Microstructure Deep Dive",
      description: "Understanding market microstructure and its impact on algorithmic trading.",
      date: "May 12, 2024",
      type: "webinar",
      image: "/placeholder.svg?height=400&width=600",
      recording: true,
    },
    {
      id: 103,
      title: "Momentum Trading Strategies Workshop",
      description: "Practical workshop on developing and implementing momentum trading strategies.",
      date: "April 28, 2024",
      type: "workshop",
      image: "/placeholder.svg?height=400&width=600",
      recording: true,
    },
    {
      id: 104,
      title: "Spring Trading Challenge",
      description: "Seasonal trading competition with cash prizes for the top performers.",
      date: "April 10-12, 2024",
      type: "competition",
      image: "/placeholder.svg?height=400&width=600",
      recording: false,
      results: true,
    },
  ]

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    // First day of the month
    const firstDay = new Date(year, month, 1)
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0)

    // Day of the week for the first day (0 = Sunday, 6 = Saturday)
    const firstDayIndex = firstDay.getDay()
    // Total days in the month
    const daysInMonth = lastDay.getDate()

    // Calendar array
    const calendar = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayIndex; i++) {
      calendar.push({ day: null, events: [] })
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      // Check if there are events on this day
      const eventsOnDay = upcomingEvents.filter((event) => {
        const eventDate = new Date(event.date.split("-")[0])
        return eventDate.getDate() === day && eventDate.getMonth() === month && eventDate.getFullYear() === year
      })

      calendar.push({ day, events: eventsOnDay })
    }

    return calendar
  }

  const calendarDays = generateCalendarDays()
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const monthName = currentMonth.toLocaleString("default", { month: "long", year: "numeric" })

  const openWhatsApp = (message: string) => {
    const whatsappUrl = `https://wa.me/7978741102?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleDemoSubmit = async (event: any) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const company = formData.get("company")
    const preferredTime = formData.get("preferredTime")

    const message = `
      Demo Registration:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company: ${company}
      Preferred Time: ${preferredTime}
    `
    openWhatsApp(message)
    setIsDemoModalOpen(false)
  }

  const handleWebinarSubmit = async (event: any) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const notifications = formData.get("notifications")

    const message = `
      Webinar Registration:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Notifications: ${notifications}
    `
    openWhatsApp(message)
    setIsWebinarModalOpen(false)
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
              <Calendar className="h-4 w-4 text-emerald-600 mr-2" />
              <span className="text-emerald-700 text-sm font-medium">Events Calendar</span>
            </div>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl mb-6">
              <span className="text-gray-900">Upcoming</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Events
              </span>{" "}
              <span className="text-gray-900">& Webinars</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join our live webinars, workshops, and trading competitions to enhance your trading skills.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setIsWebinarModalOpen(true)}
            >
              Register for Next Event <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="AlgoTrade Conference 2024"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent lg:hidden"></div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="bg-emerald-100 text-emerald-700 border border-emerald-200 w-fit mb-4">
                  Featured Event
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">AlgoTrade Conference 2024</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Join us for the largest algorithmic trading conference in India. Network with industry experts, attend
                  workshops, and discover the latest trends in trading technology.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Calendar className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Date & Time</h3>
                      <p className="text-gray-600 text-sm">
                        August 5-7, 2024
                        <br />
                        9:00 AM - 6:00 PM IST
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600 text-sm">
                        Taj Hotel
                        <br />
                        Mumbai, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Attendees</h3>
                      <p className="text-gray-600 text-sm">
                        512 registered
                        <br />
                        Limited seats available
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Globe className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Format</h3>
                      <p className="text-gray-600 text-sm">
                        In-person
                        <br />
                        Live streaming available
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <EventCountdown targetDate={new Date("2024-08-05T09:00:00+05:30").getTime()} />
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                    onClick={() => setIsWebinarModalOpen(true)}
                  >
                    Register Now
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                    onClick={() => setIsDemoModalOpen(true)}
                  >
                    View Agenda
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <Calendar className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-700 text-sm font-medium">Event Calendar</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Plan Your Schedule</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Plan ahead with our event calendar. Click on any event to register or learn more.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden max-w-4xl mx-auto shadow-xl">
            <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevMonth}
                className="text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <h3 className="text-xl font-bold text-gray-900">{monthName}</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={nextMonth}
                className="text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {weekdays.map((day, index) => (
                <div key={index} className="p-2 text-center text-sm font-medium bg-gray-50 text-gray-700">
                  {day}
                </div>
              ))}

              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`min-h-24 p-2 bg-white ${day.day ? "cursor-pointer hover:bg-gray-50" : ""}`}
                >
                  {day.day && (
                    <>
                      <div className="text-right text-sm text-gray-500 mb-1">{day.day}</div>
                      {day.events.map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className="text-xs p-1 mb-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 truncate"
                        >
                          {event.title}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
              <Sparkles className="h-4 w-4 text-emerald-600 mr-2" />
              <span className="text-emerald-700 text-sm font-medium">Upcoming Events</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Trading Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Register for our upcoming webinars, workshops, and trading competitions.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-gray-100 h-auto p-1 w-full md:w-fit grid grid-cols-3 md:flex mb-8 rounded-full">
              <TabsTrigger
                value="all"
                className="px-4 py-2 rounded-full data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm"
              >
                All Events
              </TabsTrigger>
              <TabsTrigger
                value="webinar"
                className="px-4 py-2 rounded-full data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm"
              >
                Webinars
              </TabsTrigger>
              <TabsTrigger
                value="competition"
                className="px-4 py-2 rounded-full data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm"
              >
                Competitions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="bg-white border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative aspect-video">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge
                          className={`${
                            event.type === "webinar"
                              ? "bg-blue-100 text-blue-700 border border-blue-200"
                              : event.type === "competition"
                                ? "bg-purple-100 text-purple-700 border border-purple-200"
                                : "bg-emerald-100 text-emerald-700 border border-emerald-200"
                          }`}
                        >
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-gray-900">{event.title}</CardTitle>
                      <CardDescription className="text-gray-600">{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2 pt-0">
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          {event.time}
                        </div>
                        {event.location && (
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                            {event.location}
                          </div>
                        )}
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-gray-500" />
                          {event.attendees} registered
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto pt-4">
                      <Button
                        className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                        onClick={() => setIsWebinarModalOpen(true)}
                      >
                        Register Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="webinar" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents
                  .filter((event) => event.type === "webinar")
                  .map((event) => (
                    <Card
                      key={event.id}
                      className="bg-white border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 group"
                    >
                      {/* Same card content as above */}
                      <div className="relative aspect-video">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-blue-100 text-blue-700 border border-blue-200">Webinar</Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-gray-900">{event.title}</CardTitle>
                        <CardDescription className="text-gray-600">{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2 pt-0">
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-gray-500" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-gray-500" />
                            {event.attendees} registered
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="mt-auto pt-4">
                        <Button
                          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                          onClick={() => setIsWebinarModalOpen(true)}
                        >
                          Register Now
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="competition" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents
                  .filter((event) => event.type === "competition")
                  .map((event) => (
                    <Card
                      key={event.id}
                      className="bg-white border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 group"
                    >
                      {/* Same card content as above */}
                      <div className="relative aspect-video">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-purple-100 text-purple-700 border border-purple-200">Competition</Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-gray-900">{event.title}</CardTitle>
                        <CardDescription className="text-gray-600">{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2 pt-0">
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-gray-500" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-gray-500" />
                            {event.attendees} registered
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="mt-auto pt-4">
                        <Button
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                          onClick={() => setIsWebinarModalOpen(true)}
                        >
                          Register Now
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <Clock className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-700 text-sm font-medium">Past Events</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Access Previous Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Access recordings and materials from our past events.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event) => (
              <Card
                key={event.id}
                className="bg-white border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative aspect-video">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge
                      className={`${
                        event.type === "webinar"
                          ? "bg-blue-100 text-blue-700 border border-blue-200"
                          : event.type === "competition"
                            ? "bg-purple-100 text-purple-700 border border-purple-200"
                            : "bg-emerald-100 text-emerald-700 border border-emerald-200"
                      }`}
                    >
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-900">{event.title}</CardTitle>
                  <CardDescription className="text-gray-600">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2 pt-0">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                    {event.date}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <Button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 shadow-md hover:shadow-lg transition-all duration-300">
                    {event.recording ? "Watch Recording" : event.results ? "View Results" : "View Details"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
            >
              View All Past Events
            </Button>
          </div>
        </div>
      </section>

      {/* Host Your Own Event */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-2/3">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 mb-6">
                  <Sparkles className="h-4 w-4 text-emerald-600 mr-2" />
                  <span className="text-emerald-700 text-sm font-medium">Become a Speaker</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Host Your Own Trading Event</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Are you an expert in algorithmic trading? Partner with us to host your own webinar, workshop, or
                  competition on our platform.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Plus className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">Reach our community of over 50,000 traders</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Plus className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">Access our webinar and event hosting platform</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Plus className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">Marketing and promotion support</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
                    Become a Speaker
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Host your own event"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Registration Modal */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Schedule a Demo</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsDemoModalOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <form onSubmit={handleDemoSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" required />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input type="tel" id="phone" name="phone" required />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input type="text" id="company" name="company" required />
              </div>
              <div>
                <Label htmlFor="preferredTime">Preferred Time</Label>
                <Input type="datetime-local" id="preferredTime" name="preferredTime" required />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Webinar Registration Modal */}
      {isWebinarModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Register for Webinar</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsWebinarModalOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <form onSubmit={handleWebinarSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" required />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input type="tel" id="phone" name="phone" required />
              </div>
              <div>
                <Label htmlFor="notifications">Notification Preferences</Label>
                <Textarea id="notifications" name="notifications" />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                Register
              </Button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
