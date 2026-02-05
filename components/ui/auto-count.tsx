"use client"

import { useEffect, useRef, useState } from "react"

type Stat = {
  value: number
  suffix?: string
  label: string
  animate?: boolean
}

export default function Stats() {
  const stats: Stat[] = [
    { value: 500, suffix: "+", label: "Events Completed", animate: true },
    { value: 100, suffix: "%", label: "Client Satisfaction", animate: true },
    { value: 24, suffix: "/7", label: "Support Available", animate: false },
  ]

  return (
    <div className="grid grid-cols-3 gap-4 mb-20 max-w-3xl mx-auto">
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} />
      ))}
    </div>
  )
}

function StatCard({ stat }: { stat: Stat }) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!stat.animate || hasAnimated.current) return

    hasAnimated.current = true 

    let current = 0
    const duration = 2000
    const increment = stat.value / (duration / 50)

    const timer = setInterval(() => {
      current += increment

      if (current >= stat.value) {
        setCount(stat.value)
        clearInterval(timer) 
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [stat.animate, stat.value])

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
      <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">
        {stat.animate ? count : stat.value}
        {stat.suffix}
      </div>
      <div className="text-sm text-zinc-400">{stat.label}</div>
    </div>
  )
}
