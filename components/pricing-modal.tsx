"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { X, Check, ArrowRight } from "lucide-react"
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
import { Badge } from "@/components/ui/badge"

interface PricingModalProps {
  plan: {
    name: string
    price: string
    description: string
    features: string[]
    highlight?: boolean
  }
  children: React.ReactNode
}

export default function PricingModal({ plan, children }: PricingModalProps) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleStartTrial = () => {
    setOpen(false)
    router.push("/login?tab=guest")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <div className="relative">
          {plan.highlight && (
            <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              MOST POPULAR
            </div>
          )}
          <DialogHeader className="p-6 pb-0">
            <div className="flex justify-between items-start">
              <div>
                <Badge
                  className={`mb-2 ${
                    plan.highlight
                      ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                      : "bg-gray-100 text-gray-700 border border-gray-200"
                  }`}
                >
                  {plan.name} Plan
                </Badge>
                <DialogTitle className="text-2xl font-bold text-gray-900">{plan.price}/month</DialogTitle>
                <DialogDescription className="text-gray-600 mt-1">{plan.description}</DialogDescription>
              </div>
              <DialogClose className="rounded-full h-8 w-8 flex items-center justify-center hover:bg-gray-100">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </div>
          </DialogHeader>

          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Plan includes:</h3>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-emerald-600" />
                      </div>
                    </div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
              <h3 className="font-medium text-gray-900 mb-2">Why choose this plan?</h3>
              <p className="text-gray-600 text-sm">
                {plan.name === "Starter"
                  ? "Perfect for individual traders who are just getting started with algorithmic trading."
                  : plan.name === "Smart"
                    ? "Ideal for active traders looking for advanced features and better performance."
                    : plan.name === "Advanced"
                      ? "Designed for professional traders and small trading firms with advanced needs."
                      : "Enterprise-grade solution for institutional traders and hedge funds."}
              </p>
            </div>

            <div className="flex flex-col space-y-3">
              <Button
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                onClick={handleStartTrial}
              >
                Start 14-Day Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-center text-gray-500">
                No credit card required. Cancel anytime. Full access to all {plan.name} plan features.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
