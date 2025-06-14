"use client"

import type React from "react"

import { useState } from "react"
import { Bot, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState([
    { role: "assistant", content: "Hello! I'm your AI trading assistant. How can I help you today?" },
  ])

  const toggleAssistant = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message to chat
    setChatHistory([...chatHistory, { role: "user", content: message }])

    // Simulate AI response
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Thanks for your message! This is a demo of the AI assistant interface. In the actual implementation, this would connect to your AI backend.",
        },
      ])
    }, 1000)

    setMessage("")
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={toggleAssistant}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 shadow-2xl border border-gray-200 bg-white">
          <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 py-3 px-4 border-b border-gray-200 flex flex-row justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mr-2">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-medium text-gray-900">AI Trading Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-500 hover:text-gray-700"
              onClick={toggleAssistant}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-4 max-h-80 overflow-y-auto">
            <div className="space-y-4">
              {chatHistory.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === "assistant" ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      msg.role === "assistant"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-3 border-t border-gray-200">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                placeholder="Ask about trading strategies..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-gray-50 border-gray-300 focus-visible:ring-emerald-500"
              />
              <Button
                type="submit"
                size="sm"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
              >
                Send
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}
