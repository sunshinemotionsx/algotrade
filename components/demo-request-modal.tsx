"use client"

import type React from "react"

import { useState } from "react"
import { X, Calendar, Clock, User, Mail, Phone, Check } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"

interface DemoRequestModalProps {
  children: React.ReactNode
}

export default function DemoRequestModal({ children }: DemoRequestModalProps) {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date>()
  const [submitted, setSubmitted] = useState(false)

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the form data to your backend
    setSubmitted(true)

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setSubmitted(false)
      setOpen(false)
    }, 3000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <div className="relative">
          <DialogHeader className="p-6 pb-0">
            <div className="flex justify-between items-start">
              <div>
                <DialogTitle className="text-2xl font-bold text-gray-900">Schedule a Demo</DialogTitle>
                <DialogDescription className="text-gray-600 mt-1">
                  Book a personalized demo with our product specialists
                </DialogDescription>
              </div>
              <DialogClose className="rounded-full h-8 w-8 flex items-center justify-center hover:bg-gray-100">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </div>
          </DialogHeader>

          <div className="p-6">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">
                      <User className="h-4 w-4 inline mr-2" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      className="bg-white border-gray-300 focus-visible:ring-emerald-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">
                      <Mail className="h-4 w-4 inline mr-2" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-white border-gray-300 focus-visible:ring-emerald-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">
                      <Phone className="h-4 w-4 inline mr-2" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+91 9876543210"
                      className="bg-white border-gray-300 focus-visible:ring-emerald-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-gray-700">
                        <Calendar className="h-4 w-4 inline mr-2" />
                        Preferred Date
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-white border-gray-300 hover:bg-gray-50"
                          >
                            {date ? format(date, "PPP") : <span className="text-gray-400">Select date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <CalendarComponent
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => {
                              // Disable past dates and weekends
                              const today = new Date()
                              today.setHours(0, 0, 0, 0)
                              const day = date.getDay()
                              return date < today || day === 0 || day === 6
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-gray-700">
                        <Clock className="h-4 w-4 inline mr-2" />
                        Preferred Time
                      </Label>
                      <Select required>
                        <SelectTrigger className="bg-white border-gray-300">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Schedule Demo
                    </Button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Demo Scheduled!</h3>
                <p className="text-gray-600">
                  Thank you for scheduling a demo. Our team will contact you shortly to confirm your appointment.
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
