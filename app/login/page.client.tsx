"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Tabs } from "@/components/ui/tabs"

export default function LoginClient({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams()
  const [defaultTab, setDefaultTab] = useState("email")

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab === "guest") {
      setDefaultTab("guest")
    }
  }, [searchParams])

  return (
    <Tabs defaultValue={defaultTab} className="w-full">
      {children}
    </Tabs>
  )
}
