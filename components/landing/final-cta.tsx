"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Calendar, Shield, RefreshCw, Users } from "lucide-react"

const guarantees = [
  { icon: Shield, text: "7天无理由退款保证" },
  { icon: RefreshCw, text: "1年内免费复训" },
  { icon: Users, text: "专属学员群终身答疑" },
]

export function FinalCTA() {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            现在开始你的
            <span className="text-primary">7天Web3转型之旅</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            不要让犹豫成为你错过机会的原因，今天就迈出第一步
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              立即报名7天训练营
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 border-border text-foreground hover:bg-secondary">
              <Calendar className="mr-2 w-5 h-5" />
              查看课程详情
            </Button>
          </div>

          {/* Secondary CTA */}
          <div className="mb-12">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <MessageCircle className="mr-2 w-4 h-4" />
              1对1转型规划咨询
            </Button>
          </div>

          {/* Guarantees */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {guarantees.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <item.icon className="w-4 h-4 text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
