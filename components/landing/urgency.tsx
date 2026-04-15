"use client"

import { useEffect, useState } from "react"
import { Flame, TrendingUp, Clock, Gift } from "lucide-react"

const marketData = [
  { icon: Flame, label: "Web3开发者缺口", value: "100万+" },
  { icon: TrendingUp, label: "薪资增长趋势", value: "年均30%+" },
  { icon: Clock, label: "下期开班名额", value: "仅剩15个" },
  { icon: Gift, label: "早鸟优惠截止", value: "48小时" },
]

export function Urgency() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) {
          seconds = 59
          minutes--
        }
        if (minutes < 0) {
          minutes = 59
          hours--
        }
        if (hours < 0) {
          hours = 47
          minutes = 59
          seconds = 59
        }
        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Web3黄金窗口期
              <span className="text-primary">越早入场优势越大</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              市场机会转瞬即逝，现在正是最好的时机
            </p>
          </div>

          {/* Market data grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {marketData.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-card border border-border text-center"
              >
                <item.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-bold text-foreground mb-1">
                  {item.value}
                </div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Countdown timer */}
          <div className="p-6 md:p-8 rounded-2xl bg-card border border-primary/50 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              早鸟优惠倒计时
            </h3>
            <div className="flex items-center justify-center gap-4">
              {[
                { value: timeLeft.hours, label: "小时" },
                { value: timeLeft.minutes, label: "分钟" },
                { value: timeLeft.seconds, label: "秒" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold text-primary font-mono">
                      {String(item.value).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground mt-2">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              48小时后恢复原价 ¥3,999
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
